!function(){"use strict";var e,t,n=document.querySelector(".nav-container"),i=document.querySelector(".nav-toggle");if(i&&i.addEventListener("click",(function(e){if(i.classList.contains("is-active"))return r(e);var t=document.documentElement;t.classList.add("is-clipped--nav"),i.classList.add("is-active"),n.classList.add("is-active"),t.addEventListener("click",r),l(e)})),n){n.addEventListener("click",l);var a=n.querySelector("[data-panel=menu]");if(!a)return;var c=n.querySelector(".nav"),s=a.querySelector(".is-current-page");s?(function(e){var t,n=e.parentNode;for(;!(t=n.classList).contains("nav-menu");)"LI"===n.tagName&&t.contains("nav-item")&&t.add("is-active","is-current-path"),n=n.parentNode;e.classList.add("is-active")}(s),function(e,t){var n=e.getBoundingClientRect(),i=n.height,a=window.getComputedStyle(c);"sticky"===a.position&&(i-=n.top-parseFloat(a.top));e.scrollTop=Math.max(0,.5*(t.getBoundingClientRect().height-i)+t.offsetTop)}(a,s.querySelector(".nav-link"))):a.scrollTop=0,(e=a,t=".nav-item-toggle",[].slice.call(e.querySelectorAll(t))).forEach((function(e){var t=e.parentElement;e.addEventListener("click",o.bind(t));var n=function(e,t){var n;if("nextElementSibling"in e)n=e.nextElementSibling;else for(n=e;(n=n.nextSibling)&&1!==n.nodeType;);return n&&t?n[n.matches?"matches":"msMatchesSelector"](t)&&n:n}(e,".nav-text");n&&(n.style.cursor="pointer",n.addEventListener("click",o.bind(t)))})),c.querySelector(".context").addEventListener("click",(function(){var e=c.querySelector(".is-active[data-panel]"),t="menu"===e.dataset.panel?"explore":"menu";e.classList.toggle("is-active"),c.querySelector("[data-panel="+t+"]").classList.toggle("is-active")})),a.addEventListener("mousedown",(function(e){e.detail>1&&e.preventDefault()}))}function o(){this.classList.toggle("is-active")}function r(e){var t=document.documentElement;t.classList.remove("is-clipped--nav"),i.classList.remove("is-active"),n.classList.remove("is-active"),t.removeEventListener("click",r),l(e)}function l(e){e.stopPropagation()}}();
!function(){"use strict";var e=document.querySelector("article.doc"),t=document.querySelector(".toolbar");function n(t,o){return e.contains(t)?n(t.offsetParent,t.offsetTop+o):o}function o(e){e&&(window.location.hash="#"+this.id,e.preventDefault()),window.scrollTo(0,n(this,0)-t.getBoundingClientRect().bottom)}window.addEventListener("load",(function e(t){var n,i;(n=window.location.hash)&&(i=document.getElementById(n.slice(1)))&&(o.bind(i)(),setTimeout(o.bind(i),0)),window.removeEventListener("load",e)})),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach((function(e){var t,n;(t=e.hash.slice(1))&&(n=document.getElementById(t))&&e.addEventListener("click",o.bind(n))}))}();
!function(){"use strict";var e=document.querySelector(".page-versions .version-menu-toggle");if(e){var t=document.querySelector(".page-versions");e.addEventListener("click",(function(e){t.classList.toggle("is-active"),e.stopPropagation()})),document.documentElement.addEventListener("click",(function(){t.classList.remove("is-active")}))}}();
document.addEventListener("DOMContentLoaded",(function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);0!==t.length&&t.forEach((function(t){t.addEventListener("click",(function(e){e.stopPropagation(),t.classList.toggle("is-active"),document.getElementById(t.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar")}))}))}));