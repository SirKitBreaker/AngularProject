import { Component, OnInit } from '@angular/core';

import { StudentserviceService } from '../studentservice.service';
import{Student} from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  service:StudentserviceService;
  column:string="id";
  order: boolean = true;

  constructor(service:StudentserviceService) { 
    this.service=service;
  }
    students:Student[]=[];
    sort(column: string) {
      //console.log('col: '+column);
    if (this.column == column) { // if same column clicked again
      this.order = !this.order;   // flip asc/desc
    } else {
      this.order = true;
      this.column = column; // store new column clicked
    }
  }
  
  ngOnInit(): void {
    this.service.fetchStudents();
    this.students=this.service.getStudents();
  }

}
