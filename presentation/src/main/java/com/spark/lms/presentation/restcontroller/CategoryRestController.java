package com.spark.lms.presentation.restcontroller;

import com.spark.lms.business.dto.CategoryDto;
import com.spark.lms.business.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/rest/category")
public class CategoryRestController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping(value = {"/", "/list"})
    public List<CategoryDto> all() {
        return categoryService.getAll();
    }

}
