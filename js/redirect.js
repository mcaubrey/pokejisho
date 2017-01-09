/* global getCookie */

var cookieLanguage = getCookie("lang");
var pageLanguage = window.location.href.indexOf("jisho.com/ja") !== -1 ? "en" : "ja";
var pageLanguage = window.location.href.indexOf("jisho.com/en") !== -1 &&
    window.location.href.indexOf("jisho.com/ha") !== -1 ? "" : pageLanguage;
var redirectDestination = cookieLanguage === "" ? pageLanguage : cookieLanguage;

if (redirectDestination !== "") {
    window.location.replace("http://www.pokejisho.com/" + redirectDestination + "/jisho");
}
