package com.ravyn.app.server.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ravyn.app.server.beans.RailwayStation;


@Service("RailwayStationService")
public class RailwayStationServiceImpl implements RailwayStationService<RailwayStation> {

    private static List<RailwayStation> rsList = new ArrayList<RailwayStation>();
    private static Long id = 0L;

    public RailwayStation getById(Long id) {

        return findRailwayStationById(id);
    }

    private RailwayStation findRailwayStationById(Long id) {
        for (RailwayStation rs : rsList) {
            if (rs.getId() == id) {
                return rs;
            }
        }

        return null;
    }

    public List<RailwayStation> getList() {
        return rsList;
    }

    public void add(RailwayStation railwayStation) {
        railwayStation.setId(++id);
        rsList.add(railwayStation);

    }

    public void deleteById(Long id) {
        RailwayStation found = findRailwayStationById(id);
        if (found != null) {
            rsList.remove(found);
            id--;
        }

    }

    public void update(RailwayStation railwayStation) {
        RailwayStation found = findRailwayStationById(railwayStation.getId());
        if (found != null) {
            rsList.remove(found);
            rsList.add(railwayStation);
        }
    }

    public void deleteAll() {
        rsList.clear();
        id = 0L;
    }
}
