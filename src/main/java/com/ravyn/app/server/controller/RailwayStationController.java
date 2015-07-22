package com.ravyn.app.server.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ravyn.app.server.beans.RailwayStation;
import com.ravyn.app.server.service.RailwayStationService;


@Controller
@RequestMapping("/railwaystations")
public class RailwayStationController extends AbstractBaseController<RailwayStation> {

    private RailwayStationService<RailwayStation> railwayStationsService;

    @Autowired
    public void setRailwayStationsService(RailwayStationService<RailwayStation> railwayStationsService) {
        this.railwayStationsService = railwayStationsService;
        setService(this.railwayStationsService);
    }

    @Override
    public String getPageInfo() {
        // TODO Auto-generated method stub
        return "railwaystations";
    }
}
