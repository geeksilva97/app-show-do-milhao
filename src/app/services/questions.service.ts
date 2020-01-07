import { Injectable } from '@angular/core';
import { Question } from '../dto/question.dto';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions: Question[] = [
    {
      text: 'Qual o personagem principal do desenho animado Bob Esponja?',
      answers: [
        {text: 'Patrick Estrela', right: false},
        {text: 'Bob Esponja', right: true},
        {text: 'Sirigueijo', right: false},
        {text: 'Lula Molusco', right: false},
      ]
    },

    {
      text: 'Quem é o autor da obra \"O chamado de Cthulhu\"?',
      answers: [
        {text: 'Machado de Assis', right: false},
        {text: 'Jorge Amado', right: false},
        {text: 'HP Lovecraft', right: true},
        {text: 'Pablo Picasso', right: false},
      ]
    }
  ];

  constructor() { }
}
