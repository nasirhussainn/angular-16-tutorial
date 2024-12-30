import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Lec3AngularComponentsComponent } from './lec3-angular-components/lec3-angular-components.component';
import { Lec4AngularDirectivesComponent } from './lec4-angular-directives/lec4-angular-directives.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    Lec3AngularComponentsComponent,
    Lec4AngularDirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Include FormsModule in imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
