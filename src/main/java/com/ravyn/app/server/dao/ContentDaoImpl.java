/********************************************************************
 * File Name:    ContentDao.java
 *
 * Date Created: Mar 1, 2015
 *
 * ------------------------------------------------------------------
 * @author ravyn
 *
 *******************************************************************/

// PACKAGE/IMPORTS --------------------------------------------------
package com.ravyn.app.server.dao;

import org.springframework.stereotype.Repository;

import com.ravyn.app.server.beans.AbstractBaseModel;
import com.ravyn.app.server.beans.Content;


/**
 * TODO: Update with a detailed description of the interface/class.
 * @param <T>
 * @param <K>
 *
 */
@Repository("contentDao")
public class ContentDaoImpl<T extends AbstractBaseModel<K>, K> extends AbstractBaseDao<T, K> implements ContentDao<T, K> {

    @SuppressWarnings("unchecked")
    public ContentDaoImpl() {
        super((Class<T>) Content.class);
        
    }

}

