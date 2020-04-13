import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoenixLibraryModule } from 'projects/phoenix-library/src/public-api';
import { HomeComponent } from './components/home/home.component';
import { AtlasComponent } from './components/atlas/atlas.component';
import { GeometryComponent } from './components/geometry/geometry.component';
import { LHCbComponent } from './components/lhcb/lhcb.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { PlaygroundVrComponent } from './components/playground-vr/playground-vr.component';
import { TrackmlComponent } from './components/trackml/trackml.component';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'geometry', component: GeometryComponent },
  { path: 'atlas', component: AtlasComponent },
  { path: 'lhcb', component: LHCbComponent },
  { path: 'trackml', component: TrackmlComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'playgroundVR', component: PlaygroundVrComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AtlasComponent,
    GeometryComponent,
    LHCbComponent,
    PlaygroundComponent,
    PlaygroundVrComponent,
    TrackmlComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PhoenixLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
