
var createEntry = function(text, tag) {

    return {
        tag: tag,
        text: text
    };

};

var getFileORG = function ( cb ) {

    var url = 'file:///Users/trigrou/Documents/org/trigrou.org';
    var xhr = new XMLHttpRequest();

    xhr.open( 'GET', url );

    xhr.addEventListener( 'load', function ( event ) {
        cb( xhr.response );
    } );

    xhr.send( null );

};

var filterFileORG = function( fileContent ) {

    //var reg = 'TODO (.*)';
    var reg = 'TODO (?!NOTE)(.*)';
    var result = fileContent.match( new RegExp( reg, 'g' ) );
    var lineRegExp = new RegExp( reg );

    var listTodo = [];

    result.forEach( function ( res ) {
        var val = res.match( lineRegExp );

        // be sure to match what we want
        if ( val.length > 1 ) {
            var text = val[1];
            listTodo.push( createEntry( text ) );
        }

    } );

    // last element are the most recent
    listTodo.reverse();
    renderTaskList(listTodo);
    console.log( listTodo );
};

var main = function() {
    var bg_url = backgrounds[rnd_index].file;
    console.log( bg_url );
//    $('.background').css('background-image', 'linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(' + bg_url + ')');
    getFileORG( filterFileORG );
};

var renderTask = function( task ) {
    return '' +
        '<div class=task>' +
        task.text +
        '</div>';

};

var renderTaskList = function( taskList ) {
    var str = '';
    for( var i = 0; i < taskList.length; i++ ) {
        str += renderTask( taskList[i] );
    }
    $('#task-container').empty().html(str);
    return str;
};

window.addEventListener( 'load', main, true );
