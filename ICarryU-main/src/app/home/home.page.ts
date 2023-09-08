import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class TuPaginaPage {
  pageTitle: string = 'Inicio'; // Página de inicio por defecto

  constructor(private menuController: MenuController, private navCtrl: NavController) {}

  navigateTo(page: string) {
    this.pageTitle = page.charAt(0).toUpperCase() + page.slice(1); // Capitalizar la página
    this.menuController.close(); // Cerrar el menú después de hacer clic en un elemento
    this.navCtrl.navigateForward(page); // Navegar a la página correspondiente
  }
}