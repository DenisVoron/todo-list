function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},e.parcelRequired7c6=r),r.register("byUEZ",(function(e,n){t(e.exports,"default",(function(){return p}));var o=r("bEzwx"),i=r("fvNaP"),a=r("ltUby"),u=r("6a1T6"),s=r("8xiyC");let c=a.readTodos();const l=s.default.element().querySelector(".form-todo"),d={todoList:document.querySelector(".todo-list"),todoInput:document.querySelector(".form-input"),todoItem:document.querySelector(".todo-item")},f=()=>{const t=c.map(i.default).join("");d.todoList.innerHTML="",d.todoList.insertAdjacentHTML("afterbegin",t)};f();l.addEventListener("submit",(t=>{t.preventDefault();const{text:e}=t.currentTarget;(t=>{const e={id:(0,o.default)(),text:t,isDone:!1,date:Date.now()};a.createTodo(e),c=a.readTodos(),s.default.close(),(0,u.clearTextTodoImput)(),f()})(e.value),e.value=""}));d.todoList.addEventListener("click",(t=>{const e=t.target,n=e.closest("li");switch(e.nodeName){case"BUTTON":(({id:t})=>{a.removeTodo(t),c=a.readTodos(),f()})(n.dataset);break;case"INPUT":(({id:t})=>{a.updateTodo(t)})(n.dataset)}}));var p=f})),r.register("bEzwx",(function(e,n){t(e.exports,"default",(function(){return u}));var o=r("7OiRl"),i=r("kknQe"),a=r("7YxFJ");var u=function(t,e,n){if(o.default.randomUUID&&!e&&!t)return o.default.randomUUID();const r=(t=t||{}).random||(t.rng||i.default)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(let t=0;t<16;++t)e[n+t]=r[t];return e}return(0,a.unsafeStringify)(r)}})),r.register("7OiRl",(function(e,n){t(e.exports,"default",(function(){return o}));var o={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)}})),r.register("kknQe",(function(e,n){let o;t(e.exports,"default",(function(){return i}));const r=new Uint8Array(16);function i(){if(!o&&(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!o))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(r)}})),r.register("7YxFJ",(function(e,n){t(e.exports,"unsafeStringify",(function(){return i}));r("jPUoq");const o=[];for(let t=0;t<256;++t)o.push((t+256).toString(16).slice(1));function i(t,e=0){return(o[t[e+0]]+o[t[e+1]]+o[t[e+2]]+o[t[e+3]]+"-"+o[t[e+4]]+o[t[e+5]]+"-"+o[t[e+6]]+o[t[e+7]]+"-"+o[t[e+8]]+o[t[e+9]]+"-"+o[t[e+10]]+o[t[e+11]]+o[t[e+12]]+o[t[e+13]]+o[t[e+14]]+o[t[e+15]]).toLowerCase()}})),r.register("jPUoq",(function(e,n){t(e.exports,"default",(function(){return i}));var o=r("bjlDU");var i=function(t){return"string"==typeof t&&o.default.test(t)}})),r.register("bjlDU",(function(e,n){t(e.exports,"default",(function(){return o}));var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i})),r.register("fvNaP",(function(e,n){t(e.exports,"default",(function(){return o}));var o=({id:t,text:e,isDone:n,date:o})=>`\n        <li class="todo-item" data-id="${t}">\n          <input class="todo-input" type="checkbox" name="todo-done" ${n?"checked":""}/>\n          <div class="todo-text-wrapper">\n          <p class="todo-deskr">${e}</p>\n          <p class="todo-timer">${new Date(o)}</p>\n          </div>\n          <button class="button-delete" type="button" data-action="delete">X</button>\n        </li>\n        `})),r.register("ltUby",(function(e,n){t(e.exports,"createTodo",(function(){return r})),t(e.exports,"readTodos",(function(){return i})),t(e.exports,"updateTodo",(function(){return a})),t(e.exports,"removeTodo",(function(){return u}));const o="todo",r=t=>{const e=i();e.unshift(t),localStorage.setItem(o,JSON.stringify(e))},i=()=>{let t=[];try{t=JSON.parse(localStorage.getItem(o))}catch(t){console.log(t.message)}return t||[]},a=t=>{let e=i();e=e.map((e=>e.id===t?{...e,isDone:!e.isDone}:e)),localStorage.setItem(o,JSON.stringify(e))},u=t=>{let e=i();e=e.filter((e=>e.id!==t)),localStorage.setItem(o,JSON.stringify(e))}})),r.register("6a1T6",(function(e,n){t(e.exports,"clearTextTodoImput",(function(){return a}));const o=r("8xiyC").default.element().querySelector(".form-input"),i="input-text",a=()=>{localStorage.removeItem(i)};o.value=(()=>{try{return localStorage.getItem(i)}catch(t){console.log(t)}})()||"",o.addEventListener("input",(t=>{var e;(e=t.target.value)&&localStorage.setItem(i,e)}))})),r.register("8xiyC",(function(e,n){t(e.exports,"default",(function(){return i}));const o=r("9B8F0").create('\n    <div class="modal">\n        <form class="form-todo">\n            <label class="form-label">\n              <span class="form-text">Enter text</span>\n              <input type="text" name="text" class="form-input" />\n            </label>\n            <button class="btn-form pointer" type="submit">Add Todo</button>\n          </form>\n    </div>');document.querySelector(".btn-add").addEventListener("click",(()=>o.show()));var i=o})),r.register("9B8F0",(function(t,e){t.exports=function t(e,n,o){function r(a,u){if(!n[a]){if(!e[a]){var s=void 0;if(!u&&s)return s(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}};e[a][0].call(l.exports,(function(t){return r(e[a][1][t]||t)}),l,l.exports,t,e,n,o)}return n[a].exports}for(var i=void 0,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(t,e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=t.trim(),!0===e?n.children:n.firstChild},r=function(t,e){var n=t.children;return 1===n.length&&n[0].tagName===e},i=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};n.visible=i,n.create=function(t,e){var n=function(t,e){var n=o('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=n.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return i.appendChild(t)}));var a=r(i,"IMG"),u=r(i,"VIDEO"),s=r(i,"IFRAME");return!0===a&&n.classList.add("basicLightbox--img"),!0===u&&n.classList.add("basicLightbox--video"),!0===s&&n.classList.add("basicLightbox--iframe"),n}(t=function(t){var e="string"==typeof t,n=t instanceof HTMLElement==1;if(!1===e&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(o(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),a=function(t){return!1!==e.onClose(u)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(t)||t.parentElement.removeChild(t),e()}),410),!0}(n,(function(){if("function"==typeof t)return t(u)}))};!0===e.closable&&n.addEventListener("click",(function(t){t.target===n&&a()}));var u={element:function(){return n},visible:function(){return i(n)},show:function(t){return!1!==e.onShow(u)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(n,(function(){if("function"==typeof t)return t(u)}))},close:a};return u}},{}]},{},[1])(1)})),r("byUEZ");
//# sourceMappingURL=todo.638489cf.js.map
