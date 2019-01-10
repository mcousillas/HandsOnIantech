import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICompetidor } from '../competidores/competidor';
import { IPerfLoggingPrefs } from 'selenium-webdriver/chrome';
import { Observable } from 'rxjs';

@Injectable()
export class CompetidoresService {

  private apiURL = this.baseUrl + "api/CompetidorModels";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getCompetidor(): Observable<ICompetidor[]> { 

    return this.http.get<ICompetidor[]>(this.apiURL); 
  
  }

  createCompetidor(competidor: ICompetidor): Observable<ICompetidor> {
    return this.http.post<ICompetidor>(this.apiURL, competidor);
  }

  getCompetidorList() {
    return this.http.get(this.apiURL).toPromise();
  }

  deleteCompetidor(id: number) {

    return this.http.delete(this.apiURL + '/' + id).toPromise();

  }

}
