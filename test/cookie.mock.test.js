const assert = require('assert');
const DocumentCookie = require('../cookie.mock');


describe(`cookie.mock`, function () {
    describe(`DocumentCookie`, function () {
        it(`should create a mock of document.cookie`, function () {
            const document = new DocumentCookie();
            assert.equal(document.cookie, '');
        });

        it(`should append new values to the cookie when using = assignment`, function () {
            const document = new DocumentCookie();
            document.cookie = "test1=one";
            document.cookie = "test2=two";
            assert.equal(document.cookie, 'test1=one; test2=two');
        });

        it(`should replace unkeyed values`, function () {
            const document = new DocumentCookie();
            document.cookie = "test1";
            assert.equal(document.cookie, 'test1');
            document.cookie = "test2";
            assert.equal(document.cookie, 'test2');
            document.cookie = undefined;
            assert.equal(document.cookie, 'undefined');
            document.cookie = "test3";
            assert.equal(document.cookie, 'test3');
            document.cookie = null;
            assert.equal(document.cookie, 'null');
            document.cookie = "0";
            assert.equal(document.cookie, '0');
            document.cookie = "1";
            assert.equal(document.cookie, '1');
            document.cookie = true;
            assert.equal(document.cookie, 'true');
            document.cookie = "hi";
            assert.equal(document.cookie, 'hi');
            document.cookie = false;
            assert.equal(document.cookie, 'false');
            document.cookie = [1,2,"hello"];
            assert.equal(document.cookie, '1,2,hello');
            document.cookie = {};
            assert.equal(document.cookie, '[object Object]');
        });

        it(`should handle nulls and undefineds`, function () {
            const document = new DocumentCookie();
            document.cookie = null;
            assert.equal(document.cookie, 'null');
            document.cookie = undefined;
            assert.equal(document.cookie, 'undefined');
            document.cookie = "test2=two";
            assert.equal(document.cookie, 'undefined; test2=two');
        });

        it(`should handle undefineds and nulls`, function () {
            const document = new DocumentCookie();
            document.cookie = undefined;
            assert.equal(document.cookie, 'undefined');
            document.cookie = null;
            assert.equal(document.cookie, 'null');
            document.cookie = "test2=two";
            assert.equal(document.cookie, 'null; test2=two');
        });

        it(`should add an empty item when setting empty values`, function () {
            const document = new DocumentCookie();
            document.cookie = "test1=one";
            document.cookie = "test2=two";
            document.cookie = "";
            document.cookie = "test4=four";
            assert.equal(document.cookie, 'test1=one; test2=two; ; test4=four');
        });

        it(`should clear a key-value when setting an expired date to it`, function () {
            const document = new DocumentCookie();
            document.cookie = "test1=one";
            document.cookie = "test2=two";
            assert.equal(document.cookie, 'test1=one; test2=two');
            document.cookie = "test1=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            assert.equal(document.cookie, 'test2=two');
            document.cookie = "test1=oneone;";
            assert.equal(document.cookie, 'test1=oneone; test2=two');
        });
    });
});