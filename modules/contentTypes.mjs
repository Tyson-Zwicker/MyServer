export function getContentType(ext){
	var i=0
	for (i;i<extTypeArray.length; i++){
		if (extTypeArray[i].ext = ext){
			return extTypeArray[i].type;
		}
	}
	return '';
}
const extTypeArray = [
	{ 'ext': 'acc', 'type': 'audio/acc' },
	{ 'ext': 'bmp', 'type': 'image/bmp' },
	{ 'ext': 'css', 'type': 'text/css' },
	{ 'ext': 'csv', 'type:': 'text/csv' },
	{ 'ext': 'doc', 'type': 'application/msword' },
	{ 'ext': 'docx', 'type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
	{ 'ext': 'gif', 'type': 'image/gif' }, 
	{ 'ext': 'htm', 'type': 'text/html' },
	{ 'ext': 'html', 'type': 'text/html' },
	{ 'ext': 'ico', 'type': 'image/vnd.microsoft.icon' }, 
	{ 'ext': '.js', 'type': 'text/javascript' },
	{ 'ext': 'json', 'type': 'application/json' },
	{ 'ext': 'mjs', 'type': 'text/javascript' },
	{ 'ext': 'mp3', 'type': 'audio/mpeg' }, 
	{ 'ext': 'mp4', 'type': 'vidio/mp4' }, 
	{ 'ext': 'mpeg', 'type': 'vidio/mpeg' },
	{ 'ext': 'odp', 'type': 'application/vnd.oasis.opendocument.presentation' },
	{ 'ext': 'ods', 'type': 'application/vnd.oasis.opendocument.spreadsheet' },
	{ 'ext': 'odt', 'type': 'application/vnd.oasis.opendocument.text' },
	{ 'ext': 'oga', 'type': 'audio/ogg' },
	{ 'ext': 'ogv', 'type': 'vidio/ogg' },
	{ 'ext': 'ogx', 'type': 'application/ogg' },
	{ 'ext': 'otf', 'type': 'font/otf' },
	{ 'ext': 'png', 'type': 'image/png' },
	{ 'ext': 'pdf', 'type': 'application/pdf' },
	{ 'ext': 'rtf', 'type': 'text/rtf' },
	{ 'ext': 'svg', 'type': 'image/svg+xml' },
	{ 'ext': 'ttf', 'type': 'font/ttf' },
	{ 'ext': 'text', 'type': 'text/text' },
	{ 'ext': 'data', 'type': 'text/text' }, 
	{ 'ext': 'dat', 'type': 'text/text' },
	{ 'ext': 'readme', 'type': 'text/text' },
	{ 'ext': 'wave', 'type': 'audio/wav' },
	{ 'ext': 'wav', 'type': 'audio/wav' },
	{ 'ext': 'xls', 'type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
	{ 'ext': 'xml', 'type': 'application/xml' },
	{ 'ext': 'zip', 'type': 'application/zip' },
	{ 'ext': '7z', 'type': 'application/x-7z-compressed' }
];

