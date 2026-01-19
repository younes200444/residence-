# ---------- Stage 1 : Build Frontend ----------
FROM node:20-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# ---------- Stage 2 : Build Backend ----------
FROM maven:3.9.3 AS backend-build
WORKDIR /app/backend
COPY backEnd/pom.xml ./
RUN mvn dependency:go-offline
COPY backEnd/ .
RUN mvn clean package -DskipTests

# ---------- Stage 3 : Image finale ----------
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app
COPY --from=backend-build /app/backend/target/*.jar ./backend.jar
COPY --from=frontend-build /app/frontend/build ./frontend
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "backend.jar"]
