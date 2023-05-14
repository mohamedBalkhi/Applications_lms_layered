package com.spark.lms.presentation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {"com.spark.lms", "com.spark.lms.business", "com.spark.lms.data.model", "com.spark.lms.data.repository"})
@ComponentScan(basePackages = {"com.spark.lms.data.model", "com.spark.lms.business.service", "com.spark.lms.data.repository", "com.spark.lms.presentation.confguration", "com.spark.lms.presentation.controller", "com.spark.lms.presentation.restcontroller","com.spark.lms.presentation"})
@EnableJpaRepositories(basePackages = "com.spark.lms.data.repository")
@EntityScan(basePackageClasses = {com.spark.lms.data.model.Category.class, com.spark.lms.data.model.Book.class, com.spark.lms.data.model.Issue.class, com.spark.lms.data.model.IssuedBook.class, com.spark.lms.data.model.User.class, com.spark.lms.data.model.Member.class})
public class SparkLmsApplication {

    public static void main(String[] args) {
        SpringApplication.run(SparkLmsApplication.class, args);
    }

}
