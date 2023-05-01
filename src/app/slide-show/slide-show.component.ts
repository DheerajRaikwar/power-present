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
  

  constructor(){
    this.slides = [
      new Slide("Bhopal","bhopal is city of lakes it's cool place"),
      new Slide("Indore","Indore is nice city but expensive"),
      new Slide("Hyderabad","Hyderabad is the bigger city than bhopal and indore"),
    ]
  }

  onSelectSlide(event:Slide){
    this.selectedSlide = event;
  }

  // deleteSelectedSlide(event:Slide){
  //   const index = this.slides.indexOf(event);
  //   console.log(index);
  //   console.log(event);
  //   this.slides.splice(index,1);
  // }

}
