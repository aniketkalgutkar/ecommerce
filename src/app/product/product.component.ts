import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product
  public available:boolean = false
  // public products=[
  //   {
  //     id:1,
  //     name:"Marvel strip comics",
  //     price:600,
  //     category: 'Marvel'
  //   },
  //   {
  //     id:2,
  //     name:"Captain America",
  //     price:550,
  //     category: 'Marvel'
  //   },
  //   {
  //     id:3,
  //     name:"Marauder's Map",
  //     price:500,
  //     category: 'Harry Potter'
  //   },
  //   {
  //     id:4,
  //     name:"Hooded Tshirt",
  //     price:700,
  //     category: 'DC'
  //   },
  // ]

  products:object;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }




  ngOnInit() {

    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.http.get('http://192.168.1.115:5000/api/v1/product/').subscribe(posts=>{
      this.products = posts;
      console.log(this.products)
      for(let a in this.products){
        console.log(this.products[a])
        if(id == this.products[a].id){
          this.product = this.products[a]
          this.available = true;
          break
        }
      }
    });


    
    

  }

}
