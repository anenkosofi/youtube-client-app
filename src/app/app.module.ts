import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { YoutubeListComponent } from './components/youtube-list/youtube-list.component';
import { YoutubeItemComponent } from './components/youtube-item/youtube-item.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LogoComponent } from './components/logo/logo.component';
import { UserBarComponent } from './components/user-bar/user-bar.component';
import { FilterByWordComponent } from './components/filter-by-word/filter-by-word.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    YoutubeListComponent,
    YoutubeItemComponent,
    SearchBarComponent,
    SettingsComponent,
    LogoComponent,
    UserBarComponent,
    FilterByWordComponent,
    FilterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AngularSvgIconModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
