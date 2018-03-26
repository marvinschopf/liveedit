"use strict";
var editor;

function transformContent() {
  var $frame = $('.result');
  var doc = $frame[0].contentWindow.document;
  var $body = $('html',doc);
  $body.html(editor.getValue());
}

require.config({ paths: { 'vs': 'lib/monaco/min/vs' }});
	require(['vs/editor/editor.main'], function() {
		editor = monaco.editor.create(document.getElementById('code'), {
			value: [
				'<!DOCTYPE html>',
        '<html>',
        '<head>',
        ' <meta charset="utf-8">',
        '</head>',
        '<body>',
        ' ',
        '</body>',
        '</html>'
			].join('\n'),
			language: 'html',
      scrollBeyondLastLine: false,
      theme: 'vs-dark'
		});
    setInterval(transformContent, 1);
	});
