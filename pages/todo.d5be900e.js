function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r),r.register("byUEZ",(function(t,o){e(t.exports,"default",(function(){return u}));var n=r("9MOne"),d=r("7XoWb");const i={formTodo:document.querySelector(".form-todo"),todoList:document.querySelector(".todo-list"),todoInput:document.querySelector(".form-input"),todoDeleteBtn:document.querySelector(".todo-list")},l=e=>{const t=e.map(n.default).join("");i.todoList.innerHTML="",i.todoList.insertAdjacentHTML("afterbegin",t)};l(d.default);i.formTodo.addEventListener("submit",(e=>{e.preventDefault();const{text:t}=e.currentTarget;(e=>{const t={id:"10",text:e,isDone:!1};d.default.unshift(t),l(d.default)})(t.value),t.value=""}));var u=l})),r.register("9MOne",(function(t,o){e(t.exports,"default",(function(){return n}));var n=({id:e,text:t,isDone:o})=>`\n        <li class="todo-item" data-id="${e}">\n          <input class="todo-input" type="checkbox" name="todo-done" ${o?"checked":""}/>\n          <div class="todo-text-wrapper">\n          <p class="todo-deskr">${t}\n          </p>\n          <p class="todo-timer">2023-06-15 02:02:02</p>\n          </div>\n          <button class="button-delete" type="button" data-action="delete">X</button>\n        </li>\n        `})),r.register("7XoWb",(function(t,o){e(t.exports,"default",(function(){return n}));var n=[{id:"1",text:"loren",isDone:!0},{id:"2",text:"loren sadad",isDone:!1},{id:"3",text:"loren qewqeqwe",isDone:!0},{id:"4",text:"loren hjkjlkjljlkj",isDone:!1}]})),r("byUEZ");
//# sourceMappingURL=todo.d5be900e.js.map
