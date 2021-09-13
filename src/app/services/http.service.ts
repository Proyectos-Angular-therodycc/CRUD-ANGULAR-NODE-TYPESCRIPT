import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData(api: string): Observable<any> {
    return this.http.get(api);
  }

  getOne(api: string, id: number): Observable<any> {
    return this.http.get(api + id);
  }

  delete(api: string, id: number): Observable<any> {
    return this.http.delete(api + id);
  }

  update(api: string, id: number, objUpdated: any): Observable<any> {
    return this.http.put(api + id, objUpdated);
  }

  save(api: string, obj: any): Observable<any> {
    return this.http.post(api, obj);
  }
}
