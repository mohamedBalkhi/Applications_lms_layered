package com.spark.lms.presentation.controller;

import com.spark.lms.business.dto.UserDto;
import com.spark.lms.business.service.UserService;
import com.spark.lms.common.common.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserService userService;


    @ModelAttribute(name = "userRoles")
    public List<String> memberTypes() {
        List<String>roles =  new ArrayList<>();
        roles.add(Constants.ROLE_ADMIN);
        roles.add(Constants.ROLE_LIBRARIAN);
        return roles;
    }
    @RequestMapping(value = {"/", "/list"}, method = RequestMethod.GET)
    public String showMembersPage(Model model) {
        model.addAttribute("users", userService.getAllUsers());
        return "/user/list";
    }

    @RequestMapping(value = "/add", method = RequestMethod.GET)
    public String addUserPage(Model model) {
        model.addAttribute("user", new UserDto());
        return "/user/form";
    }

    @RequestMapping(value = "/edit/{id}", method = RequestMethod.GET)
    public String editUserPage(@PathVariable(name = "id") Long id, Model model) {
        UserDto user = userService.getById(id);
        if (user != null) {
            model.addAttribute("user", user);
            return "/user/form";
        } else {
            return "redirect:/user/add";
        }
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public String saveUser(@Valid UserDto user, BindingResult bindingResult, final RedirectAttributes redirectAttributes) {
        if (bindingResult.hasErrors()) {
            return "/user/form";
        }

        if (user.getId() == null) {
            userService.addNew(user);
            redirectAttributes.addFlashAttribute("successMsg", "'" + user.getDisplayName() + " " + user.getUsername() + "' is added as a new User.");
            return "redirect:/user/add";
        } else {
            UserDto updatedUser = userService.update(user);
            redirectAttributes.addFlashAttribute("successMsg", "Changes for '" + user.getDisplayName() + " " + user.getUsername() + "' are saved successfully. ");
            return "redirect:/user/edit/" + updatedUser.getId();
        }
    }

    @RequestMapping(value = "/remove/{id}", method = RequestMethod.GET)
    public String removeUser(@PathVariable(name = "id") Long id, Model model) {
        UserDto user = userService.getById(id);
        if (user != null) {
                userService.delete(id);
        }
        return "redirect:/user/list";
    }


}

