// fs_file_module.js
// 디렉토리에 있는 파일을 읽을때


var fs = require("fs");

fs.readFile('./hello.txt', encoding = 'utf-8', function(err, data) {
	if (err) {
		throw err;
	}
	console.log(data + " Node.js!");
});