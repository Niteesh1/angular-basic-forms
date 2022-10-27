import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   name :string = "hello niteesh"
  constructor(private http:HttpClient) { 
  }



   

  //  getProducts():any{
  
  //   return [ {"id":1,"name":"laptop"},{"id":2,"name":"mobile"},{"id":3,"name":"ipad"}]
  //  }

   private url:string = '../assets/data/sample.json'
   getProducts():Observable<any[]>{
    // return this.http.get<any[]>('http://localhost:3000/notes');

    // return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos')
    // return this.http.get<any[]>('https://jsonplaceholder.typicode.com/comments')
    // return this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos')

    return this.http.get<any[]>(this.url)


   }

  // let Observable = new Observable(a=>{

  //   a.next()
  // })
  // a.pipe()

  //  a.subscribe()

  //  a.unsubscribe()


}


