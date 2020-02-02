import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ApiResponse } from '@rubicon/interface/task-info';

@Injectable({
  providedIn: 'root'
})
export class TaskInfoService {

  constructor(private httpClient: HttpClient) { }

  getTaskInfo(slug: string) {
    return this.httpClient.get('assets/login.json', { params: { slug: slug } }).pipe(
      map((response:ApiResponse) => {
        console.log(response);
        
        return response.data.info ? response.data.info : null;
      })
    );
  }
}
