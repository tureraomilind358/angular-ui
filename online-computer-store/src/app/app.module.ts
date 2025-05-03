import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './pegese/add-product/add-product.component';
import { NavbarComponent } from './pegese/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ProductviewComponent } from './pegese/productview/productview.component';
import { UpdateproductComponent } from './pegese/updateproduct/updateproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    NavbarComponent,
    ProductviewComponent,
    UpdateproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
