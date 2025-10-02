import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  likes = 0;
  isWorking = true;
  email = '';
  title = 'About Our Team';
  description = 'We provide different applications with consistent support '
  showMessage = false;
  emailSent = false;

  imageURL = signal("https://t3.ftcdn.net/jpg/03/08/59/78/360_F_308597849_Sv10jeDceT36mhjJe9N64Left5QtXoIq.jpg")

  like(){
    this.likes++
  }

  toggleMessage(){
    this.showMessage = !this.showMessage;
  }

  sendEmail(){
    if(this.email.trim()){
      this.emailSent = true;
    }
  }
}
