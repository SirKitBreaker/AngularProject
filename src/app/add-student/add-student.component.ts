import { Component, OnInit } from '@angular/core';

import { StudentserviceService } from '../studentservice.service';
import{Student} from '../student';
import { Course } from '../course';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  createdStudent:Student=new Student(0,'','',18);
  //returnedStudent:Student=new Student(0,'','',18);
  createdFlag:boolean=false;
  service:StudentserviceService;
  constructor(service:StudentserviceService) { 
    this.service=service;
  }

  ngOnInit(): void {
  }
  add(data:any){
    this.createdStudent=new Student(data.id,data.firstName,data.lastName,data.age);
    //let co:Course = new Course(0,'Java',400); 
    //this.createdStudent.courses.push(co); // include after UI is created
    this.service.addStudent(this.createdStudent);
    this.createdFlag=true;
  }

}
