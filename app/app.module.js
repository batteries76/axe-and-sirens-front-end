"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var product_detail_component_1 = require('./product-detail.component');
var about_component_1 = require('./about.component');
var dashboard_component_1 = require('./dashboard.component');
var contact_component_1 = require('./contact.component');
var custom_component_1 = require('./custom.component');
var faqs_component_1 = require('./faqs.component');
var checkout_component_1 = require('./checkout.component');
var footer_component_1 = require('./footer.component');
var contact_form_component_1 = require('./contact-form.component');
var product_service_1 = require('./product.service');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                product_detail_component_1.ProductDetailComponent,
                about_component_1.AboutComponent,
                contact_component_1.ContactComponent,
                custom_component_1.CustomComponent,
                faqs_component_1.FaqsComponent,
                checkout_component_1.CheckoutComponent,
                footer_component_1.FooterComponent,
                contact_form_component_1.ContactFormComponent
            ],
            providers: [
                product_service_1.ProductService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map