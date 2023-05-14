package com.spark.lms.business.dto;

import com.spark.lms.data.model.IssuedBook;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class IssuedBookDto {

    private Long id;
    private BookDto book;
    private IssueDto issue;
    private Integer returned;

    public static IssuedBookDto fromIssuedBook(IssuedBook issuedBook) {
        IssuedBookDto issuedBookDto = new IssuedBookDto();
        issuedBookDto.setId(issuedBook.getId());
        issuedBookDto.setBook(BookDto.fromBookWithCategory(issuedBook.getBook()));
        if (issuedBook.getIssue() != null)
            issuedBookDto.setIssue(IssueDto.fromIssueWithoutIssuedBooks(issuedBook.getIssue()));
        issuedBookDto.setReturned(issuedBook.getReturned());
        return issuedBookDto;
    }

    public static IssuedBookDto fromIssuedBookWithoutIssue(IssuedBook issuedBook) {
        IssuedBookDto issuedBookDto = new IssuedBookDto();
        issuedBookDto.setId(issuedBook.getId());
        issuedBookDto.setBook(BookDto.fromBookWithCategory(issuedBook.getBook()));
        issuedBookDto.setReturned(issuedBook.getReturned());
        return issuedBookDto;
    }

    public static IssuedBook toIssuedBook(IssuedBookDto issuedBookDto) {
        IssuedBook issuedBook = new IssuedBook();
        issuedBook.setId(issuedBookDto.getId());
        issuedBook.setBook(BookDto.fromBookDto(issuedBookDto.getBook()));
        if (issuedBookDto.getIssue() != null)
            issuedBook.setIssue(IssueDto.toIssueWithoutIssuedBooks(issuedBookDto.getIssue()));
        issuedBook.setReturned(issuedBookDto.getReturned());
        return issuedBook;
    }

    public static IssuedBook toIssuedBookWithoutIssue(IssuedBookDto issuedBookDto) {
        IssuedBook issuedBook = new IssuedBook();
        issuedBook.setId(issuedBookDto.getId());
        issuedBook.setBook(BookDto.fromBookDto(issuedBookDto.getBook()));
        issuedBook.setReturned(issuedBookDto.getReturned());
        return issuedBook;
    }
}