import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms';

import { AppComponent }           from './app.component';

import { ProductDetailComponent } from './product-detail.component';
import { AboutComponent }         from './about.component';
import { DashboardComponent }     from './dashboard.component';
import { ContactComponent }       from './contact.component';
import { CustomComponent }        from './custom.component';
import { FaqsComponent }          from './faqs.component';
import { CheckoutComponent }      from './checkout.component';
import { FooterComponent }        from './footer.component';

import { ProductService }         from './product.service';

import { routing }                from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductDetailComponent,
    AboutComponent,
    ContactComponent,
    CustomComponent,
    FaqsComponent,
    CheckoutComponent,
    FooterComponent
  ],
  providers: [
    ProductService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
