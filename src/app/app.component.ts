import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from './studentservice.service';
import{Student} from './student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'StudentApp';
  router:Router;
  service:StudentserviceService;
  constructor(service:StudentserviceService,router:Router){
    this.service = service;
    this.router = router;
  }
  ngOnInit(): void {
    this.router.navigate(['app-student-list']);
  }
}
