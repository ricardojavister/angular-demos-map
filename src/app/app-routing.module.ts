import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorMapComponent } from './components/operators/operator-map/operator-map.component';

const routes: Routes = [{ component: OperatorMapComponent, path: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
