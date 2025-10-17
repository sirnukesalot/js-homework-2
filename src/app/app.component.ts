import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterModule,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterModule,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
