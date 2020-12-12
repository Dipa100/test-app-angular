import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus : any;

  constructor() { 

    this.menus = {
      contact: true,
      mesTaches: true,
      mesNotifications: true,
      comptabilite: true,
      monCompte: true,
    }
  }

  ngOnInit() {
  }

  public closeAllCollapsedWithout(key: String): any{
    for(var menuKey in this.menus){
      if(menuKey === key){
        this.menus[menuKey] = true;
      }
      else{
        this.menus[menuKey] = false;
      }
    }
    
  }

}
