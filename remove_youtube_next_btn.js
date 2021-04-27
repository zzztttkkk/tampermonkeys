// ==UserScript==
// @name         remove_youtube_next_btn.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.youtube.*/*
// @grant        none
// ==/UserScript==

document.querySelector("a.ytp-next-button.ytp-button").remove();
window.onload = function(){document.querySelector("a.ytp-next-button.ytp-button").remove();}
