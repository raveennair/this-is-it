package com.ravyn.app.server.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ravyn.app.server.beans.Car;
import com.ravyn.app.server.service.CarService;

@Controller
@RequestMapping("/cars")
public class CarController extends AbstractBaseController<Car> {

    private CarService<Car> carService;

    @Autowired
    public void setCarService(CarService<Car> carService) {
        this.carService = carService;
        setService(this.carService);
    }

    @Override
    public String getPageInfo() {
        return "cars";
    }
}
