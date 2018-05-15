import { Component, OnInit } from '@angular/core';

import {Loja} from './loja/loja.model'

import {LojasService} from "./lojas.service"
@Component({
  selector: 'mt-lojas',
  templateUrl: './lojas.component.html'
})
export class LojasComponent implements OnInit {

  lojas: Loja[]

  constructor(private lojasService: LojasService) { }

  ngOnInit() {
    this.lojasService.lojas().subscribe(lojas => this.lojas = lojas);
  }

}
