package com.example.erp.service;

import com.example.erp.bean.Placement;

import com.example.erp.dao.PlacementDao;
import com.example.erp.dao.implementation.PlacementDaoImpl;

import java.util.List;

public class PlacementService {
    static PlacementDao placementDao = new PlacementDaoImpl() ;
    public static List<Placement> getCompanies(){

        return placementDao.getCompanies();
    }

}
