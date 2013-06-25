CKEDITOR.editorConfig = function( config ) {
    config.language = 'de';
    config.height = '200px';
    config.removePlugins = 'elementspath';
    config.extraPlugins = 'autogrow,clipboard,font,wordcount';
    config.contentsCss = '/javascripts/ckeditor/contents.css';
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
