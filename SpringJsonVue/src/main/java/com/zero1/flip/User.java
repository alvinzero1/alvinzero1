package com.zero1.flip;

import java.util.Calendar;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
public class User {
    private Long id;
    private String name;
    private Calendar birthDate;
    private Set<String> emails;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Calendar getBirthDate() {
        return birthDate;
    }
    public void setBirthDate(Calendar birthDate) {
        this.birthDate = birthDate;
    }
    public Set<String> getEmails() {
        return emails;
    }
    public void setEmails(Set<String> emails) {
        this.emails = emails;
    }
    public String soutJson() throws JsonProcessingException {
        User user = new User();
        user.setId(1L);
        user.setName("User");
        user.setBirthDate(Calendar.getInstance());
        user.setEmails(new HashSet<String>());
        user.getEmails().add("user@gmail.com");
        user.getEmails().add("user@yahoo.com");

        ObjectMapper mapper = new ObjectMapper();

        String json = mapper.writeValueAsString(user);
        return json;
    }

    public static void main(String[] args) throws Exception {
        User u = new User();
        String json =  u.soutJson();
        System.out.println(json);
    }
    
}
