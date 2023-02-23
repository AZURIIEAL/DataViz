import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './sidebarOptions/dashboard/dashboard.component';
import { ChartsComponent } from './sidebarOptions/charts/charts.component';
import { AboutComponent } from './sidebarOptions/about/about.component';
import { appRoutes } from 'src/routes';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './chartSections/bar-chart/bar-chart.component';
import { LineChartComponent } from './chartSections/line-chart/line-chart.component';
import { PieChartComponent } from './chartSections/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    ChartsComponent,
    AboutComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
