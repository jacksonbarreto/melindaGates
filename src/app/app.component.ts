import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Formação', url: '/formation', icon: 'school' },
    { title: 'Realizações', url: '/achievement', icon: 'trophy' },
    { title: 'Contatos', url: '/contacts', icon: 'globe' },
    { title: 'Sobre', url: '/about', icon: 'information-circle' },
    { title: 'Bibliografia', url: '/bibliography', icon: 'library' }
  ];
  constructor() { }
}
