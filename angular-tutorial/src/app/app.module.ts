import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Lec3AngularComponentsComponent } from './lec3-angular-components/lec3-angular-components.component';
import { Lec4AngularDirectivesComponent } from './lec4-angular-directives/lec4-angular-directives.component';
import { FormsModule } from '@angular/forms';
import { Lec5PipesComponent } from './lec5-pipes/lec5-pipes.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { Lec6AngularServicesComponent } from './lec6-angular-services/lec6-angular-services.component';
import { Lec7ApiIntegrationComponent } from './lec7-api-integration/lec7-api-integration.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Lec3AngularComponentsComponent,
    Lec4AngularDirectivesComponent,
    Lec5PipesComponent,
    ReversePipe,
    Lec6AngularServicesComponent,
    Lec7ApiIntegrationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Include FormsModule in imports
    HttpClientModule,  // Include HttpClientModule in imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
