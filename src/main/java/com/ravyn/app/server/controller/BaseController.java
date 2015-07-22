/********************************************************************
 * File Name:    BaseController.java
 *
 * Date Created: Feb 28, 2015
 *
 * ------------------------------------------------------------------
 * @author ravyn
 *
 *******************************************************************/

// PACKAGE/IMPORTS --------------------------------------------------
package com.ravyn.app.server.controller;

import java.util.List;



/**
 * TODO: Update with a detailed description of the interface/class.
 *
 */
public interface BaseController<T> {
    public String getInculdedPages( String page);
    
    public String getPartialPage();
    
    public List<T> getList();

    public void add(T t);

    public void update(T t);

    public void removeById(Long id);

    public void removeAll();
}

