var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,c=f||a||Function("return this")(),l=Object.prototype.toString,s=Math.max,p=Math.min,d=function(){return c.Date.now()};function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var f=i.test(t);return f||r.test(t)?u(t.slice(2),f?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var o,i,r,u,f,a,c=0,l=!1,g=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=o,r=i;return o=i=void 0,c=e,u=t.apply(r,n)}function h(t){return c=t,f=setTimeout(T,e),l?m(t):u}function j(t){var n=t-a;return void 0===a||n>=e||n<0||g&&t-c>=r}function T(){var t=d();if(j(t))return w(t);f=setTimeout(T,function(t){var n=e-(t-a);return g?p(n,r-(t-c)):n}(t))}function w(t){return f=void 0,y&&o?m(t):(o=i=void 0,u)}function O(){var t=d(),n=j(t);if(o=arguments,i=this,a=t,n){if(void 0===f)return h(a);if(g)return f=setTimeout(T,e),m(a)}return void 0===f&&(f=setTimeout(T,e)),u}return e=b(e)||0,v(n)&&(l=!!n.leading,r=(g="maxWait"in n)?s(b(n.maxWait)||0,e):r,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=i=f=void 0},O.flush=function(){return void 0===f?u:w(d())},O};const g={input:document.querySelector("#search-box")};console.log(g.input);fetch("https://restcountries.com/v2/name/poland?fields=name,capital,population,flags,languages").then((t=>t.json())).then((t=>{console.log(t[0].flags.svg)})),g.input.addEventListener("input",e((function(t){console.log(t.target.value)}),300));
//# sourceMappingURL=index.45c87fa5.js.map
