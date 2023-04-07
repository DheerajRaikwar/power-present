import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Slide } from '../slide-model/slide-model';
import { SlideShowComponent } from '../slide-show.component';

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.css']
})
export class SlideListComponent {
 
  @Input() slides:Slide[];
  @Output() selectedSlide : EventEmitter<Slide> = new EventEmitter();
  

  onSelectSlide(slide:Slide){
    this.selectedSlide.emit(slide);
  }


}
