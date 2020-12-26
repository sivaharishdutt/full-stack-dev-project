package com.example.erp.dao.implementation;

import com.example.erp.bean.Placement;
import com.example.erp.bean.Students;
import com.example.erp.dao.PlacementDao;
import com.example.erp.dao.StudentDao;
import com.example.erp.utils.SessionUtil;
import org.hibernate.HibernateException;
import org.hibernate.Session;

import java.util.ArrayList;
import java.util.List;

public class PlacementDaoImpl implements PlacementDao {
    @Override
    public List<Placement> getCompanies() {
        Session session = SessionUtil.getSession();
        List<Placement> companies = new ArrayList<>();
        try {
            for (final Object company : session.createQuery("from Placement ").list()) {
                companies.add((Placement) company);
            }
        } catch (HibernateException exception) {
            System.out.print(exception.getLocalizedMessage());
        }
        return companies;
    }

}
