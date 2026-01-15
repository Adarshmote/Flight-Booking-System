import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ScannerService } from 'src/app/page1/scanner/scanner.service';
import { ShowFlightService } from './show-flight.service';
import { FlyInfoService } from 'src/app/fly-info.service';
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-show-flight',
  templateUrl: './show-flight.component.html',
  styleUrls: ['./show-flight.component.scss']
})



export class ShowFlightComponent implements OnInit, AfterViewChecked {

  constructor(public flightService: ShowFlightService, public scannerService: ScannerService, public flyInfo: FlyInfoService) { }

  endHour: number;
  duration: number;
  dataArr: string[] = this.flightService.getDataArr();
  timeArr = this.flightService.getTime();
  destination: string;
  noResult: boolean = false;

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    anime({
      targets: '.fas .fa-plane',
      easing: 'linear',
      duration: 1500,
      delay: 9000,
      translateX: [-100, 0],
    });
  }

  getEndHour() {

    if ((this.timeArr[0].hour + this.duration) > 24) {
      this.endHour = 0 + (this.timeArr[0].hour + this.duration - 24)
    } else {
      this.endHour = this.timeArr[0].hour + this.duration;
    }

    return this.endHour

  }


  getDuration() {

    this.destination = this.flightService.getDataArr()["Places"][0]["Name"];

    if (this.destination === 'Berlin Brandenburg') {
      this.duration = 1;
    }

    if (this.destination === 'Barcelona') {
      this.duration = 3;
    }
    if (this.destination === 'Nowy Jork John F Kennedy') {
      this.duration = 10;
    }

    return this.duration

  }

}
