!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))};var r,i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),v=Object.prototype.toString,b=Math.max,g=Math.min,p=function(){return m.Date.now()};function y(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function v(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function y(e){return c=e,f=setTimeout(h,t),s?v(e):u}function w(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=p();if(w(e))return S(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function S(e){return f=void 0,m&&r?v(e):(r=i=void 0,u)}function T(){var e=p(),n=w(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return y(l);if(d)return f=setTimeout(h,t),v(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=O(t)||0,j(n)&&(s=!!n.leading,a=(d="maxWait"in n)?b(O(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:S(p())},T}function j(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var r=f.test(t);return r||l.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}function w(){var t=e(n)(["Всі поля мають бути заповнені!"]);return w=function(){return t},t}r=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return j(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var h=document.querySelector(".feedback-form");h.addEventListener("input",e(r)((function(){var e={email:h.elements.email.value,message:h.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500));var S=localStorage.getItem("feedback-form-state");if(S){var T=JSON.parse(S);h.elements.email.value=T.email,h.elements.message.value=T.message}h.addEventListener("submit",(function(e){if(e.preventDefault(),""!==h.elements.email.value&&""!==h.elements.message.value){localStorage.removeItem("feedback-form-state");var t={email:h.elements.email.value,message:h.elements.message.value};console.log(t),h.reset()}else alert(w())}))}();
//# sourceMappingURL=03-feedback.b63322d7.js.map
