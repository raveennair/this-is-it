package com.ravyn.app.server.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ravyn.app.server.beans.Content;
import com.ravyn.app.server.service.ContentService;


@Controller
@RequestMapping("/aboutus")
public class AboutUsController extends AbstractBaseController<Content> {

    private ContentService<Content> contentService;

    @Autowired
    public void setContentService(ContentService<Content> contentService) {
        this.contentService = contentService;
        setService(this.contentService);
    }

    @RequestMapping(value = "/addImage", method = RequestMethod.POST)
    public @ResponseBody
    Content addImage(@RequestParam("name") String name, @RequestBody byte[] file) {
        Content content = new Content();
        try {
            if (file != null) {
                /*byte[] bytes = file;

                File dir = new File("D:\\tempp");
                if (!dir.exists()) {
                    dir.mkdirs();
                }

                File serverFile = new File(dir.getAbsolutePath() + File.separator + name);
                BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
                stream.write(bytes);
                stream.close();*/

                content.setIcon(file);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return content;
    }

    @Override
    public String getPageInfo() {
        return "aboutus";
    }

}
