// ==UserScript==
// @name         remove_solidot_comments.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.solidot.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = function(){
        Array.from(document.querySelectorAll(".reply_list")).forEach((item)=>{item.remove()});
    }
})();
