


``` java
// imports ...

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * https://brunozambiazi.wordpress.com/2015/08/15/working-with-json-in-java/
 */
public class User {

    private Long id;
    private String name;
    private Calendar birthDate;
    private Set<String> emails;

   // getter, setter
   
    public static void main(String[] args) throws Exception {
        User user = new User();
        user.setId(1L);
        user.setName("User");
        user.setBirthDate(Calendar.getInstance());
        user.setEmails(new HashSet<String>());
        user.getEmails().add("user@gmail.com");
        user.getEmails().add("user@yahoo.com");

        ObjectMapper mapper = new ObjectMapper();

        String json = mapper.writeValueAsString(user);
        System.out.println(json);
    }

}

/* Sample dialogue
 * 
 * PS C:\Users\AlvinNg\zero1Wk30\fsjava\fsjava>  & 'C:\Users\AlvinNg\.vscode\extensions\redhat.java-1.16.0-win32-x64\jre\17.0.6-win32-x86_64\bin\java.exe' '@C:\Users\AlvinNg\AppData\Local\Temp\cp_by0wm6vob9ukwi2dl9xv9bb1p.argfile' 'dev.danvega.fsjava.User'
{"id":1,"name":"User","birthDate":1681100667877,"emails":["user@gmail.com","user@yahoo.com"]}
PS C:\Users\AlvinNg\zero1Wk30\fsjava\fsjava> 
 */
```
