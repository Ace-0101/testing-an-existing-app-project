const EventEmitter = require('events');
const { expect } = require('chai');
const { getBodyFromRequest } = require('../get-body-from-request');
describe("The getBodyFromRequest function", () => {
    let fakeReq = null;

    beforeEach(() => {
        fakeReq = new EventEmitter();
    });

    it('returns an empty string for no body', done => {


        getBodyFromRequest(fakeReq).then(res => {
            if (res === '') {
                done()
            } else {
                done('error no content')
            }

        })

        fakeReq.emit('end')


    });

    it('returns the data read from the stream', done => {





        fakeReq.emit('data')
        fakeReq.emit('end')

    });
});