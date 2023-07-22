import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { AddStudentComponent } from './component/add-student/add-student.component';

const routes: Routes = [
  {path: 'student-list', component:ContactListComponent},
  {path: 'add-student', component:AddStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
