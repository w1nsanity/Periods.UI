import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Period } from '../models/period.model';

@Injectable({
  providedIn: 'root'
})
export class PeriodsService {

  baseUrl = 'https://localhost:7102/api/Periods';

  constructor(private http: HttpClient) { }

  //get all cards
  getAllPeriods(): Observable<Period[]> {
    return this.http.get<Period[]>(this.baseUrl);
  }

  //add card
  addPeriod(period: Period): Observable<Period> {
    period.id = 0;
    return this.http.post<Period>(this.baseUrl + '/AddPeriod/', period)
  }

  deletePeriod(id: number): Observable<Period>{
    return this.http.delete<Period>(this.baseUrl + "/DeletePeriod/" + id);
  }

  updatePeriod(period: Period): Observable<Period> {
    return this.http.put<Period>(this.baseUrl + "/UpdatePeriod/" + period.id, period);
  }
}