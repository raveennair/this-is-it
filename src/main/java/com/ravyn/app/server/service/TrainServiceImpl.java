package com.ravyn.app.server.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ravyn.app.server.beans.Train;


@Service("trainService")
public class TrainServiceImpl implements TrainService<Train> {
    private static List<Train> trainList = new ArrayList<Train>();
    private static Long id = 0L;

    public List<Train> getList() {
        return trainList;
    }

    public Train getById(Long id) {
        return findTrainById(id);
    }

    public void add(Train train) {
        train.setId(++id);
        trainList.add(train);
    }

    public void deleteById(Long id) {
        Train foundTrain = findTrainById(id);
        if (foundTrain != null) {
            trainList.remove(foundTrain);
            id--;
        }
    }

    public void deleteAll() {
        trainList.clear();
        id = 0L;
    }

    public void update(Train train) {
        Train foundTrain = findTrainById(train.getId());
        if (foundTrain != null) {
            trainList.remove(foundTrain);
            trainList.add(train);
        }
    }

    private Train findTrainById(Long id) {
        for (Train train : trainList) {
            if (train.getId() == id) {
                return train;
            }
        }

        return null;
    }
}
