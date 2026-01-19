package com.example.demo.type;

import com.example.demo.entity.Room;
import lombok.Data;

import java.util.List;

@Data
public class RoomResponse {
    private  List<Room> rooms ;
    private  String error;
}
