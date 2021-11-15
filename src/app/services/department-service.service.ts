import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../common/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8000/api/department/';
  insert(depart: Department){
    return this.http.post(this.url,depart);
  }
  getAll(){
    return this.http.get(this.url);
  }

  delete(id:number){
    return this.http.delete(this.url +id);
  }

  show(id:number){
    return this.http.get(this.url+id);
  }

  update(id:number,depart: Department){
    return this.http.put(this.url+id,depart);
  }
}
