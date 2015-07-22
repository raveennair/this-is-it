/********************************************************************
 * File Name:    IBaseService.java
 *
 * Date Created: Feb 28, 2015
 *
 * ------------------------------------------------------------------
 * @author ravyn
 *
 *******************************************************************/

// PACKAGE/IMPORTS --------------------------------------------------
package com.ravyn.app.server.service;

import java.util.List;


/**
 * TODO: Update with a detailed description of the interface/class.
 *
 */
public interface BaseService<T> {
    
    public List<T> getList() throws Exception;

    public T getById(Long id) throws Exception;

    public void add(T t) throws Exception;

    public void deleteById(Long id) throws Exception;

    public void deleteAll() throws Exception;

    public void update(T t) throws Exception;


}

