package com.ravyn.app.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ravyn.app.server.beans.Train;
import com.ravyn.app.server.service.TrainService;

@Controller
@RequestMapping("/trains")
public class TrainController extends AbstractBaseController<Train> {

    private TrainService<Train> trainService;

    @Autowired
    public void setTrainService(TrainService<Train> trainService) {
        this.trainService = trainService;
        setService(this.trainService);
    }

    @Override
    public String getPageInfo() {
        return "trains";
    }

    
}
