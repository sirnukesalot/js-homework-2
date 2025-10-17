import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from "../models/Game";

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'https://www.gamerpower.com/api/giveaways?type=game'


  constructor(private http: HttpClient){}

  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }
}
