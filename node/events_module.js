// events_module.js
// 노드에서 비동기 이벤트를 생성하고 관리하도록 해주는 모듈

var EventEmitter = require("events").EventEmitter;
var evt = new EventEmitter();

evt.on("helloNode", function(str) {
	console.log("Hello! " + str);
});

setTimeout(function() {
	evt.emit("helloNode", "Node.js");
}, 3000);