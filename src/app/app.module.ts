import { SvgWindowComponent } from './components/SvgWindow/SvgWindow';
import { ReadBookComponent } from './pages/readBook/readBook.component';
import { BookCardComponent } from './components/BookCard/BookCard';
import { HomeComponent } from './pages/home/home.component';
import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { SvgListComponent } from './components/svg-list/svg-list.component';
import { SvgLetterComponent } from './components/svg-letter/svg-letter.component';
import { SvgLayoutComponent } from './components/svg-layout/svg-layout.component';
import { HtmlArrowComponent } from './components/html-arrow/html-arrow.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { ReadFooterComponent } from './components/read-footer/read-footer.component';
import { MoreSettingComponent } from './components/more-setting/more-setting.component';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookCardComponent,
    ReadBookComponent,
    SvgWindowComponent,
    SvgListComponent,
    SvgLetterComponent,
    SvgLayoutComponent,
    HtmlArrowComponent,
    SvgIconComponent,
    ReadFooterComponent,
    MoreSettingComponent
  ],
  imports: [
    NzInputNumberModule,
    NzSwitchModule,
    NzSelectModule,
    NzSliderModule,
    NzIconModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
