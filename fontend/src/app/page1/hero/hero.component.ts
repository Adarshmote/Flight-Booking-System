import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WeatherWidgetComponent } from 'src/app/shared/weather-widget/weather-widget.component';
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @ViewChild('plane') planeRef: ElementRef;

  constructor(public display: WeatherWidgetComponent) { }

  ngOnInit(): void {

    anime({
      targets: ['.title', 'svg'],
      opacity: [0, 1],
      delay: anime.stagger(800),
      duration: 2000,
      easing: 'easeInOutQuad'
    });
  }

  onMouseMove(e) {
    const plane = this.planeRef.nativeElement;
    const speed = 2;
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    plane.style.transform = `translateX(${x}px) translateY(${y}px)`;
  }

}
