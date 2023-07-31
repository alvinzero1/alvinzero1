## Spring Boot + Vue: JWT Authentication and Authorization
```
spring.datasource.url=jdbc:mysql://localhost:3306/testdb_spring?useSSL=false
spring.datasource.username=root
spring.datasource.password=Zero@1
```

https://www.githubcode.com/spring-boot-vue-js-github/#Springboot_Vue_MSSQL
> Spring Boot + Vue.js Authentication Github
- https://github.com/bezkoder/vue-3-authentication-jwt
- https://github.com/bezkoder/spring-boot-spring-security-jwt-authentication

Use the latest vuejs, and update json, and npm update
package.json
```json
{
  "name": "vue-new-project",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^1.2.35",
    "@fortawesome/free-solid-svg-icons": "^5.15.3",
    "@fortawesome/vue-fontawesome": "^3.0.0-3",
    "axios": "^0.21.1",
    "bootstrap": "^4.6.0",
    "vee-validate": "^4.3.5",
    "yup": "^0.32.9",
    "vue": "^3.3.4",
    "vue-router": "^4.2.2",
    "vuex": "^4.1.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.2.3",
    "vite": "^4.3.9"
  }
}
```

```sql
INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');
```


---
