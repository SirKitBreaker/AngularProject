import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Student} from './student';
import {Course} from './course';


@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  http:HttpClient;
  students:Student[]=[]; 
  student:Student=new Student(0,'','',18);
  constructor(http:HttpClient) {
    this.http = http;
   }
   getStudent(stud:Student, courses:Course[]){
     console.log('id:' + stud.id);
     this.http.get('http://localhost:8585/students/by/id/'+stud.id).subscribe(
       data=>{
         console.log(data);
         let dataVal:any = Object.values(data);
         stud.id=dataVal[0];
         stud.firstName=dataVal[1];
         stud.lastName=dataVal[2];
         stud.age=dataVal[3];
         let coursesFound:any = Object.values(dataVal[4]);
         console.log('---array courses--')
         for(let s of coursesFound){
           console.log(s);
           let course:Course = new Course(s.id, s.name,s.fee);
           courses.push(course);
         }
         console.log('----** ' );
         console.log(stud);
       },
       error=>{console.log('error'); stud.age=0;}
     );
      
   }
   fetchStudents(){
    this.students=[];
     this.http.get('http://localhost:8585/students/').subscribe(
       data=>{
          //console.log('data: '+data);         
           this.convert(data);         
       }
     );
   }
   sendPost(stud:Student){
    const headers = { 'content-type': 'application/json'};
    //let co:Course = new Course(0,'Java',400);
    //stud.courses.push(co);
    const body=JSON.stringify(stud);  
    console.log('---------');
    console.log(body);
     this.http.post('http://localhost:8585/students/add',body,{'headers':headers}).subscribe(
       data=>{
         let dataVal = Object.values(data);
         stud.id=dataVal[0];
       }
     );
   }
  getStudents():Student[]{
      return this.students;
   }
   convert(data:any){
    for(let s of data){
        let stud = new Student(s.id,s.firstName,s.lastName,s.age);
        //console.log('all----');
        if(s.courses.length>0){
           for(let cv of s.courses){
            //console.log('~'+ cv.id);
            stud.courseList.push(cv.name);
           }
        }
        this.students.push(stud);
     }
   }
   addStudent(stud:Student){
     this.students.push(stud); 
     this.sendPost(stud);
   }
}
