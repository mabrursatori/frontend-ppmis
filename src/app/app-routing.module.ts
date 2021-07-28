import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './parts/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { ListArticleComponent } from './pages/list-article/list-article.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { CanActivate } from '@angular/router';
import { IsLoginGuard } from './guard/is-login.guard';
import { IsLogoutGuard } from './guard/is-logout.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article/:id', component: ArticleComponent},
  {path: 'list-article/:type/:keyword', component: ListArticleComponent},
  {path: 'list-article/:type', component: ListArticleComponent},
  { path: 'login', component: LoginComponent, canActivate : [IsLogoutGuard] },
  {
    path: 'admin',
    loadChildren:()=>import('./pages/admin/admin.module').then(mod => mod.AdminModule),
    canActivate : [IsLoginGuard]
  },
  { path: '**', component: ErrorComponent },
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
