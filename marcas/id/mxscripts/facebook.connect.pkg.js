﻿
window.fbAsyncInit = function () {
    var $_GET = jsUtil.getScriptsQueryString('facebook\\.connect\\.pkg\\.js');

    var x = FB.init({
        appId: $_GET['API'],
        status: true,
        cookie: true,
        oauth: true,
        xfbml: true
    });

};

(function (d) {
    var js, id = 'facebook-jssdk';
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = '//connect.facebook.net/es_LA/all.js';
    d.getElementsByTagName('head')[0].appendChild(js);
}(document));