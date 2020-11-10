import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderContainerComponent } from './components/header-container/header-container.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { TransitionOverlayComponent } from './components/transition-overlay/transition-overlay.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { TransitionContentOverlayComponent } from './components/transition-content-overlay/transition-content-overlay.component';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderContainerComponent,
    ContentContainerComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    InfoPageComponent,
    TransitionOverlayComponent,
    MenuPageComponent,
    ServicesPageComponent,
    ContactPageComponent,
    TransitionContentOverlayComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
