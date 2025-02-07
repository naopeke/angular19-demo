import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CommonModule } from '@angular/common'; //DateのPipeのため

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  courses = [...COURSES];

  title = COURSES[0].description;

  startDate = new Date(2000, 0, 1);

  course = COURSES[0];

  onCourseSelected(course:Course){
    console.log("App component - click event bubbled ...", course);
  }
}
