# ---------- Stage 1 : Build Frontend ----------
FROM node:20-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# ---------- Stage 2 : Build Backend (Java 21) ----------
FROM eclipse-temurin:21-jdk AS backend-build
WORKDIR /app/backend

# Installer Maven
RUN apt-get update && apt-get install -y maven

COPY backEnd/pom.xml ./
RUN mvn dependency:go-offline

COPY backEnd/ .
RUN mvn clean package -DskipTests

# ---------- Stage 3 : Runtime ----------
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app
COPY --from=backend-build /app/backend/target/*.jar app.jar
COPY --from=frontend-build /app/frontend/build ./frontend
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
