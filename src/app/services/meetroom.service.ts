import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meetroom } from '../common/meetroom';

@Injectable({
  providedIn: 'root'
})
export class MeetroomService {


  constructor(private http:HttpClient) { }
  url = 'http://localhost:8000/api/meet-room/';
  insert(meet : Meetroom){
    return this.http.post(this.url,meet);
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

  update(id:number,meet : Meetroom){
    return this.http.put(this.url+id,meet);
  }
}
