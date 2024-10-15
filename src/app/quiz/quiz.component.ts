import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  quizData = [
    {
      question: 'Quelle est la température idéale pour cuire un steak à point ?',
      reponses: [
        { reponse: '60°C', isCorrect: false }, 
        { reponse: '70°C', isCorrect: false }, 
        { reponse: '80°C', isCorrect: true }, 
        { reponse: '90°C', isCorrect: false }
      ]
    },
    {
      question: 'Quel ingrédient est essentiel pour faire lever une pâte à pain ?',
      reponses: [
        { reponse: 'Sucre', isCorrect: false },
        { reponse: 'Farine', isCorrect: false },
        { reponse: 'Levure', isCorrect: true },
        { reponse: 'Sel', isCorrect: false }
      ]
    },
    {
      question: 'Quel est le temps moyen de cuisson des pâtes al dente ?',
      reponses: [
        { reponse: '5 minutes', isCorrect: false },
        { reponse: '8 minutes', isCorrect: false },
        { reponse: '12 minutes', isCorrect: true },
        { reponse: '15 minutes', isCorrect: false }
      ]
    },
    {
      question: 'Quelle épice est utilisée dans le curry ?',
      reponses: [
        { reponse: 'Cumin', isCorrect: true },
        { reponse: 'Paprika', isCorrect: false },
        { reponse: 'Gingembre', isCorrect: false },
        { reponse: 'Cannelle', isCorrect: false }
      ]
    },
    {
      question: 'Quel type de couteau est le plus adapté pour couper du poisson cru ?',
      reponses: [
        { reponse: 'Couteau d\'office', isCorrect: false },
        { reponse: 'Couteau à pain', isCorrect: false },
        { reponse: 'Couteau à sashimi', isCorrect: true },
        { reponse: 'Couteau à éplucher', isCorrect: false }
      ]
    },
    {
      question: 'Quel fromage est traditionnellement utilisé dans la recette de la quiche lorraine ?',
      reponses: [
        { reponse: 'Emmental', isCorrect: true },
        { reponse: 'Camembert', isCorrect: false },
        { reponse: 'Parmesan', isCorrect: false },
        { reponse: 'Gruyère', isCorrect: false }
      ]
    },
    {
      question: 'Quel fruit est utilisé pour faire du guacamole ?',
      reponses: [
        { reponse: 'Mangue', isCorrect: false },
        { reponse: 'Avocat', isCorrect: true },
        { reponse: 'Pomme', isCorrect: false },
        { reponse: 'Poire', isCorrect: false }
      ]
    },
    {
      question: 'Quel est l\'ingrédient principal d\'un risotto ?',
      reponses: [
        { reponse: 'Riz basmati', isCorrect: false },
        { reponse: 'Riz arborio', isCorrect: true },
        { reponse: 'Couscous', isCorrect: false },
        { reponse: 'Quinoa', isCorrect: false }
      ]
    },
    {
      question: 'Quelle huile est recommandée pour une cuisson à haute température ?',
      reponses: [
        { reponse: 'Huile de sésame', isCorrect: false },
        { reponse: 'Huile d\'olive extra vierge', isCorrect: false },
        { reponse: 'Huile de tournesol', isCorrect: true },
        { reponse: 'Huile de coco', isCorrect: false }
      ]
    },
    {
      question: 'Quel dessert est composé de blancs d\'œufs battus et de sucre ?',
      reponses: [
        { reponse: 'Tiramisu', isCorrect: false },
        { reponse: 'Mousse au chocolat', isCorrect: false },
        { reponse: 'Meringue', isCorrect: true },
        { reponse: 'Clafoutis', isCorrect: false }
      ]
    }
  ];
  
  selectedReponses: { reponse: string, isCorrect: boolean }[] = [];

  addReponse(index: number, rep: { reponse: string, isCorrect: boolean }) {
    this.selectedReponses[index] = rep;
    console.log(this.selectedReponses);
  }

  calculPoint() {
    let score = 0;
    this.selectedReponses.forEach((rep) => {
      if (rep.isCorrect) {
        score++
      }
    });
    console.log(score)
  }
}
