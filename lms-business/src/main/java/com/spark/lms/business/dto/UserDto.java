package com.spark.lms.business.dto;

import com.spark.lms.data.model.User;
import lombok.*;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    private Long id;
    private String displayName;
    private String username;
    private String password;
    private Integer active;
    private String role;
    private Date createdDate;
    private Date lastModifiedDate;
    public UserDto(@NotNull String displayName, @NotNull String username, @NotNull String password, @NotNull String role) {
        super();
        this.displayName = displayName;
        this.username = username;
        this.password = password;
        this.role = role;
    }

    public static UserDto fromUser(User user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setDisplayName(user.getDisplayName());
        userDto.setUsername(user.getUsername());
        userDto.setPassword(user.getPassword());
        userDto.setActive(user.getActive());
        userDto.setRole(user.getRole());
        userDto.setCreatedDate(user.getCreatedDate());
        userDto.setLastModifiedDate(user.getLastModifiedDate());
        return userDto;
    }

    public static User toUser(UserDto userDto) {
        User user = new User();
        user.setId(userDto.getId());
        user.setDisplayName(userDto.getDisplayName());
        user.setUsername(userDto.getUsername());
        user.setPassword(userDto.getPassword());
        user.setActive(userDto.getActive());
        user.setRole(userDto.getRole());
        user.setCreatedDate(userDto.getCreatedDate());
        user.setLastModifiedDate(userDto.getLastModifiedDate());
        return user;
    }

}