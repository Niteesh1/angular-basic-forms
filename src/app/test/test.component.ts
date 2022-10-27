import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public usd:any[]=[];
  constructor(private ser:ProductService) { }
 

  ngOnInit(): void {
    this.ser
     .getProducts()
     .subscribe(data=>this.usd=data)
  }

}
