import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


// Routes
import { APP_ROUTING } from './app.routes';

// Services

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { InputComponent } from './components/input/input.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { ApiComponent } from './components/api/api.component';
import { BocaComponent } from './components/input/boca/boca.component';
import { RiverComponent } from './components/input/river/river.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    InputComponent,
    TablaComponent,
    ApiComponent,
    BocaComponent,
    RiverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
