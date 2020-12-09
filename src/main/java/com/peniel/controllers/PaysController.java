package com.peniel.controllers;


import com.peniel.models.Contact;
import com.peniel.models.Pays;
import com.peniel.repository.PaysRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/pays")
@Slf4j
public class PaysController {

    @Autowired
    private PaysRepository paysRepository;

    @GetMapping(value = "/all")
    public ResponseEntity<Object> allPays() {
        log.info("Start method [allPays]");
        List<Pays> pays =paysRepository.findAll();
        log.info("End method [allPays]");
        return new ResponseEntity<>(pays.stream().limit(100), HttpStatus.OK);
    }


}
