import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ScannerService } from 'src/app/page1/scanner/scanner.service';
import { tap } from 'rxjs/operators';
import { Time } from './time';
import { userChoice } from 'src/app/userChoice';


@Injectable({
  providedIn: 'root'
})
export class ShowFlightService implements OnInit {

  constructor(private http: HttpClient, private scannerService: ScannerService) { }

  public userChoice:userChoice[] = this.scannerService.getUserChoice();

  cityCode = {
    'Katowice': 'KTW-sky',
    'Cracow': 'KRK-sky',
    'Warsaw': 'WAW-sky',
    'Berlin': 'BER-sky',
    'Barcelona': 'BCN-sky',
    'New York': 'JFK-sky'
  }

  dataArr:string[] = [];
  timeArr= [];

  done:boolean = false;

  ngOnInit() {
    
  }

  getFlightInfo() {

    return this.http.get<any>(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/PL/PLN/pl-PL/${this.cityCode[this.userChoice[0].from]}/${this.cityCode[this.userChoice[0].to]}/${this.userChoice[0].date}`, {

      "headers": {
        "x-rapidapi-key": "f1cf0f8c00mshf05c5cdbf0dbad6p1422b4jsnb47c0d2bc70a",
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
      }
    }).pipe(
      tap(_ => console.log('done')),
    );
  }

  getPrice():string[]{
    if(this.done){
      return this.dataArr['Quotes'][0]['MinPrice'];
    }
  }

  
  getDataArr():string[]{
    if(this.done){
      return this.dataArr;
    }
  }

getNoResult():string{
  if(this.done && this.dataArr['Quotes'].length == 0){
    return 'NO RESULTS';
  }else{
    return 'Your Search'
  }
}

  showFlight() {
   
    this.getFlightInfo().subscribe((data) => {
     
      this.done = true;
      this.dataArr = [];
      this.dataArr = data;
    })
   
  }

  isDone():boolean{
    return this.done
  }


setTime(){
const hour = Math.floor((Math.random() * 24) + 1);
const minutes =  Math.floor(Math.random() * 60);
const time = new Time(hour, minutes);
this.timeArr.push(time);
}

getTime(){
    return this.timeArr;
  } 
}
