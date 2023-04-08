## Full Stack Java Development with Spring Boot and VueJS

ref:
* https://youtu.be/2G6r2f40Lps
* https://www.danvega.dev/blog/2021/01/22/full-stack-java-vue/
* https://github.com/danvega/full-stack-java-vue

myTest:
- **IDE used: VSCode**
- /c/Users/AlvinNg/zero1Wk30/fsjava/fsjava

### Spring Boot
Creat Spring Boot Project
-  from `https://start.spring.io`
    - Group: dev.danvega
    - Artifact: fsjava
    - Type: Maven
    - Spring Boot: 3.0.5 (or latest)
    - Language: Java
    - Packaging: Jar
    - Java Version: 17
    - Package: Jar
    - Dependencies:
      - Spring Boot DevTools
      - Spring Web
- test run the Application
- Add Message Controller

MessageController.java
``` java
...
@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @GetMapping("/hello")
    public String hello() {
        return "Full Stack Java with Spring Boot and VueJS!";
    }
}
```
Test run on curl
``` console
PS ...\fsjava> curl http://localhost:8080/api/messages/hello

RawContent        : HTTP/1.1 200
...
```


### Vue
* Generate project to `/src/frontend`
* Open new bash terminal
    [VueCli](https://cli.vuejs.org/) 
    ``` console
    PS ...\fsjava\src> npm install -g @vue/cli

    PS ...\fsjava\src> vue create frontend

    $ cd frontend
    $ npm run serve
    ```
* stop Spring server and vue server

* Revise
  * vue.config.js
  * App.vue
  * HelloWorld.vue
    - /src/frontend/vue.config.js
    ``` js
    // vue.config.js
    module.exports = {
        // https://cli.vuejs.org/config/#devserver-proxy
        devServer: {
            port: 3000,
            proxy: {
                '/api': {
                    target: 'http://localhost:8080',
                    ws: true,
                    changeOrigin: true
                }
            }
        }
    }
    ```
    - /src/frontend/src/App.vue
    ``` vue
    <template>
      <HelloWorld />
    </template>

    <script>
    import HelloWorld from './components/HelloWorld.vue'
    export default {
      name: 'App',
      components: {
        HelloWorld
      }
    }
    </script>

    <style>
    </style>
    ```
    - /src/frontend/src/components/HelloWorld.vue
    ``` vue
    <template>
      <h1>{{ msg }}</h1>
    </template>

    <script>
    export default {
      name: 'HelloWorld',
      data() {
        return {
          msg: ''
        }
      },
      mounted() {
        fetch("/api/messages/hello")
          .then((response) => response.text())
          .then((data) => {
              this.msg = data;
          });
      }
    }
    </script>
    ```


* start Spring server
* start Vue at `npm run serve`
  ``` console
    App running at:
    - Local:   http://localhost:3000/
  ```
**Result should shown at the browser.**

---
pom.xxml
``` xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>3.0.5</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>dev.danvega</groupId>
	<artifactId>fsjava</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>fsjava</name>
	<description>Full Stack Java</description>
	<properties>
		<java.version>17</java.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
			<optional>true</optional>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>

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

