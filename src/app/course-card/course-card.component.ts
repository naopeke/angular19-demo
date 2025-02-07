import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

    @Input()
    course: Course | undefined = undefined;

    @Input({required: true})
    index!: number; // ! をつけることで、「このプロパティは Angular によって確実にセットされる」と TypeScript に伝えることができます。index: number = 0;にしても可

    @Output('courseSelected')
    courseEmitter = new EventEmitter<Course>();
    
    onCourseViewed(){
      console.log("card component - button clicked ...", this.course);
      this.courseEmitter.emit(this.course);
    }
}
