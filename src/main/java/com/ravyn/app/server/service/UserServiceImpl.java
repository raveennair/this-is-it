package com.ravyn.app.server.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ravyn.app.server.beans.User;

@Service("userService")
public class UserServiceImpl implements UserService<User> {
    private static List<User> userList = new ArrayList<User>();
    private static Long id = 0L;

    public List<User> getList() {
        return userList;
    }

    public void add(User user) {
        user.setId(++id);
        userList.add(user);
    }

    public void deleteById(Long id) {
        User foundUser = findUserById(id);
        if (foundUser != null) {
            userList.remove(foundUser);
            id--;
        }
    }

    public void deleteAll() {
        userList.clear();
        id = 0L;
    }

    public void update(User user) {
        User foundUser = findUserById(user.getId());
        if (foundUser != null) {
            userList.remove(foundUser);
            userList.add(user);
        }
    }

    private User findUserById(Long id) {
        for (User user : userList) {
            if (user.getId() == id) {
                return user;
            }
        }
        return null;
    }

    public User getById(Long id) {
        return findUserById(id);
    }
}
