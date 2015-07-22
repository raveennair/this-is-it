package com.ravyn.app.server.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.ravyn.app.server.beans.Content;
import com.ravyn.app.server.dao.ContentDao;


@Service("contentService")
@Transactional(isolation = Isolation.READ_COMMITTED )
public class ContentServiceImpl implements ContentService<Content> {

    @Autowired
    private ContentDao<Content, Long> contentDao;

    public void deleteAll() throws Exception {
        contentDao.deleteAll();
    }
    
    public List<Content> getList() throws Exception {
        return contentDao.retrieveAll();
    }

    public Content getById(Long id) throws Exception {
        return contentDao.retrieve(id);
    }

    public void add(Content content) throws Exception {
        contentDao.create(content);
    }

    public void deleteById(Long id) throws Exception {
        contentDao.delete(id);
    }

    public void update(Content content) throws Exception {
        contentDao.update(content);
    }
}
