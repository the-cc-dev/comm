test('adds item to queue if no waiting', function(done) {
  co(function*() {
    var deque = new Deque();
    deque.should.have.lengthOf(0);
    deque.push(1);
    deque.should.have.lengthOf(1);
    deque.push(2);
    deque.should.have.lengthOf(2);
    deque._dequeState.queue[0][0].should.equal(1);
    deque._dequeState.queue[1][0].should.equal(2);
  })(done);
});

test('forwards item to getter waiting', function(done) {
  co(function*() {
    var deque = new Deque();
    var shift = deque.shift();

    yield deque.push(1);

    var res = yield shift;
    res.should.equal(1);
  })(done);
});