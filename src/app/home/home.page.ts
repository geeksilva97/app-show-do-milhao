import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  loaded: boolean = false;
  logs: string[] = [];


  perguntasDinheiro = {
    '1000': [
      'pergunta-mil',
      'primeira-rodada-mil'
    ],

    '2000': [
      'pergunta-2-mil'
    ],
    
    '3000': [
      'pergunta-3-mil'
    ],

    '4000': [
      'pergunta-4-mil'
    ],

    '5000': [
      'pergunta-5-mil'
    ]
  };

  constructor(
    private nativeAudio: NativeAudio
  ) {}


  rand(max: number) {
    return Math.floor(Math.random()*max);
  }

  mil() {
    let max = this.perguntasDinheiro['1000'].length;
    let index = this.rand(max);
    let audioName: string = this.perguntasDinheiro['1000'][index];
    this.logs.push(audioName);
    this.nativeAudio.play(audioName);
  }

  doisMil() {
    let max = this.perguntasDinheiro['2000'].length;
    let index = this.rand(max);
    let audioName: string = this.perguntasDinheiro['2000'][index];
    this.logs.push(audioName);
    this.nativeAudio.play(audioName);
    // this.nativeAudio.play(this.perguntasDinheiro['2000'][index]);
  }

  tresMil() {
    let max = this.perguntasDinheiro['3000'].length;
    let index = this.rand(max);
    let audioName: string = this.perguntasDinheiro['3000'][index];
    this.logs.push(audioName);
    this.nativeAudio.play(audioName);
  }

  ngOnInit() {

    Object.keys(this.perguntasDinheiro).forEach(key => {
      this.perguntasDinheiro[key].forEach(async (audioName) => {
        await this.nativeAudio.preloadSimple(audioName, `assets/audios/perguntas/${audioName}.wav`);
      });
    });

    this.nativeAudio.preloadComplex('backAudio', 'assets/suspense.wav', .2, 1, 0)
      .then(() => {
        this.nativeAudio.loop('backAudio');
      })
      .catch((err) => {
        alert('Falha ao carregar o áudio de fundo');
      });

    this.nativeAudio.preloadSimple('certaResposta', 'assets/certa-resposta.wav')
      .then((v) => {
        console.log(v);
        this.loaded = true;
      }).catch(err => {
        alert('Falha ao carregar o audio');
        console.log(err);
      }) ;

      this.nativeAudio.preloadSimple('possoPerguntar', 'assets/posso-perguntar.wav')
      .then((v) => {
        console.log(v);
        this.loaded = true;
      }).catch(err => {
        alert('Falha ao carregar o audio');
        console.log(err);
      }) ;
  }


  play() {
    if(!this.loaded) {
      alert('Áudio não carregado');
      return;
    }


    this.nativeAudio.play('possoPerguntar', () => {
      setTimeout(() => {
        this.nativeAudio.play('certaResposta', () => {
          alert('Audio executado');
        });
      }, 1500)
     
    });

    
  }



}
