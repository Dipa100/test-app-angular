package com.peniel.models;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

@Data
@Entity (name="contact")
@Table(	name = "contacts",
        uniqueConstraints= @UniqueConstraint(columnNames={"nom", "prenom"}))

public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 30)
    private String nom;

    @NotBlank
    @Size(max = 20)
    private String typeContact;

    @NotBlank
    @Size(max = 50)
    private String prenom;


    @NotBlank
    @Size(max = 50)
    @Email
    private String emailPerso;

    @NotBlank
    @Size(max = 120)
    private String siteInternet;

    @NotBlank
    @Size(max = 50)
    private String debutAbonnement;

    @NotBlank
    @Size(max = 50)
    private String renAbonnement;

    @NotBlank
    @Size(max = 50)
    private String assigne;

    @NotBlank
    @Size(max = 50)
    private String source;

    @NotBlank
    @Size(max = 50)
    private String typeAbonnement;

    @NotBlank
    @Size(max = 300)
    private String notes;

    @NotBlank
    @Size(max = 50)
    private String siren;

    @NotBlank
    @Size(max = 50)
    private String raisonSociale;

    @NotBlank
    @Size(max = 50)
    private String activitePrincipale;

    @NotBlank
    @Size(max = 50)
    private String naissance;

    @NotBlank
    @Size(max = 50)
    private String civilite;

    @NotBlank
    @Size(max = 50)
    private String statut;

    @NotBlank
    @Size(max = 50)
    private String abonne;

    @NotBlank
    @Size(max = 50)
    private String situationFamiliale;

    @NotBlank
    @Size(max = 50)
    private String fonction;

    @NotBlank
    @Size(max = 20)
    private String telephoneFixe;

    @NotBlank
    @Size(max = 50)
    private String adresseProZoneGeoSuite;


    @NotBlank
    @Size(max = 50)
    private String adressePersoZoneGeoSuite;


    @NotBlank
    @Size(max = 50)
    private String adresseProZoneGeo;


    @NotBlank
    @Size(max = 50)
    private String adressePersoZoneGeo;

    @NotBlank
    @Size(max = 50)
    private String adresseProPays;


    @NotBlank
    @Size(max = 50)
    private String adressePersoPays;

    @NotBlank
    @Size(max = 50)
    private String adresseProVille;

    @NotBlank
    @Size(max = 50)
    private String adressePersoVille;

    @NotBlank
    @Size(max = 15)
    private String adresseProCodePostal;

    @NotBlank
    @Size(max = 15)
    private String adressePersoCodePostal;

    @NotBlank
    @Size(max = 50)
    private String adressePro;

    @NotBlank
    @Size(max = 50)
    private String adressePerso;

    @NotBlank
    @Size(max = 50)
    private String activite;

    @NotBlank
    @Size(max = 50)
    private String structure;

    @NotBlank
    @Size(max = 20)
    private String emailPro;

    @NotBlank
    @Size(max = 20)
    private String telephoneMobile2;

    @NotBlank
    @Size(max = 20)
    private String telephoneMobile1;

    @NotBlank
    @Size(max = 20)
    private String contactSecondaireTelephoneMobile;

    @NotBlank
    @Size(max = 20)
    private String contactPrincipalTelephoneMobile;

    @NotBlank
    @Size(max = 20)
    private String contactSecondaireNom;

    @NotBlank
    @Size(max = 20)
    private String contactPrincipalNom;

    @NotBlank
    @Size(max = 20)
    private String tailleEntreprise;

    @NotBlank
    @Size(max = 20)
    private String contactPrincipalEmail;

    @NotBlank
    @Size(max = 20)
    private String contactSecondaireEmail;

    @NotBlank
    @Size(max = 20)
    private String nationalite;


    @NotBlank
    @OneToMany(
            cascade = CascadeType.ALL,
             fetch = FetchType.LAZY,
            orphanRemoval = false
    )
    private Set<Beneficiaire> beneficiaires;



}
