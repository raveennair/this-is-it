/********************************************************************
 * File Name:    AbstractBaseDao.java
 *
 * Date Created: Mar 1, 2015
 *
 * ------------------------------------------------------------------
 * @author ravyn
 *
 *******************************************************************/

// PACKAGE/IMPORTS --------------------------------------------------
package com.ravyn.app.server.dao;


import java.lang.reflect.ParameterizedType;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.ravyn.app.server.beans.AbstractBaseModel;


/**
 * TODO: Update with a detailed description of the interface/class.
 * @param <T>
 * @param <K>
 *
 */
public abstract class AbstractBaseDao<T extends AbstractBaseModel<K>, K> implements BaseDao<T, K> {

    @PersistenceContext
    private EntityManager em;
    private Class<T> entityBeanType;

    public AbstractBaseDao(Class<T> clazz) {
        this.entityBeanType = clazz;
        
    }

    private String getEntityClassName() {
        return this.entityBeanType.getSimpleName();
    }

    public T create(T entity) throws Exception {
        try {
            if (entity.getPrimaryKey() == null) {
                em.persist(entity);
            }
            else {
                entity = em.merge(entity);
            }
            return entity;
        }
        catch (Exception e) {
            throw e;
        }
    }

    public void deleteAll() throws Exception {
        try {
            // create the query to delete all the rows from table.
            String deleteAllQueryString = "DELETE h FROM " + getEntityClassName() + " h";
            Query deleteAllQuery = em.createQuery(deleteAllQueryString);
            deleteAllQuery.executeUpdate();
        }
        catch (Exception e) {
            throw e;
        }

    }

    public T retrieve(K primaryKey) throws Exception {
        System.out.println("inside retrieve(primaryKey)");
        try {
            return this.em.find(this.entityBeanType, primaryKey);
        }
        catch (Exception e) {
            System.out.println("An exception corressponding to UNEXPECTED_EXCEPTION will be thrown");
            // FIXME right now the subModulePrefix is set as null, find out the way by which we can get subModulePrefix.
            throw e;
        }
    }

    @SuppressWarnings("unchecked")
    public List<T> retrieveAll() throws Exception {
        try {
            // create the query to select all the rows from table.
            String selectAllQueryString = "SELECT h FROM " + getEntityClassName() + " h";
            Query selectAllQuery = em.createQuery(selectAllQueryString);
            // get the result list.
            List<T> resultList = selectAllQuery.getResultList();
            // NOTE here we are not checking whether the result list is empty or not because this is the validation
            // which the controller layer will be invoking.
            return resultList;
        }
        catch (Exception e)
        {
            System.out.println("An exception corressponding to UNEXPECTED_EXCEPTION will be thrown");
            // FIXME right now the subModulePrefix is set as null, find out the way by which we can get subModulePrefix.
            throw e;
        }
    }

    public T update(T entity) throws Exception {
        return create(entity);
    }

    public void delete(K primaryKey) throws Exception {
        System.out.println("inside retrieve(primaryKey)");
        try {
            T deleteObject = this.em.find(this.entityBeanType, primaryKey);
            this.em.remove(deleteObject);
        }
        catch (Exception e) {
            System.out.println("An exception corressponding to UNEXPECTED_EXCEPTION will be thrown");
            // FIXME right now the subModulePrefix is set as null, find out the way by which we can get subModulePrefix.
            throw e;
        }
    }

    public List<T> retrieveByName(String fieldName, String filedValue) throws Exception {
        // TODO Auto-generated method stub
        return null;
    }

    public T retrieveUniqueByName(String fieldName, String filedValue) throws Exception {
        // TODO Auto-generated method stub
        return null;
    }

    public List<T> retrieveByFields(Map<String, Object> columnNameToValueMap) throws Exception {
        // TODO Auto-generated method stub
        return null;
    }

    public T updateByFields(String primaryColumnName, K primaryKey, Map<String, Object> columnNameToValueMap) throws Exception {
        // TODO Auto-generated method stub
        return null;
    }

}
