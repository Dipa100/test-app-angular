import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-prospects',
  templateUrl: './prospects.component.html',
  styleUrls: ['./prospects.component.css']
})
export class ProspectsComponent implements OnInit {

  public form: FormGroup;
  public contactList: FormArray;

  // returns all form groups under contacts
  get contactFormGroup() {
    return this.form.get('contacts') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      prenom: [null, Validators.compose([Validators.required])],
      assigne: [null, Validators.compose([Validators.required])],
      adresse: [null, Validators.compose([Validators.required])],
      codePostal: [null, Validators.compose([Validators.required])],
      ville: [null, Validators.compose([Validators.required])],
      pays: [null, Validators.compose([Validators.required])],
      telephone: [null, Validators.compose([Validators.required])],
      telephoneFixe: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      fax: [null, Validators.compose([Validators.required])],
      siteInternet: [null, Validators.compose([Validators.required])],
      contacts: this.fb.array([this.createContact()])
    });

    // set contactlist to this field
    this.contactList = this.form.get('contacts') as FormArray;
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
  addBeneficiare(){
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
}
