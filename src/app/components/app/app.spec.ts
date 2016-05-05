import {
    it,
    inject,
    injectAsync,
    beforeEachProviders,
<<<<<<< HEAD
    TestComponentBuilder,
} from 'angular2/testing';

// Load the implementations that should be tested
import {App} from './app.component';
import {AppState} from '../../services/app.service';

describe('App', () => {
    // provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
        AppState,
        App
    ]);

    it('should have a url', inject([App], (app) => {
=======
} from '@angular/core/testing';

// Load the implementations that should be tested
import {AppComponent} from './app.component';

describe('App', () => {
    // provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [AppComponent]);

    it('should have a url', inject([AppComponent], (app) => {
>>>>>>> upstream/master
        expect(app.url).toEqual('https://twitter.com/AngularClass');
    }));

});
