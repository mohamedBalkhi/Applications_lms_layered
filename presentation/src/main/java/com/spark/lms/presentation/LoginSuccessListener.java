package com.spark.lms.presentation;

import com.spark.lms.business.dto.UserDto;
import com.spark.lms.business.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.security.authentication.event.AuthenticationSuccessEvent;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSession;

@Component
public class LoginSuccessListener implements ApplicationListener<AuthenticationSuccessEvent> {

    @Autowired
    private UserService userService;

    @Autowired
    private HttpSession httpSession;

    @Override
    public void onApplicationEvent(AuthenticationSuccessEvent event) {
        User user = (User) event.getAuthentication().getPrincipal();
        UserDto loggedIn = userService.getByUsername(user.getUsername());
        String displayName = loggedIn.getDisplayName();
        String role = loggedIn.getRole();
        httpSession.setAttribute("loggedInUserName", displayName);
        httpSession.setAttribute("loggedInUserRole",role);
    }

}
