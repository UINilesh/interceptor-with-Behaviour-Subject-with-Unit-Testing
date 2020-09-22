import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDetailsComponent } from './components/list-details/list-details.component';
import { AlbumbsService } from './services/albumbs.service';
import { AuthInterceptor, ParamInterceptor } from './interceptor/interceptor.service';
import { FilterPipe } from './searchdata/filter.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { Demo3Component } from './components/demo3/demo3.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDetailsComponent,
    FilterPipe,
    Demo1Component,
    Demo2Component,
    Demo3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AlbumbsService,{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true 
     }, {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    }       
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
