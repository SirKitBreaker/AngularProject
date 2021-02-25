import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import {Course} from '../course';

import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-find-student',
  templateUrl: './find-student.component.html',
  styleUrls: ['./find-student.component.css']
})
export class FindStudentComponent implements OnInit {
  service:StudentserviceService;
  foundStudent:Student=new Student(0,'','',-1);
  foundFlag: boolean = false;
  courses:Course[] = [];
  
  constructor(service:StudentserviceService) { 
    this.service=service;
  }
  search(data: any) {
    this.foundStudent.age=0;
    this.foundFlag = false; 
    this.courses=[];
    this.foundStudent.id=data.sid;
    this.service.getStudent(this.foundStudent, this.courses);
    //console.log(this.foundStudent);
    //console.log(this.courses);
    //console.log('age: '+ this.foundStudent.age);
    this.foundFlag = true;        
  }
  ngOnInit(): void {
  }

}
