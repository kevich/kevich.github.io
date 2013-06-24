/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

var detect = function () {
    var extraPluginsSettings;

    if (navigator.userAgent.match(/safari/i)) {
        extraPluginsSettings = 'clipboard,font';
    }
    else {
        extraPluginsSettings = 'autogrow,clipboard,font';
    }

    return extraPluginsSettings;
};


CKEDITOR.editorConfig = function( config ) {
    config.language = 'de';
    config.height = '200px';
    config.width = 600;
    config.removePlugins = 'elementspath';
    config.extraPlugins = detect();
    config.contentsCss = '/c/content.css';
    config.enterMode = CKEDITOR.ENTER_BR;
    config.baseHref = '/';
    config.toolbar = [
        ['Source', '-', 'Bold', 'Italic', '-', 'Subscript','Superscript', '-',
            'NumberedList', 'BulletedList', '-', 'Link', 'Unlink']
    ];
};

CKEDITOR.on( 'dialogDefinition', function( ev ) {
    var dialogName = ev.data.name;
    var dialogDefinition = ev.data.definition;

    // Check if the definition is from the dialog we're
    // interested on (the Link dialog).
    if (dialogName === 'link') {
        // FCKConfig.LinkDlgHideAdvanced = true
        dialogDefinition.removeContents('advanced');

        // FCKConfig.LinkDlgHideTarget = true
        dialogDefinition.removeContents('target');
    }

});
