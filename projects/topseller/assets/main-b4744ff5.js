import{S as Bt}from"./svg-inject-2d400d85.js";var Q=function(i,e){return Q=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])},Q(i,e)};function b(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Q(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var p=function(){return p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},p.apply(this,arguments)};function S(i){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&i[e],n=0;if(t)return t.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&n>=i.length&&(i=void 0),{value:i&&i[n++],done:!i}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function jt(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,a=[],o;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return a}function Ut(i,e,t){if(t||arguments.length===2)for(var n=0,r=e.length,a;n<r;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return i.concat(a||Array.prototype.slice.call(e))}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var F=function(){function i(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(i,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),i.prototype.init=function(){},i.prototype.destroy=function(){},i}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var T=function(){function i(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];this.root=e,this.initialize.apply(this,Ut([],jt(n))),this.foundation=t===void 0?this.getDefaultFoundation():t,this.foundation.init(),this.initialSyncWithDOM()}return i.attachTo=function(e){return new i(e,new F({}))},i.prototype.initialize=function(){},i.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},i.prototype.initialSyncWithDOM=function(){},i.prototype.destroy=function(){this.foundation.destroy()},i.prototype.listen=function(e,t,n){this.root.addEventListener(e,t,n)},i.prototype.unlisten=function(e,t,n){this.root.removeEventListener(e,t,n)},i.prototype.emit=function(e,t,n){n===void 0&&(n=!1);var r;typeof CustomEvent=="function"?r=new CustomEvent(e,{bubbles:n,detail:t}):(r=document.createEvent("CustomEvent"),r.initCustomEvent(e,n,!1,t)),this.root.dispatchEvent(r)},i}();/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function D(i){return i===void 0&&(i=window),Vt(i)?{passive:!0}:!1}function Vt(i){i===void 0&&(i=window);var e=!1;try{var t={get passive(){return e=!0,!1}},n=function(){};i.document.addEventListener("test",n,t),i.document.removeEventListener("test",n,t)}catch{e=!1}return e}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function St(i,e){var t=i.matches||i.webkitMatchesSelector||i.msMatchesSelector;return t.call(i,e)}function zt(i){var e=i;if(e.offsetParent!==null)return e.scrollWidth;var t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var n=t.scrollWidth;return document.documentElement.removeChild(t),n}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var qt={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Rt=function(i){b(e,i);function e(t){var n=i.call(this,p(p({},e.defaultAdapter),t))||this;return n.shakeAnimationEndHandler=function(){n.handleShakeAnimationEnd()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return qt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(t){var n=e.cssClasses.LABEL_SHAKE;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.float=function(t){var n=e.cssClasses,r=n.LABEL_FLOAT_ABOVE,a=n.LABEL_SHAKE;t?this.adapter.addClass(r):(this.adapter.removeClass(r),this.adapter.removeClass(a))},e.prototype.setRequired=function(t){var n=e.cssClasses.LABEL_REQUIRED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleShakeAnimationEnd=function(){var t=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(t)},e}(F);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Wt=function(i){b(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.shake=function(t){this.foundation.shake(t)},e.prototype.float=function(t){this.foundation.float(t)},e.prototype.setRequired=function(t){this.foundation.setRequired(t)},e.prototype.getWidth=function(){return this.foundation.getWidth()},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(r){return t.root.classList.add(r)},removeClass:function(r){return t.root.classList.remove(r)},getWidth:function(){return zt(t.root)},registerInteractionHandler:function(r,a){return t.listen(r,a)},deregisterInteractionHandler:function(r,a){return t.unlisten(r,a)}};return new Rt(n)},e}(T);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var E={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Xt=function(i){b(e,i);function e(t){var n=i.call(this,p(p({},e.defaultAdapter),t))||this;return n.transitionEndHandler=function(r){n.handleTransitionEnd(r)},n}return Object.defineProperty(e,"cssClasses",{get:function(){return E},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(E.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(E.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(t){this.adapter.setStyle("transform-origin",t+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(E.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(t){var n=this.adapter.hasClass(E.LINE_RIPPLE_DEACTIVATING);t.propertyName==="opacity"&&n&&(this.adapter.removeClass(E.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(E.LINE_RIPPLE_DEACTIVATING))},e}(F);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var $t=function(i){b(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.activate=function(){this.foundation.activate()},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.setRippleCenter=function(t){this.foundation.setRippleCenter(t)},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(r){return t.root.classList.add(r)},removeClass:function(r){return t.root.classList.remove(r)},hasClass:function(r){return t.root.classList.contains(r)},setStyle:function(r,a){return t.root.style.setProperty(r,a)},registerEventHandler:function(r,a){return t.listen(r,a)},deregisterEventHandler:function(r,a){return t.unlisten(r,a)}};return new Xt(n)},e}(T);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ht={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},at={NOTCH_ELEMENT_PADDING:8},Z={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Nt=function(i){b(e,i);function e(t){return i.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return Ht},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Z},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return at},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(t){var n=e.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=at.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(t),this.adapter.addClass(n)},e.prototype.closeNotch=function(){var t=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(t),this.adapter.removeNotchWidthProperty()},e}(F);/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Gt=function(i){b(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){this.notchElement=this.root.querySelector(Ht.NOTCH_ELEMENT_SELECTOR);var t=this.root.querySelector("."+Rt.cssClasses.ROOT);t?(t.style.transitionDuration="0s",this.root.classList.add(Z.OUTLINE_UPGRADED),requestAnimationFrame(function(){t.style.transitionDuration=""})):this.root.classList.add(Z.NO_LABEL)},e.prototype.notch=function(t){this.foundation.notch(t)},e.prototype.closeNotch=function(){this.foundation.closeNotch()},e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(r){return t.root.classList.add(r)},removeClass:function(r){return t.root.classList.remove(r)},setNotchWidthProperty:function(r){t.notchElement.style.setProperty("width",r+"px")},removeNotchWidthProperty:function(){t.notchElement.style.removeProperty("width")}};return new Nt(n)},e}(T);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Kt={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Qt={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},ot={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},M;function Zt(i,e){e===void 0&&(e=!1);var t=i.CSS,n=M;if(typeof M=="boolean"&&!e)return M;var r=t&&typeof t.supports=="function";if(!r)return!1;var a=t.supports("--css-vars","yes"),o=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return n=a||o,e||(M=n),n}function Jt(i,e,t){if(!i)return{x:0,y:0};var n=e.x,r=e.y,a=n+t.left,o=r+t.top,s,u;if(i.type==="touchstart"){var c=i;s=c.changedTouches[0].pageX-a,u=c.changedTouches[0].pageY-o}else{var l=i;s=l.pageX-a,u=l.pageY-o}return{x:s,y:u}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var st=["touchstart","pointerdown","mousedown","keydown"],ut=["touchend","pointerup","mouseup","contextmenu"],k=[],Ft=function(i){b(e,i);function e(t){var n=i.call(this,p(p({},e.defaultAdapter),t))||this;return n.activationAnimationHasEnded=!1,n.activationTimer=0,n.fgDeactivationRemovalTimer=0,n.fgScale="0",n.frame={width:0,height:0},n.initialSize=0,n.layoutFrame=0,n.maxRadius=0,n.unboundedCoords={left:0,top:0},n.activationState=n.defaultActivationState(),n.activationTimerCallback=function(){n.activationAnimationHasEnded=!0,n.runDeactivationUXLogicIfReady()},n.activateHandler=function(r){n.activateImpl(r)},n.deactivateHandler=function(){n.deactivateImpl()},n.focusHandler=function(){n.handleFocus()},n.blurHandler=function(){n.handleBlur()},n.resizeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return Kt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Qt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ot},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple();if(this.registerRootHandlers(n),n){var r=e.cssClasses,a=r.ROOT,o=r.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(a),t.adapter.isUnbounded()&&(t.adapter.addClass(o),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,r=n.ROOT,a=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(r),t.adapter.removeClass(a),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var n,r;if(t){try{for(var a=S(st),o=a.next();!o.done;o=a.next()){var s=o.value;this.adapter.registerInteractionHandler(s,this.activateHandler)}}catch(u){n={error:u}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var n,r;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var a=S(ut),o=a.next();!o.done;o=a.next()){var s=o.value;this.adapter.registerDocumentInteractionHandler(s,this.deactivateHandler)}}catch(u){n={error:u}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}},e.prototype.deregisterRootHandlers=function(){var t,n;try{for(var r=S(st),a=r.next();!a.done;a=r.next()){var o=a.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(s){t={error:s}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,n;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var r=S(ut),a=r.next();!a.done;a=r.next()){var o=a.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(s){t={error:s}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,n=e.strings,r=Object.keys(n);r.forEach(function(a){a.indexOf("VAR_")===0&&t.adapter.updateCssVariable(n[a],null)})},e.prototype.activateImpl=function(t){var n=this;if(!this.adapter.isSurfaceDisabled()){var r=this.activationState;if(!r.isActivated){var a=this.previousActivationEvent,o=a&&t!==void 0&&a.type!==t.type;if(!o){r.isActivated=!0,r.isProgrammatic=t===void 0,r.activationEvent=t,r.wasActivatedByPointer=r.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var s=t!==void 0&&k.length>0&&k.some(function(u){return n.adapter.containsEventTarget(u)});if(s){this.resetActivationState();return}t!==void 0&&(k.push(t.target),this.registerDeactivationHandlers(t)),r.wasElementMadeActive=this.checkElementMadeActive(t),r.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){k=[],!r.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(r.wasElementMadeActive=n.checkElementMadeActive(t),r.wasElementMadeActive&&n.animateActivation()),r.wasElementMadeActive||(n.activationState=n.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,n=e.strings,r=n.VAR_FG_TRANSLATE_START,a=n.VAR_FG_TRANSLATE_END,o=e.cssClasses,s=o.FG_DEACTIVATION,u=o.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var l="",d="";if(!this.adapter.isUnbounded()){var f=this.getFgTranslationCoordinates(),h=f.startPoint,v=f.endPoint;l=h.x+"px, "+h.y+"px",d=v.x+"px, "+v.y+"px"}this.adapter.updateCssVariable(r,l),this.adapter.updateCssVariable(a,d),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(s),this.adapter.computeBoundingRect(),this.adapter.addClass(u),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},c)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,n=t.activationEvent,r=t.wasActivatedByPointer,a;r?a=Jt(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):a={x:this.frame.width/2,y:this.frame.height/2},a={x:a.x-this.initialSize/2,y:a.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:a,endPoint:o}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,r=this.activationState,a=r.hasDeactivationUXRun,o=r.isActivated,s=a||!o;s&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(n)},ot.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,n=this.activationState;if(n.isActivated){var r=p({},n);n.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(r)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(r),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var n=t.wasActivatedByPointer,r=t.wasElementMadeActive;(n||r)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var n=Math.max(this.frame.height,this.frame.width),r=function(){var o=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return o+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?n:r();var a=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&a%2!==0?this.initialSize=a-1:this.initialSize=a,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,n=t.VAR_FG_SIZE,r=t.VAR_LEFT,a=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(r,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(a,this.unboundedCoords.top+"px"))},e}(F);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var lt=function(i){b(e,i);function e(){var t=i!==null&&i.apply(this,arguments)||this;return t.disabled=!1,t}return e.attachTo=function(t,n){n===void 0&&(n={isUnbounded:void 0});var r=new e(t);return n.isUnbounded!==void 0&&(r.unbounded=n.isUnbounded),r},e.createAdapter=function(t){return{addClass:function(n){return t.root.classList.add(n)},browserSupportsCssVars:function(){return Zt(window)},computeBoundingRect:function(){return t.root.getBoundingClientRect()},containsEventTarget:function(n){return t.root.contains(n)},deregisterDocumentInteractionHandler:function(n,r){return document.documentElement.removeEventListener(n,r,D())},deregisterInteractionHandler:function(n,r){return t.root.removeEventListener(n,r,D())},deregisterResizeHandler:function(n){return window.removeEventListener("resize",n)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return St(t.root,":active")},isSurfaceDisabled:function(){return!!t.disabled},isUnbounded:function(){return!!t.unbounded},registerDocumentInteractionHandler:function(n,r){return document.documentElement.addEventListener(n,r,D())},registerInteractionHandler:function(n,r){return t.root.addEventListener(n,r,D())},registerResizeHandler:function(n){return window.addEventListener("resize",n)},removeClass:function(n){return t.root.classList.remove(n)},updateCssVariable:function(n,r){return t.root.style.setProperty(n,r)}}},Object.defineProperty(e.prototype,"unbounded",{get:function(){return!!this.isUnbounded},set:function(t){this.isUnbounded=!!t,this.setUnbounded()},enumerable:!1,configurable:!0}),e.prototype.activate=function(){this.foundation.activate()},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.layout=function(){this.foundation.layout()},e.prototype.getDefaultFoundation=function(){return new Ft(e.createAdapter(this))},e.prototype.initialSyncWithDOM=function(){var t=this.root;this.isUnbounded="mdcRippleIsUnbounded"in t.dataset},e.prototype.setUnbounded=function(){this.foundation.setUnbounded(!!this.isUnbounded)},e}(T);/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Dt={ROOT:"mdc-text-field-character-counter"},Yt={ROOT_SELECTOR:"."+Dt.ROOT};/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Tt=function(i){b(e,i);function e(t){return i.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Dt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Yt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setCounterValue=function(t,n){t=Math.min(t,n),this.adapter.setContent(t+" / "+n)},e}(F);/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var te=function(i){b(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={setContent:function(r){t.root.textContent=r}};return new Tt(n)},e}(T);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var x={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},U={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},ct={LABEL_SCALE:.75},ee=["pattern","min","max","required","step","minlength","maxlength"],ne=["color","date","datetime-local","month","range","time","week"];/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var dt=["mousedown","touchstart"],ft=["click","keydown"],re=function(i){b(e,i);function e(t,n){n===void 0&&(n={});var r=i.call(this,p(p({},e.defaultAdapter),t))||this;return r.isFocused=!1,r.receivedUserInput=!1,r.valid=!0,r.useNativeValidation=!0,r.validateOnValueChange=!0,r.helperText=n.helperText,r.characterCounter=n.characterCounter,r.leadingIcon=n.leadingIcon,r.trailingIcon=n.trailingIcon,r.inputFocusHandler=function(){r.activateFocus()},r.inputBlurHandler=function(){r.deactivateFocus()},r.inputInputHandler=function(){r.handleInput()},r.setPointerXOffset=function(a){r.setTransformOrigin(a)},r.textFieldInteractionHandler=function(){r.handleTextFieldInteraction()},r.validationAttributeChangeHandler=function(a){r.handleValidationAttributeChange(a)},r}return Object.defineProperty(e,"cssClasses",{get:function(){return U},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return x},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ct},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var t=this.getNativeInput().type;return ne.indexOf(t)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,n,r,a;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var o=S(dt),s=o.next();!s.done;s=o.next()){var u=s.value;this.adapter.registerInputInteractionHandler(u,this.setPointerXOffset)}}catch(d){t={error:d}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}try{for(var c=S(ft),l=c.next();!l.done;l=c.next()){var u=l.value;this.adapter.registerTextFieldInteractionHandler(u,this.textFieldInteractionHandler)}}catch(d){r={error:d}}finally{try{l&&!l.done&&(a=c.return)&&a.call(c)}finally{if(r)throw r.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var t,n,r,a;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var o=S(dt),s=o.next();!s.done;s=o.next()){var u=s.value;this.adapter.deregisterInputInteractionHandler(u,this.setPointerXOffset)}}catch(d){t={error:d}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}try{for(var c=S(ft),l=c.next();!l.done;l=c.next()){var u=l.value;this.adapter.deregisterTextFieldInteractionHandler(u,this.textFieldInteractionHandler)}}catch(d){r={error:d}}finally{try{l&&!l.done&&(a=c.return)&&a.call(c)}finally{if(r)throw r.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(t){var n=this;t.some(function(r){return ee.indexOf(r)>-1?(n.styleValidity(!0),n.adapter.setLabelRequired(n.getNativeInput().required),!0):!1}),t.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(t){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(t){var n=this.adapter.getLabelWidth()*ct.LABEL_SCALE;this.adapter.notchOutline(n)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(t){if(!(this.isDisabled()||this.adapter.hasOutline())){var n=t.touches,r=n?n[0]:t,a=r.target.getBoundingClientRect(),o=r.clientX-a.left;this.adapter.setLineRippleTransformOrigin(o)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity(t),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput().value=t),this.setcharacterCounter(t.length),this.validateOnValueChange){var n=this.isValid();this.styleValidity(n)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(t){this.valid=t,this.styleValidity(t);var n=!t&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(n)},e.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange=t},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation=t},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(t){this.getNativeInput().disabled=t,this.styleDisabled(t)},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon&&this.trailingIcon.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon&&this.trailingIcon.setContent(t)},e.prototype.setcharacterCounter=function(t){if(this.characterCounter){var n=this.getNativeInput().maxLength;if(n===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(t,n)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(t){var n=e.cssClasses.INVALID;if(t?this.adapter.removeClass(n):this.adapter.addClass(n),this.helperText){this.helperText.setValidity(t);var r=this.helperText.isValidation();if(!r)return;var a=this.helperText.isVisible(),o=this.helperText.getId();a&&o?this.adapter.setInputAttr(x.ARIA_DESCRIBEDBY,o):this.adapter.removeInputAttr(x.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(t){var n=e.cssClasses.FOCUSED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.styleDisabled=function(t){var n=e.cssClasses,r=n.DISABLED,a=n.INVALID;t?(this.adapter.addClass(r),this.adapter.removeClass(a)):this.adapter.removeClass(r),this.leadingIcon&&this.leadingIcon.setDisabled(t),this.trailingIcon&&this.trailingIcon.setDisabled(t)},e.prototype.styleFloating=function(t){var n=e.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.getNativeInput=function(){var t=this.adapter?this.adapter.getNativeInput():null;return t||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(F);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var O={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},H={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+O.ROOT};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Et=function(i){b(e,i);function e(t){return i.call(this,p(p({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return O},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return H},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(H.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.isPersistent=function(){return this.adapter.hasClass(O.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(t){t?this.adapter.addClass(O.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(O.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(O.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(t){t?this.adapter.addClass(O.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(O.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(H.ARIA_HIDDEN)},e.prototype.setValidity=function(t){var n=this.adapter.hasClass(O.HELPER_TEXT_PERSISTENT),r=this.adapter.hasClass(O.HELPER_TEXT_VALIDATION_MSG),a=r&&!t;a?(this.showToScreenReader(),this.adapter.getAttr(H.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(H.ROLE,"alert")):this.adapter.removeAttr(H.ROLE),!n&&!a&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(H.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var t=this;this.adapter.removeAttr(H.ROLE),requestAnimationFrame(function(){t.adapter.setAttr(H.ROLE,"alert")})},e}(F);/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ie=function(i){b(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(r){return t.root.classList.add(r)},removeClass:function(r){return t.root.classList.remove(r)},hasClass:function(r){return t.root.classList.contains(r)},getAttr:function(r){return t.root.getAttribute(r)},setAttr:function(r,a){return t.root.setAttribute(r,a)},removeAttr:function(r){return t.root.removeAttribute(r)},setContent:function(r){t.root.textContent=r}};return new Et(n)},e}(T);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ht={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"},ae={ROOT:"mdc-text-field__icon"};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var pt=["click","keydown"],vt=function(i){b(e,i);function e(t){var n=i.call(this,p(p({},e.defaultAdapter),t))||this;return n.savedTabIndex=null,n.interactionHandler=function(r){n.handleInteraction(r)},n}return Object.defineProperty(e,"strings",{get:function(){return ht},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return ae},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,n;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var r=S(pt),a=r.next();!a.done;a=r.next()){var o=a.value;this.adapter.registerInteractionHandler(o,this.interactionHandler)}}catch(s){t={error:s}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}},e.prototype.destroy=function(){var t,n;try{for(var r=S(pt),a=r.next();!a.done;a=r.next()){var o=a.value;this.adapter.deregisterInteractionHandler(o,this.interactionHandler)}}catch(s){t={error:s}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}},e.prototype.setDisabled=function(t){this.savedTabIndex&&(t?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",ht.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.handleInteraction=function(t){var n=t.key==="Enter"||t.keyCode===13;(t.type==="click"||n)&&(t.preventDefault(),this.adapter.notifyIconAction())},e}(F);/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var oe=function(i){b(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function(){return this.foundation},enumerable:!1,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this,n={getAttr:function(r){return t.root.getAttribute(r)},setAttr:function(r,a){return t.root.setAttribute(r,a)},removeAttr:function(r){return t.root.removeAttribute(r)},setContent:function(r){t.root.textContent=r},registerInteractionHandler:function(r,a){return t.listen(r,a)},deregisterInteractionHandler:function(r,a){return t.unlisten(r,a)},notifyIconAction:function(){return t.emit(vt.strings.ICON_EVENT,{},!0)}};return new vt(n)},e}(T);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var se=function(i){b(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n,r,a,o,s,u){t===void 0&&(t=function(y,K){return new lt(y,K)}),n===void 0&&(n=function(y){return new $t(y)}),r===void 0&&(r=function(y){return new ie(y)}),a===void 0&&(a=function(y){return new te(y)}),o===void 0&&(o=function(y){return new oe(y)}),s===void 0&&(s=function(y){return new Wt(y)}),u===void 0&&(u=function(y){return new Gt(y)}),this.input=this.root.querySelector(x.INPUT_SELECTOR);var c=this.root.querySelector(x.LABEL_SELECTOR);this.label=c?s(c):null;var l=this.root.querySelector(x.LINE_RIPPLE_SELECTOR);this.lineRipple=l?n(l):null;var d=this.root.querySelector(x.OUTLINE_SELECTOR);this.outline=d?u(d):null;var f=Et.strings,h=this.root.nextElementSibling,v=h&&h.classList.contains(U.HELPER_LINE),m=v&&h&&h.querySelector(f.ROOT_SELECTOR);this.helperText=m?r(m):null;var w=Tt.strings,A=this.root.querySelector(w.ROOT_SELECTOR);!A&&v&&h&&(A=h.querySelector(w.ROOT_SELECTOR)),this.characterCounter=A?a(A):null;var C=this.root.querySelector(x.LEADING_ICON_SELECTOR);this.leadingIcon=C?o(C):null;var I=this.root.querySelector(x.TRAILING_ICON_SELECTOR);this.trailingIcon=I?o(I):null,this.prefix=this.root.querySelector(x.PREFIX_SELECTOR),this.suffix=this.root.querySelector(x.SUFFIX_SELECTOR),this.ripple=this.createRipple(t)},e.prototype.destroy=function(){this.ripple&&this.ripple.destroy(),this.lineRipple&&this.lineRipple.destroy(),this.helperText&&this.helperText.destroy(),this.characterCounter&&this.characterCounter.destroy(),this.leadingIcon&&this.leadingIcon.destroy(),this.trailingIcon&&this.trailingIcon.destroy(),this.label&&this.label.destroy(),this.outline&&this.outline.destroy(),i.prototype.destroy.call(this)},e.prototype.initialSyncWithDOM=function(){this.disabled=this.input.disabled},Object.defineProperty(e.prototype,"value",{get:function(){return this.foundation.getValue()},set:function(t){this.foundation.setValue(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.foundation.isDisabled()},set:function(t){this.foundation.setDisabled(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.foundation.isValid()},set:function(t){this.foundation.setValid(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"required",{get:function(){return this.input.required},set:function(t){this.input.required=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pattern",{get:function(){return this.input.pattern},set:function(t){this.input.pattern=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minLength",{get:function(){return this.input.minLength},set:function(t){this.input.minLength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxLength",{get:function(){return this.input.maxLength},set:function(t){t<0?this.input.removeAttribute("maxLength"):this.input.maxLength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"min",{get:function(){return this.input.min},set:function(t){this.input.min=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"max",{get:function(){return this.input.max},set:function(t){this.input.max=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"step",{get:function(){return this.input.step},set:function(t){this.input.step=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"helperTextContent",{set:function(t){this.foundation.setHelperTextContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconAriaLabel",{set:function(t){this.foundation.setLeadingIconAriaLabel(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconContent",{set:function(t){this.foundation.setLeadingIconContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconAriaLabel",{set:function(t){this.foundation.setTrailingIconAriaLabel(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconContent",{set:function(t){this.foundation.setTrailingIconContent(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useNativeValidation",{set:function(t){this.foundation.setUseNativeValidation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"prefixText",{get:function(){return this.prefix?this.prefix.textContent:null},set:function(t){this.prefix&&(this.prefix.textContent=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"suffixText",{get:function(){return this.suffix?this.suffix.textContent:null},set:function(t){this.suffix&&(this.suffix.textContent=t)},enumerable:!1,configurable:!0}),e.prototype.focus=function(){this.input.focus()},e.prototype.layout=function(){var t=this.foundation.shouldFloat;this.foundation.notchOutline(t)},e.prototype.getDefaultFoundation=function(){var t=p(p(p(p(p({},this.getRootAdapterMethods()),this.getInputAdapterMethods()),this.getLabelAdapterMethods()),this.getLineRippleAdapterMethods()),this.getOutlineAdapterMethods());return new re(t,this.getFoundationMap())},e.prototype.getRootAdapterMethods=function(){var t=this;return{addClass:function(n){return t.root.classList.add(n)},removeClass:function(n){return t.root.classList.remove(n)},hasClass:function(n){return t.root.classList.contains(n)},registerTextFieldInteractionHandler:function(n,r){t.listen(n,r)},deregisterTextFieldInteractionHandler:function(n,r){t.unlisten(n,r)},registerValidationAttributeChangeHandler:function(n){var r=function(s){return s.map(function(u){return u.attributeName}).filter(function(u){return u})},a=new MutationObserver(function(s){return n(r(s))}),o={attributes:!0};return a.observe(t.input,o),a},deregisterValidationAttributeChangeHandler:function(n){n.disconnect()}}},e.prototype.getInputAdapterMethods=function(){var t=this;return{getNativeInput:function(){return t.input},setInputAttr:function(n,r){t.input.setAttribute(n,r)},removeInputAttr:function(n){t.input.removeAttribute(n)},isFocused:function(){return document.activeElement===t.input},registerInputInteractionHandler:function(n,r){t.input.addEventListener(n,r,D())},deregisterInputInteractionHandler:function(n,r){t.input.removeEventListener(n,r,D())}}},e.prototype.getLabelAdapterMethods=function(){var t=this;return{floatLabel:function(n){t.label&&t.label.float(n)},getLabelWidth:function(){return t.label?t.label.getWidth():0},hasLabel:function(){return!!t.label},shakeLabel:function(n){t.label&&t.label.shake(n)},setLabelRequired:function(n){t.label&&t.label.setRequired(n)}}},e.prototype.getLineRippleAdapterMethods=function(){var t=this;return{activateLineRipple:function(){t.lineRipple&&t.lineRipple.activate()},deactivateLineRipple:function(){t.lineRipple&&t.lineRipple.deactivate()},setLineRippleTransformOrigin:function(n){t.lineRipple&&t.lineRipple.setRippleCenter(n)}}},e.prototype.getOutlineAdapterMethods=function(){var t=this;return{closeOutline:function(){t.outline&&t.outline.closeNotch()},hasOutline:function(){return!!t.outline},notchOutline:function(n){t.outline&&t.outline.notch(n)}}},e.prototype.getFoundationMap=function(){return{characterCounter:this.characterCounter?this.characterCounter.foundationForTextField:void 0,helperText:this.helperText?this.helperText.foundationForTextField:void 0,leadingIcon:this.leadingIcon?this.leadingIcon.foundationForTextField:void 0,trailingIcon:this.trailingIcon?this.trailingIcon.foundationForTextField:void 0}},e.prototype.createRipple=function(t){var n=this,r=this.root.classList.contains(U.TEXTAREA),a=this.root.classList.contains(U.OUTLINED);if(r||a)return null;var o=p(p({},lt.createAdapter(this)),{isSurfaceActive:function(){return St(n.input,":active")},registerInteractionHandler:function(s,u){n.input.addEventListener(s,u,D())},deregisterInteractionHandler:function(s,u){n.input.removeEventListener(s,u,D())}});return t(this.root,new Ft(o))},e}(T);/*!
 * Glide.js v3.6.0
 * (c) 2013-2022 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */function V(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?V=function(e){return typeof e}:V=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(i)}function X(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function gt(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function $(i,e,t){return e&&gt(i.prototype,e),t&&gt(i,t),i}function ue(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),e&&J(i,e)}function _(i){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},_(i)}function J(i,e){return J=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},J(i,e)}function le(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ce(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function de(i,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ce(i)}function fe(i){var e=le();return function(){var n=_(i),r;if(e){var a=_(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return de(this,r)}}function he(i,e){for(;!Object.prototype.hasOwnProperty.call(i,e)&&(i=_(i),i!==null););return i}function z(){return typeof Reflect<"u"&&Reflect.get?z=Reflect.get:z=function(e,t,n){var r=he(e,t);if(r){var a=Object.getOwnPropertyDescriptor(r,t);return a.get?a.get.call(arguments.length<3?e:n):a.value}},z.apply(this,arguments)}var pe={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perSwipe:"",touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",waitForTransition:!0,throttle:10,direction:"ltr",peek:0,cloningRatio:1,breakpoints:{},classes:{swipeable:"glide--swipeable",dragging:"glide--dragging",direction:{ltr:"glide--ltr",rtl:"glide--rtl"},type:{slider:"glide--slider",carousel:"glide--carousel"},slide:{clone:"glide__slide--clone",active:"glide__slide--active"},arrow:{disabled:"glide__arrow--disabled"},nav:{active:"glide__bullet--active"}}};function R(i){console.error("[Glide warn]: ".concat(i))}function L(i){return parseInt(i)}function ve(i){return parseFloat(i)}function Y(i){return typeof i=="string"}function P(i){var e=V(i);return e==="function"||e==="object"&&!!i}function q(i){return typeof i=="function"}function ge(i){return typeof i>"u"}function tt(i){return i.constructor===Array}function me(i,e,t){var n={};for(var r in e)q(e[r])?n[r]=e[r](i,n,t):R("Extension must be a function");for(var a in n)q(n[a].mount)&&n[a].mount();return n}function g(i,e,t){Object.defineProperty(i,e,t)}function ye(i){return Object.keys(i).sort().reduce(function(e,t){return e[t]=i[t],e[t],e},{})}function et(i,e){var t=Object.assign({},i,e);return e.hasOwnProperty("classes")&&(t.classes=Object.assign({},i.classes,e.classes),e.classes.hasOwnProperty("direction")&&(t.classes.direction=Object.assign({},i.classes.direction,e.classes.direction)),e.classes.hasOwnProperty("type")&&(t.classes.type=Object.assign({},i.classes.type,e.classes.type)),e.classes.hasOwnProperty("slide")&&(t.classes.slide=Object.assign({},i.classes.slide,e.classes.slide)),e.classes.hasOwnProperty("arrow")&&(t.classes.arrow=Object.assign({},i.classes.arrow,e.classes.arrow)),e.classes.hasOwnProperty("nav")&&(t.classes.nav=Object.assign({},i.classes.nav,e.classes.nav))),e.hasOwnProperty("breakpoints")&&(t.breakpoints=Object.assign({},i.breakpoints,e.breakpoints)),t}var be=function(){function i(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};X(this,i),this.events=e,this.hop=e.hasOwnProperty}return $(i,[{key:"on",value:function(t,n){if(tt(t)){for(var r=0;r<t.length;r++)this.on(t[r],n);return}this.hop.call(this.events,t)||(this.events[t]=[]);var a=this.events[t].push(n)-1;return{remove:function(){delete this.events[t][a]}}}},{key:"emit",value:function(t,n){if(tt(t)){for(var r=0;r<t.length;r++)this.emit(t[r],n);return}this.hop.call(this.events,t)&&this.events[t].forEach(function(a){a(n||{})})}}]),i}(),Le=function(){function i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};X(this,i),this._c={},this._t=[],this._e=new be,this.disabled=!1,this.selector=e,this.settings=et(pe,t),this.index=this.settings.startAt}return $(i,[{key:"mount",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this._e.emit("mount.before"),P(t)?this._c=me(this,t,this._e):R("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return tt(t)?this._t=t:R("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.settings=et(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,n){return this._e.on(t,n),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){P(t)?this._o=t:R("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(t){this._i=L(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),i}();function Ae(i,e,t){var n={mount:function(){this._o=!1},make:function(c){var l=this;i.disabled||(!i.settings.waitForTransition||i.disable(),this.move=c,t.emit("run.before",this.move),this.calculate(),t.emit("run",this.move),e.Transition.after(function(){l.isStart()&&t.emit("run.start",l.move),l.isEnd()&&t.emit("run.end",l.move),l.isOffset()&&(l._o=!1,t.emit("run.offset",l.move)),t.emit("run.after",l.move),i.enable()}))},calculate:function(){var c=this.move,l=this.length,d=c.steps,f=c.direction,h=1;if(f==="="){if(i.settings.bound&&L(d)>l){i.index=l;return}i.index=d;return}if(f===">"&&d===">"){i.index=l;return}if(f==="<"&&d==="<"){i.index=0;return}if(f==="|"&&(h=i.settings.perView||1),f===">"||f==="|"&&d===">"){var v=r(h);v>l&&(this._o=!0),i.index=a(v,h);return}if(f==="<"||f==="|"&&d==="<"){var m=o(h);m<0&&(this._o=!0),i.index=s(m,h);return}R("Invalid direction pattern [".concat(f).concat(d,"] has been used"))},isStart:function(){return i.index<=0},isEnd:function(){return i.index>=this.length},isOffset:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;return c?this._o?c==="|>"?this.move.direction==="|"&&this.move.steps===">":c==="|<"?this.move.direction==="|"&&this.move.steps==="<":this.move.direction===c:!1:this._o},isBound:function(){return i.isType("slider")&&i.settings.focusAt!=="center"&&i.settings.bound}};function r(u){var c=i.index;return i.isType("carousel")?c+u:c+(u-c%u)}function a(u,c){var l=n.length;return u<=l?u:i.isType("carousel")?u-(l+1):i.settings.rewind?n.isBound()&&!n.isEnd()?l:0:n.isBound()?l:Math.floor(l/c)*c}function o(u){var c=i.index;if(i.isType("carousel"))return c-u;var l=Math.ceil(c/u);return(l-1)*u}function s(u,c){var l=n.length;return u>=0?u:i.isType("carousel")?u+(l+1):i.settings.rewind?n.isBound()&&n.isStart()?l:Math.floor(l/c)*c:0}return g(n,"move",{get:function(){return this._m},set:function(c){var l=c.substr(1);this._m={direction:c.substr(0,1),steps:l?L(l)?L(l):l:0}}}),g(n,"length",{get:function(){var c=i.settings,l=e.Html.slides.length;return this.isBound()?l-1-(L(c.perView)-1)+L(c.focusAt):l-1}}),g(n,"offset",{get:function(){return this._o}}),n}function mt(){return new Date().getTime()}function N(i,e,t){var n,r,a,o,s=0;t||(t={});var u=function(){s=t.leading===!1?0:mt(),n=null,o=i.apply(r,a),n||(r=a=null)},c=function(){var d=mt();!s&&t.leading===!1&&(s=d);var f=e-(d-s);return r=this,a=arguments,f<=0||f>e?(n&&(clearTimeout(n),n=null),s=d,o=i.apply(r,a),n||(r=a=null)):!n&&t.trailing!==!1&&(n=setTimeout(u,f)),o};return c.cancel=function(){clearTimeout(n),s=0,n=r=a=null},c}var B={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function we(i,e,t){var n={apply:function(a){for(var o=0,s=a.length;o<s;o++){var u=a[o].style,c=e.Direction.value;o!==0?u[B[c][0]]="".concat(this.value/2,"px"):u[B[c][0]]="",o!==a.length-1?u[B[c][1]]="".concat(this.value/2,"px"):u[B[c][1]]=""}},remove:function(a){for(var o=0,s=a.length;o<s;o++){var u=a[o].style;u.marginLeft="",u.marginRight=""}}};return g(n,"value",{get:function(){return L(i.settings.gap)}}),g(n,"grow",{get:function(){return n.value*e.Sizes.length}}),g(n,"reductor",{get:function(){var a=i.settings.perView;return n.value*(a-1)/a}}),t.on(["build.after","update"],N(function(){n.apply(e.Html.wrapper.children)},30)),t.on("destroy",function(){n.remove(e.Html.wrapper.children)}),n}function _t(i){if(i&&i.parentNode){for(var e=i.parentNode.firstChild,t=[];e;e=e.nextSibling)e.nodeType===1&&e!==i&&t.push(e);return t}return[]}function yt(i){return!!(i&&i instanceof window.HTMLElement)}function nt(i){return Array.prototype.slice.call(i)}var bt='[data-glide-el="track"]';function Ce(i,e,t){var n={mount:function(){this.root=i.selector,this.track=this.root.querySelector(bt),this.collectSlides()},collectSlides:function(){this.slides=nt(this.wrapper.children).filter(function(a){return!a.classList.contains(i.settings.classes.slide.clone)})}};return g(n,"root",{get:function(){return n._r},set:function(a){Y(a)&&(a=document.querySelector(a)),yt(a)?n._r=a:R("Root element must be a existing Html node")}}),g(n,"track",{get:function(){return n._t},set:function(a){yt(a)?n._t=a:R("Could not find track element. Please use ".concat(bt," attribute."))}}),g(n,"wrapper",{get:function(){return n.track.children[0]}}),t.on("update",function(){n.collectSlides()}),n}function xe(i,e,t){var n={mount:function(){this.value=i.settings.peek}};return g(n,"value",{get:function(){return n._v},set:function(a){P(a)?(a.before=L(a.before),a.after=L(a.after)):a=L(a),n._v=a}}),g(n,"reductor",{get:function(){var a=n.value,o=i.settings.perView;return P(a)?a.before/o+a.after/o:a*2/o}}),t.on(["resize","update"],function(){n.mount()}),n}function Ie(i,e,t){var n={mount:function(){this._o=0},make:function(){var a=this,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;this.offset=o,t.emit("move",{movement:this.value}),e.Transition.after(function(){t.emit("move.after",{movement:a.value})})}};return g(n,"offset",{get:function(){return n._o},set:function(a){n._o=ge(a)?0:L(a)}}),g(n,"translate",{get:function(){return e.Sizes.slideWidth*i.index}}),g(n,"value",{get:function(){var a=this.offset,o=this.translate;return e.Direction.is("rtl")?o+a:o-a}}),t.on(["build.before","run"],function(){n.make()}),n}function Oe(i,e,t){var n={setupSlides:function(){for(var a="".concat(this.slideWidth,"px"),o=e.Html.slides,s=0;s<o.length;s++)o[s].style.width=a},setupWrapper:function(){e.Html.wrapper.style.width="".concat(this.wrapperSize,"px")},remove:function(){for(var a=e.Html.slides,o=0;o<a.length;o++)a[o].style.width="";e.Html.wrapper.style.width=""}};return g(n,"length",{get:function(){return e.Html.slides.length}}),g(n,"width",{get:function(){return e.Html.track.offsetWidth}}),g(n,"wrapperSize",{get:function(){return n.slideWidth*n.length+e.Gaps.grow+e.Clones.grow}}),g(n,"slideWidth",{get:function(){return n.width/i.settings.perView-e.Peek.reductor-e.Gaps.reductor}}),t.on(["build.before","resize","update"],function(){n.setupSlides(),n.setupWrapper()}),t.on("destroy",function(){n.remove()}),n}function Se(i,e,t){var n={mount:function(){t.emit("build.before"),this.typeClass(),this.activeClass(),t.emit("build.after")},typeClass:function(){e.Html.root.classList.add(i.settings.classes.type[i.settings.type])},activeClass:function(){var a=i.settings.classes,o=e.Html.slides[i.index];o&&(o.classList.add(a.slide.active),_t(o).forEach(function(s){s.classList.remove(a.slide.active)}))},removeClasses:function(){var a=i.settings.classes,o=a.type,s=a.slide;e.Html.root.classList.remove(o[i.settings.type]),e.Html.slides.forEach(function(u){u.classList.remove(s.active)})}};return t.on(["destroy","update"],function(){n.removeClasses()}),t.on(["resize","update"],function(){n.mount()}),t.on("move.after",function(){n.activeClass()}),n}function Re(i,e,t){var n={mount:function(){this.items=[],i.isType("carousel")&&(this.items=this.collect())},collect:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o=e.Html.slides,s=i.settings,u=s.perView,c=s.classes,l=s.cloningRatio;if(o.length!==0)for(var d=+!!i.settings.peek,f=u+d+Math.round(u/2),h=o.slice(0,f).reverse(),v=o.slice(f*-1),m=0;m<Math.max(l,Math.floor(u/o.length));m++){for(var w=0;w<h.length;w++){var A=h[w].cloneNode(!0);A.classList.add(c.slide.clone),a.push(A)}for(var C=0;C<v.length;C++){var I=v[C].cloneNode(!0);I.classList.add(c.slide.clone),a.unshift(I)}}return a},append:function(){for(var a=this.items,o=e.Html,s=o.wrapper,u=o.slides,c=Math.floor(a.length/2),l=a.slice(0,c).reverse(),d=a.slice(c*-1).reverse(),f="".concat(e.Sizes.slideWidth,"px"),h=0;h<d.length;h++)s.appendChild(d[h]);for(var v=0;v<l.length;v++)s.insertBefore(l[v],u[0]);for(var m=0;m<a.length;m++)a[m].style.width=f},remove:function(){for(var a=this.items,o=0;o<a.length;o++)e.Html.wrapper.removeChild(a[o])}};return g(n,"grow",{get:function(){return(e.Sizes.slideWidth+e.Gaps.value)*n.items.length}}),t.on("update",function(){n.remove(),n.mount(),n.append()}),t.on("build.before",function(){i.isType("carousel")&&n.append()}),t.on("destroy",function(){n.remove()}),n}var G=function(){function i(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};X(this,i),this.listeners=e}return $(i,[{key:"on",value:function(t,n,r){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;Y(t)&&(t=[t]);for(var o=0;o<t.length;o++)this.listeners[t[o]]=r,n.addEventListener(t[o],this.listeners[t[o]],a)}},{key:"off",value:function(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;Y(t)&&(t=[t]);for(var a=0;a<t.length;a++)n.removeEventListener(t[a],this.listeners[t[a]],r)}},{key:"destroy",value:function(){delete this.listeners}}]),i}();function He(i,e,t){var n=new G,r={mount:function(){this.bind()},bind:function(){n.on("resize",window,N(function(){t.emit("resize")},i.settings.throttle))},unbind:function(){n.off("resize",window)}};return t.on("destroy",function(){r.unbind(),n.destroy()}),r}var Fe=["ltr","rtl"],De={">":"<","<":">","=":"="};function Te(i,e,t){var n={mount:function(){this.value=i.settings.direction},resolve:function(a){var o=a.slice(0,1);return this.is("rtl")?a.split(o).join(De[o]):a},is:function(a){return this.value===a},addClass:function(){e.Html.root.classList.add(i.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(i.settings.classes.direction[this.value])}};return g(n,"value",{get:function(){return n._v},set:function(a){Fe.indexOf(a)>-1?n._v=a:R("Direction value must be `ltr` or `rtl`")}}),t.on(["destroy","update"],function(){n.removeClass()}),t.on("update",function(){n.mount()}),t.on(["build.before","update"],function(){n.addClass()}),n}function Ee(i,e){return{modify:function(n){return e.Direction.is("rtl")?-n:n}}}function _e(i,e){return{modify:function(n){var r=Math.floor(n/e.Sizes.slideWidth);return n+e.Gaps.value*r}}}function Pe(i,e){return{modify:function(n){return n+e.Clones.grow/2}}}function Me(i,e){return{modify:function(n){if(i.settings.focusAt>=0){var r=e.Peek.value;return P(r)?n-r.before:n-r}return n}}}function ke(i,e){return{modify:function(n){var r=e.Gaps.value,a=e.Sizes.width,o=i.settings.focusAt,s=e.Sizes.slideWidth;return o==="center"?n-(a/2-s/2):n-s*o-r*o}}}function Be(i,e,t){var n=[_e,Pe,Me,ke].concat(i._t,[Ee]);return{mutate:function(a){for(var o=0;o<n.length;o++){var s=n[o];q(s)&&q(s().modify)?a=s(i,e,t).modify(a):R("Transformer should be a function that returns an object with `modify()` method")}return a}}}function je(i,e,t){var n={set:function(a){var o=Be(i,e).mutate(a),s="translate3d(".concat(-1*o,"px, 0px, 0px)");e.Html.wrapper.style.mozTransform=s,e.Html.wrapper.style.webkitTransform=s,e.Html.wrapper.style.transform=s},remove:function(){e.Html.wrapper.style.transform=""},getStartIndex:function(){var a=e.Sizes.length,o=i.index,s=i.settings.perView;return e.Run.isOffset(">")||e.Run.isOffset("|>")?a+(o-s):(o+s)%a},getTravelDistance:function(){var a=e.Sizes.slideWidth*i.settings.perView;return e.Run.isOffset(">")||e.Run.isOffset("|>")?a*-1:a}};return t.on("move",function(r){if(!i.isType("carousel")||!e.Run.isOffset())return n.set(r.movement);e.Transition.after(function(){t.emit("translate.jump"),n.set(e.Sizes.slideWidth*i.index)});var a=e.Sizes.slideWidth*e.Translate.getStartIndex();return n.set(a-e.Translate.getTravelDistance())}),t.on("destroy",function(){n.remove()}),n}function Ue(i,e,t){var n=!1,r={compose:function(o){var s=i.settings;return n?"".concat(o," 0ms ").concat(s.animationTimingFunc):"".concat(o," ").concat(this.duration,"ms ").concat(s.animationTimingFunc)},set:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(o)},remove:function(){e.Html.wrapper.style.transition=""},after:function(o){setTimeout(function(){o()},this.duration)},enable:function(){n=!1,this.set()},disable:function(){n=!0,this.set()}};return g(r,"duration",{get:function(){var o=i.settings;return i.isType("slider")&&e.Run.offset?o.rewindDuration:o.animationDuration}}),t.on("move",function(){r.set()}),t.on(["build.before","resize","translate.jump"],function(){r.disable()}),t.on("run",function(){r.enable()}),t.on("destroy",function(){r.remove()}),r}var Pt=!1;try{var Lt=Object.defineProperty({},"passive",{get:function(){Pt=!0}});window.addEventListener("testPassive",null,Lt),window.removeEventListener("testPassive",null,Lt)}catch{}var rt=Pt,j=["touchstart","mousedown"],At=["touchmove","mousemove"],wt=["touchend","touchcancel","mouseup","mouseleave"],Ct=["mousedown","mousemove","mouseup","mouseleave"];function Ve(i,e,t){var n=new G,r=0,a=0,o=0,s=!1,u=rt?{passive:!0}:!1,c={mount:function(){this.bindSwipeStart()},start:function(d){if(!s&&!i.disabled){this.disable();var f=this.touches(d);r=null,a=L(f.pageX),o=L(f.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),t.emit("swipe.start")}},move:function(d){if(!i.disabled){var f=i.settings,h=f.touchAngle,v=f.touchRatio,m=f.classes,w=this.touches(d),A=L(w.pageX)-a,C=L(w.pageY)-o,I=Math.abs(A<<2),y=Math.abs(C<<2),K=Math.sqrt(I+y),kt=Math.sqrt(y);if(r=Math.asin(kt/K),r*180/Math.PI<h)d.stopPropagation(),e.Move.make(A*ve(v)),e.Html.root.classList.add(m.dragging),t.emit("swipe.move");else return!1}},end:function(d){if(!i.disabled){var f=i.settings,h=f.perSwipe,v=f.touchAngle,m=f.classes,w=this.touches(d),A=this.threshold(d),C=w.pageX-a,I=r*180/Math.PI;this.enable(),C>A&&I<v?e.Run.make(e.Direction.resolve("".concat(h,"<"))):C<-A&&I<v?e.Run.make(e.Direction.resolve("".concat(h,">"))):e.Move.make(),e.Html.root.classList.remove(m.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),t.emit("swipe.end")}},bindSwipeStart:function(){var d=this,f=i.settings,h=f.swipeThreshold,v=f.dragThreshold;h&&n.on(j[0],e.Html.wrapper,function(m){d.start(m)},u),v&&n.on(j[1],e.Html.wrapper,function(m){d.start(m)},u)},unbindSwipeStart:function(){n.off(j[0],e.Html.wrapper,u),n.off(j[1],e.Html.wrapper,u)},bindSwipeMove:function(){var d=this;n.on(At,e.Html.wrapper,N(function(f){d.move(f)},i.settings.throttle),u)},unbindSwipeMove:function(){n.off(At,e.Html.wrapper,u)},bindSwipeEnd:function(){var d=this;n.on(wt,e.Html.wrapper,function(f){d.end(f)})},unbindSwipeEnd:function(){n.off(wt,e.Html.wrapper)},touches:function(d){return Ct.indexOf(d.type)>-1?d:d.touches[0]||d.changedTouches[0]},threshold:function(d){var f=i.settings;return Ct.indexOf(d.type)>-1?f.dragThreshold:f.swipeThreshold},enable:function(){return s=!1,e.Transition.enable(),this},disable:function(){return s=!0,e.Transition.disable(),this}};return t.on("build.after",function(){e.Html.root.classList.add(i.settings.classes.swipeable)}),t.on("destroy",function(){c.unbindSwipeStart(),c.unbindSwipeMove(),c.unbindSwipeEnd(),n.destroy()}),c}var ze='[data-glide-el="controls[nav]"]',it='[data-glide-el^="controls"]',qe="".concat(it,' [data-glide-dir*="<"]'),We="".concat(it,' [data-glide-dir*=">"]');function Xe(i,e,t){var n=new G,r=rt?{passive:!0}:!1,a={mount:function(){this._n=e.Html.root.querySelectorAll(ze),this._c=e.Html.root.querySelectorAll(it),this._arrowControls={previous:e.Html.root.querySelectorAll(qe),next:e.Html.root.querySelectorAll(We)},this.addBindings()},setActive:function(){for(var s=0;s<this._n.length;s++)this.addClass(this._n[s].children)},removeActive:function(){for(var s=0;s<this._n.length;s++)this.removeClass(this._n[s].children)},addClass:function(s){var u=i.settings,c=s[i.index];c&&c&&(c.classList.add(u.classes.nav.active),_t(c).forEach(function(l){l.classList.remove(u.classes.nav.active)}))},removeClass:function(s){var u=s[i.index];u&&u.classList.remove(i.settings.classes.nav.active)},setArrowState:function(){if(!i.settings.rewind){var s=a._arrowControls.next,u=a._arrowControls.previous;this.resetArrowState(s,u),i.index===0&&this.disableArrow(u),i.index===e.Run.length&&this.disableArrow(s)}},resetArrowState:function(){for(var s=i.settings,u=arguments.length,c=new Array(u),l=0;l<u;l++)c[l]=arguments[l];c.forEach(function(d){nt(d).forEach(function(f){f.classList.remove(s.classes.arrow.disabled)})})},disableArrow:function(){for(var s=i.settings,u=arguments.length,c=new Array(u),l=0;l<u;l++)c[l]=arguments[l];c.forEach(function(d){nt(d).forEach(function(f){f.classList.add(s.classes.arrow.disabled)})})},addBindings:function(){for(var s=0;s<this._c.length;s++)this.bind(this._c[s].children)},removeBindings:function(){for(var s=0;s<this._c.length;s++)this.unbind(this._c[s].children)},bind:function(s){for(var u=0;u<s.length;u++)n.on("click",s[u],this.click),n.on("touchstart",s[u],this.click,r)},unbind:function(s){for(var u=0;u<s.length;u++)n.off(["click","touchstart"],s[u])},click:function(s){!rt&&s.type==="touchstart"&&s.preventDefault();var u=s.currentTarget.getAttribute("data-glide-dir");e.Run.make(e.Direction.resolve(u))}};return g(a,"items",{get:function(){return a._c}}),t.on(["mount.after","move.after"],function(){a.setActive()}),t.on(["mount.after","run"],function(){a.setArrowState()}),t.on("destroy",function(){a.removeBindings(),a.removeActive(),n.destroy()}),a}function xt(i){return P(i)?ye(i):(R("Breakpoints option must be an object"),{})}function $e(i,e,t){var n=new G,r=i.settings,a=xt(r.breakpoints),o=Object.assign({},r),s={match:function(c){if(typeof window.matchMedia<"u"){for(var l in c)if(c.hasOwnProperty(l)&&window.matchMedia("(max-width: ".concat(l,"px)")).matches)return c[l]}return o}};return Object.assign(r,s.match(a)),n.on("resize",window,N(function(){i.settings=et(r,s.match(a))},i.settings.throttle)),t.on("update",function(){a=xt(a),o=Object.assign({},r)}),t.on("destroy",function(){n.off("resize",window)}),s}var Ne={Html:Ce,Translate:je,Transition:Ue,Direction:Te,Peek:xe,Sizes:Oe,Gaps:we,Move:Ie,Clones:Re,Resize:He,Build:Se,Run:Ae},Ge=function(i){ue(t,i);var e=fe(t);function t(){return X(this,t),e.apply(this,arguments)}return $(t,[{key:"mount",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z(_(t.prototype),"mount",this).call(this,Object.assign({},Ne,r))}}]),t}(Le);const Ke=i=>{document.readyState==="loading"?document.addEventListener("DOMContentLoaded",i):i()};window.matchMedia("(max-width: 1312px)");window.matchMedia("(max-width: 1023px)");const Qe=window.matchMedia("(max-width: 739px)"),Ze=document.querySelectorAll(".svg");let W,Mt,It={};Ke(()=>{Bt(Ze),Je(),Ye(),tn(),window.onscroll=function(i){It.direction=this.oldScroll>this.scrollY,this.oldScroll=this.scrollY,!It.direction&&this.scrollY>100?header.classList.add("js-hide"):header.classList.remove("js-hide")},new Ge(".glide",{gap:4,animationDuration:200}).mount({Controls:Xe,Breakpoints:$e,Swipe:Ve}),Qe.matches||en()});function Je(){document.querySelectorAll(".mdc-text-field").forEach(e=>{new se(e)})}function Ye(){let i=document.querySelector("#header-burger__btn"),e=document.querySelector(".header");i.addEventListener("click",()=>{e.classList.toggle("js-open")})}function tn(){let i=document.querySelectorAll(".nav-item__btn"),e=document.querySelectorAll(".nav-submenu");i.forEach(t=>{t.addEventListener("click",function(){let n=document.getElementById(t.dataset.target);t.classList.contains("js-expand")?(t.classList.remove("js-expand"),n.classList.remove("js-show")):(e.forEach(r=>{r.classList.remove("js-show")}),i.forEach(r=>{r.classList.remove("js-expand")}),t.classList.add("js-expand"),n.classList.add("js-show"))})})}function en(){let i=sellerWrap.scrollWidth-sellerWrap.clientWidth;stickyScroll.style.height=`${i}rem`,stickyScroll.style.transform=`translateY(-${stickyScroll.offsetTop}rem)`,W=stickyBox.getBoundingClientRect().top+window.pageYOffset,Mt=W+i;let e=function(r,a){r.forEach(o=>{o.isIntersecting?window.addEventListener("scroll",Ot):window.removeEventListener("scroll",Ot)})},t={rootMargin:"0px",threshold:.5};new IntersectionObserver(e,t).observe(sellerWrap)}function Ot(){window.requestAnimationFrame(nn)}function nn(){window.scrollY>W&&window.scrollY<Mt&&(sellerList.style.transform=`translateX(${W-window.scrollY}rem)`)}
