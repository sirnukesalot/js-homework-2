import { Component } from '@angular/core';
import { RouterLink,RouterModule } from '@angular/router';
import { ListService } from '../service/list.service';
import { Game } from "../models/Game";  
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink,RouterModule,CommonModule,NgForOf,FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  games: Game[] = [];
  filteredGames: Game[] = [];
  errorMessage!: string
  showList = false;
  searchText = '';

  constructor(private list_service: ListService){
    this.filteredGames = this.games;
  }

  toggleList() {
    this.showList = !this.showList;
  }
  
  ngOnInit(){
    this.list_service.getAllGames().subscribe({
      next: (games) => {
        this.games = games;
        this.filteredGames = games;
        console.log(this.games);
      },
      error: (error) => {
        this.errorMessage = error
      },
  });
  }


  filterResults(text: String){
    if(!text){
      this.filteredGames = this.games;
      return;
    }
  
    this.filteredGames = this.games.filter((game)=> game?.title.toLowerCase().includes(text.toLowerCase()),);
  }

  
}