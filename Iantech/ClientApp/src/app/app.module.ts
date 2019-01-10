import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CompetidoresComponent } from './competidores/competidores.component';
import { CompetidoresService } from './services/competidores.service';
import { CompetidorFormComponent } from './competidores/competidor-form/competidor-form.component';

// Angular Material

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
  MatExpansionModule, MatDatepickerModule, MatInputModule, MatTabsModule,
  MatTooltipModule, MatFormFieldModule, MatMenuModule, MatSnackBarModule, MatTableModule, MatPaginatorModule, MatSortModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';


//-----------------


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CompetidoresComponent,
    CompetidorFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'competidores', component: CompetidoresComponent }
    ]),
    [BrowserAnimationsModule],
    [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatMenuModule,
      MatExpansionModule, MatInputModule, MatTabsModule, MatTooltipModule, MatFormFieldModule,
      MatSnackBarModule, MatTableModule, MatPaginatorModule, MatSortModule
    ],
    MatDialogModule,
    MatSelectModule,
    MatGridListModule,
    MatRadioModule,
    MatIconModule
  ],
  providers: [CompetidoresService],
  bootstrap: [AppComponent],
  entryComponents: [CompetidorFormComponent]
})
export class AppModule { }
