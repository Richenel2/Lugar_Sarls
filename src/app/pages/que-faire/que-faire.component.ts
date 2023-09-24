import { Component } from '@angular/core';
import { Question } from '../Model/question';
import { QuestionDetailsService } from 'src/app/services/question-details.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { MetierService } from 'src/app/services/metier.service';

@Component({
  selector: 'app-que-faire',
  templateUrl: './que-faire.component.html',
  styleUrls: ['./que-faire.component.scss'],
})
export class QueFaireComponent {
  constructor(
    private service: QuestionDetailsService,
    private router: Router,
    private serviceS: MetierService
  ) {}

  questionsData!: Question[];

  formData = [{}];

  ngOnInit() {
    this.formData.pop();
    this.service
      .getQuestion()
      .pipe(map((res: any) => (res.results as Question[]) || []))
      .subscribe((res) => {
        this.questionsData = res;
      });
  }

  onAnswerChecked(eventData: { id: number; response: number }) {
    this.formData.push({
      id: eventData.id,
      reponse: parseInt(eventData.response.toString()),
    });
  }
  submit() {
    console.log(this.formData);
    this.service.sendAnswers(this.formData).subscribe((res) => {
      this.serviceS.sendMetier(res);
      console.log(res);
      this.router.navigate(['/career']);
    });
  }
}
