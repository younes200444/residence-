package com.example.demo.type;

import com.example.demo.entity.User;
import lombok.Data;

@Data
public class ResponseLogin {
    private User user;
    private String error;
}
