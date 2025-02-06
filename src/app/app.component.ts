import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  data = {
    title:'angular19-demo'
  };

  onLogoClicked(){
    alert('Hello World');
  }

  onKeyUp(newTitle: string){
    this.data.title = newTitle
  }
}
