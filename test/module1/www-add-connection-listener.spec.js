// const td = require('testdouble');
// const WebSocket = td.replace('ws');
// const anything = td.matchers.anything();
// const { EventEmitter } = require('events');

describe('bin/www', () => {
  // let wss;

  // beforeEach(() => {
  //   wss = new EventEmitter();
  //   td.when(new WebSocket.Server()).thenReturn(wss);
  // });

  // afterEach(() => td.reset());

  // let onStub;
  // before(() => {
  //   onStub = sinon.stub().returns({});
  //   proxyquire("../../bin/www", {
  //     http: {
  //       listen: sinon.stub()
  //     },
  //     ws: sinon.stub().returns({
  //       on: onStub
  //     })
  //   });
  // });

  it('should contain wss "connection" listener @www-add-connection-listener.spec', () => {
    assert.fail()
    // assert(onStub.calledOnce, '`wss.on` has not been called.')
    // assert(
    //   listenStub.calledWithExactly("connection", sinon.match.func),
    //   '`wss.on` was not called with the correct arguments.'
    // )


    // let wss;
    // wwwModule.__set__("wss", new EventEmitter())
    // try {
    //   wss = wwwModule.__get__('wss');
    // } catch (err) {
    //   assert(wss !== undefined, 'Has the `ws` module been required and assigned to a `const` called `WebSocket` in `www`?');
    // }
    // let wssListener = wwwModule.__get__("wss.on")
    // console.log("-- This is wss:\n")
    // console.log(wss)
    // console.log("this is on: " + wssListener)

    // var spy = sinon.spy();

    // wss.on('connection', spy);
    // assert(wss.on.calledOnce())
    // wss.emit('connection');
    // assert(spy.called)
    // sinon.assert.calledOnce()

  });
});