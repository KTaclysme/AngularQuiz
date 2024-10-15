import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  selectedReponses: { reponse: string, isCorrect: boolean }[] = [];
  finalScore: number = 0;

  constructor(private router: Router) {}

  addReponse(index: number, rep: { reponse: string, isCorrect: boolean }) {
    this.selectedReponses[index] = rep;
    console.log(this.selectedReponses);
  }

  calculPoint(): number {
    let score: number = 0;
    this.selectedReponses.forEach((rep) => {
      if (rep.isCorrect) {
        score++;
      }
    });
    return score;
  }

  submitScore(): number {
    this.finalScore = this.calculPoint();
    return this.finalScore
  }
}
