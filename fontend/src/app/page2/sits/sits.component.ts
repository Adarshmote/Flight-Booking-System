import { Component, OnInit } from '@angular/core';
import { FlyInfoService } from 'src/app/fly-info.service';
import { userChoice } from 'src/app/userChoice';
import { Page2Service } from '../page2.service';

@Component({
  selector: 'app-sits',
  templateUrl: './sits.component.html',
  styleUrls: ['./sits.component.scss']
})
export class SitsComponent implements OnInit {

  PlaneOneSits = [
    [1, 2, 3, 4, 5, 6, 8, 7, 9],
    ["A", "B", "C"],
    ["D", "E", "F"],
    ["G", "A", "H"],
  ];

  PlaneTwoSits = [
    [1, 2, 3, 4, 5, 6, 7],
    ["A", "B"],
    ["C", "D", "E"],
    ["F", "G"]
  ];

  PlaneThreeSits = [
    [1, 2, 3, 4, 5, 6, 8, 7, 9],
    ["A", "B", "C"],
    ["D", "E", "F"],
    ["G", "A", "H"],
    ["G", "A"],
    ["H", "I"],
  ];

  planeOne:boolean = false;
  planeTwo:boolean = false;
  planeThree:boolean = false;

  constructor(public page2Service: Page2Service, private flyInfo: FlyInfoService) { }

  ngOnInit(): void {
    this.choosePlane();
  }

  chooseSit(event) {
    const info:userChoice[] = this.flyInfo.getInfo();
    const target = event.target;
    const id: Number = target.attributes['id'].nodeValue;
   
    const sits: string[] = this.page2Service.getSits();
    const indexOfSit:number = sits.indexOf(target.attributes['id'].nodeValue);

    
    if(target.classList.contains('clicked')){
      target.classList.remove('clicked');
      sits.splice(indexOfSit, 1);
    }else{
      target.classList.add('clicked');
      this.page2Service.addSits(id);
    }

    if (sits.length > info[0].people) {
      target.classList.remove('clicked');
      sits.splice(indexOfSit, 1);
    }
    }

  choosePlane(){
    const info:userChoice[] = this.flyInfo.getInfo();
    const fly = info[0].to;
   
    fly === 'Berlin'? this.planeOne = true : this.planeOne = false;
    fly === 'Barcelona'? this.planeTwo = true : this.planeTwo = false;
    fly === 'New York'? this.planeThree = true : this.planeThree = false;
  }  
  }


