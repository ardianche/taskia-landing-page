import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFieldComponent } from './common/input-field/input-field.component';
import { GenericButtonComponent } from './common/generic-button/generic-button.component';
import { TeaSVGComponent } from './common/tea-svg/tea-svg.component';
import { WalletSVGComponent } from './common/wallet-svg/wallet-svg.component';
import { PocketSVGComponent } from './common/pocket-svg/pocket-svg.component';
import { ServiceBoxComponent } from './common/service-box/service-box.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    GenericButtonComponent,
    TeaSVGComponent,
    WalletSVGComponent,
    PocketSVGComponent,
    ServiceBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
