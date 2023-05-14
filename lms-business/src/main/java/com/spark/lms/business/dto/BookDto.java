package com.spark.lms.business.dto;

import com.spark.lms.data.model.Book;
import lombok.*;

import java.util.Date;

@Data
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BookDto {

    private Long id;
    private String title;
    private String tag;
    private String authors;
    private String publisher;
    private String isbn;
    private Integer status;
    private Date createDate;
    private CategoryDto category;

    public static BookDto fromBookWithCategory(Book book) {
        if (book == null) return null;
        BookDto bookDto = new BookDto();
        bookDto.setId(book.getId());
        bookDto.setTitle(book.getTitle());
        bookDto.setTag(book.getTag());
        bookDto.setAuthors(book.getAuthors());
        bookDto.setPublisher(book.getPublisher());
        bookDto.setIsbn(book.getIsbn());
        bookDto.setStatus(book.getStatus());
        bookDto.setCreateDate(book.getCreateDate());
        bookDto.setCategory(CategoryDto.fromCategoryWithoutBooks(book.getCategory()));
        return bookDto;
    }

    public static BookDto fromBookWithoutCategory(Book book) {
        if (book == null) return null;
        BookDto bookDto = new BookDto();
        bookDto.setId(book.getId());
        bookDto.setTitle(book.getTitle());
        bookDto.setTag(book.getTag());
        bookDto.setAuthors(book.getAuthors());
        bookDto.setPublisher(book.getPublisher());
        bookDto.setIsbn(book.getIsbn());
        bookDto.setStatus(book.getStatus());
        bookDto.setCreateDate(book.getCreateDate());
        return bookDto;
    }

    public static Book fromBookDto(BookDto bookDto) {
        if (bookDto == null) return null;
        Book book = new Book();
        book.setId(bookDto.getId());
        book.setTitle(bookDto.getTitle());
        book.setTag(bookDto.getTag());
        book.setAuthors(bookDto.getAuthors());
        book.setPublisher(bookDto.getPublisher());
        book.setIsbn(bookDto.getIsbn());
        book.setStatus(bookDto.getStatus());
        book.setCreateDate(bookDto.getCreateDate());
        book.setCategory(CategoryDto.fromCategoryDtoWithoutBooks(bookDto.getCategory()));
        return book;
    }

    public static Book fromBookDtoWithoutCategory(BookDto bookDto) {
        if (bookDto == null) return null;
        Book book = new Book();
        book.setId(bookDto.getId());
        book.setTitle(bookDto.getTitle());
        book.setTag(bookDto.getTag());
        book.setAuthors(bookDto.getAuthors());
        book.setPublisher(bookDto.getPublisher());
        book.setIsbn(bookDto.getIsbn());
        book.setStatus(bookDto.getStatus());
        book.setCreateDate(bookDto.getCreateDate());
        return book;
    }
}