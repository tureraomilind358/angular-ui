import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pegese/add-product/add-product.component';
import { ProductviewComponent } from './pegese/productview/productview.component';
import { UpdateproductComponent } from './pegese/updateproduct/updateproduct.component';

const routes: Routes = [
  {path:'addProduct', component:AddProductComponent,},
  {path:'productView', component:ProductviewComponent,},
  {path:'updateProduct/:id', component:UpdateproductComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
