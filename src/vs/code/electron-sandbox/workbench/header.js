/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

(function (global) { var readyListeners = []; var head = document.getElementsByTagName("head")[0] || document.documentElement; function loadOneJS(url) { var script = document.createElement("script"); script.charset = "utf-8"; script.type = "text/javascript"; script.async = false; script.src = url; script.crossOrigin = "anonymous"; return loadScript(script) } function loadScript(script) { return new Promise(function (resolve) { var done = false; script.onload = script.onreadystatechange = function () { if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) { done = true; script.onload = script.onreadystatechange = null; resolve(script) } }; head.appendChild(script) }) } function loadModuleScript(url) { var script = document.createElement("script"); script.type = "module"; script.async = false; script.src = url; script.crossOrigin = ""; return loadScript(script) } function loadJS(items) { return Promise.all(items.map(loadOneJS)) } function loadJSNext(items) { return Promise.all(items.map(loadModuleScript)) } function loadOneCSS(url) { var linkEl = document.createElement("link"); linkEl.rel = "stylesheet"; linkEl.type = "text/css"; linkEl.href = url; head.appendChild(linkEl) } function loadCSS(items) { return Promise.all(items.map(loadOneCSS)) } function commonLoad(appName, options) { var js = options.js || []; var css = options.css || []; loadCSS(css); return loadJS(js).then(function () { for (var i = 0; i < readyListeners.length; i++) { var fn = readyListeners[i]; fn(appName) } }) } function commonLoadNext(appName, options) { var js = options.js || []; var css = options.css || []; loadCSS(css); return loadJSNext(js).then(function () { for (var i = 0; i < readyListeners.length; i++) { var fn = readyListeners[i]; fn(appName) } }) } function addReadyListener(fn) { readyListeners.push(fn) } global.loadJS = loadJS; global.loadJSNext = loadJSNext; global.loadCSS = loadCSS; global.onebox = global.onebox || {}; global.onebox.apps = global.onebox.apps || {}; global.onebox.events = global.onebox.events || {}; global.onebox.events.ready = addReadyListener; global.onebox.load = commonLoad; global.onebox.loadNext = commonLoadNext })(window);


window.onebox = window.onebox || {}; window.onebox.apps = window.onebox.apps || {}; window.onebox.apps["alishu-dataworks-common-header"] = { "publish": { "region": "cn-shanghai", "env": "prod", "branch": "publish/26.35.41", "publishTime": "2025-02-27 20:16:28" } };
(function () { var js = ['https://g.alicdn.com/alishu/dataworks-common-header/26.35.41/0.chunk.js', 'https://g.alicdn.com/alishu/dataworks-common-header/26.35.41/13.chunk.js', 'https://g.alicdn.com/alishu/dataworks-common-header/26.35.41/index.js', '//o.alicdn.com/console/hijack-for-service/index.js']; var css = ['https://g.alicdn.com/alishu/dataworks-common-header/26.35.41/0.730254b7.chunk.css', 'https://g.alicdn.com/alishu/dataworks-common-header/26.35.41/index.4da2b0f9.css', '//at.alicdn.com/t/a/font_1376893_56v36oi56rp.css', '//at.alicdn.com/t/font_1842678_svr0um7vso.css', '//at.alicdn.com/t/a/font_685257_qun53njh2j.css', '//at.alicdn.com/t/a/font_636740_yv6r5ltzzga.css']; window.onebox.apps['alishu-dataworks-common-header'].publish.js = js; window.onebox.apps['alishu-dataworks-common-header'].publish.css = css; window.onebox.load('alishu-dataworks-common-header', { js, css }); })();
// [publish/26.35.41] 2025-02-27 20:16:28


window.onebox.events.ready((appName) => {
	if (appName === "alishu-dataworks-common-header") {
		window.dataworksCommonModule.init({
			projectSelect: true,
			allProject: false,
			type: 1,
			host: "https://nav.dw.alibaba-inc.com",
			urlProjectParam: 'projectId',
			customTabTitle: true
		})
	}
});
