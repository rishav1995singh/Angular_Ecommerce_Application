import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material-UI.module';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseContentComponent } from './components/course-content/course-content.component';







@NgModule({
  declarations: [


    CoursesComponent,
        CourseComponent,
        CourseContentComponent
  ],
  imports: [
MaterialModule,
BrowserModule,
FlexLayoutModule,
ReactiveFormsModule,
FormsModule



  ],
  providers: [],
  bootstrap: []
})
export class CoursesModule { }
