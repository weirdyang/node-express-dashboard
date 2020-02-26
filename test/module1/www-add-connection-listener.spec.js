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

  // const wss = ast.findVariable('wss');
  // const drop = ast.findCall('forEach').findLiteral('drop');
  // const eventParamDrop = findEventParam(drop);

  it('should contain wss "connection" listener @www-add-connection-listener.spec', () => {
  //   const drag_start = wss.findLiteral('dragstart');
  //   const drag_start_match = {
  //     'callee.object.name': 'item',
  //     'callee.property.name': 'addEventListener',
  //   };
  //   assert(matchObj(drag_start, drag_start_match), 'Are you adding an event listener to `item` that listens for the `dragstart` event?');

  //   const drag_start_handler_arrow = { 
  //     'arguments.1.type': 'ArrowFunctionExpression',
  //     'arguments.1.params.0.name': 'event'
  //   };
  //   const drag_start_handler_function = { 
  //     'arguments.1.type': 'FunctionExpression',
  //     'arguments.1.params.0.name': 'event'
  //   };
  //   assert(matchObj(drag_start, drag_start_handler_arrow) || matchObj(drag_start, drag_start_handler_function), 'Do you have a `dragend` handler function?');

  //   const set_data = drag_start.findCall('setData');
  //   const set_data_match = {
  //     'callee.object.object.name': 'event',
  //     'callee.object.property.name': 'dataTransfer',
  //     'callee.property.name': 'setData',
  //     'arguments.0.value': 'text',
  //     'arguments.1.object.object.name': 'event',
  //     'arguments.1.object.property.name': 'target',
  //     'arguments.1.property.name': 'id'
  //   };
  //   assert(matchObj(set_data, set_data_match), 'In the `dragstart` event handler are you setting the `text` of the `dataTransfer` to `event.target.id`?');


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