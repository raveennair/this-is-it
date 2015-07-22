package com.ravyn.app.server.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ravyn.app.server.beans.Car;


@Service("carService")
public class CarServiceImpl implements CarService<Car> {
    private static List<Car> carList = new ArrayList<Car>();
    private static Long id = 0L;

    public List<Car> getList() {
        return carList;
    }

    public Car getById(Long id) {
        return getCarById(id);
    }

    private Car getCarById(Long id) {
        for (Car car : carList) {
            if (car.getId() == id) {
                return car;
            }
        }
        return null;
    }

    public void deleteAll() {
        carList.clear();
        id = 0L;
    }

    public void update(Car car) {
        Car foundCar = getCarById(car.getId());
        if (foundCar != null) {
            carList.remove(foundCar);
            carList.add(car);
        }
    }

    public void add(Car car) {
        car.setId(++id);
        carList.add(car);

    }

    public void deleteById(Long id) {
        Car foundCar = getCarById(id);
        if (foundCar != null) {
            carList.remove(foundCar);
            id--;
        }
    }

}
