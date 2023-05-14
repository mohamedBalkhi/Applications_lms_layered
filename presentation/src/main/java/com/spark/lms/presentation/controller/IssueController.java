package com.spark.lms.presentation.controller;

import com.spark.lms.business.dto.CategoryDto;
import com.spark.lms.business.dto.IssueDto;
import com.spark.lms.business.service.CategoryService;
import com.spark.lms.business.service.IssueService;
import com.spark.lms.common.common.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
@RequestMapping(value = "/issue")
public class IssueController {

    @Autowired
    private IssueService issueService;

    @Autowired
    private CategoryService categoryService;

    @ModelAttribute(name = "memberTypes")
    public List<String> memberTypes() {
        return Constants.MEMBER_TYPES;
    }

    @ModelAttribute("categories")
    public List<CategoryDto> getCategories() {
        return categoryService.getAllBySort();
    }

    @RequestMapping(value = {"/", "/list"}, method = RequestMethod.GET)
    public String listIssuePage(Model model) {
        List<IssueDto> issues = issueService.getAllUnreturned();
        model.addAttribute("issues", issues);
        return "/issue/list";
    }

    @RequestMapping(value = "/new", method = RequestMethod.GET)
    public String newIssuePage(Model model) {
        return "/issue/form";
    }

}
