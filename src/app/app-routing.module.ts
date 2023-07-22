import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { UpdateContactComponent } from './component/update-contact/update-contact.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';

const routes: Routes = [
  {path: 'student-list', component:ContactListComponent},
  {path: 'add-student', component:AddStudentComponent},
  {path: 'update-student/:id', component:UpdateContactComponent},
  {path: 'login-signup', component: LoginSignupComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
