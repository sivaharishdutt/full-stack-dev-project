package com.example.erp.service;

import com.example.erp.bean.Students;
import com.example.erp.dao.StudentDao;
import com.example.erp.dao.implementation.StudentDaoImpl;

import java.util.List;

public class StudentService {
    static StudentDao studentDao = new StudentDaoImpl();
    public boolean verifyLogin(Students student){

        return studentDao.loginVerify(student);
    }

    public boolean registerStudent(Students student){

        return studentDao.registerStudent(student);
    }
    public static List<Students> getStudents(){

        return studentDao.getStudents();
    }

}