import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';


  changePage(event){
    let targetElement = event.target.id.replace("-link","");
    document.querySelector('.nav-item.active').classList.remove('active');
    document.getElementById(targetElement).classList.add('active')
  }
}
