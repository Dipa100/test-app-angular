package com.peniel.controllers;


import com.peniel.exception.FunctionalException;
import com.peniel.models.Contact;
import com.peniel.repository.ContactRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/contact")
@Slf4j
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping("/create")
    public ResponseEntity<?> createContact(@Valid @RequestBody Contact contact) {

        log.info("Start method [createContact]");
        Contact contactSaved = contactRepository.save(contact);
        log.info("End method [createContact]");

        return ResponseEntity.ok(contactSaved);
    }

    @GetMapping(value = "/all")
    public ResponseEntity<Object>  allContacts() {
        log.info("Start method [allContacts]");
        List<Contact> contacts =contactRepository.findAll();
        log.info("End method [allContacts]");
        return new ResponseEntity<>(contacts.stream().limit(100), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Object> getContactById(@PathVariable Long id) throws FunctionalException {
        log.info("Start method [getContactById]");
        log.info("Contact id : {}" , new Object[]{id});
        Contact contact = contactRepository.findById(id).orElseThrow(()->
                new FunctionalException(FunctionalException.NOT_FOUND_ENTYITY));

        log.info("End method [getContactById]");
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

}
