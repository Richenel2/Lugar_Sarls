import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../Model/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() questions!: Question;
  @Output() answerChanged = new EventEmitter<{id: number, response:number}>();

  onChange(e:any){
 
    this.answerChanged.emit({id: this.questions.id, response:e.target.value})
  }

}
