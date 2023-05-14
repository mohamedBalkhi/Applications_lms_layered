package com.spark.lms.presentation;

import com.spark.lms.business.dto.UserDto;
import com.spark.lms.business.service.UserService;
import com.spark.lms.common.common.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

@Component
public class ApplicationStartup implements ApplicationListener<ApplicationReadyEvent> {

    @Autowired
    private UserService userService;

    @Override
    public void onApplicationEvent(ApplicationReadyEvent applicationReadyEvent) {
        initDatabaseEntities();
    }


    private void initDatabaseEntities() {

        if (userService.getAllUsers().size() == 0) {
            userService.addNew(new UserDto("Mr. Admin", "admin", "admin", Constants.ROLE_ADMIN));
            userService.addNew(new UserDto("Mr. Librarian", "librarian", "librarian", Constants.ROLE_LIBRARIAN));
        }

    }
}