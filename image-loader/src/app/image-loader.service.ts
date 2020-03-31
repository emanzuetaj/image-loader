import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageLoaderService {

  constructor(private httpClient: HttpClient) { }

  getImages(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/api')
      .pipe(map((data: any) => {
        return data;
      }));
  }
}
