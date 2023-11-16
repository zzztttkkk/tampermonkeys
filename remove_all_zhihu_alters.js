// ==UserScript==
// @name         Remove All Message Alter
// @description  0.0
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       You
// @match        *.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const clear = ()=>{
        if(!document.title.startsWith("(")) return;

        const parts = document.title.split(")");
        document.title = parts.slice(1).join(")");
        Array.from(document.querySelectorAll("div.css-njwx7m")).forEach(node => {
            node.remove();
        });
    };

    window.onload = ()=>{
        clear();

        let title = document.title;
        Object.defineProperty(document, 'title', {
            get: () => {
                return title;
            },
            set: v => {
                title = `${v}`;
                clear();
            },
        });
    }
})();
