import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailProductComponent } from './product/data-list-product/detail-product/detail-product.component';
import { DataListProductComponent } from './product/data-list-product/data-list-product.component';


const routes: Routes = [ { path: 'detail',
component: DetailProductComponent
},
{ path: '',
component: DataListProductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
