// ==UserScript==
// @name         remove_solidot_comments.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.solidot.org/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    Array.from(document.querySelectorAll(".reply_list")).forEach(
        function(item){
            console.log(item);
        }
    );
})();
