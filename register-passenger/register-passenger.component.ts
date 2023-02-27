import { Component } from '@angular/core';
import { Passenger } from '../passenger';
import { PassengerOperationsService } from '../passenger-operations.service';

@Component({
  selector: 'app-register-passenger',
  templateUrl: './register-passenger.component.html',
  styleUrls: ['./register-passenger.component.css']
})
export class RegisterPassengerComponent {

  __passengerService:PassengerOperationsService;
   
  allPassengers:Passenger[]=[];
status=false;
message='';
  p:Passenger = new Passenger(0,'',0,'','','');

  constructor(passengerService:PassengerOperationsService)
  {
    this.__passengerService = passengerService;
    this.allPassengers = this.__passengerService.getPassengerArr();

  }

  doFormSubmit(){
    console.log(this.p);
    this.__passengerService.Submit(this.p).subscribe(
      data=>{
        this.status=true;
        this.message="Passenger Added";
      },
      error=>{

      }
    )
  }

  /*doFormSubmit()
  {
    console.log("form submit button clicked")
    console.log(this.p);
    this.__passengerService.Submit(this.p);

  }*/

  readPassenger(prnNumber:string,passengerName:string,passengerAge:string,city:string,phoneNumber:string,email:string)  {
      console.log(prnNumber+" "+passengerName+" "+passengerAge+" "+city+" "+phoneNumber+" "+email);
      let passengerFromUser:Passenger = new Passenger(parseInt(prnNumber),passengerName,parseInt(passengerAge),city,phoneNumber,email);
      this.__passengerService.Submit(passengerFromUser);

  }


}
