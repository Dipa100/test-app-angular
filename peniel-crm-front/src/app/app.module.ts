import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ProspectsComponent } from './prospects/prospects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'; 
import { MatCardModule, MatCheckboxModule, MatDatepickerModule, MatIconModule, MatMenuModule, MatNativeDateModule, MatOptionModule, MatRadioModule, MatSelectModule, MatTableModule, MatTabsModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { AddBeneficiaireDialogComponent } from './contact/AddBeneficiaireDialogComponent';
import { EntryContactComponent } from './entry-contact/entry-contact.component';
import { AfficherContactComponent } from './afficher-contact/afficher-contact.component';
import { DisplayContactDetailsComponent } from './display-contact-details/display-contact-details.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    ContactComponent,
    HeaderComponent,
    MenuComponent,
    ProspectsComponent,
    AddBeneficiaireDialogComponent,
    EntryContactComponent,
    AfficherContactComponent,
    DisplayContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatMenuModule,
    FileUploadModule,
    MatCheckboxModule
  ],
  entryComponents:[AddBeneficiaireDialogComponent],
  providers: [authInterceptorProviders,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
