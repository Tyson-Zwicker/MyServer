export function get400err(err) {
	var s = '<html>';
	s += '\t<head><title>Bad request</title></head>';
	s += '<body>The request could not be processsed: '+err.message+'</body>';
	s += '</html>';
	return s;
}
export function get403err(filename) {
	var s = '<html>';
	s += '\t<head><title>Forbidden</title></head>';
	s += '<body>Resource [' + filename + '] cannot be served.</body>';
	s += '</html>';
	return s;
}
export function get404err(filename) {
	var s = '<html>';
	s += '\t<head><title>Resource not Found</title></head>';
	s += '<body>Resource [' + filename + '] is not found.</body>';
	s += '</html>';
	return s;
}
export function get405err(method) {
	var s = '<html>';
	s += '\t<head><title>Method not supported</title></head>';
	s += '<body>Method [' + method + '] is not supported.</body>';
	s += '</html>';
	return s;
}
export function get413error() {
	var s = '<html>';
	s += '\t<head><title>Too much data.</title></head>';
	s += '<body> The server will not accept more than 4 KB of post data per request.</body>';
	s += '</html>';
	return s;
}
export function get415err(ext) {
	var s = '<html>';
	s += '\t<head><title>Media Type not supported</title></head>';
	s += '<body>File types with extension [' + ext + '] cannot be served.</body>';
	s += '</html>';
	return s;
}

export function get500err(err) {
	var s = '<html>';
	s += '\t<head><title>Server Error</title></head>';
	s += '<body>And error occured: [' + err + ']</body>';
	s += '</html>';
	return s;
}
export function get501err(appName) {
	var s = '<html>';
	s += '\t<head><title>Not Implemented</title></head>';
	s += '<body>The requested app [' +appName+'] does not exist.';
	s += '</html>';
	return s;
}