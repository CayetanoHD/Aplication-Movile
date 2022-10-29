import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: '/home', icon: 'home' },
    { title: 'Genero', url: '/gender', icon: 'female' },
    { title: 'Universidad', url: '/uni', icon: 'earth' },
    { title: 'Edad', url: '/edad', icon: 'accessibility' },
    { title: 'Clima', url: '/locate', icon: 'sunny' },
    { title: 'Contacto', url: '/me', icon: 'code-slash' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
