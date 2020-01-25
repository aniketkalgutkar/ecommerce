import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router:Router) { 

    
  }

  products=[
    {
      id:1,
      name:"Marvel strip comics",
      price:600
    },
    {
      id:2,
      name:"Captain America",
      price:550
    },
    {
      id:3,
      name:"Marauder's Map",
      price:500
    },
    {
      id:4,
      name:"Hooded Tshirt",
      price:700
    },
  ]

categories = [
  {
    id:1,
    name:"Marvel"
  },
  {
    id:2,
    name:"DC"
  },
  {
    id:3,
    name:"LOTR"
  },
  {
    id:4,
    name:"Harry Potter"
  }
]

  ngOnInit() {
  }


  onSelect(product){
    this.router.navigate(['/products', product.id])
  }
}
