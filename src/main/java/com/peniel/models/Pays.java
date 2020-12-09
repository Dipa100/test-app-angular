package com.peniel.models;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "pays")
@Data
public class Pays {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 30)
    private String code;

    @NotBlank
    @Size(max = 20)
    private String alpha_2;

    @NotBlank
    @Size(max = 50)
    private String alpha_3;


    @NotBlank
    @Size(max = 50)
    private String nom_en_gb;


    @NotBlank
    @Size(max = 50)
    private String nom_fr_fr;
}
