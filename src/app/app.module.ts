import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadCreateComponent } from './head-create/head-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeadCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
