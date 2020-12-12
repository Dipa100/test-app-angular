import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactService } from '../_services/contact.service';

@Component({
  selector: 'app-display-contact-details',
  templateUrl: './display-contact-details.component.html',
  styleUrls: ['./display-contact-details.component.css']
})
export class DisplayContactDetailsComponent implements OnInit {

  contact: Contact;
  isParticulier: boolean;

  constructor(private route: ActivatedRoute,
              private contactService:ContactService,
              private router: Router) { 
                
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['contactId']) { 
        contactService.findById(params['contactId']).subscribe(
          data => {
            this.contact = data;
            this.isParticulier = (this.contact["typeContact"]==="PARTICULIER"?true:false);
          },
          err => {
            
          }
        );
      }
    });
  }

  ngOnInit() {

  }

  updateContact(){
    this.router.navigate(['/contact/update', this.contact.id]);
  }

  cancel(){
    this.router.navigate(['/m-contacts']);
  }

}
