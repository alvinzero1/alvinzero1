package com.zero1.flip;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    /** $ curl http://localhost:8080/api/messages/hello */
    @GetMapping("/hello")
    public String hello() {
        return "Full Stack Java with Spring Boot and VueJS!";
    }

    /**
     * $ curl http://localhost:8080/api/messages/json
     * {"id":1,"name":"User","birthDate":1681176823185,"emails":["user@gmail.com","user@yahoo.com"]}
     */
    @GetMapping("/json")
    public String soutJson() {
        User u = new User();
        String json = "";
        try {
            json = u.soutJson();
        } catch (JsonProcessingException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        System.out.println(json);
        return json;
    }
}
