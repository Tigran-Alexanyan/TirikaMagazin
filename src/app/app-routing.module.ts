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


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'text', component: TextComponent },
  { path: 'order', component: OrderListComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'items', component: ItemsListComponent },
  { path: 'option', component: OptionComponent },
  // {path: '**', component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
