using System;
using Microsoft.AspNetCore.Mvc;
using Advantages.api.Models;
using Advantages.api.services;

namespace Advantages.api.controllers;
[Controller]
[Route("api/[controller]")]
public class VDController:Controller{

    private readonly MongoDBService _mongoDBService;

    public VDController(MongoDBService mongoDBService){
        _mongoDBService = mongoDBService;

    }

    [HttpGet]
    public async Task<List<VD>> Get(){
        return await _mongoDBService.GetAsync();
    }




}