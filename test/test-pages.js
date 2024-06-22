//import {hello} from "../build/app.js";

import { expect as _expect } from "chai";
let expect = _expect;
import request from 'request';

it('Main page content', function(done) {
    request('http://localhost:8080' , function(error, response, body) {
        expect(body).to.equal( `Pierwsze wydanie kernela Linuksa miało miejsce`);
        //expect(body).to.equal( `\n\n Hello everybody!!! \n\n Pierwsze wydanie kernela Linuksa miało miejsce 5 Pazdziernika 1991  ` );
        done();
    });
});