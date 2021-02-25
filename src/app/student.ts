import { Course } from "./course";

export class Student{
    id:number;
    firstName:string;
    lastName:string;
    age:number;
    courseList:string[]=[];
    courses:Course[]=[];

    constructor(id:number,firstName:string,lastName:string, age:number){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    
}