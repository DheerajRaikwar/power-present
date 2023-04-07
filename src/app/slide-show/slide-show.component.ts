import { Component } from '@angular/core';
import { Slide } from './slide-model/slide-model';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent {

  slides:Slide[];
  selectedSlide:Slide;
  deleteSlide : Slide;

  constructor(){
    this.slides = [
      {
        title:"hello",
        description:"my first description",
        pageno:1
      },
      {
        title:"world",
        description:"This is second one",
        pageno:2
      },
      {
        title:"supreme god",
        description:"hare krishna hare krishna",
        pageno:3
      },
    ]
  }

  onSelectSlide(event:Slide){
    this.selectedSlide = event;
  }

  deleteSelectedSlide(event:Slide){
    const index = this.slides.indexOf(event);
    console.log(index);
    console.log(event);
    this.slides.splice(index,1);
  }

}
