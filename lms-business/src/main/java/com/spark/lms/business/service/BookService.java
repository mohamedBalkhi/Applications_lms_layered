package com.spark.lms.business.service;

import com.spark.lms.business.dto.BookDto;
import com.spark.lms.business.dto.CategoryDto;
import com.spark.lms.common.common.Constants;
import com.spark.lms.data.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private IssuedBookService issuedBookService;

    public Long getTotalCount() {
        return bookRepository.count();
    }

    public Long getTotalIssuedBooks() {
        return bookRepository.countByStatus(Constants.BOOK_STATUS_ISSUED);
    }

    public List<BookDto> getAll() {
        return bookRepository.findAll().stream().map(BookDto::fromBookWithCategory).collect(Collectors.toList());
    }

    public BookDto get(Long id) {
        return BookDto.fromBookWithCategory(bookRepository.findById(id).get());
    }

    public BookDto getByTag(String tag) {
        return BookDto.fromBookWithCategory(bookRepository.findByTag(tag));
    }

    public List<BookDto> get(List<Long> ids) {
        return bookRepository.findAllById(ids).stream().map(BookDto::fromBookWithCategory).collect(Collectors.toList());
    }

    public List<BookDto> getByCategory(CategoryDto category) {
        return bookRepository.findByCategory(CategoryDto.fromCategoryDtoWithoutBooks(category)).stream().map(BookDto::fromBookWithoutCategory).collect(Collectors.toList());
    }

    public List<BookDto> geAvailabletByCategory(CategoryDto category) {
        return bookRepository.findByCategoryAndStatus(CategoryDto.fromCategoryDtoWithoutBooks(category), Constants.BOOK_STATUS_AVAILABLE).stream().map(BookDto::fromBookWithCategory).collect(Collectors.toList());
    }

    public BookDto addNew(BookDto book) {
        book.setCreateDate(new Date());
        book.setStatus(Constants.BOOK_STATUS_AVAILABLE);
        return BookDto.fromBookWithCategory(bookRepository.save(BookDto.fromBookDto(book)));
    }

    public BookDto save(BookDto book) {
        return BookDto.fromBookWithCategory(bookRepository.save(BookDto.fromBookDto(book)));
    }

    public void delete(BookDto book) {
        bookRepository.delete(BookDto.fromBookDto(book));
    }

    public void delete(Long id) {
        bookRepository.deleteById(id);
    }

    public boolean hasUsage(BookDto book) {
        return issuedBookService.getCountByBook(book) > 0;
    }
    public Long countByCategory(CategoryDto categoryDto){
        return bookRepository.countByCategory(CategoryDto.fromCategoryDtoWithoutBooks(categoryDto));
    }
}
