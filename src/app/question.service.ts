import { Injectable } from '@angular/core';
import { PrizeInfo } from './models/prize-info';
import { Question } from './models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questionCount: number = 0;
  private questions: Question[] = [
    {
      title: 'Um número múltiplo de cinco é?',
      answers: [
        {description: 'Um número que é divisível por 3', isRight: false},
        {description: 'Um número que é divisível por 5', isRight: true},
        {description: 'Um número que multiplicado por 5 é par', isRight: false},
        {description: 'Um número que somado com 5 é impar', isRight: false},
      ],
      level: 1
    },

    {
      title: 'Qual o nome do principalo personagem do anime Dragon Ball?',
      answers: [
        {description: 'Goku', isRight: true},
        {description: 'Freeza', isRight: false},
        {description: 'Mabel', isRight: false},
        {description: 'Leon Kennedy', isRight: false},
      ],
      level: 1
    },

    {
      title: 'De quanto em quanto tempo acontece uma Copa do Mundo?',
      answers: [
        {description: 'De dois em dois anos', isRight: false},
        {description: 'De oito em oitro anos', isRight: false},
        {description: 'Ocorre todos os anos', isRight: false},
        {description: 'De quatro em quatro anos', isRight: true},
      ],
      level: 1
    },

    {
      title: 'Quantos meses do ano possuem 28 dias?',
      answers: [
        {description: 'Apenas um mês', isRight: false},
        {description: 'Seis meses', isRight: false},
        {description: 'Oito meses', isRight: false},
        {description: 'Doze meses', isRight: true},
      ],
      level: 1
    },

    {
      title: 'Qual a cor que simboliza a esperança?',
      answers: [
        {description: 'Branco', isRight: false},
        {description: 'Verde', isRight: true},
        {description: 'Azul', isRight: false},
        {description: 'Vermelho', isRight: false},
      ],
      level: 1
    },

    {
      title: 'Quais os dois primeiros nomes da apresentadora Xuxa?',
      answers: [
        {description: 'Maria de Lourdes', isRight: false},
        {description: 'Maria do Carmo', isRight: false},
        {description: 'Maria da Graça', isRight: true},
        {description: 'Maria Isabel', isRight: false},
      ],
      level: 1
    },

    {
      title: 'Qual o presidente brasileiro responsável pela constução de brasília?',
      answers: [
        {description: 'Jãnio Quadros', isRight: false},
        {description: 'Juscelino Kubitschek', isRight: true},
        {description: 'Getúlio Vargas', isRight: false},
        {description: 'Eurico Gaspar Dutra', isRight: false},
      ],
      level: 1
    },

    {
      title: 'Como chamamos o sono do urso durante o inverno?',
      answers: [
        {description: 'Preguiça', isRight: false},
        {description: 'Demaio', isRight: false},
        {description: 'Cochilo', isRight: false},
        {description: 'Hibernação', isRight: true}
      ],
      level: 1
    },

    {
      title: 'Segundo a lenda em que fase da lua aparece o lobisomem?',
      answers: [
        {description: 'Nova', isRight: false},
        {description: 'Cheia', isRight: true},
        {description: 'Minguagnte', isRight: false},
        {description: 'Crescente', isRight: false},
      ],
      level: 1
    },

    {
      title: 'Em que ano foi morto John Lennon?',
      answers: [
        {description: '1980', isRight: true},
        {description: '1985', isRight: false},
        {description: '1981', isRight: false},
        {description: '1978', isRight: false},
      ],
      level: 1
    },

    {
      title: 'Qual foi o último estado criado no Brasil?',
      answers: [
        {description: 'Tocantins', isRight: true},
        {description: 'Rondônia', isRight: false},
        {description: 'Acre', isRight: false},
        {description: 'Mato Grosso do Sul', isRight: false},
      ],
      level: 1
    },

    {
      title: 'Em qual dos clubes abaixo o jogador Ademir da Guia é ídolo?',
      answers: [
        {description: 'Santos', isRight: false},
        {description: 'Palmeiras', isRight: true},
        {description: 'Bahia', isRight: false},
        {description: 'São Paulo', isRight: false},
      ],
      level: 1
    },

    {
      title: 'Em qual estado brasileiro ocorreu a guerra de canudos?',
      answers: [
        {description: 'Sergipe', isRight: false},
        {description: 'Bahia', isRight: true},
        {description: 'São Paulo', isRight: false},
        {description: 'Rio de Janeiro', isRight: false},
      ],
      level: 1
    },

    {
      title: 'Qual o nome que se dá a mistura de água com sal?',
      answers: [
        {description: 'Gangorra', isRight: false},
        {description: 'Salmoura', isRight: true},
        {description: 'Melado', isRight: false},
        {description: 'Salada', isRight: false},
      ],
      level: 1
    },

    {
      title: 'De onde as abelhas extraem o mel?',
      answers: [
        {description: 'Rochas', isRight: false},
        {description: 'Flores', isRight: true},
        {description: 'Terra', isRight: false},
        {description: 'Água', isRight: false},
      ],
      level: 1
    },
    {
      title: 'Como se chama o ratinho criado por Walt Disney?',
      answers: [
        {description: 'Mickey Mouse', isRight: true},
        {description: 'Pateta', isRight: false},
        {description: 'Jerry', isRight: false},
        {description: 'Pink', isRight: false},
      ],
      level: 1
    }
  ];

  private questionPrizes = [
    1000, //1
    2000,
    3000,
    4000,
    5000, //5
    10000, //10
    20000,
    30000,
    40000,
    50000,
    100000,
    200000,
    300000,
    400000,
    500000,
    1000000
  ];

  constructor() {
    this.questions.sort((a, b) => 0.5 - Math.random());
  }

  nextQuestion(): Question {
    const randomIndex: number = Math.floor( Math.random() * this.questions.length );
    this.questionCount++;
    return this.questions.splice(randomIndex, 1)[0]
  }


  getPrizeInfo(): PrizeInfo {
    const curQuesionPrize = this.questionPrizes[ this.questionCount - 1 ];
    const accumulated = this.questionPrizes[ this.questionCount - 2 ];

    return {
      correctAnswer: curQuesionPrize,
      wrongAnswer: this.questionCount === 1 || this.questionCount === 16 ? 0 : accumulated/2,
      quit: this.questionCount === 1 ? 0 : accumulated,
    };
  }
}
