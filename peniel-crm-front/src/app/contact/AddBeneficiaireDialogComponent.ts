import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';
import { ContactService } from '../_services/contact.service';



@Component({
  selector: 'add-benificaire',
  templateUrl: 'add-benificaire-dialog.html',
})
export class AddBeneficiaireDialogComponent implements OnInit{
    
    public form: FormGroup;
    

    constructor(private fb: FormBuilder,
      @Inject(MAT_DIALOG_DATA) public data: any,
      public contactService: ContactService) {}


    ngOnInit(): void {
        this.form = this.fb.group({
            nom: [null, Validators.compose([Validators.required])],
            prenom: [null, Validators.compose([Validators.required])],
            assigne: [null, Validators.compose([Validators.required])],
            adresse: [null, Validators.compose([Validators.required])],
            codePostal: [null, Validators.compose([Validators.required])],
            ville: [null, Validators.compose([Validators.required])],
            pays: [null, Validators.compose([Validators.required])],
            telephone: [null, Validators.compose([Validators.required])],
            telephoneFixe: [null, Validators.compose([Validators.required])],
            email: [null, Validators.compose([Validators.required, Validators.email])],
            fax: [null, Validators.compose([Validators.required])],
            siteInternet: [null, Validators.compose([Validators.required])]
          });
    }

    addBeneficiaires(){
      
    }

    submit() {
      console.log("addBeneficiaires");
      this.data.dataKey.beneficiaires.push(this.form.value);

      console.log("this.data.dataKey")
      console.log(this.data.dataKey)

      this.contactService.register(this.data.dataKey).subscribe(
        data => {
          
        },
        err => {
  
        }
      );
      console.log(this.data);
    }
}
