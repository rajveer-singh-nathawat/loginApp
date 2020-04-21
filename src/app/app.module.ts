import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialcompModule } from './materialcomponent/materialcomp.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestInterceptorModule } from './sharedservices/httpinterceptor/httpintercepter.service';
import { AuthorizationGuardService } from './sharedservices/routeguard/authorization-guard.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialcompModule,
    HttpClientModule,
    HttpRequestInterceptorModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])
  ],
  providers: [AuthorizationGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
