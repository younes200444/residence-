package com.example.demo.controller;


import com.example.demo.entity.Room;
import com.example.demo.repository.RoomRepository;
import com.example.demo.type.RoomResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/rooms")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;
    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllRoms(){
        List<Room> rooms = roomRepository.findAll();
        Map<String,Object> response = new HashMap<>();
        RoomResponse roomResponse = new RoomResponse();
        roomResponse.setRooms(rooms);
        response.put("response", roomResponse);
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public void add(@RequestBody Room room){
        if (room != null){
            roomRepository.save(room);
        }
    }

    @GetMapping("/AVAILABLE")
    public ResponseEntity<Map<String, Object>> getAvailable(){
        List<Room> rooms = roomRepository.findAllByStatus("AVAILABLE");
        Map<String,Object> response = new HashMap<>();
        RoomResponse roomResponse = new RoomResponse();
        roomResponse.setRooms(rooms);
        response.put("response", roomResponse);
        return ResponseEntity.ok(response);
    }
}
