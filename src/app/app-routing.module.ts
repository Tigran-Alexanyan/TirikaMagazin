import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent} from './menu/menu.component';
import { TextComponent} from './text/text.component';
import { OrderListComponent} from './order-list/order-list.component';
import { CategoryComponent} from './category/category.component';
import { ItemsListComponent} from './items-list/items-list.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';
import {OptionComponent} from './option/option.component';
import {ProdajiComponent} from './prodaji/prodaji.component';
import {ZakupkiComponent} from './zakupki/zakupki.component';
import {OptionOrderComponent} from './option-order/option-order.component';
import {PrixodComponent} from './prixod/prixod.component';
import {RasxodComponent} from './rasxod/rasxod.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'text', component: TextComponent },
  { path: 'order', component: OrderListComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'items', component: ItemsListComponent },
  { path: 'продажа', component: OptionComponent },
  { path: 'продажи', component: ProdajiComponent },
  { path: 'закупки', component: ZakupkiComponent },
  { path: 'optionorder', component: OptionOrderComponent },
  { path: 'приход', component: PrixodComponent },
  { path: 'расход', component: RasxodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
