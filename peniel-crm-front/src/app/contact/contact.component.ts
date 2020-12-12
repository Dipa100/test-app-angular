import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatRadioChange } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { Contact } from '../models/contact.model';
import { ContactService } from '../_services/contact.service';
import { PaysService } from '../_services/pays.service';
import { AddBeneficiaireDialogComponent } from './AddBeneficiaireDialogComponent';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public form: FormGroup;
  public contactList: FormArray;
  public contact: Contact;
  public uploader: FileUploader;
  public hasDragOver = false;
  public typeContact: string;
  public isParticulier: boolean = true;


  @Input()
  private editmode = false;

  @Input()
  private url = '';

  @Output()
  private urlChange = new EventEmitter();


  public civilites = [
    { value: 'Mr', viewValue: 'MR' },
    { value: 'Mme', viewValue: 'MME' },
    { value: 'Mlle', viewValue: 'MLLE' }
  ];
  allPays: import("/Users/Sacko/Documents/Larissa/peniellarissa/peniel-crm-front/src/app/models/pays.model").Pays[];

  get contactFormGroup() {
    return this.form.get('contacts') as FormArray;
  }

  constructor(private fb: FormBuilder,
    public dialog: MatDialog,
    public contactService: ContactService,
    public paysService: PaysService,
    private route: ActivatedRoute,
    private router: Router) {

    this.contact = new Contact();

    this.route.params.subscribe(params => {
      console.log(params);
      if (params['contactId']) {
        contactService.findById(params['contactId']).subscribe(
          data => {
            this.contact = data;
          },
          err => {

          }
        );
      }
    });

    this.uploader = new FileUploader({
      url: 'http://localhost:4200/upload',
      disableMultipart: false,
      autoUpload: true
    });

    this.uploader.response.subscribe(res => {
      // Upload returns a JSON with the image ID
      this.url = 'http://localhost:4200/get/' + JSON.parse(res).id;
      this.urlChange.emit(this.url);
    });
  }

  public fileOver(e: any): void {
    this.hasDragOver = e;
  }

  ngOnInit() {
    this.form = this.fb.group({
      typeContact: [null, Validators.compose([Validators.required])],
      nom: [null, Validators.compose([Validators.required])],
      prenom: [null, Validators.compose([Validators.required])],
      assigne: [null, Validators.compose([Validators.required])],
      telephoneMobile1: [null, Validators.compose([Validators.required])],
      telephoneMobile2: [null, Validators.compose([Validators.required])],
      telephoneFixe: [null, Validators.compose([Validators.required])],
      emailPerso: [null, Validators.compose([Validators.required, Validators.email])],
      emailPro: [null, Validators.compose([Validators.required, Validators.email])],
      structure: [null, Validators.compose([Validators.required])],
      activite: [null, Validators.compose([Validators.required])],
      adressePerso: [null, Validators.compose([Validators.required])],
      adressePro: [null, Validators.compose([Validators.required])],
      adressePersoCodePostal: [null, Validators.compose([Validators.required])],
      adresseProCodePostal: [null, Validators.compose([Validators.required])],
      adressePersoVille: [null, Validators.compose([Validators.required])],
      adresseProVille: [null, Validators.compose([Validators.required])],
      adressePersoPays: [null, Validators.compose([Validators.required])],
      adresseProPays: [null, Validators.compose([Validators.required])],
      adressePersoZoneGeo: [null, Validators.compose([Validators.required])],
      adresseProZoneGeo: [null, Validators.compose([Validators.required])],
      adressePersoZoneGeoSuite: [null, Validators.compose([Validators.required])],
      adresseProZoneGeoSuite: [null, Validators.compose([Validators.required])],
      siteInternet: [null, Validators.compose([Validators.required])],
      debutAbonnement: [null, Validators.compose([Validators.required])],
      renAbonnement: [null, Validators.compose([Validators.required])],
      source: [null, Validators.compose([Validators.required])],
      typeAbonnement: [null, Validators.compose([Validators.required])],
      notes: [null, Validators.compose([Validators.required])],
      siren: [null, Validators.compose([Validators.required])],
      raisonSociale: [null, Validators.compose([Validators.required])],
      activitePrincipale: [null, Validators.compose([Validators.required])],
      naissance: [null, Validators.compose([Validators.required])],
      nationalite: [null, Validators.compose([Validators.required])],
      civilite: [null, Validators.compose([Validators.required])],
      statut: [null, Validators.compose([Validators.required])],
      fonction: [null, Validators.compose([Validators.required])],
      abonne: [null, Validators.compose([Validators.required])],
      situationFamiliale: [null, Validators.compose([Validators.required])],
      typeHebergementPrefere: [null, Validators.compose([Validators.required])],
      typeRestaurantPrefere: [null, Validators.compose([Validators.required])],
      tailleEntreprise: [null, Validators.compose([Validators.required])],
      contactPrincipalNom: [null, Validators.compose([Validators.required])],
      contactSecondaireNom: [null, Validators.compose([Validators.required])],
      contactPrincipalTelephoneMobile: [null, Validators.compose([Validators.required])],
      contactSecondaireTelephoneMobile: [null, Validators.compose([Validators.required])],
      contactPrincipalEmail: [null, Validators.compose([Validators.required, Validators.email])],
      contactSecondaireEmail: [null, Validators.compose([Validators.required, Validators.email])],
      contacts: this.fb.array([this.createContact()])
    });

    // set contactlist to this field
    this.contactList = this.form.get('contacts') as FormArray;

    this.paysService.allPays().subscribe(
      data => {
        this.allPays = data;
      },
      err => {
        
      }
    );
  }

  // contact formgroup
  createContact(): FormGroup {
    return this.fb.group({
      //type: ['email', Validators.compose([Validators.required])], // i.e Email, Phone
      name: [null, Validators.compose([Validators.required])], // i.e. Home, Office
      prenom: [null, Validators.compose([Validators.required])],
      telephone: [null, Validators.compose([Validators.required, Validators.required])],
      email: [null, Validators.compose([Validators.required, Validators.email])]
    });
  }


  // add a contact form group
  addBeneficiare() {
    this.contactList.push(this.createContact());
  }

  // remove contact from group
  removeContact(index) {
    // this.contactList = this.form.get('contacts') as FormArray;
    this.contactList.removeAt(index);
  }

  // triggered to change validation of value field type
  changedFieldType(index) {
    let validators = null;

    if (this.getContactsFormGroup(index).controls['type'].value === 'email') {
      validators = Validators.compose([Validators.required, Validators.email]);
    } else {
      validators = Validators.compose([
        Validators.required,
        Validators.pattern(new RegExp('^\\+[0-9]?()[0-9](\\d[0-9]{9})$')) // pattern for validating international phone number
      ]);
    }

    this.getContactsFormGroup(index).controls['value'].setValidators(
      validators
    );

    this.getContactsFormGroup(index).controls['value'].updateValueAndValidity();
  }

  // get the formgroup under contacts form array
  getContactsFormGroup(index): FormGroup {
    // this.contactList = this.form.get('contacts') as FormArray;
    const formGroup = this.contactList.controls[index] as FormGroup;
    return formGroup;
  }

  // method triggered when form is submitted
  submit() {
    console.log(this.form.value);
  }

  openAddBeneficiareDialog() {
    //const dialogRef = this.dialog.open(AddBeneficiaireDialogComponent);

    const dialogRef = this.dialog.open(AddBeneficiaireDialogComponent, {
      //width: '330px',
      //height: '400px',
      data: {
        dataKey: this.contact
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("result");
      console.log(result);
    });
  }

  addBeneficiaires() {

  }


  sauvegarderContact() {
    console.log("display contact....");
    this.form.value.id = this.contact.id;
    this.contactService.register(this.form.value).subscribe(
      data => {
        this.router.navigate(['/m-contacts']);
      },
      err => {

      }
    );
    return this.form.value;
  }

  cancel() {
    this.router.navigate(['/m-contacts']);
  }

  typeContactChoosed($event: MatRadioChange) {
    console.log($event.source.name, $event.value);

    if ($event.value === 'PARTICULIER') {
      this.isParticulier = true;
    }
    else if ($event.value === 'SOCIETE') {
      this.isParticulier = false;
    }

    this.contact = new Contact();
  }

}


