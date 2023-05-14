package com.spark.lms.business.service;

import com.spark.lms.business.dto.BookDto;
import com.spark.lms.business.dto.IssuedBookDto;
import com.spark.lms.common.common.Constants;
import com.spark.lms.data.repository.IssuedBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class IssuedBookService {

    @Autowired
    private IssuedBookRepository issuedBookRepository;

    public List<IssuedBookDto> getAll() {
        return issuedBookRepository.findAll().stream().map(IssuedBookDto::fromIssuedBook).collect(Collectors.toList());
    }

    public IssuedBookDto get(Long id) {
        return IssuedBookDto.fromIssuedBook(issuedBookRepository.findById(id).get());
    }

    public Long getCountByBook(BookDto book) {
        return issuedBookRepository.countByBookAndReturned(BookDto.fromBookDto(book), Constants.BOOK_NOT_RETURNED);
    }

    public IssuedBookDto save(IssuedBookDto issuedBook) {
        return IssuedBookDto.fromIssuedBook(issuedBookRepository.save(IssuedBookDto.toIssuedBook(issuedBook)));
    }

    public IssuedBookDto addNew(IssuedBookDto issuedBook) {
        issuedBook.setReturned(Constants.BOOK_NOT_RETURNED);
        return IssuedBookDto.fromIssuedBook(issuedBookRepository.save(IssuedBookDto.toIssuedBook(issuedBook)));
    }

}
