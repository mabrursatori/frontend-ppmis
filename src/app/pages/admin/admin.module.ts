import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { AdminComponent } from './admin.component';

import {Table, TableModule} from 'primeng/table';
import { ArticleComponent } from './article/article.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {Galleria, GalleriaModule} from 'primeng/galleria';
import {DialogModule} from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message'
import {ChartModule} from 'primeng/chart';
import { SafeHtmlPipe } from 'src/app/pipe/safe-html.pipe';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {DropdownModule} from 'primeng/dropdown';
import {EditorModule} from 'primeng/editor';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { AppModule } from 'src/app/app.module';
import { ExternalModule } from 'src/app/external/external.module';

const routes : Routes =[
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component : DashboardComponent
      },
      {
        path: 'article',
        component : ArticleComponent
      },
      {
        path: 'contact',
        component : ContactComponent
      },
      {
        path: 'profile',
        component : ProfileComponent
      },
      {
        path: 'slideshow',
        component : SlideshowComponent
      },
      {
        path: 'user',
        component : UserComponent
      },
      {
        path: '',
        component : DashboardComponent
      },
    ]
  }
];

@NgModule({
  declarations: [
    EventComponent,
    ArticleComponent,
    SlideshowComponent,
    ProfileComponent,
    ContactComponent,
    UserComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    GalleriaModule,
    DialogModule,
    FileUploadModule,
    HttpClientModule,
    ConfirmDialogModule,
    FormsModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    CKEditorModule,
    CascadeSelectModule,
    DropdownModule,
    EditorModule,
    ToggleButtonModule,
    ChartModule,
    ExternalModule
  ],
  
})
export class AdminModule { }
