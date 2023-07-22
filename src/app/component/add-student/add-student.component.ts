import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { contact } from '../contactmodel';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit{
  contactform: FormGroup | any;
  constructor(private formbuilder: FormBuilder, private router:Router, private api:ApiService){

  }

  ngOnInit(): void {
    this.contactform=this.formbuilder.group({
      fullname:['', Validators.required],
      email:['', Validators.required],
      matricnumber:['', Validators.required]
    })
  }

  submitContact(data:contact){
    // console.log(this.contactform.value);
    this.api.addcontact(data).subscribe((res=>{
    this.contactform.reset();
    this.router.navigate(["/student-list"]);
    }))

  }

}
