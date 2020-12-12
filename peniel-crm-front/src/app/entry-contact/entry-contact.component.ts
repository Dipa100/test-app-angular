import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactService } from '../_services/contact.service';

@Component({
  selector: 'app-entry-contact',
  templateUrl: './entry-contact.component.html',
  styleUrls: ['./entry-contact.component.css']
})
export class EntryContactComponent implements OnInit {

  public contacts: Contact[];
  HighlightRow : Number;  
  Employee : any;  
  ClickedRow:any;  

  constructor(private contactService:ContactService, 
              private router: Router) {
    this.ClickedRow = function(index,contactId){  
      this.HighlightRow = index;  
      this.router.navigate(['/displayContactDetails', contactId]);
    } 
  }

  ngOnInit() {
    this.contactService.allContacts().subscribe(
      data => {
        this.contacts = data;
      },
      err => {
        
      }
    );

  }

}