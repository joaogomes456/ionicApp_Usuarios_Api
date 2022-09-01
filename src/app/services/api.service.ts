/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url ='https://reqres.in/api/users';


  constructor(private Http: HttpClient) {}

    buscarUsuarios(page: number) {
      return this.Http.get(`${this.url}?page=${page}`);
    }


}
