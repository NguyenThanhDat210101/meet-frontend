import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'bookroom');
    data.append('cloud_name', 'angularcloudinary');
    return this.http.post('https://api.cloudinary.com/v1_1/angularcloudinary/image/upload', data)
  }
}
