package com.example.erp.bean;

import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table
public class Placement implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer company_id;
    private String company_name;
    private int cgpa;
    private String CTC;

    private int intake ;
//    @OneToMany (mappedBy = "Placement")
//    private List<Students> stud;
//
//    public List<Students> getStud() {
//        return stud;
//    }
//
//    public void setStud(List<Students> stud) {
//        this.stud = stud;
//    }

    public int getIntake() {
        return intake;
    }

    public void setIntake(int intake) {
        this.intake = intake;
    }

    public Placement(){

    }

    public Integer getCompany_id() {
        return company_id;
    }

    public void setCompany_id(Integer company_id) {
        this.company_id = company_id;
    }

    public String getCompany_name() {
        return company_name;
    }

    public void setCompany_name(String company_name) {
        this.company_name = company_name;
    }

    public int getCgpa() {
        return cgpa;
    }

    public void setCgpa(int cgpa) {
        this.cgpa = cgpa;
    }

    public String getCTC() {
        return CTC;
    }

    public void setCTC(String CTC) {
        this.CTC = CTC;
    }

    public Placement(Integer company_id, String company_name, int cgpa, String CTC, int intake) {
        this.company_id = company_id;
        this.company_name = company_name;
        this.cgpa = cgpa;
        this.CTC = CTC;
        this.intake = intake;
    }
//    @JsonbTransient
//    public Placement getStudentById() {
//        return getStudentById() ;
//    }
//
//    public void setStudentById(List<Students> stud) {
//        this.stud = stud;
//    }

}

