/********************************************************************
 * File Name:    Car.java
 *
 * Date Created: Feb 28, 2015
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
public class Car extends AbstractBaseModel<Long> {
    private Long id;
    private String name;

    public Car() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public Long getPrimaryKey() {
        return id;
    }

    @Override
    public void setPrimaryKey(Long id) {
        this.id = id;
    }

}
