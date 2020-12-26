package com.example.erp.bean;
import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "Students")
public class Students implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer student_id;


    private String first_name;
    private String last_name;
    @Column(nullable = false, unique = true)
    private String email;
    private int cgpa;

    private int domain;

    private String description;

//    @ManyToOne
//    private Placement placement;

//    public Placement getPlacement() {
//        return placement;
//    }
//
//    public void setPlacement(Placement placement) {
//        this.placement = placement;
//    }



    private String password;
    @Column(nullable = false, unique = true)
    private String rollno;

    public Students(){

    }

    public void setStudent_id(Integer student_id) {
        this.student_id = student_id;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setCgpa(int cgpa) {
        this.cgpa = cgpa;
    }

    public void setDomain(int domain) {
        this.domain = domain;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setRollno(String rollno) {
        this.rollno = rollno;
    }

    public Integer getStudent_id() {
        return student_id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public String getEmail() {
        return email;
    }

    public int getCgpa() {
        return cgpa;
    }

    public int getDomain() {
        return domain;
    }

    public String getDescription() {
        return description;
    }

    public String getPassword() {
        return password;
    }

    public String getRollno() {
        return rollno;
    }

    public Students(Integer student_id, String first_name, String last_name, String email, int cgpa, int domain, String description, String password, String rollno) {

        this.student_id = student_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.cgpa = cgpa;
        this.domain = domain;
        this.description = description;
        this.password = password;
        this.rollno = rollno;
    }
//    @JsonbTransient
//    public Placement getCompanies () {
//        return getCompanies() ;
//    }
//
//    public void setCompanies(List<Placement> placement) {
//        this.placement = (Placement) placement;
//    }

}
