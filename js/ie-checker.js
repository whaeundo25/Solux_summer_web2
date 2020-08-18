;( function() {
	var ua = navigator.userAgent.toLowerCase();
	var latest = 14;

	function addClass( version ) {
		var classNames = '';
		classNames += ' is-ie';
		classNames += ' ie' + version;
		for( var i = version + 1; i <= latest; i++ ) {
			classNames +=  ' lt-ie' + i;
		}
		document.getElementsByTagName( 'html' )[ 0 ].className += classNames;
	}

	if( /edge\/([0-9]{1,}[\.0-9]{0,})/.test( ua ) ) {
		ua = /edge\/([0-9]{1,}[\.0-9]{0,})/.exec( ua );
		if( ua ) {
			var version = parseInt( ua[ 1 ] );
		}

		addClass( version );
	}
	else if( ua.indexOf( 'msie' ) != -1 || ua.indexOf( 'trident' ) != -1 ) {
		var version = 11;
		ua = /msie ([0-9]{1,}[\.0-9]{0,})/.exec( ua );
		if( ua ) {
			var version = parseInt( ua[ 1 ] );
		}
		
		addClass( version );
	}
} )();