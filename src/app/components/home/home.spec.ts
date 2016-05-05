import {
    it,
    inject,
    injectAsync,
    describe,
    beforeEachProviders,
<<<<<<< HEAD
    TestComponentBuilder,
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';

// Load the implementations that should be tested
import {Home} from './home.component';
import {Title} from '../../services/title/title.service';
import {AppState} from '../../services/app.service';
=======
} from '@angular/core/testing';

import {Component} from '@angular/core';
import {BaseRequestOptions, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

// Load the implementations that should be tested
import {HomeComponent} from './home.component';
>>>>>>> upstream/master

describe('Home', () => {
    // provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
        BaseRequestOptions,
        MockBackend,
<<<<<<< HEAD
        provide(Http, {
            useFactory: function(backend, defaultOptions) {
                return new Http(backend, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
        }),

        AppState,
        Title,
        Home
    ]);

    it('should have default data', inject([Home], (home) => {
        expect(home.localState).toEqual({ value: '' });
    }));

    it('should have a title', inject([Home], (home) => {
        expect(!!home.title).toEqual(true);
    }));

    it('should log ngOnInit', inject([Home], (home) => {
=======
        {
            provide: Http,
            useFactory: function(backend, defaultOptions) {
                return new Http(backend, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions],
        },
        HomeComponent,
    ]);

    it('should have default data', inject([HomeComponent], (home) => {
        expect(home.localState).toEqual({ value: '' });
    }));

    it('should log ngOnInit', inject([HomeComponent], (home) => {
>>>>>>> upstream/master
        spyOn(console, 'log');
        expect(console.log).not.toHaveBeenCalled();

        home.ngOnInit();
        expect(console.log).toHaveBeenCalled();
    }));

});
