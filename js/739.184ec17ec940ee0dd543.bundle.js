(self.webpackChunktemplate20=self.webpackChunktemplate20||[]).push([[739],{5739:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}}),n(1539),n(8674),n(7327),n(2222),n(7042),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948),n(8309),n(1038),n(4916);var r=n(7294),o=n(3639),i=(n(3210),n(5697)),u=n.n(i),l=n(6863),a=n(270),c=n(6867),f=n(5135);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=(0,r.createRef)(),d=function(e){var t,n,o=e.onEnter,i=void 0===o?function(){}:o,u=e.onChange,d=void 0===u?function(){}:u,y=(t=(0,r.useState)(""),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,l=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=y[0],b=y[1],v=function(){i(p),b(""),d(""),m.current.focus()};return r.createElement(l.Z,{fullWidth:!0,label:"Add an item",ref:m,value:p,onChange:function(e){var t=e.target.value;b(t),d(t)},onKeyPress:function(e){"Enter"===e.key&&v()},InputProps:{endAdornment:r.createElement(a.Z,{position:"end"},r.createElement(c.Z,{title:"Click to add",disabled:!p.trim(),onClick:v},r.createElement(f.Z,null)))}})};d.propTypes={onEnter:u().func,onChange:u().func};var y=d,p=(n(4553),n(6699),n(2023),n(1249),n(7941),n(5003),n(4747),n(9337),n(2135)),b=n(2440),v=n(5965),h=n(700),g=n(2887),E=n(8584),w=n(5155),O=n(6761),S=n(3298),j=localStorage;function A(e){return"opt-".concat(e)}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e};return t(j.getItem(A(e)))}var Z=["uid"],k=["uid"];function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function T(e){var t=e.filter,n=void 0===t?"":t,o=e.items,i=void 0===o?[]:o,u=e.onChange,l=void 0===u?function(){}:u,a=function(e){var t=i.findIndex((function(t){return t.uid===e.uid}));i[t]=e,l(i)},c=C("showDeleted",(function(e){return"true"===e})),f=C("filter",(function(e){return"true"===e})),s=n.toLowerCase(),m=i.filter((function(e){var t=e.value,r=e.deleted;return(!f||!n||t.includes(s))&&(c||!r)}));return r.createElement(b.Z,null,m.filter((function(e){return!e.complete})).map((function(e){var t=e.uid,n=M(e,Z);return r.createElement(N,{key:t,item:D({uid:t},n),onChange:a})})),m.filter((function(e){return e.complete})).map((function(e){var t=e.uid,n=M(e,k);return r.createElement(N,{key:t,item:D({uid:t},n),onChange:a})})))}var V=(0,p.Z)({Hidden:{visibility:"hidden"},Visible:{visibility:"visible"}});function N(e){var t,n,o=e.onChange,i=e.item,u=i.complete,a=i.deleted,f=i.value,s=(t=(0,r.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,l=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=s[0],d=s[1],y=V();return r.createElement(v.ZP,{button:!0,onClick:function(){return d(!0)}},r.createElement(h.Z,null,r.createElement(g.Z,{title:"Click to toggle",checked:u,onClick:function(e){o(D(D({},i),{},{complete:!u}))}})),m?r.createElement(l.Z,{autoFocus:!0,fullWidth:!0,value:f,onBlur:function(){return d(!1)},onChange:function(e){var t=e.target.newValue;o(D(D({},i),{},{newValue:t}))}}):r.createElement(E.Z,{primary:f}),a?r.createElement(w.Z,null,r.createElement(O.Z,null)):r.createElement(w.Z,{className:m?y.Visible:y.Hidden},r.createElement(c.Z,{onMouseDown:function(){o(D(D({},i),{},{deleted:!0}))},title:"Click to delete"},r.createElement(S.Z,null)),r.createElement(c.Z,{onMouseDown:function(){o(D(D({},i),{},{deleted:!1}))},title:"Click undo"},r.createElement(S.Z,null))))}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,l=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||$(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var H=function(){var e=U((0,r.useState)([]),2),t=e[0],n=e[1],i=U((0,r.useState)(""),2),u=i[0],l=i[1];return(0,r.useEffect)((function(){new Promise((function(e,t){try{e(JSON.parse(localStorage.getItem("items"))||[])}catch(e){t(e)}})).then((function(e){return e.filter((function(e){return!e.deleted}))})).then((function(e){return n(e)}))}),[]),(0,r.useEffect)((function(){new Promise((function(e,n){try{localStorage.setItem("items",JSON.stringify(t)),e()}catch(e){n(e)}})).then((function(e){return console.log(e)}))}),[t,t.length]),r.createElement(r.Fragment,null,r.createElement(y,{onChange:function(e){return l(e)},onEnter:function(e){Promise.resolve({value:e,time:+new Date,complete:!1,uid:(0,o.Z)(),deleted:!1}).then((function(e){return n([].concat(function(e){if(Array.isArray(e))return F(e)}(r=t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||$(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e]));var r}))}}),r.createElement(T,{filter:C("filter",(function(e){return"true"===e}))?u:"",items:t,onChange:function(e){return n(e.slice())}}))}}}]);
//# sourceMappingURL=739.184ec17ec940ee0dd543.bundle.js.map