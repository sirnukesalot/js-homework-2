import { Component,signal } from '@angular/core';
import { RouterLink,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink,RouterModule,CommonModule,FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  likes = 0;
  isWorking = true;
  email = 'madikuanishbekov000@gmail.com';
  title = 'About Our Team';
  description = 'We provide different applications with consistent support '
  showMessage = false;
  emailSent = false;
  
  imageURL = signal("https://t3.ftcdn.net/jpg/03/08/59/78/360_F_308597849_Sv10jeDceT36mhjJe9N64Left5QtXoIq.jpg")
  
  like(){
      this.likes++;
      if (this.email != ''){
        this.email += '<3';
      }
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
