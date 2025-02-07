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
    index!: number;

    @Output('courseSelected')
    courseEmitter = new EventEmitter<Course>();
    
    onCourseViewed(){
      console.log("card component - button clicked ...", this.course);
      this.courseEmitter.emit(this.course);
    }

    cardClasses(){
      if (this.course?.category === 'BEGINNER'){
        return ['beginner'];
      }
      return [];
    }
    //三項演算子
    // cardClasses() {
    //   return this.course?.category === 'BEGINNER' ? ['beginner'] : [];
    // }

    // cardClasses(){
    //   return {
    //     'beginner': this.course?.category === 'BEGINNER', 
    //     'course-card': true}
    // }
    

    // cardStyles(){
    //   return {'text-decoration': 'underline'}
    // }

    cardStyles(){
      return {
        'background-image': 'url(' + this.course?.iconUrl + ')'
      }
    }
    
}
