var GITHUB_TOKEN='NONE';
var GITHUB_API='https://api.github.com/repos/sketchfab/showwebgl/pulls';

var getGithubURL= function (options) {
    var url = GITHUB_API + '?access_token='+ GITHUB_TOKEN;
    if (options) {
        url += options;
    }
    return url;
};

var getPullRequest = function() {
    var url = getGithubURL('&state=open');
    return $.getJSON(url);
};
