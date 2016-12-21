import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgReduxModule, NgRedux } from 'ng2-redux';

import { store } from './shared/buildReduxStore';

/* Services */
import { AppActions, ChartsActions } from './actions';
import ApiBridge from './shared/ApiBridge';

/* Components */
import { AppComponent } from './app.component';
import { SearchComponent } from './containers/search/search.component';
import { ChartsComponent } from './containers/charts/charts.component';
import { TrackComponent } from './components/track/track.component';



@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        ChartsComponent,
        TrackComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        NgReduxModule.forRoot()
    ],
    providers: [ChartsActions, AppActions, ApiBridge],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(ngRedux: NgRedux<any>) {
        ngRedux.provideStore(store);
    }
}
