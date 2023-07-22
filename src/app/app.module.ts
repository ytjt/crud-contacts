import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateContactComponent } from './component/update-contact/update-contact.component';
import { FormsModule } from '@angular/forms';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    AddStudentComponent,
    UpdateContactComponent,
    LoginSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
