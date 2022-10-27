import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { TestComponent } from './test/test.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  public displayProduct:any[] = [];
public ref = [{"id":1,"name":"nithi","sal":20000},{"id":1,"name":"nithi","sal":20000},{"id":1,"name":"nithi","sal":20000}];
  constructor(private service: ProductService) {
    // alert('this is inside the constructor');

    
  }

  ngOnInit(): void {
    // alert('this is inside the ngonInit Method');
    // this.displayProduct = this.service.getProducts();
  }

  ngOnDestroy(): void {
    //dont have control over this and onChanges : ngOnChanges()

  }
  title = 'secondApp';
}
