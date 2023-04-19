package com.zero1.flip;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FlipApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlipApplication.class, args);
		System.out.println(">>>>>>  $ curl http://localhost:8080/api/messages/hello ");
	}

}
