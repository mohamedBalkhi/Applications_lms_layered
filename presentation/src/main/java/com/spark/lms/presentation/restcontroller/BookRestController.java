package com.spark.lms.presentation.restcontroller;

import com.spark.lms.business.dto.BookDto;
import com.spark.lms.business.dto.CategoryDto;
import com.spark.lms.business.service.BookService;
import com.spark.lms.business.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/rest/book")
public class BookRestController {

    @Autowired
    private BookService bookService;

    @Autowired
    private CategoryService categoryService;

    @GetMapping(value = {"/", "/list"})
    public List<BookDto> all() {
        return bookService.getAll();
    }

    @GetMapping(value = "/{id}/list")
    public List<BookDto> get(@PathVariable(name = "id") Long id) {
        CategoryDto category = categoryService.get(id);
        return bookService.getByCategory(category);
    }

    @GetMapping(value = "/{id}/available")
    public List<BookDto> getAvailableBooks(@PathVariable(name = "id") Long id) {
        CategoryDto category = categoryService.get(id);
        return bookService.geAvailabletByCategory(category);
    }

}
