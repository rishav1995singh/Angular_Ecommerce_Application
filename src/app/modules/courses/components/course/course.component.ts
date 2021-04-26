import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, mergeMap } from 'rxjs/operators';
import { CategorieService } from 'src/app/modules/common/services/categorie.service';
import { Course } from '../../models/course.model';

import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  categories:any[];
  regiForm:FormGroup;
  course:Course;
  constructor(private fb:FormBuilder, private serviceCourse:CourseService,
     public dialogRef: MatDialogRef<CourseComponent>,
     private serviceCategorie:CategorieService,
     @Inject(MAT_DIALOG_DATA) public idCourse
    ) {

    this.regiForm = this.fb.group({
      'Title' : [ null,Validators.required],
      'Description' : [null, Validators.required],
      'Price' : [ null,Validators.required],
      'UrlImage' : [ null,Validators.required],
      'Categorie':[null,Validators.required]
    });
   }

  ngOnInit() {

    if(!this.idCourse)
    {

      this.serviceCategorie.getAllCategories()
                           .subscribe(categories=>{
                             this.categories=categories;
                             this.initalizeCourse(null);

                            });

    }
    else{

      this.serviceCategorie.getAllCategories()
      .pipe(
        mergeMap(categories=>this.serviceCourse.getCoursebyId(this.idCourse.id).pipe(
         map(course=>{
           return ([categories,course])
         })
        ))).subscribe(([categories,course])=>{
            this.categories=categories as any[];
            this.course=course as Course;
            this.initalizeCourse(course);
        })

    }




  }

  initalizeCourse(course)
  {
    this.regiForm = this.fb.group({
      'Title' : [ course?course.title:null,Validators.required],
      'Description' : [course?course.description:null, Validators.required],
      'Price' : [ course?course.price:null,Validators.required],
      'UrlImage' : [ course?course.urlImage:null,Validators.required],
      'Categorie':[ course?course.categorie:null,Validators.required]
    });

  }



  onSubmit(form){

   console.log(form);
   if(this.regiForm.valid){
    let course:Course={
      id:this.idCourse?this.idCourse.id:'',
      title: form.Title,
      description:form.Description,
      categorie:form.Categorie,
      price:form.UrlImage,
      urlImage:form.Price,

    }
    if(!this.idCourse)
    {
   this.serviceCourse.AddCourse(course).then(()=>{
     this.dialogRef.close();
   });
   }
   else
   {
     this.serviceCourse.updateCourse(course).then(()=>{
       this.dialogRef.close();
     });
   }

   }
  }






}
