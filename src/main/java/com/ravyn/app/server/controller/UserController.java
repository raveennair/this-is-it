package com.ravyn.app.server.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ravyn.app.server.beans.User;
import com.ravyn.app.server.service.UserService;


@Controller
@RequestMapping("/users")
public class UserController extends AbstractBaseController<User> {

    private UserService<User> userService;

    @Autowired
    public void setUserService(UserService<User> userService) {
        this.userService = userService;
        this.setService(this.userService);
    }

    @Override
    public String getPageInfo() {
        return "users";
    }
}
