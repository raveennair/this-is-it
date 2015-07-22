/********************************************************************
 * File Name:    BaseDao.java
 *
 * Date Created: Mar 1, 2015
 *
 * ------------------------------------------------------------------
 * @author ravyn
 *
 *******************************************************************/

// PACKAGE/IMPORTS --------------------------------------------------
package com.ravyn.app.server.dao;


import java.util.List;
import java.util.Map;

import com.ravyn.app.server.beans.AbstractBaseModel;


/**
 * TODO: Update with a detailed description of the interface/class.
 *
 */
public interface BaseDao<T extends AbstractBaseModel<K>, K> {

    T create(T entity) throws Exception;

    T retrieve(K primaryKey) throws Exception;

    List<T> retrieveAll() throws Exception;

    T update(T entity) throws Exception;

    void delete(K primaryKey) throws Exception;

    void deleteAll() throws Exception;

    List<T> retrieveByName(String fieldName, String filedValue) throws Exception;

    T retrieveUniqueByName(String fieldName, String filedValue) throws Exception;

    List<T> retrieveByFields(Map<String, Object> columnNameToValueMap) throws Exception;

    public T updateByFields(String primaryColumnName, K primaryKey, Map<String, Object> columnNameToValueMap) throws Exception;

}
