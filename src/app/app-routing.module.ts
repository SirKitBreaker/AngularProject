import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { FindStudentComponent } from './find-student/find-student.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path:'app-add-student',
    component:AddStudentComponent
  },
  {
    path:'app-student-list',
    component:StudentListComponent
  },
  {
    path:'app-find-student',
    component:FindStudentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
