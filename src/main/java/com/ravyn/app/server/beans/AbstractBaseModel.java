/********************************************************************
 * File Name:    AbstractBaseModel.java
 *
 * Date Created: Mar 1, 2015
 *
 * ------------------------------------------------------------------
 * @author ravyn
 *
 *******************************************************************/

// PACKAGE/IMPORTS --------------------------------------------------
package com.ravyn.app.server.beans;


/**
 * TODO: Update with a detailed description of the interface/class.
 *
 */
public abstract class AbstractBaseModel<K> {
    
    public abstract K  getPrimaryKey();
    
    public abstract void setPrimaryKey(K k);
    
    
}

