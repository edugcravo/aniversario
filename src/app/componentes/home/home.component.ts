import { Component, HostListener, OnInit } from '@angular/core';

import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }
  ngOnInit() {

  }

  // Carousel
  products = [
    {source: 'assets/imagens/carrosel/foto2.jpg', alt: 'Description for Image 2', title: 'Title 2'},
    {source: 'assets/imagens/carrosel/foto3.jpg', alt: 'Description for Image 3', title: 'Title 3'},
    {source: 'assets/imagens/carrosel/foto4.jpg', alt: 'Description for Image 4', title: 'Title 4'},
  ]

  responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];


redirecionarParaWhatsapp() {
  // Número de telefone do WhatsApp (substitua pelo seu número)
  const numeroWhatsapp = '5541998638979';
  // Mensagem pré-pronta
  const mensagem = 'Olá jaque, Pode me confirmar na festa da nanda';

  // Cria o link para o WhatsApp com o número e a mensagem
  const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;

  // Redireciona para o WhatsApp
  window.open(url, '_blank');
}

agendarEvento() {
  // Data e hora do evento (ajuste conforme necessário)
  const dataHoraEvento = new Date('2024-05-18T18:30:00');

  // Formatar data e hora para o formato necessário pelo Google Agenda
  const dataInicio = dataHoraEvento.toISOString().replace(/-|:|\.\d+/g, '');
  const dataFim = new Date(dataHoraEvento.getTime() + 60 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, '');

  // Montar o link do Google Agenda com os dados do evento
  const linkGoogleAgenda = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Aniversario+Maria+Fernanda&dates=${dataInicio}/${dataFim}&details=Detalhes+do+Evento&location=Villagio+Di+Trento`;

  // Abrir o link em uma nova aba
  window.open(linkGoogleAgenda, '_blank');
}

}
