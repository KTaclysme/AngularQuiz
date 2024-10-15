import { Component } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  score: number = 0 ;
  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.score = this.quizService.submitScore();
  }
}
