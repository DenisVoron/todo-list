!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e};new(function(){"use strict";function r(n){var s=n.count,i=n.selector;e(t)(this,r),this.refs={},this.count=s,this.parent=document.querySelector(i),this.parent.insertAdjacentHTML("beforeend",function(e){return'<fieldset class="widgets-fieldset widgets-counter">\n        <legend>Counter</legend>\n        <button class="button decrease pointer" type="button">-</button>\n        <span class="js-field-counter">'.concat(e,'</span>\n        <button class="button increase pointer" type="button">+</button>\n     </fieldset>')}(this.count)),this.refs.valueCount=this.parent.querySelector(".js-field-counter"),this.refs.increaseBtn=this.parent.querySelector(".increase"),this.refs.decreaseBtn=this.parent.querySelector(".decrease"),this.refs.increaseBtn.addEventListener("click",this.increaseCount.bind(this)),this.refs.decreaseBtn.addEventListener("click",this.decreaseCount.bind(this))}return e(n)(r,[{key:"render",value:function(){this.refs.valueCount.textContent=this.count}},{key:"increaseCount",value:function(){this.count+=1,this.render()}},{key:"decreaseCount",value:function(){this.count-=1,this.render()}}]),r}())({count:0,selector:".counter"})}();
//# sourceMappingURL=widgets.94bf2e1d.js.map
