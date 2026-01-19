package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepoitory;
import com.example.demo.type.ResponseLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserRepoitory userRepoitory;

    @PostMapping
    public ResponseEntity<Map<String, Object>> createUser(@RequestBody User user) {
        // Ici, tu peux ajouter des validations avant de sauvegarder
        ResponseLogin responseLogin= new ResponseLogin();
        Map<String, Object> response = new HashMap<>();
        try {
            if (user.getEmail() == null || user.getPassword() == null) {
                return ResponseEntity.badRequest().build();
            }
            // Sauvegarde dans la base
            User savedUser = userRepoitory.save(user);
            responseLogin.setUser(savedUser);

        } catch (Exception e) {
            responseLogin.setError(e.getMessage());
        }
        response.put("response",responseLogin);
        return ResponseEntity.status(200).body(response);

        // Retourne l'utilisateur créé avec status 201

    }


    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = userRepoitory.findAll();
        return ResponseEntity.status(200).body(users);
    }


    @PostMapping("/loggin")
    public ResponseEntity<Map<String, Object>> loggin(@RequestBody User user) {

        ResponseLogin responseLogin= new ResponseLogin();
        Map<String, Object> response = new HashMap<>();
        if(user.getEmail() != null){
            User loggin=userRepoitory.getUserByEmail(user.getEmail());
            if (loggin != null){
                if(Objects.equals(loggin.getPassword(), user.getPassword())){
                    loggin.setPassword(null);
                    responseLogin.setUser(loggin);
                    response.put("response",responseLogin);
                    return ResponseEntity.status(200).body(response);}
            }

            responseLogin.setError("mot de pass incorrect");
        }
        responseLogin.setError("mot de pass incorrect");
        response.put("response",responseLogin);
        return ResponseEntity.status(200).body(response);
    }


}
