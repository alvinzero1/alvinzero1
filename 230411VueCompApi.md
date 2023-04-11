after 230408danvegaSpringVue.md

src/frontend/src/App.vue
``` vue
<template>
  <HelloWorld />
  <DisplayApp />
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import DisplayApp from './components/DisplayApp.vue'
</script>

<style></style>
```

src/frontend/src/components/DisplayApp.vue
``` vue
<script setup>
import { ref, watchEffect } from 'vue'
const API_URL = `/api/messages/displayApp`
const idText = ref([])

watchEffect(async () => {
  const url = `${API_URL}`
  idText.value = await (await fetch(url)).json()
  console.log(">>> watchEffect: " + idText.value)
})
</script>

<template>
  <div>
    <ul>
      <li v-for="field in idText" :key="field.id">{{ field }}</li>
    </ul>
  </div>
</template>
```
arc/main/.../MainController.java
``` java
package com.zero1.flip;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/api/messages")
public class MainController {

	List<Idtext> arr = new ArrayList<>();

	int idIndex = 0;
	List<Idtext> idarr = new ArrayList<>();

	public Idtext idscansArr(int index) {
		Generate c = new Generate();
		idarr = c.arrIdScan();
		return idarr.get(index);
	}

	@GetMapping("/hello")
	public String hello() {
		return "Full Stack Java with Spring Boot and VueJS!";
	}

	@GetMapping("/displayApp")
	public String displayApp() {
		Idtext idtest = idscansArr(0);
		ObjectMapper mapper = new ObjectMapper();
		String jsonStr = "";
		try {
			jsonStr = mapper.writeValueAsString(idtest);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return jsonStr;
	}
}
```
To start vue
``` console
AzureAD+AlvinNg@LAPTOP-OJGI6SOT MINGW64 /c/zero1/proj/idscan/src/frontend (vuejs)
$ npm run serve
```


pom.xml
``` xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>3.0.4</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>

    <groupId>com.zero1</groupId>
    <artifactId>IdScan</artifactId>
    <version>0</version>
    <packaging>jar</packaging>
    <dependencies>
        <dependency>
            <groupId>com.google.cloud</groupId>
            <artifactId>google-cloud</artifactId>
            <version>0.47.0-alpha</version>
        </dependency>
        <dependency>
            <groupId>com.google.cloud</groupId>
            <artifactId>google-cloud-vision</artifactId>
            <version>2.0.24</version>
        </dependency>
        
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-thymeleaf</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
        
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
			<optional>true</optional>
		</dependency>
    </dependencies>
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.source>15</maven.compiler.source>
        <maven.compiler.target>15</maven.compiler.target>
        <exec.mainClass>com.zero1.idscan.IdScan</exec.mainClass>
		<java.version>17</java.version>
    </properties>
	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>
</project>
```
