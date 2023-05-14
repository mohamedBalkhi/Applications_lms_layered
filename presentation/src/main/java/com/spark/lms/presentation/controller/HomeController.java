package com.spark.lms.presentation.controller;

import com.spark.lms.business.dto.CategoryDto;
import com.spark.lms.business.service.BookService;
import com.spark.lms.business.service.CategoryService;
import com.spark.lms.business.service.HomeService;
import com.spark.lms.business.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Controller
public class HomeController {

    @Autowired
    HomeService homeService;
    @Autowired
    MemberService memberService;
    @Autowired
    CategoryService categoryService;
    @Autowired
    BookService bookService;
    @RequestMapping(value = {"/", "/home"}, method = RequestMethod.GET)
    public String homePage(Model model) {
        model.addAttribute("topTiles", homeService.getTopTilesMap());
        barChartPerCategory(model);
        model.addAttribute("males",memberService.getMalesCount()*1.0/ memberService.getTotalCount() * 100);
        model.addAttribute("females",memberService.getFemalesCount()*1.0/ memberService.getTotalCount() * 100);
        return "home";
    }
    public void barChartPerCategory(Model model){
        List<CategoryDto> categories = categoryService.getAllBySort();
        Long maxCount = 0L;
        Map<String, Long> data = new LinkedHashMap<String, Long>();
        for(CategoryDto category : categories){
            Long curCount = bookService.countByCategory(category);
            data.put(category.getName(),curCount);
            if(curCount > maxCount) maxCount = curCount;
        }
        model.addAttribute("keySet1",data.keySet());
        model.addAttribute("values1",data.values());
        model.addAttribute("maxValue",maxCount);
    }

}
