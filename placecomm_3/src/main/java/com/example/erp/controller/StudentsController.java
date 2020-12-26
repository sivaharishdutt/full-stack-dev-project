package com.example.erp.controller;


import com.example.erp.bean.Students;
import com.example.erp.service.StudentService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.net.URISyntaxException;
import java.util.List;


@Path("students")
public class StudentsController {
    StudentService studentService = new StudentService();

    @POST
    @Path("/register")
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response registerStudent(Students student)  {
        System.out.println(student.getFirst_name());
        System.out.println(student.getEmail());
        if(studentService.registerStudent(student)){
            return Response.ok().build();
        }
        else{
            return Response.status(203).build();
        }
    }
    @POST
    @Path("/login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response loginStudent(Students student)  {
        System.out.println(student.getEmail());
        System.out.println(student.getPassword());

        if(studentService.verifyLogin(student)){
            return Response.ok().build();
        }

        return  Response.status(404).build();

    }

    @GET
    @Path("/get")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getStudents() {
        List<Students> students;
        students = StudentService.getStudents();
        return Response.ok().entity(students).build();
    }

}