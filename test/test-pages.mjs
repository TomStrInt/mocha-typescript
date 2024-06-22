//import {hello} from "../build/app.js";

import { expect as _expect } from "chai";
let expect = _expect;
import request from 'request';

it('"Hello" page content', function(done) {
    request('http://localhost:8080/hello' , function(error, response, body) {
        //expect(body).to.equal( `Pierwsze wydanie kernela Linuksa miało miejsce`);
        expect(body).to.equal( `\n\n Hello everybody!!! \n\n Pierwsze wydanie kernela Linuksa miało miejsce 5 Pazdziernika 1991  ` );
        done();
    });
});

it('"Hello" page status', function(done) {
    request('http://localhost:8080/hello' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('"Goodbye" page content', function(done) {
    request('http://localhost:8080/goodbye' , function(error, response, body) {
        expect(body).to.equal('Goodbye, world' );
        done();
    });
});

it('"Goodbye" page status', function(done) {
    request('http://localhost:8080/goodbye' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});


it('"/" page content', function(done) {
    request('http://localhost:8080/' , function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
    });
});