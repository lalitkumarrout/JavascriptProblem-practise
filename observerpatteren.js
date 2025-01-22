class Move {
  constructor() {
    this.handlers = [];
  }

  subscribe(fn) {
    this.handlers.push(fn);
  }

  unsubscribe(fn) {
    this.handlers = this.handlers.filter((item) => item !== fn);
  }

  fire(o, thisObj) {
    const scope = thisObj || (typeof window !== "undefined" ? window : global);

    this.handlers.forEach((item) => {
      item.call(scope, o);
    });
  }
}

const movehandler = function (item) {
  console.log("fired " + item);
};

const movehandler2 = function (item) {
  console.log("moved " + item);
};

const move = new Move();

move.subscribe(movehandler);
move.fire("event 1");

move.unsubscribe(movehandler);
move.fire("event 2");

move.subscribe(movehandler);
move.subscribe(movehandler2);
move.fire("event 3");
