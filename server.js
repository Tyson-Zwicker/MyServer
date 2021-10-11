/* 	Installing:
		npm init
		npm install mysql
	Remember:
		Always pass __dirname to modules because they will have their own __dirname if they resolved it.
		GET only works on public folder
		POST only for apps.
		DELETE and PUT not supported.
*/
import * as http from 'http';
import * as path from 'path';
import * as url from 'url';
import * as fs from  'fs';
import * as time from './modules/time.mjs';
import * as ct from './modules/contentTypes.mjs';
import * as errs from './modules/errorPages.mjs';
const port = 2001;
var __dirname = '';
var publicPath = '';
var appPath = '';
var appNameList = [];
var currentRequests = 0;
var totalRequests = 0;
StartUp();
const httpserver = http.createServer (
	function (req,resp){
		currentRequests++;
		totalRequests++;
		console.log('  >HTTP Request recieved ['+ currentRequests+']['+ totalRequests +']...');
		if (req.method == 'GET') HTTPGet(req, resp);
		else if (req.method=='POST') HTTPPost (req,resp);
		else {
			var errpage = errs.get405err(req.method);
			resp.statusCode=200;
			resp.send(errpage);
			resp.end();
			currentRequests--;
		}
	}
);

function StartUp(){
	const startTime = time.getTimeStamp();
	console.log('    >Server Started on Port ['+ port +'].');
	console.log('    >Current Time [' + time.getTimeStampString() + '].'); 
	__dirname = path.dirname(url.fileURLToPath(import.meta.url));
	console.log('    >Primary Dirname [' + __dirname + '].');
	appPath = path.join(__dirname, 'apps');
	console.log('    >Applications Path [' + appPath + '].');
	var filesInAppFolder = fs.readdirSync(appPath);
	console.log('        >Found [' + filesInAppFolder.length + '] Applications.');
	for (var i = 0; i < filesInAppFolder.length; i++) {
		var nameWithoutExtension = path.basename (filesInAppFolder[i],'mjs');
		appNameList[i] = nameWithoutExtension;
		console.log('    >' + i + ':  Application Name [' + nameWithoutExtension[i] + '].');
		//HOW TO DYNAMICALLY LOAD THE APPS..
		//-has to be done at top level.
		//ie.. not in a function..
	}
	publicPath = path.join(__dirname, 'public');
	console.log('    >Public Path [' + publicPath + '].');
	const publicFiles = fs.readdirSync (publicPath);
	console.log('        >Found ['+ publicFiles.length + '] Public Files.');
	console.log('>Starting Http..');
	httpserver.listen(port);
}

function HTTPGet(req, resp){
	console.log('     >GET [' + req.url + '].');
	var filePath = path.join(publicPath, (req.url=='/')? 'index.html': req.url);
	console.log('        >File Path [' + filePath + '].');
	var ext = path.extname(filePath).substr(1);
	console.log('        >Resolving Content-Type...');
	var contentType = ct.getContentType(ext);
	var content = ''; //Will be set to errpages or,if possible, the desired content.
	if (contentType == '') {
		console.log('            >Error"  Content-Type Unresolvable.');
		content = errs.get415err(ext);
	}else{
		console.log('        >Verifying File is in PublicPath...');
		var parentPath = path.join(__dirname, 'public');
		var safe = path.relative(filePath, parentPath).startsWith('..');
		if (safe) {
			console.log('        >Reading File...');
			try {
				content = fs.readFileSync(filePath);
				console.log('            >File read. Size = [' + content.length + '].');
			} catch (err) {
				if (err.message.indexOf('ENOENT')) {
					console.log('            >Error: File Not Found.');
					content = errs.getErr404(req.url);
				} else {
					console.log('            >Error:  [' + err.message + '].');
					content = errs.getErr500('            >Error While Reading Content');
				}
			}
		} else {//Not Safe
			console.log ('            >Error: File Outside of PublicPath.');
			content = errs.getError403('Files Cannot be Served from Request Path.');
		}	
	}
	console.log ('    >Returning HTTPResponse.');
	resp.statusCode = 200;
	resp.write(content);
	resp.end();
	currentRequests--;
	console.log ('    >Response Sent.');
}

function HTTPPost(req, resp){
	console.log('    >POST [' + req.url + '].');
	resp.write (errs.getErr405 ('POST'));
	resp.end();
	currentRequests--;
}
