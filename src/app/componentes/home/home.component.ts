import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import Swal from 'sweetalert2';
import { Subject, interval, takeUntil } from 'rxjs';
// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  diferenca!: { dias: number; horas: number; minutos: number; segundos: number; };
  private destroy$: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
    const aniversario: Date = new Date('2024-05-18T00:00:00');

    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        const agora: Date = new Date();
        const diferenca: number = aniversario.getTime() - agora.getTime();

        if (diferenca <= 0) {
          this.diferenca = { dias: 0, horas: 0, minutos: 0, segundos: 0 };
        } else {
          const segundosTotais: number = Math.floor(diferenca / 1000);
          const dias: number = Math.floor(segundosTotais / (3600 * 24));
          const horas: number = Math.floor((segundosTotais % (3600 * 24)) / 3600);
          const minutos: number = Math.floor((segundosTotais % 3600) / 60);
          const segundos: number = segundosTotais % 60;

          this.diferenca = { dias, horas, minutos, segundos };
        }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Carousel
  products = [
    {source: 'assets/imagens/fotos/crianca.jpg', alt: 'Description for Image 2', title: 'Title 2'},
    {source: 'assets/imagens/fotos/crianca2.jpg', alt: 'Description for Image 3', title: 'Title 3'},
    {source: 'assets/imagens/fotos/crianca3.jpg', alt: 'Description for Image 4', title: 'Title 4'},
    {source: 'assets/imagens/fotos/crianca4.jpg', alt: 'Description for Image 5', title: 'Title 5'},
    {source: 'assets/imagens/fotos/crianca5.jpg', alt: 'Description for Image 6', title: 'Title 6'},
    {source: 'assets/imagens/fotos/adulto.jpg', alt: 'Description for Image 7', title: 'Title 7'},
    {source: 'assets/imagens/fotos/adulto2.jpg', alt: 'Description for Image 8', title: 'Title 8'},
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

modalDress(){
  Swal.fire({
    title: "Dress Code",
    text: "Traje Esporte Fino",
    customClass: {
      title: 'title-class',
      image: 'image-class',
      
    },
    imageUrl: 'https://fixdate.io/modelo-invitacion/52/img/vestuario.svg',
    imageWidth: 100,
    imageHeight: 100,
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
  });
}

modalDicas(){
  Swal.fire({
    title: "Dicas para o evento",
    text: "",
    html: `
        <div style="text-align: left; line-height: 1.5;">
            <p style="font-family: sans-serif !important;"><strong style="font-family: sans-serif !important;">Chegue cedo:</strong> Chegar cedo permite que você aproveite todos os momentos especiais da festa, incluindo a cerimônia de abertura e as apresentações.</p>
            <p style="font-family: sans-serif !important;"><strong style="font-family: sans-serif !important;">Siga o Dress Code:</strong> Respeite o traje sugerido para a festa, garantindo que você esteja vestido adequadamente para a ocasião.</p>
            <p style="font-family: sans-serif !important;"><strong style="font-family: sans-serif !important;">Quando chegar:</strong> Não esqueça de escanear o QR CODE que levará direto para o meu filtro do Instagram!.</p>
        </div>
    `,
    customClass: {
      title: 'title-class',
      image: 'image-class-dicas',
      
    },
    imageUrl: 'https://fixdate.io/modelo-invitacion/52/img/tips.svg',
    imageWidth: 100,
    imageHeight: 100,
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
  });
}
}
