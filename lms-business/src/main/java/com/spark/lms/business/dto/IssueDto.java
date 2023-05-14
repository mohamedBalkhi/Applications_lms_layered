package com.spark.lms.business.dto;

import com.spark.lms.data.model.Issue;
import com.spark.lms.data.model.IssuedBook;
import lombok.*;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class IssueDto {

    private Long id;
    private Date issueDate;
    private String notes;
    private Date expectedReturnDate;
    private Integer returned;
    private MemberDto member;
    private List<IssuedBookDto> issuedBooks;

    public static IssueDto fromIssue(Issue issue) {
        IssueDto issueDto = new IssueDto();
        issueDto.setId(issue.getId());
        issueDto.setIssueDate(issue.getIssueDate());
        issueDto.setNotes(issue.getNotes());
        issueDto.setExpectedReturnDate(issue.getExpectedReturnDate());
        issueDto.setReturned(issue.getReturned());
        issueDto.setMember(MemberDto.fromMember(issue.getMember()));
        if (issue.getIssuedBooks() != null) {
            issueDto.setIssuedBooks(issue.getIssuedBooks().stream().map(IssuedBookDto::fromIssuedBook).collect(Collectors.toList()));

        }
        return issueDto;
    }

    public static IssueDto fromIssueWithoutIssuedBooks(Issue issue) {
        IssueDto issueDto = new IssueDto();
        issueDto.setId(issue.getId());
        issueDto.setIssueDate(issue.getIssueDate());
        issueDto.setNotes(issue.getNotes());
        issueDto.setExpectedReturnDate(issue.getExpectedReturnDate());
        issueDto.setReturned(issue.getReturned());
        issueDto.setMember(MemberDto.fromMember(issue.getMember()));
        return issueDto;
    }

    public static Issue toIssue(IssueDto issueDto) {
        Issue issue = new Issue();
        issue.setId(issueDto.getId());
        issue.setIssueDate(issueDto.getIssueDate());
        issue.setNotes(issueDto.getNotes());
        issue.setExpectedReturnDate(issueDto.getExpectedReturnDate());
        issue.setReturned(issueDto.getReturned());
        issue.setMember(MemberDto.toMember(issueDto.getMember()));
        if (issueDto.getIssuedBooks() != null) {
            issue.setIssuedBooks(issueDto.getIssuedBooks().stream().map(IssuedBookDto::toIssuedBookWithoutIssue).collect(Collectors.toList()));
            for (IssuedBook ib : issue.getIssuedBooks()) {
                ib.setIssue(issue);
            }
        }
        return issue;
    }

    public static Issue toIssueWithoutIssuedBooks(IssueDto issueDto) {
        Issue issue = new Issue();
        issue.setId(issueDto.getId());
        issue.setIssueDate(issueDto.getIssueDate());
        issue.setNotes(issueDto.getNotes());
        issue.setExpectedReturnDate(issueDto.getExpectedReturnDate());
        issue.setReturned(issueDto.getReturned());
        issue.setMember(MemberDto.toMember(issueDto.getMember()));
        return issue;
    }
}