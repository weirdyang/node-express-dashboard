const source = fs.readFileSync(path.join(process.cwd(), 'public/javascripts/log-viewer.js'), 'utf8');
const logViewer = jscs(source);

describe('log-viewer.js', () => {
  it('should send a message to the WebSocket server @log-viewer-send-message', () => {
    // const connection = logViewer.findVariable('connection');
    // const logWindowMatch = {
    //   'init.callee.object.name': 'document',
    //   'init.callee.property.name': 'querySelector',
    //   'init.arguments.0.value': '#log-window'
    // };
    // assert(matchObj(connection, logWindowMatch), 'Are you getting a reference to the log window using `document.querySelector()`');

    // item.id = 'item-' + order;
    // const onopen = logViewer.findPropertyAssignment('connection', 'onopen');
    // const onopenMatch = {
    //   'right.type': 'BinaryExpression',
    //   'right.left.value': '()',
    //   'right.operator': '=>',
    //   'right.right.name': '{ connection.send("Hello from the client!") }'
    // };
    // assert(matchObj(onopen, onopenMatch), "Are you giving the `item` the `id` of `'item-' + order`?");

    // const onopen = logViewer.findPropertyAssignment('connection', 'onopen');
    // // const onopen = logViewer.findFunction('onopen');

    // const send = logViewer.findCall('send');
    // const sendMatch = {
    //   'callee.object.name': 'connection',
    //   'callee.property.name': 'appendChild',
    //   'arguments.0.name': 'Hello from the client!'
    // };
    // assert(matchObj(send, sendMatch), 'Are you appending `input` to `item`?');

  });
});