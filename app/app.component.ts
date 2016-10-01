import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

    <h1>{{title}}</h1>
    <nav>
      <div class="nav-wrapper blue-grey lighten-1">
        <ul>
          <li><a routerLink="/dashboard" routerLinkActive="active">Products</a></li>
          <li><a routerLink="/about" routerLinkActive="active">About</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
          <li><a routerLink="/checkout" routerLinkActive="active">Checkout</a></li>
          <li><a routerLink="/faqs" routerLinkActive="active">FAQs</a></li>
          <li><a routerLink="/custom" routerLinkActive="active">Custom</a></li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
    <my-footer></my-footer>
  `,
  // styleUrls: ['app/app.component.css']
})
export class AppComponent {
  title = 'Axe and Sirens';
}
