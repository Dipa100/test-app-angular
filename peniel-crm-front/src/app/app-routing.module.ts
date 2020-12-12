import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ContactComponent } from './contact/contact.component';
import { ProspectsComponent } from './prospects/prospects.component';
import { EntryContactComponent } from './entry-contact/entry-contact.component';
import { DisplayContactDetailsComponent } from './display-contact-details/display-contact-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'contact/update/:contactId', component: ContactComponent},
  { path: 'm-contacts', component: EntryContactComponent},
  { path: 'displayContactDetails/:contactId', component: DisplayContactDetailsComponent},
  { path: 'prospects', component: ProspectsComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
