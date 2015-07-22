/********************************************************************
 * File Name:    AbstractBaseController.java
 *
 * Date Created: Feb 28, 2015
 *
 * ------------------------------------------------------------------
 * @author ravyn
 *
 *******************************************************************/

// PACKAGE/IMPORTS --------------------------------------------------
package com.ravyn.app.server.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ravyn.app.server.service.BaseService;


/**
 * TODO: Update with a detailed description of the interface/class.
 * @param <T>
 *
 */
public abstract class AbstractBaseController<T> implements BaseController<T> {

    protected BaseService<T> service = null;

    public abstract String getPageInfo();

    protected void setService(BaseService<T> service) {
        this.service = service;
    }

    @RequestMapping("content.json")
    public @ResponseBody
    List<T> getList() {
        try {
            return service.getList();
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return new ArrayList<T>();
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public @ResponseBody
    void add(@RequestBody T t) {
        try {
            service.add(t);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public @ResponseBody
    void update(@RequestBody T t) {
        try {
            service.update(t);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @RequestMapping(value = "/remove/{id}", method = RequestMethod.DELETE)
    public @ResponseBody
    void removeById(@PathVariable("id") Long id) {
        try {
            service.deleteById(id);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @RequestMapping(value = "/removeAll", method = RequestMethod.DELETE)
    public @ResponseBody
    void removeAll() {
        try {
            service.deleteAll();
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @RequestMapping("/layout")
    public String getPartialPage() {
        return getPageInfo() + "/layout";
    }

    @RequestMapping(value = "/layout/{includedPage}", method = RequestMethod.GET)
    public String getInculdedPages(@PathVariable("includedPage") String page) {
        return getPageInfo() + "/" + page;
    }
}
