import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';


export const routes: Routes =[
  { path: "about", component: AboutComponent },
  { path: "list", component: ListComponent },
  { path: "", redirectTo:"/about",pathMatch:'full'}

]
