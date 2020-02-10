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
    },


    {
      text: 'Qual era a profissão de Aristóteles?',
      answers: [
        {text: 'Filósofo', right: true},
        {text: 'Motorista', right: false},
        {text: 'Soldado', right: false},
        {text: 'Pintor', right: false},
      ]
    },

    {
      text: 'Qual último jogador brasileiro a ser eleito Melhor do Mundo?',
      answers: [
        {text: 'Kaká', right: true},
        {text: 'Ronaldinho', right: false},
        {text: 'Márcio Araújo', right: false},
        {text: 'Rodinei', right: false},
      ]
    },

    {
      text: 'Em que região do páis fica o estado de São Paulo?',
      answers: [
        {text: 'Sudeste', right: true},
        {text: 'Norte', right: false},
        {text: 'Sul', right: false},
        {text: 'Leste', right: false},
      ]
    },

    {
      text: 'Qual era a profissão de Aristóteles?',
      answers: [
        {text: 'Filósofo', right: true},
        {text: 'Motorista', right: false},
        {text: 'Soldado', right: false},
        {text: 'Pintor', right: false},
      ]
    },

    {
      text: 'Qual era a profissão de Aristóteles?',
      answers: [
        {text: 'Filósofo', right: true},
        {text: 'Motorista', right: false},
        {text: 'Soldado', right: false},
        {text: 'Pintor', right: false},
      ]
    },

    {
      text: 'Qual era a profissão de Aristóteles?',
      answers: [
        {text: 'Filósofo', right: true},
        {text: 'Motorista', right: false},
        {text: 'Soldado', right: false},
        {text: 'Pintor', right: false},
      ]
    },

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
    },

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
    },

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
    },

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
    },
  ];

  constructor() { }
}
