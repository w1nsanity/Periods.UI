import { Component, OnInit } from '@angular/core';
import { PeriodsService } from './service/periods.service';
import { Period } from './models/period.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'periods';
  periods: Period[] = [];
  period: Period = {
    id: 0,
    start_time: '',
    title: '',
    building: '',
    day_of_week: '',
    week_number: ''
  }

  constructor(private periodsService: PeriodsService) {

  }

  ngOnInit(): void {
    this.getAllPeriods();
  }

  getAllPeriods() {
    this.periodsService.getAllPeriods().subscribe(response => {
      this.periods = response;
    })
  }

  onCreateClick(){
    this.periodsService.addPeriod(this.period).subscribe(
      response => {
        this.getAllPeriods();
        this.period = {
          id: 0,
          start_time: '',
          title: '',
          building: '',
          day_of_week: '',
          week_number: ''
        };
      }
    )
  }

  deletePeriod(id: number){
    this.periodsService.deletePeriod(id).subscribe(
        response => {
          this.getAllPeriods();
        }
    );
  }

  populateForm(period: Period){
    this.period = period;
  }

  updatePeriod(period: Period) {
    this.periodsService.updatePeriod(period).subscribe(
      response => {
        this.getAllPeriods();
        
        this.period = {
          id: 0,
          start_time: '',
          title: '',
          building: '',
          day_of_week: '',
          week_number: ''
        };
      }
    );
  }

}