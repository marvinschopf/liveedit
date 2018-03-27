"use strict";
var editor;

function transformContent() {
  var $frame = $('.result');
  var doc = $frame[0].contentWindow.document;
  var $body = $('html',doc);
  $body.html(editor.getValue());
  Cookies.set('content', editor.getValue());
}

function getStartupValue() {

  return '<!DOCTYPE html>\n<html>\n<head>\n <meta charset="utf-8">\n</head>\n<body>\n \n</body>\n</html>';

}

function changeTheme(darkOrWhite) {
  if(darkOrWhite == "dark") {
    editor.updateOptions({theme:'vs-dark'});
  } else if(darkOrWhite == "white") {
    editor.updateOptions({theme:'vs'});
  }
}

require.config({ paths: { 'vs': 'lib/monaco/min/vs' }});
	require(['vs/editor/editor.main'], function() {
		editor = monaco.editor.create(document.getElementById('code'), {
			value: getStartupValue(),
			language: 'html',
      scrollBeyondLastLine: false,
      theme: 'vs'
		});
    editor.updateOptions({theme:'vs'});

	});
