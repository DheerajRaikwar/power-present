import { Component, Output, Input,EventEmitter } from '@angular/core';
import { Slide } from '../slide-model/slide-model';
 
@Component({
  selector: 'app-slide-presentor',
  templateUrl: './slide-presentor.component.html',
  styleUrls: ['./slide-presentor.component.css']
})
export class SlidePresentorComponent {
 @Input() selectedSlide:Slide;
 @Output() deleteSlide : EventEmitter<Slide> = new EventEmitter();
 
//  onDeleteSlide(slide:Slide){  
//   this.deleteSlide.emit(slide);
// }
}
