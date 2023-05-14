package com.spark.lms.business.service;

import com.spark.lms.business.dto.CategoryDto;
import com.spark.lms.data.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Long getTotalCount() {
        return categoryRepository.count();
    }

    public List<CategoryDto> getAllBySort() {
        return categoryRepository.findAllByOrderByNameAsc().stream().map(CategoryDto::fromCategoryWithoutBooks).collect(Collectors.toList());
    }

    public List<CategoryDto> getAll() {
        return categoryRepository.findAll().stream().map(CategoryDto::fromCategoryWithoutBooks).collect(Collectors.toList());
    }

    public CategoryDto get(Long id) {
        return CategoryDto.fromCategoryWithBooks(categoryRepository.findById(id).get());
    }

    public CategoryDto addNew(CategoryDto category) {
        category.setCreateDate(new Date());
        return CategoryDto.fromCategoryWithoutBooks(categoryRepository.save(CategoryDto.fromCategoryDtoWithoutBooks(category)));
    }

    public CategoryDto save(CategoryDto category) {
        return CategoryDto.fromCategoryWithoutBooks(categoryRepository.save(CategoryDto.fromCategoryDtoWithoutBooks(category)));
    }

    public void delete(CategoryDto category) {
        categoryRepository.delete(CategoryDto.fromCategoryDtoWithoutBooks(category));
    }

    public void delete(Long id) {
        categoryRepository.deleteById(id);
    }

    public boolean hasUsage(CategoryDto category) {
        return category.getBooks().size() > 0;
    }

}
