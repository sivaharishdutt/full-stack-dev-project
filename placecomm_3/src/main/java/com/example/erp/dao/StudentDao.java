package com.example.erp.dao;

import com.example.erp.bean.Students;

import java.util.List;

public interface StudentDao {
    boolean registerStudent(Students student);
    boolean loginVerify(Students student);
    List<Students> getStudents();
}
