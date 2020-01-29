import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public loginTrue:boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    document.getElementById('navbar').classList.add('hide')
    if(this.loginTrue == true){
      this.router.navigate(['/admin/addproduct'])
    }
  }


  onSubmit(theForm:NgForm){
    if(theForm.value.username== 'admin' && theForm.value.password=='pass'){
      console.log('Correct creds, navigating you to admin section')
      this.loginTrue = true;
      this.router.navigate(['/admin/addproduct'])
    }
    else{
      console.log('Incorrect creds')
    }
  }

}
