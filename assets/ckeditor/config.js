/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
  config.extraPlugins='wordcount,notification,codesnippet';
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
config.codeSnippet_theme = 'github-gist';
config.allowedContent = true;
 config.filebrowserBrowseUrl='/images/';
config.filebrowserUploadUrl = '/author/image/upload';

};
