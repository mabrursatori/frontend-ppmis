import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {Card, CardModule} from 'primeng/card';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './parts/navbar/navbar.component';
import { CaraoselComponent } from './parts/caraosel/caraosel.component';
import { FeaturesComponent } from './parts/features/features.component';
import { HeroComponent } from './parts/hero/hero.component';
import { NewsListComponent } from './parts/news-list/news-list.component';
import { FooterComponent } from './parts/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { BreadcrumbComponent } from './parts/breadcrumb/breadcrumb.component';
import { ContentArticleComponent } from './parts/content-article/content-article.component';
import { VerticalArticleComponent } from './parts/vertical-article/vertical-article.component';
import { ListArticleComponent } from './pages/list-article/list-article.component';
import { ContentListArticleComponent } from './parts/content-list-article/content-list-article.component';
import { AdminComponent } from './pages/admin/admin.component';


import {MenuModule} from 'primeng/menu';
import {CalendarModule} from 'primeng/calendar';
import {SidebarModule} from 'primeng/sidebar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {TableModule} from 'primeng/table';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { IsLoginGuard } from './guard/is-login.guard';
import { IsLogoutGuard } from './guard/is-logout.guard';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message'
import { ToastModule } from 'primeng/toast';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import { ExternalModule } from './external/external.module';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CaraoselComponent,
    FeaturesComponent,
    HeroComponent,
    NewsListComponent,
    FooterComponent,
    HomeComponent,
    ArticleComponent,
    BreadcrumbComponent,
    ContentArticleComponent,
    VerticalArticleComponent,
    ListArticleComponent,
    ContentListArticleComponent,
    AdminComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CarouselModule,
    CardModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenuModule,
    CalendarModule,
    SidebarModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    MatFormFieldModule,
    MessageModule,
    MessagesModule,
    ExternalModule,
    ToastModule,
    ProgressSpinnerModule
  ],
  providers: [
    IsLoginGuard,
    IsLogoutGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
