(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{169:function(e,t,n){"use strict";n.r(t);var s=n(0),a=Object(s.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),n("p",[e._v("Whether it's a multi-person collaboration or personal projects, code specifications are important. It can not only largely avoids basic syntax errors, but also ensures the readability of the code.")]),e._m(1),n("p",[e._v("All configuration files are in "),n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/.eslintrc.js",target:"_blank",rel:"noopener noreferrer"}},[e._v(".eslintrc.js"),n("OutboundLink")],1),e._v(".\nThe basic eslint rules of this project is based on the official eslint rules of vue "),n("a",{attrs:{href:"https://github.com/vuejs/eslint-config-vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("eslint-config-vue"),n("OutboundLink")],1),e._v(" but made minor changes. You can customize your configuration according to your needs.")]),n("p",[e._v("Such as: my personal or project team is accustomed to using two spaces, but you may feel that the four spaces are more pleasing, and you can make the following changes.")]),n("p",[e._v("Enter the project of "),n("code",[e._v(".eslintrc.js")]),e._v(", find "),n("code",[e._v("indent")]),e._v(",and then set it to "),n("code",[e._v("4")]),e._v(" 。There are a variety of configuration information, see details "),n("a",{attrs:{href:"https://eslint.org/docs/rules/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ESLint Documention"),n("OutboundLink")],1),e._v("。")]),e._m(2),n("p",[e._v("If you really don't want to use ESLint,you just find "),n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/build/webpack.base.conf.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("config/index.js"),n("OutboundLink")],1),e._v(".\nAnd then set "),n("code",[e._v("useEslint: true")]),e._v(" to "),n("code",[e._v("useEslint: false")]),e._v(" .")]),e._m(3),e._m(4),n("br"),n("p",[e._v("Every time you save your code, vscode will be able to mark red areas that do not conform to the eslint rules, and make some simple self-fixes at the same time. The installation steps are as follows:")]),e._m(5),e._m(6),e._m(7),n("p",[e._v("Everyone and the team have their own code specification, unification is good, to create their own eslint rules and upload it to the npm will be fun. Such as ElemeFE "),n("a",{attrs:{href:"https://www.npmjs.com/package/eslint-config-elemefe",target:"_blank",rel:"noopener noreferrer"}},[e._v("config"),n("OutboundLink")],1),e._v(" or Vue official  "),n("a",{attrs:{href:"https://github.com/vuejs/eslint-config-vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("config"),n("OutboundLink")],1),e._v(".")]),n("p",[n("a",{attrs:{href:"https://github.com/varHarrie/Dawn-Blossoms/issues/10",target:"_blank",rel:"noopener noreferrer"}},[e._v("vscode plugin and configuration recommendations"),n("OutboundLink")],1)]),e._m(8),e._m(9)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"eslint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eslint","aria-hidden":"true"}},[this._v("#")]),this._v(" ESLint")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config","aria-hidden":"true"}},[this._v("#")]),this._v(" Config")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"cancel-eslint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cancel-eslint","aria-hidden":"true"}},[this._v("#")]),this._v(" Cancel ESLint")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configure-eslint-in-vscode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-eslint-in-vscode","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure ESLint in vscode")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Sharp tools make good work! Personally recommend eslint+vscode to write VUE, there is definitely a very cool\n"),t("img",{attrs:{src:"https://wpimg.wallstcn.com/e94a76df-6dc0-4c15-9785-28b553a163e9.png",alt:"eslintGif.gif"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("First install the eslint plugin\n"),t("img",{attrs:{src:"https://wpimg.wallstcn.com/72f126cb-09eb-4b27-b02e-65e79eb76220.png",alt:"eslint1.png"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("After we have installed ESLint, we back to VSCode to set up . Go to "),t("code",[this._v("Code")]),this._v(" > "),t("code",[this._v("Preferences")]),this._v(" > "),t("code",[this._v("Settings")]),this._v(" and add the following configuration.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('\n    "files.autoSave":"off",\n    "eslint.validate": [\n       "javascript",\n       "javascriptreact",\n       "html",\n       { "language": "vue", "autoFix": true }\n     ],\n     "eslint.options": {\n        "plugins": ["html"]\n     }\n\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"auto-fix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auto-fix","aria-hidden":"true"}},[this._v("#")]),this._v(" Auto fix")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" run lint -- --fix\n")])])])}],!1,null,null,null);t.default=a.exports}}]);