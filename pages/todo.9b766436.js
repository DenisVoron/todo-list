!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var n=r("hX2tT"),i=r("gQ27J");({todoFilter:document.querySelector(".js-filter-input"),todoList:document.querySelector(".todo-list")}).todoFilter.addEventListener("input",(function(e){var t=e.target.value,o=n.default.filter((function(e){return e.text.toLocaleLowerCase().includes(t.toLocaleLowerCase())}));(0,i.default)(o)}))}();
//# sourceMappingURL=todo.9b766436.js.map
