import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Slide } from '../slide-model/slide-model';
import { SlideShowComponent } from '../slide-show.component';

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.css']
})
export class SlideListComponent {
  @Input() slide:Slide;
  @Output() onSelectSlide = new EventEmitter<Slide>();
  
  slides :Slide[]=[
    new Slide("myView","This is a normal application",1)
  ]

  newSlide(){
    this.slides.push(new Slide("dumy","dumy",0))
  }
  ngOnInit(){

  }
  selectedSlide(slide:Slide){
    this.onSelectSlide.emit(slide)
  }
}
