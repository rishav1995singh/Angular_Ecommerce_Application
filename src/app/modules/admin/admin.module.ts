import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material-UI.module';
import { CourseComponent } from '../courses/components/course/course.component';
import { CoursesModule } from '../courses/courses.module';
import { AdminCoursesComponent } from './components/admin-courses/admin-courses.component';







@NgModule({
  declarations: [


    AdminCoursesComponent
  ],
  imports: [

MaterialModule,
CommonModule,



  ],
  exports: [
    AdminCoursesComponent
  ],
  entryComponents:[CourseComponent],
  providers: [],
  bootstrap: []
})
export class AdminModule { }
