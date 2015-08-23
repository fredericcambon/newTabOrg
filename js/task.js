var getFileORG = function ( cb ) {

    var url = 'file:///Users/trigrou/Documents/org/trigrou.org';
    var xhr = new XMLHttpRequest();

    xhr.open( 'GET', url );

    xhr.addEventListener( 'load', function ( event ) {
        cb( xhr.response );
    } );

    xhr.send( null );

};


var parseFileORG = function ( file ) {
    var arrayList = [];
    var array = file.split( /(\*+ DONE |\*+ TODO )/ );
    var maxEntry = 10;
    var lineIndex = array.length - 1;

    var content;

    while ( lineIndex ) {

        var line = array[ lineIndex ];
        // check line
        var done = line.match( /^\*+ DONE/ );
        // done found skip 2 lines
        if ( done ) {
            lineIndex--;
            continue;
        }

        var todo = line.match( /^\*+ TODO/ );

        if ( todo ) {
            var split = content.split( '\n' );
            var todoTitle = split[ 0 ];
            split.splice( 0, 1 );
            arrayList.push( {
                todo: todoTitle,
                content: split.join( '\n' )
            } );
        } else
            content = line;
        lineIndex--;

        if ( arrayList.length === maxEntry ) break;
    }

    return arrayList;
};

var filterFileORG = function ( fileContent ) {
    var list = parseFileORG( fileContent );
    renderTaskList( list );
};


var filterPullRequest = function () {

    window.getPullRequest().done(function( pr ) {

        var authorList = [ 'AurL', 'Kuranes', 'stephomi' ];

        var filterdPR = pr.filter( function ( entry ) {
            return ( authorList.indexOf( entry.user.login ) !== -1 );
        } );

        var list = filterdPR.map( function ( e ) {
            return {
                todo: e.title,
                content: e.html_url
            };
        } );
        console.log( list );
        renderPRList( list );
    });
};

var main = function () {
    var bg_url = backgrounds[ rnd_index ].file;
    console.log( bg_url );
    //    $('.background').css('background-image', 'linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(' + bg_url + ')');

    getFileORG( filterFileORG );
    filterPullRequest();
};


var renderTask = function ( task ) {
    return '' +
        '<div class=task>' +
        '<div class="task-title">' +
        task.todo +
        '</div>' +
        '<div class="task-content">' +
        task.content +
        '</div>' +
        '</div>';
};

//https://www.pivotaltracker.com/n/projects/770035/stories/
var renderPR = function ( task ) {
    return '' +
        '<div class=task>' +
        '<div class="task-title">' +
        task.todo +
        '</div>' +
        '<div class="task-content">' +
        '<a href="' +
        task.content + '" target=_blank>' +
        task.content +
        '</a>' +

        '</div>' +
        '</div>';
};

var renderTaskList = function ( taskList ) {
    var str = '';
    for ( var i = 0; i < taskList.length; i++ ) {
        str += renderTask( taskList[ i ] );
    }
    $( '#task-container' ).empty().html( str );
    return str;
};


var renderPRList = function ( taskList ) {
    var str = '';
    for ( var i = 0; i < taskList.length; i++ ) {
        str += renderPR( taskList[ i ] );
    }
    $( '#pullrequest-container' ).empty().html( str );
    return str;
};


window.addEventListener( 'load', main, true );
