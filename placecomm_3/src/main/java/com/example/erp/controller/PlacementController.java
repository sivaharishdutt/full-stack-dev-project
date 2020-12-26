package com.example.erp.controller;

import com.example.erp.bean.Placement;
import com.example.erp.bean.Students;
import com.example.erp.service.PlacementService;
import com.example.erp.service.StudentService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("placements")
public class PlacementController {
    @GET
    @Path("/get")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getCompanies() {
        List<Placement> companies ;
        companies = PlacementService.getCompanies();
        return Response.ok().entity(companies).build();
    }

//    @POST
//    @Path("/register")
//    @Produces(MediaType.TEXT_PLAIN)
//    @Consumes(MediaType.APPLICATION_JSON)
//    public Response registerStudent(Students student)  {
//        System.out.println(student.getFirst_name());
//        System.out.println(student.getEmail());
//        if(PlacementService.setCompanies(student)){
//            return Response.ok().build();
//        }
//        else{
//            return Response.status(203).build();
//        }
//    }



}
