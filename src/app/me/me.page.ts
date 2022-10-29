import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
})
export class MePage implements OnInit {
  name ="Jose Miguel";
  lastname = "Cayetano Marquez";
  code = "2020-9309";
  correo = "Josemiguelcayetano001@gmail.com"

  constructor() { }

  ngOnInit() {
  }

}
