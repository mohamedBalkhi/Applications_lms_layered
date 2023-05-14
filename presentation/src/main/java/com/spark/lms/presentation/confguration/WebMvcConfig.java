package com.spark.lms.presentation.confguration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
//@PropertySource({"classpath:/properties/lms.properties", "classpath:/properties/messages.properties"})
public class WebMvcConfig implements WebMvcConfigurer {

    @Autowired
    private StringToCategoryDtoConverter stringToCategoryDtoConverter;

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    public void addFormatters(FormatterRegistry registry) {
        registry.addConverter(stringToCategoryDtoConverter);
    }

}
