(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{133:function(e,t,a){},22:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return u}));var n=a(13),c=a(3),s=a(11),r=a(32),i={pins:[],startStatus:"closed"},o=function(e,t){switch(t.type){case r.a.SET_PINS:case r.a.SET_PIN_STATUS:return Object(s.a)(Object(s.a)({},e),{},{pins:t.pins});case r.a.SET_START_STATUS:return Object(s.a)(Object(s.a)({},e),{},{startStatus:t.startStatus})}},l=a(0),d=Object(c.createContext)(),u=function(e){var t=e.children,a=Object(c.useReducer)(o,i),s=Object(n.a)(a,2),r=s[0],u=s[1];return Object(l.jsx)(d.Provider,{value:{state:r,dispatch:u},children:t})}},23:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return u}));var n=a(13),c=a(3),s=a(11),r=a(33),i={workspaces:[],firstEl:null,lastEl:null},o=function(e,t){switch(t.type){case r.a.SET_WORKSPACES:return Object(s.a)(Object(s.a)({},e),{},{workspaces:t.workspaces});case r.a.SET_FIRST_EL:return Object(s.a)(Object(s.a)({},e),{},{firstEl:t.firstEl});case r.a.SET_LAST_EL:return Object(s.a)(Object(s.a)({},e),{},{lastEl:t.lastEl})}},l=a(0),d=Object(c.createContext)(),u=function(e){var t=e.children,a=Object(c.useReducer)(o,i),s=Object(n.a)(a,2),r=s[0],u=s[1];return Object(l.jsx)(d.Provider,{value:{state:r,dispatch:u},children:t})}},24:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return r}));var n=a(32),c=function(e,t){e({type:n.a.SET_PINS,pins:t.map((function(e){return e.status="closed",e}))})},s=function(e,t,a,c){t({type:n.a.SET_PIN_STATUS,pins:e.pins.map((function(e){return e.name===a&&(e.status=c),e}))})},r=function(e,t){e({type:n.a.SET_START_STATUS,startStatus:"closed"===t?"opened":"closed"})}},26:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(23),s=a(58),r=a(0);t.default=function(e){var t=e.children,a=e.className,i=e.lastElRef,o=Object(n.useContext)(c.b).dispatch,l=Object(n.useRef)(null);return Object(n.useEffect)((function(){l.current.focus()}),[]),Object(n.useEffect)((function(){i&&Object(s.b)(o,i)}),[i]),Object(r.jsx)("div",{className:"channel-page ".concat(a),ref:l,tabIndex:"0",children:t})}},30:function(e,t,a){"use strict";a.r(t);var n=a(0);t.default=function(e){var t=e.children,a=e.className,c=void 0===a?"":a;return Object(n.jsx)("div",{className:"container ".concat(c),children:t})}},31:function(e,t,a){"use strict";a.r(t);var n=a(0);t.default=function(e){var t=e.workspaces,a=e.children;return Object(n.jsx)("div",{className:"slack-sidebar ".concat(t?"slack-sidebar--workspaces":""),children:a})}},32:function(e,t,a){"use strict";t.a={SET_PINS:"SET_PINS",SET_PIN_STATUS:"SET_PIN_STATE",SET_START_STATUS:"SET_START_STATE"}},33:function(e,t,a){"use strict";t.a={SET_CHANNELS:"SET_CHANNELS",SET_WORKSPACES:"SET_WORKSPACES",SET_FIRST_EL:"SET_FIRST_EL",SET_LAST_EL:"SET_LAST_EL"}},36:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(59),s=a(0),r=Object(n.forwardRef)((function(e,t){var a=e.to,n=e.label;return Object(s.jsxs)(c.b,{ref:t,className:"channel-link",to:a,children:[Object(s.jsx)("span",{className:"channel-link__hash","aria-hidden":"true",children:"#"}),n]})}));r.displayName="ChannelLink",t.default=r},40:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(22),s=a(30),r=a(124),i=a.n(r),o=a(24),l=a(0);t.default=function(){var e=Object(n.useContext)(c.b),t=e.state,a=e.dispatch;return Object(l.jsx)("section",{className:"hero",onClick:function(){return function(){var e=t.startStatus;"opened"===e&&Object(o.c)(a,e)}()},children:Object(l.jsxs)(s.default,{children:[Object(l.jsx)("h1",{className:"sr-only",children:"My portfolio"}),Object(l.jsxs)("div",{className:"hero__body",children:[Object(l.jsx)("p",{className:"hero__text",children:"Welcome"}),Object(l.jsx)("p",{className:"hero__text",children:"To my site"})]}),Object(l.jsx)(i.a,{className:"particles"})]})})}},41:function(e,t,a){"use strict";a.r(t);var n=a(42),c=a(0);t.default=function(e){var t=e.status,a=e.onClick;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{className:"start ".concat(t?"start--".concat(t):""),title:"Start","aria-controls":"win-menu",onClick:a,children:Object(c.jsx)("svg",{"aria-hidden":"true",className:"start__svg",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(c.jsx)("path",{d:"M0 12v-8.646l10-1.355v10.001h-10zm11 0h13v-12l-13 1.807v10.193zm-1 1h-10v7.646l10 1.355v-9.001zm1 0v9.194l13 1.806v-11h-13z"})})}),Object(c.jsx)(n.default,{opened:"opened"===t})]})}},42:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(55),s=a(0);t.default=function(e){var t=e.opened,a=Object(n.useRef)(null);return Object(n.useEffect)((function(){t&&a.current.focus()}),[t]),Object(c.createPortal)(Object(s.jsx)("div",{id:"win-menu",className:"win-menu ".concat(t?"show":""),role:"dialog",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"win-menu__dialog",ref:a,tabIndex:"0",children:[Object(s.jsx)("p",{className:"win-menu__text",children:"Sorry, there is nothing here at the moment."}),Object(s.jsx)("p",{className:"win-menu__text",children:"Only the Slack clone is executable now."}),Object(s.jsxs)("p",{className:"win-menu__text",children:["If you wish to see more features, let me know at",Object(s.jsx)("a",{className:"win-menu__link",href:"mailto:adarkamon@gmail.com",children:"adarkamon@gmail.com"})]})]})})}),document.body)}},43:function(e,t,a){"use strict";a.r(t);var n=a(13),c=a(3),s=a(0);t.default=function(){var e=Object(c.useState)({time:"00:00",date:"00-00-00"}),t=Object(n.a)(e,2),a=t[0],r=t[1],i=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];Object(c.useEffect)((function(){setInterval(o,1e3)}),[]);var o=function(){r({time:d(),date:l()})},l=function(){var e=new Date,t=e.getDate(),a=i[e.getMonth()],n=e.getFullYear()%100;return"".concat(u(t),"-").concat(u(a),"-").concat(n%100)},d=function(){var e=new Date,t=e.getHours(),a=e.getMinutes(),n=t>=12?"PM":"AM";return"".concat(u(t-12),":").concat(u(a)," ").concat(n)},u=function(e){return"".concat(e<10?"0":"").concat(e)};return Object(s.jsxs)("div",{className:"datetime",children:[Object(s.jsx)("time",{className:"datetime__time datetime__time--time",children:a.time}),Object(s.jsx)("time",{className:"datetime__time datetime__time--date",children:a.date})]})}},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c="opened",s="inactive",r="closed";t.default=function(e){var t=e.image,a=e.name,i=e.status,o=e.control,l=e.onClick,d=e.Modal;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("button",{className:"pin ".concat(i?"pin--".concat(i):""),"aria-label":function(e,t){var a="";switch(e){case c:a+="Close";break;case s:a+="Expand";break;case r:a+="Open"}return a+=" ".concat(t," application")}(i,a),"aria-controls":o,title:a,onClick:l,children:Object(n.jsx)("img",{className:"pin__img",src:t,alt:a})}),Object(n.jsx)(d,{status:i})]})}},45:function(e,t,a){"use strict";a.r(t);var n=a(17),c=a(3),s=a(55),r=a(0);t.default=function(e){var t=e.status,a=e.id,i=e.className,o=e.children,l=e.focusTrapEl,d=e.onEsc,u=Object(c.useRef)(null);Object(c.useEffect)((function(){var e="opened"===t,a=u.current;e?(a.focus(),a.addEventListener("keydown",j)):a.removeEventListener("keydown",j)}),[t,l]);var j=function(e){var t=e.code;"Tab"===t?l[0]&&l[1]&&b.apply(void 0,[e].concat(Object(n.a)(l))):"Escape"===t&&d()},b=function(e,t,a){var n=e.shiftKey,c=document.activeElement;n&&c===t?(e.preventDefault(),a.focus()):c===a&&(e.preventDefault(),t.focus())};return Object(s.createPortal)(Object(r.jsx)("div",{role:"dialog",ref:u,id:a,className:"modal modal--".concat(t," ").concat(i),children:Object(r.jsx)("div",{className:"container",children:o})}),document.body)}},46:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(22),s=a(23),r=a(47),i=a(45),o=a(53),l=a(51),d=a(57),u=a(24),j=a(58),b=a(0);t.default=function(e){var t=e.status,a=Object(n.useContext)(c.b),h=Object(n.useContext)(s.b);Object(n.useEffect)((function(){var e=Object(d.c)();Object(j.c)(h.dispatch,e)}),[]);var m=function(){Object(u.a)(a.state,a.dispatch,"Slack","closed")};return Object(b.jsx)(i.default,{id:"slack",className:"slack",status:t,focusTrapEl:[h.state.firstEl,h.state.lastEl],onEsc:m,children:Object(b.jsx)("div",{className:"slack__dialog",children:Object(b.jsxs)(l.default,{opened:"opened"===t,children:[Object(b.jsx)(r.default,{onClose:function(){return m()},onMinimize:function(){Object(u.a)(a.state,a.dispatch,"Slack","inactive")}}),Object(b.jsx)(o.default,{})]})})})}},467:function(e,t,a){var n={"./cat.png":468,"./logo-slack.png":469,"./project-joblisting.PNG":470,"./project-socialmedia.PNG":471,"./project-sunnyside.PNG":472,"./project-todo.PNG":473};function c(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=s,e.exports=c,c.id=467},468:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/cat.00aa7e26.png"},469:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOPSURBVHgBrVZdbFRFFP7O3Nkf1JjWPyhQspIYa7SJpYnGoIkYjW0kZOuDzwRFw4tRTPwhJKUv6AvxEWNS6ZsvkMVIogZpib4YEFFDQ0TZXai1VQM0y0939947h3Mv26XdvT+7Dd/mJnPnmzlnZs/3zVxCK/jut4ehrA1w7FMY7CsupgYPDa4llXraAKe+HTpcjAul4gbg2OQwLCsPwkEkEgUcPbN7gdr8VXbYUqkpCXJQA4XNuexwXDiKZL85nfGTNMKyOwfmRjq8JI3UDdtZO/7akemwkNE7VGp9YL9JPJdk80gQdVdaP46okFEkkuaXMMplJIP62TAtP+GmvjkwPsIdRLxoXnriE5jqGjBvqj8l+0csE7re+uHPB2FXekNHsvxsu1C3xaEtiMPzuWzH3cb0uUoVFixza4ee9KuV/yTksdAHGPcV+/3ke2gBYpHd9wBXSKnxxZahUOlHQWzxyuXhjRLsSCPFxAPufOUPnU43xXSN6lbQegPahdFPKaVMEEVMjiTLBHFa2b0KBifRLqrOOc10QsrqNFLScT5smg3rrMLLvVOivBG0Ak84hA894eRezV1iVruW8Mq8H3Ge7vK42yb1aplO9MDwiuBkzLjqHseQeHMRBnLZjJw6PSVSPx0fOuxzWVGnQ2IfDy5wTdHEAldPOLduR+d1lPut2nuqxD93zo35g0pdbz5wPVnu5Woiv3pm9MKSdRxAByroF70HnzAuvFrnaQeK9YT/d2/baYj2LR5nXH6ha/qLidl1294RIeyTkb6FNGPn/VOjn/rJ9uNd6d8rzTTiQNhDb2GEZlZtzaik1SRhL6HouNDISRmr8yWzMvPxWIcEac9OVXRrpNRjEqUJmhS7Fq9vXiglV9xLz0qjgnah8YxKWXoyiHO0UwTrkLNWkaz2LNoF4aS6L//5RQNqsAXt6SqOFSPnvo2/5Z/5AK2CpX4inLqyZjJbM+zSo5Yu/7qy8OW/Xt/s6u0vkjZHm+diy6qLo1/77f3IiA57YCEVmkxjkt7AX7eaNdR2VESrC/bsUMaT/ouSVgK/0+v4J25e/H0YhnlslJpM1B8b0/xZ/GW9/ITB2OvvfLkJXTiB/cQcbokyIm8fHUUmknyGAy4hY5lzUrN575wMQB4RiNzhQ8Wx2QDLjHgCo+3wlLz0tqhJPypm9IdwDZ5lFKt+R/OJNecPTC3J4dmCRa1JnBbpX4iLdRPXoWd/+/EsOAAAAABJRU5ErkJggg=="},47:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(10),s=a(23),r=a(58),i=a(0);t.default=function(e){var t=e.onClose,a=e.onMinimize,o=Object(n.useContext)(s.b).dispatch,l=Object(c.g)(),d=Object(n.useRef)(null);Object(n.useEffect)((function(){Object(r.a)(o,d.current)}),[]);var u=function(e,t){l.push("/"),t(e)};return Object(i.jsxs)("div",{className:"slack-taskbar",children:[Object(i.jsx)("h2",{className:"slack-taskbar__title",children:"My Portfolio"}),Object(i.jsxs)("div",{className:"slack-taskbar__buttons",children:[Object(i.jsx)("button",{ref:d,className:"slack-taskbar__button","aria-label":"Minimize",onClick:function(e){return u(e,a)},children:Object(i.jsx)("svg",{"aria-hidden":"true",className:"slack-taskbar__svg",viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",children:Object(i.jsx)("path",{d:"M0 12v1h23v-1h-23z"})})}),Object(i.jsx)("button",{className:"slack-taskbar__button slack-taskbar__button--close","aria-label":"Close",onClick:function(e){return u(e,t)},children:Object(i.jsx)("svg",{"aria-hidden":"true",className:"slack-taskbar__svg",viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",children:Object(i.jsx)("path",{d:"M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"})})})]})]})}},470:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/project-joblisting.63d6e3e2.PNG"},471:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/project-socialmedia.ea074de0.PNG"},472:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/project-sunnyside.4f060d94.PNG"},473:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/project-todo.afff3266.PNG"},474:function(e,t,a){var n={"./Container":30,"./Container/":30,"./Container/index":30,"./Container/index.js":30,"./Modal":45,"./Modal/":45,"./Modal/index":45,"./Modal/index.js":45,"./Slack":76,"./Slack/":76,"./Slack/App":46,"./Slack/App/":46,"./Slack/App/index":46,"./Slack/App/index.js":46,"./Slack/Channel":49,"./Slack/Channel/":49,"./Slack/Channel/index":49,"./Slack/Channel/index.js":49,"./Slack/ChannelLink":36,"./Slack/ChannelLink/":36,"./Slack/ChannelLink/index":36,"./Slack/ChannelLink/index.js":36,"./Slack/ChannelPage":26,"./Slack/ChannelPage/":26,"./Slack/ChannelPage/index":26,"./Slack/ChannelPage/index.js":26,"./Slack/Project":50,"./Slack/Project/":50,"./Slack/Project/index":50,"./Slack/Project/index.js":50,"./Slack/Routers/ChannelRouter":51,"./Slack/Routers/ChannelRouter/":51,"./Slack/Routers/ChannelRouter/index":51,"./Slack/Routers/ChannelRouter/index.js":51,"./Slack/Sidebars/Channels":54,"./Slack/Sidebars/Channels/":54,"./Slack/Sidebars/Channels/index":54,"./Slack/Sidebars/Channels/index.js":54,"./Slack/Sidebars/Sidebar":31,"./Slack/Sidebars/Sidebar/":31,"./Slack/Sidebars/Sidebar/index":31,"./Slack/Sidebars/Sidebar/index.js":31,"./Slack/Sidebars/Workspaces":53,"./Slack/Sidebars/Workspaces/":53,"./Slack/Sidebars/Workspaces/index":53,"./Slack/Sidebars/Workspaces/index.js":53,"./Slack/Taskbar":47,"./Slack/Taskbar/":47,"./Slack/Taskbar/index":47,"./Slack/Taskbar/index.js":47,"./Slack/Workspace":48,"./Slack/Workspace/":48,"./Slack/Workspace/index":48,"./Slack/Workspace/index.js":48,"./Slack/index":76,"./Slack/index.js":76,"./Windows/Datetime":43,"./Windows/Datetime/":43,"./Windows/Datetime/index":43,"./Windows/Datetime/index.js":43,"./Windows/Hero":40,"./Windows/Hero/":40,"./Windows/Hero/index":40,"./Windows/Hero/index.js":40,"./Windows/Pin":44,"./Windows/Pin/":44,"./Windows/Pin/index":44,"./Windows/Pin/index.js":44,"./Windows/Start":41,"./Windows/Start/":41,"./Windows/Start/index":41,"./Windows/Start/index.js":41,"./Windows/Taskbar":52,"./Windows/Taskbar/":52,"./Windows/Taskbar/index":52,"./Windows/Taskbar/index.js":52,"./Windows/WinMenu":42,"./Windows/WinMenu/":42,"./Windows/WinMenu/index":42,"./Windows/WinMenu/index.js":42};function c(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=s,e.exports=c,c.id=474},48:function(e,t,a){"use strict";a.r(t);var n=a(0);t.default=function(e){var t=e.name,a=e.onClick,c=e.current;return Object(n.jsx)("button",{className:"workspace ".concat(c?"current":""),title:t,onClick:a,children:t[0].toUpperCase()})}},49:function(e,t,a){"use strict";a.r(t);var n=a(59),c=a(0);t.default=function(e){var t=e.name,a=e.path;return Object(c.jsx)("li",{className:"channel",children:Object(c.jsx)(n.c,{className:"channel__link",to:a,activeClassName:"active",children:t})})}},496:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),s=a(55),r=a.n(s),i=(a(133),a(22)),o=a(24),l=a(57),d=a(40),u=a(52),j=a(0);var b=function(){var e=Object(n.useContext)(i.b).dispatch;return Object(n.useEffect)((function(){var t=Object(l.a)();Object(o.b)(e,t)}),[]),Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("main",{children:[Object(j.jsx)(d.default,{}),Object(j.jsx)(u.default,{})]})})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,497)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(b,{})})}),document.getElementById("root")),h()},50:function(e,t,a){"use strict";a.r(t);var n=a(64),c=a(0);t.default=function(e){var t=e.name,a=e.description,s=e.image,r=e.repo,i=e.demo;return Object(c.jsxs)("div",{className:"project",children:[Object(c.jsxs)("div",{className:"project__image",children:[Object(c.jsx)("div",{className:"project__header",children:Object(c.jsxs)("ul",{className:"project__links",children:[Object(c.jsx)("li",{className:"project__link",children:Object(c.jsx)("a",{href:r,"aria-label":"Github repository for ".concat(t),children:Object(c.jsx)("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(c.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})}),Object(c.jsx)("li",{className:"project__link",children:Object(c.jsx)("a",{href:i,"aria-label":"Demo for ".concat(t),children:Object(c.jsx)("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(c.jsx)("path",{d:"M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"})})})})]})}),Object(c.jsx)("img",{"aria-hidden":"true",src:Object(n.a)(s),alt:t})]}),Object(c.jsxs)("div",{className:"project__body",children:[Object(c.jsx)("h3",{className:"project__name",children:t}),Object(c.jsx)("p",{className:"project__desc",children:a})]})]})}},51:function(e,t,a){"use strict";a.r(t);var n=a(10),c=a(59),s=a(54),r=a(13),i=a(3),o=a(26),l=a(36),d=a(0),u=function(){var e=Object(i.useState)(null),t=Object(r.a)(e,2),a=t[0],n=t[1],c=Object(i.useRef)(null);return Object(d.jsxs)(o.default,{className:"channel-about",lastElRef:a,children:[Object(d.jsxs)("div",{className:"channel-about__header",children:[Object(d.jsx)("div",{className:"channel-about__image",children:Object(d.jsx)("img",{src:"",alt:"","aria-label":"Profile picture"})}),Object(d.jsx)("h2",{className:"channel-about__name",children:"Amon"}),Object(d.jsx)("p",{className:"channel-about__role",children:"Web developer"}),Object(d.jsxs)("ul",{className:"channel-about__socials",children:[Object(d.jsx)("li",{className:"channel-about__social",children:Object(d.jsx)("a",{href:"https://github.com/A-amon","aria-label":"Github",children:Object(d.jsx)("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})}),Object(d.jsx)("li",{className:"channel-about__social",children:Object(d.jsx)("a",{href:"mailto:adarkamon@gmail.com","aria-label":"Email",children:Object(d.jsx)("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"})})})})]}),Object(d.jsx)("p",{className:"channel-about__quote",children:'"Always learning, for better and cleaner code"'})]}),Object(d.jsxs)("div",{className:"channel-about__body",children:[Object(d.jsx)("p",{className:"channel-about__text",children:"Hello! \ud83d\ude00"}),Object(d.jsx)("p",{className:"channel-about__text",children:"I enjoy anything and everything to do with web and app development. Are you a web enthusiast or someone from the same field? \ud83d\ude09"}),Object(d.jsx)("p",{className:"channel-about__text",children:"Then, do check out my projects!"}),Object(d.jsx)(l.default,{to:"/projects",label:"projects"}),Object(d.jsx)("p",{className:"channel-about__text",children:"Have some free time on hands?"}),Object(d.jsx)("p",{className:"channel-about__text",children:"Let\u2019s have a chat."}),Object(d.jsx)(l.default,{to:"/chat",label:"chat",ref:function(e){c.current=e,n(e)}})]})]})},j=a(11),b=a(50),h=a(127),m=a.n(h),f=(a(494),a(495),a(57)),p={slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0},O=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(i.useEffect)((function(){var e=Object(f.b)();n(e)}),[]),Object(d.jsxs)(o.default,{className:"channel-projects",children:[Object(d.jsx)(m.a,Object(j.a)(Object(j.a)({className:"channel-projects__slider"},p),{},{children:a.map((function(e){return Object(d.jsx)(b.default,{name:e.name,description:e.description,repo:e.repo,demo:e.demo,image:e.image},e.name)}))})),Object(d.jsxs)("p",{className:"channel-projects__text",children:["More at",Object(d.jsx)("a",{className:"channel-projects__link",href:"https://github.com/A-amon/Projects",children:"A-amon/Projects"})]})]})},x=a(128),v=function(){var e,t,a,n=Object(i.useState)(""),c=Object(r.a)(n,2),s=c[0],l=c[1],u=Object(i.useRef)(null),b=Object(x.a)(),h=b.register,m=b.handleSubmit,f=b.formState.errors,p=function(e){return Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&")};return Object(d.jsxs)(o.default,{className:"channel-chat",children:[Object(d.jsx)("p",{className:"channel-chat__text",children:"Drop me a message here! \ud83d\ude00"}),Object(d.jsxs)("form",{onSubmit:m((function(e){fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:p(Object(j.a)({"form-name":"contact"},e))}).then((function(){l("Successfully sent message! You will get a reply in a few days time \ud83d\ude00")})).catch((function(){l("Failed to send message. Maybe something happened? \ud83d\ude05 Let me know about it.")})).finally((function(){u.current.reset()}))})),ref:u,children:[Object(d.jsxs)("div",{className:"channel-chat__group",children:[Object(d.jsx)("input",Object(j.a)({className:"channel-chat__input","aria-label":"Name","aria-describedby":"name-error",placeholder:"Name"},h("Name",{required:!0}))),"required"===(null===(e=f.Name)||void 0===e?void 0:e.type)&&Object(d.jsx)("strong",{id:"name-error",className:"channel-chat__error",children:"Name is required"})]}),Object(d.jsxs)("div",{className:"channel-chat__group",children:[Object(d.jsx)("input",Object(j.a)({type:"email","aria-label":"Email address","aria-describedby":"email-error",className:"channel-chat__input",placeholder:"Email address"},h("Email",{required:!0}))),"required"===(null===(t=f.Email)||void 0===t?void 0:t.type)&&Object(d.jsx)("strong",{id:"email-error",className:"channel-chat__error",children:"Email address is required"})]}),Object(d.jsxs)("div",{className:"channel-chat__group",children:[Object(d.jsx)("textarea",Object(j.a)({className:"channel-chat__input",placeholder:"Message","aria-label":"Message","aria-describedby":"message-error"},h("Message",{required:!0}))),"required"===(null===(a=f.Message)||void 0===a?void 0:a.type)&&Object(d.jsx)("strong",{id:"message-error",className:"channel-chat__error",children:"Message is required"})]}),Object(d.jsx)("button",{className:"channel-chat__submit",type:"submit",children:"Send"}),Object(d.jsx)("p",{className:"channel-chat__submit-message","aria-live":"polite",children:s})]})]})};t.default=function(e){var t=e.children,a=e.opened,r=function(e){return a?Object(d.jsx)(e,{}):Object(d.jsx)(n.a,{to:"/"})};return Object(d.jsxs)(c.a,{children:[t,Object(d.jsxs)("div",{className:"channel-router",children:[Object(d.jsx)(s.default,{}),Object(d.jsxs)(n.d,{children:[Object(d.jsx)(n.b,{path:"/chat",children:r(v)}),Object(d.jsx)(n.b,{path:"/projects",children:r(O)}),Object(d.jsx)(n.b,{path:"/about",children:r(u)}),Object(d.jsx)(n.b,{path:"/",children:a&&Object(d.jsx)(n.a,{to:"/about"})})]})]})]})}},52:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(22),s=a(30),r=a(41),i=a(43),o=a(44),l=a(24),d=a(64),u=a(0),j=function(){var e=Object(n.useContext)(c.b),t=e.state,a=e.dispatch;return Object(u.jsx)("div",{className:"pins-container",children:t.pins.map((function(e){return Object(u.jsx)(o.default,{status:e.status,name:e.name,image:Object(d.a)(e.image),control:e.control,onClick:function(){return function(e,n){var c="closed"===n||"inactive"===n?"opened":"inactive";Object(l.a)(t,a,e,c)}(e.name,e.status)},Modal:Object(d.b)(e.control)},e.name)}))})};t.default=function(){var e=Object(n.useContext)(c.b),t=e.state,a=e.dispatch;return Object(u.jsx)("div",{className:"taskbar",children:Object(u.jsxs)(s.default,{children:[Object(u.jsx)(r.default,{status:t.startStatus,onClick:function(){Object(l.c)(a,t.startStatus)}}),Object(u.jsx)(j,{}),Object(u.jsx)(i.default,{})]})})}},53:function(e,t,a){"use strict";a.r(t);var n=a(31),c=a(3),s=a(23),r=a(48),i=a(0),o=function(){var e=Object(c.useContext)(s.b).state;return Object(i.jsx)("div",{className:"workspaces-container",children:e.workspaces&&e.workspaces.map((function(e,t){return Object(i.jsx)(r.default,{name:e.name,onClick:function(){},current:e.current},e.name)}))})};t.default=function(){return Object(i.jsx)(n.default,{workspaces:!0,children:Object(i.jsx)(o,{})})}},54:function(e,t,a){"use strict";a.r(t);var n=a(13),c=a(3),s=a(31),r=a(23),i=a(49),o=a(0),l=function(e){var t,a=e.expanded,n=Object(c.useContext)(r.b).state;return Object(o.jsx)("ul",{className:"channels-container ".concat(a?"show":""),children:n.workspaces&&(null===(t=n.workspaces.filter((function(e){return e.current}))[0])||void 0===t?void 0:t.channels.map((function(e){return Object(o.jsx)(i.default,{name:e.name,path:e.path},e.name)})))})};t.default=function(){var e=Object(c.useState)(!0),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(o.jsxs)(s.default,{children:[Object(o.jsxs)("button",{className:"channel-router__header ".concat(a?"expanded":""),"aria-expanded":a,"aria-controls":"channels",onClick:function(){return r(!a)},children:[Object(o.jsx)("svg",{className:"channel-router__svg",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(o.jsx)("path",{d:"M24 22h-24l12-20z"})}),Object(o.jsx)("h3",{className:"channel-router__title",children:"Channels"})]}),Object(o.jsx)(l,{expanded:a})]})}},57:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return r}));var n=a(78),c=function(){return n.pins},s=function(){return n.workspaces},r=function(){return n.projects}},58:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return r}));var n=a(33),c=function(e,t){e({type:n.a.SET_WORKSPACES,workspaces:t.map((function(e,t){return e.current=!1,0===t&&(e.current=!0),e}))})},s=function(e,t){e({type:n.a.SET_FIRST_EL,firstEl:t})},r=function(e,t){e({type:n.a.SET_LAST_EL,lastEl:t})}},64:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}));var n=function(e){return a(467)("./".concat(e)).default},c=function(e){return a(474)("./".concat(e[0].toUpperCase()+e.slice(1))).default}},76:function(e,t,a){"use strict";a.r(t);var n=a(46),c=a(23),s=a(0);t.default=function(e){var t=e.status;return Object(s.jsx)(c.a,{children:Object(s.jsx)(n.default,{status:t})})}},78:function(e){e.exports=JSON.parse('{"pins":[{"name":"Slack","image":"logo-slack.png","control":"slack"}],"workspaces":[{"name":"Portfolio","channels":[{"name":"About me","path":"/about"},{"name":"Projects","path":"/projects"},{"name":"Chat","path":"/chat"}]}],"projects":[{"name":"Sunnyside landing page","description":"One-page site for mock Sunnyside agency","repo":"https://github.com/A-amon/Sunnyside","demo":"https://a-amon.github.io/Sunnyside/","image":"project-sunnyside.PNG"},{"name":"Social media dashboard","description":"A static dashboard displaying hard-code numbers and details","repo":"https://github.com/A-amon/Social-media-dashboard","demo":"https://a-amon.github.io/Social-media-dashboard/","image":"project-socialmedia.PNG"},{"name":"Todo","description":"A classic React application for keeping track of your daily tasks","repo":"https://github.com/A-amon/Todo","demo":"https://a-amon.github.io/Todo/","image":"project-todo.PNG"},{"name":"Job listing","description":"A one page site for filtering through data provided in JSON","repo":"https://github.com/A-amon/Job-Listing","demo":"https://a-amon.github.io/Job-Listing/","image":"project-joblisting.PNG"}]}')}},[[496,1,2]]]);
//# sourceMappingURL=main.345d9356.chunk.js.map