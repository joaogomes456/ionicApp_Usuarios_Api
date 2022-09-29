/* eslint-disable @typescript-eslint/dot-notation */
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  page;
  perPages;
  total;
  totalPage;
  data;

  constructor(private api: ApiService) {this.buscarTodos();}

  buscarTodos(page=1) {
    this.api.buscarUsuarios(page).subscribe(usuarios=>{
      console.log(usuarios);
      this.page = usuarios['page'];
      this.perPages = usuarios['per_Pages'];
      this.total = usuarios['total'];
      this.totalPage = usuarios['totalPage'];
      this.data = usuarios['data'];
    });
  }

}
