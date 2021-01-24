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
    
    [".reply_list", ".talkm_mid div.r", ".block_r"].forEach(
        (s) =>{Array.from(document.querySelectorAll(s)).forEach((item)=>{item.remove()});}
    );  
  
  
    window.onload = function(){
        [".reply_list", ".talkm_mid div.r", ".block_r"].forEach(
            (s) =>{Array.from(document.querySelectorAll(s)).forEach((item)=>{item.remove()});}
        ); 
    }
})();
