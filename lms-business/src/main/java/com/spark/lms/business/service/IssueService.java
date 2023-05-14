package com.spark.lms.business.service;

import com.spark.lms.business.dto.IssueDto;
import com.spark.lms.business.dto.MemberDto;
import com.spark.lms.common.common.Constants;
import com.spark.lms.data.model.Issue;
import com.spark.lms.data.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class IssueService {

    @Autowired
    private IssueRepository issueRepository;

    public List<IssueDto> getAll() {
        return issueRepository.findAll().stream().map(IssueDto::fromIssue).collect(Collectors.toList());
    }

    public IssueDto get(Long id) {
        return IssueDto.fromIssue(issueRepository.findById(id).get());
    }

    public List<IssueDto> getAllUnreturned() {
        return issueRepository.findByReturned(Constants.BOOK_NOT_RETURNED).stream().map(IssueDto::fromIssue).collect(Collectors.toList());
    }

    public IssueDto addNew(IssueDto issue) {
        issue.setIssueDate(new Date());
        issue.setReturned(Constants.BOOK_NOT_RETURNED);
        return IssueDto.fromIssue(issueRepository.save(IssueDto.toIssue(issue)));
    }

    public IssueDto save(IssueDto issue) {
        Issue issueToSave = IssueDto.toIssue(issue);
        return IssueDto.fromIssue(issueRepository.save(issueToSave));
    }

    public Long getCountByMember(MemberDto member) {
        return issueRepository.countByMemberAndReturned(MemberDto.toMember(member), Constants.BOOK_NOT_RETURNED);
    }
}
