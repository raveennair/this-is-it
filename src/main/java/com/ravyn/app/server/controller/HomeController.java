package com.ravyn.app.server.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
@RequestMapping("/home")
public class HomeController {

    @RequestMapping(value = "/layout/{includedPage}", method = RequestMethod.GET)
    public String getHomeInculdedPages(@PathVariable("includedPage") String page) {
        return "home/" + page;
    }

    @RequestMapping("/layout")
    public String getHomePartialPage() {
        return "home/layout";
    }
}
