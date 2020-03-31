import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ImageDisplayComponent } from './image-display/image-display.component';

const appRoutes: Routes = [
  {
    path: 'image-display',
    component: ImageDisplayComponent,
    data: { title: 'Images' }
  },
  { path: '',
    redirectTo: '/image-display',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ImageDisplayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
