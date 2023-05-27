import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { NumberButtonComponent } from './components/number-button/number-button.component';
import { OperatorButtonComponent } from './components/operator-button/operator-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NumberButtonComponent,
    OperatorButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
