import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class httpFetchService {

  constructor() { }

  async getData(api: string) {
    const res = await fetch(api);
    return await res.json();
  }

  async getOne(api: string, id: number) {
    const res = await fetch(api + id);
    return await res.json();
  }

  async post(api: string, data: any) {
    const res = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  async delete(api: string, id: number) {
    const res = await fetch(api + id, {
      method: 'DELETE',
    })
    return await res.json();
  }

  async update(api: string, id: number, data: any) {
    const res = await fetch(api + id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)
    })
    return await res.json();
  }


}
