(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-info-dialog/app-info-dialog.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-info-dialog/app-info-dialog.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-info [hasDevices]=\"hasDevices\" [hasPermission]=\"hasPermission\"></app-info>\n\n<mat-dialog-actions>\n  <button mat-flat-button color=\"primary\" mat-dialog-close>Done</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div height=\"100%\" width=\"100%\"><router-outlet></router-outlet></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/formats-dialog/formats-dialog.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/formats-dialog/formats-dialog.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    Available formats:\n  </header>\n  \n  <mat-selection-list #selectedFormats (selectionChange)=\"onSelectionChange($event)\">\n    <mat-list-option *ngFor=\"let format of formatsAvailable\" checkboxPosition=\"start\" [selected]=\"isEnabled(format)\" [value]=\"format\">\n      {{ formatNames[format] }}\n    </mat-list-option>\n  </mat-selection-list>\n  \n  <mat-dialog-actions>\n    <button mat-flat-button color=\"primary\" (click)=\"close()\">Done</button>\n  </mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<style>\n    :host {\n      font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n      font-size: 14px;\n      color: #333;\n      box-sizing: border-box;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n  \n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      margin: 8px 0;\n    }\n  \n    p {\n      margin: 0;\n    }\n  \n    .spacer {\n      flex: 1;\n    }\n  \n    .toolbar {\n      height: 60px;\n      margin: -8px;\n      display: flex;\n      align-items: center;\n      background-color: #1976d2;\n      color: white;\n      font-weight: 600;\n    }\n  \n    .toolbar img {\n      margin: 0 16px;\n    }\n  \n    .toolbar #twitter-logo {\n      height: 40px;\n      margin: 0 16px;\n    }\n  \n    .toolbar #twitter-logo:hover {\n      opacity: 0.8;\n    }\n  \n    .content {\n      display: flex;\n      margin: 32px auto;\n      padding: 0 16px;\n      max-width: 960px;\n      flex-direction: column;\n      align-items: center;\n    }\n  \n    svg.material-icons {\n      height: 24px;\n      width: auto;\n    }\n  \n    svg.material-icons:not(:last-child) {\n      margin-right: 8px;\n    }\n  \n    .card svg.material-icons path {\n      fill: #888;\n    }\n  \n    .card-container {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      margin-top: 16px;\n    }\n  \n    .card {\n      border-radius: 4px;\n      border: 1px solid #eee;\n      background-color: #fafafa;\n      height: 40px;\n      width: 200px;\n      margin: 0 8px 16px;\n      padding: 16px;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      transition: all 0.2s ease-in-out;\n      line-height: 24px;\n    }\n  \n    .card-container .card:not(:last-child) {\n      margin-right: 0;\n    }\n  \n    .card.card-small {\n      height: 16px;\n      width: 168px;\n    }\n  \n    .card-container .card:not(.highlight-card) {\n      cursor: pointer;\n    }\n  \n    .card-container .card:not(.highlight-card):hover {\n      transform: translateY(-3px);\n      box-shadow: 0 4px 17px rgba(black, 0.35);\n    }\n  \n    .card-container .card:not(.highlight-card):hover .material-icons path {\n      fill: rgb(105, 103, 103);\n    }\n  \n    .card.highlight-card {\n      background-color: #1976d2;\n      color: white;\n      font-weight: 600;\n      border: none;\n      width: auto;\n      min-width: 30%;\n      position: relative;\n    }\n  \n    .card.card.highlight-card span {\n      margin-left: 60px;\n    }\n  \n    svg#rocket {\n      width: 80px;\n      position: absolute;\n      left: -10px;\n      top: -24px;\n    }\n  \n    svg#rocket-smoke {\n      height: 100vh;\n      position: absolute;\n      top: 10px;\n      right: 180px;\n      z-index: -10;\n    }\n  \n    a,\n    a:visited,\n    a:hover {\n      color: #1976d2;\n      text-decoration: none;\n    }\n  \n    a:hover {\n      color: #125699;\n    }\n  \n    .terminal {\n      position: relative;\n      width: 80%;\n      max-width: 600px;\n      border-radius: 6px;\n      padding-top: 45px;\n      margin-top: 8px;\n      overflow: hidden;\n      background-color: rgb(15, 15, 16);\n    }\n  \n    .terminal::before {\n      content: \"\\2022 \\2022 \\2022\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 4px;\n      background: rgb(58, 58, 58);\n      color: #c2c3c4;\n      width: 100%;\n      font-size: 2rem;\n      line-height: 0;\n      padding: 14px 0;\n      text-indent: 4px;\n    }\n  \n    .terminal pre {\n      font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n      color: white;\n      padding: 0 1rem 1rem;\n      margin: 0;\n    }\n  \n    .circle-link {\n      height: 40px;\n      width: 40px;\n      border-radius: 40px;\n      margin: 8px;\n      background-color: white;\n      border: 1px solid #eeeeee;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      cursor: pointer;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n      transition: 1s ease-out;\n    }\n  \n    .circle-link:hover {\n      transform: translateY(-0.25rem);\n      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n    }\n  \n    footer {\n      margin-top: 8px;\n      display: flex;\n      align-items: center;\n      line-height: 20px;\n    }\n  \n    footer a {\n      display: flex;\n      align-items: center;\n    }\n  \n    .github-star-badge {\n      color: #24292e;\n      display: flex;\n      align-items: center;\n      font-size: 12px;\n      padding: 3px 10px;\n      border: 1px solid rgba(27,31,35,.2);\n      border-radius: 3px;\n      background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n      margin-left: 4px;\n      font-weight: 600;\n      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n    }\n  \n    .github-star-badge:hover {\n      background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n      border-color: rgba(27,31,35,.35);\n      background-position: -.5em;\n    }\n  \n    .github-star-badge .material-icons {\n      height: 16px;\n      width: 16px;\n      margin-right: 4px;\n    }\n  \n    svg#clouds {\n      position: fixed;\n      bottom: -160px;\n      left: -230px;\n      z-index: -10;\n      width: 1920px;\n    }\n  \n  \n    /* Responsive Styles */\n    @media screen and (max-width: 767px) {\n  \n      .card-container > *:not(.circle-link) ,\n      .terminal {\n        width: 100%;\n      }\n  \n      .card:not(.highlight-card) {\n        height: 16px;\n        margin: 8px 0;\n      }\n  \n      .card.highlight-card span {\n        margin-left: 72px;\n      }\n  \n      svg#rocket-smoke {\n        right: 120px;\n        transform: rotate(-5deg);\n      }\n    }\n  \n    @media screen and (max-width: 575px) {\n      svg#rocket-smoke {\n        display: none;\n        visibility: hidden;\n      }\n    }\n  </style>\n  \n  <!-- Toolbar -->\n  <div class=\"toolbar\" role=\"banner\">\n    <img\n      width=\"40\"\n      alt=\"Angular Logo\"\n      src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n    />\n    <span>Welcome</span>\n      <div class=\"spacer\"></div>\n    <a aria-label=\"Angular on twitter\" target=\"_blank\" rel=\"noopener\" href=\"https://twitter.com/angular\" title=\"Twitter\">\n      \n      <svg id=\"twitter-logo\" height=\"24\" data-name=\"Logo — FIXED\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\">\n        <defs>\n          <style>\n            .cls-1 {\n              fill: none;\n            }\n  \n            .cls-2 {\n              fill: #ffffff;\n            }\n          </style>\n        </defs>\n        <rect class=\"cls-1\" width=\"400\" height=\"400\" />\n        <path class=\"cls-2\" d=\"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23\"\n        />\n      </svg>\n      \n    </a>\n  </div>\n  \n  <div class=\"content\" role=\"main\">\n  \n    <!-- Highlight Card -->\n    <div class=\"card highlight-card card-small\">\n  \n      <svg id=\"rocket\" alt=\"Rocket Ship\" xmlns=\"http://www.w3.org/2000/svg\" width=\"101.678\" height=\"101.678\" viewBox=\"0 0 101.678 101.678\">\n        <g id=\"Group_83\" data-name=\"Group 83\" transform=\"translate(-141 -696)\">\n          <circle id=\"Ellipse_8\" data-name=\"Ellipse 8\" cx=\"50.839\" cy=\"50.839\" r=\"50.839\" transform=\"translate(141 696)\" fill=\"#dd0031\"/>\n          <g id=\"Group_47\" data-name=\"Group 47\" transform=\"translate(165.185 720.185)\">\n            <path id=\"Path_33\" data-name=\"Path 33\" d=\"M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z\" transform=\"translate(0.371 3.363)\" fill=\"#fff\"/>\n            <path id=\"Path_34\" data-name=\"Path 34\" d=\"M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z\" transform=\"translate(0 0.005)\" fill=\"#fff\"/>\n          </g>\n        </g>\n      </svg>\n  \n      <span>{{ title }} app is running!</span>\n  \n      <svg id=\"rocket-smoke\" alt=\"Rocket Ship Smoke\" xmlns=\"http://www.w3.org/2000/svg\" width=\"516.119\" height=\"1083.632\" viewBox=\"0 0 516.119 1083.632\">\n        <path id=\"Path_40\" data-name=\"Path 40\" d=\"M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z\" transform=\"translate(-147.025 -140.939)\" fill=\"#f5f5f5\"/>\n      </svg>\n  \n    </div>\n  \n    <!-- Resources -->\n    <h2>Resources</h2>\n    <p>Here are some links to help you get started:</p>\n  \n    <div class=\"card-container\">\n      <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z\"/></svg>\n  \n        <span>Learn Angular</span>\n  \n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>    </a>\n  \n      <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\"/></svg>\n  \n        <span>CLI Documentation</span>\n  \n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\n      </a>\n  \n      <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z\"/></svg>\n  \n        <span>Angular Blog</span>\n  \n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\n      </a>\n  \n    </div>\n  \n    <!-- Next Steps -->\n    <h2>Next Steps</h2>\n    <p>What do you want to do next with your app?</p>\n  \n    <input type=\"hidden\" #selection>\n  \n    <div class=\"card-container\">\n      <div class=\"card card-small\" (click)=\"selection.value = 'component'\" tabindex=\"0\">\n          <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n  \n        <span>New Component</span>\n      </div>\n  \n      <div class=\"card card-small\" (click)=\"selection.value = 'material'\" tabindex=\"0\">\n          <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n  \n        <span>Angular Material</span>\n      </div>\n  \n      <div class=\"card card-small\" (click)=\"selection.value = 'dependency'\" tabindex=\"0\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n  \n        <span>Add Dependency</span>\n      </div>\n  \n      <div class=\"card card-small\" (click)=\"selection.value = 'test'\" tabindex=\"0\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n  \n        <span>Run and Watch Tests</span>\n      </div>\n  \n      <div class=\"card card-small\" (click)=\"selection.value = 'build'\" tabindex=\"0\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n  \n        <span>Build for Production</span>\n      </div>\n      <div class=\"card card-small\" (click)=\"selection.value = 'build'\" tabindex=\"0\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n  \n        <span><a [routerLink]=\"['/scanner']\" routerLinkActive=\"router-link-active\" >Launch Scanner</a></span>\n      </div>\n    </div>\n  \n    <!-- Terminal -->\n    <div class=\"terminal\" [ngSwitch]=\"selection.value\">\n        <pre *ngSwitchDefault>ng generate component xyz</pre>\n        <pre *ngSwitchCase=\"'material'\">ng add @angular/material</pre>\n        <pre *ngSwitchCase=\"'dependency'\">ng add _____</pre>\n        <pre *ngSwitchCase=\"'test'\">ng test</pre>\n        <pre *ngSwitchCase=\"'build'\">ng build --prod</pre>\n    </div>\n  \n    <!-- Links -->\n    <div class=\"card-container\">\n      <a class=\"circle-link\" title=\"Animations\" href=\"https://angular.io/guide/animations\" target=\"_blank\" rel=\"noopener\">\n        <svg id=\"Group_20\" data-name=\"Group 20\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.813\" height=\"23.453\" viewBox=\"0 0 21.813 23.453\">\n          <path id=\"Path_15\" data-name=\"Path 15\" d=\"M4099.584,972.736h0l-10.882,3.9,1.637,14.4,9.245,5.153,9.245-5.153,1.686-14.4Z\" transform=\"translate(-4088.702 -972.736)\" fill=\"#ffa726\"/>\n          <path id=\"Path_16\" data-name=\"Path 16\" d=\"M4181.516,972.736v23.453l9.245-5.153,1.686-14.4Z\" transform=\"translate(-4170.633 -972.736)\" fill=\"#fb8c00\"/>\n          <path id=\"Path_17\" data-name=\"Path 17\" d=\"M4137.529,1076.127l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1058.315)\" fill=\"#ffe0b2\"/>\n          <path id=\"Path_18\" data-name=\"Path 18\" d=\"M4137.529,1051.705l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1036.757)\" fill=\"#fff3e0\"/>\n          <path id=\"Path_19\" data-name=\"Path 19\" d=\"M4137.529,1027.283l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1015.199)\" fill=\"#fff\"/>\n        </svg>\n      </a>\n  \n      <a class=\"circle-link\" title=\"CLI\" href=\"https://cli.angular.io/\" target=\"_blank\" rel=\"noopener\">\n        <svg alt=\"Angular CLI Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.762\" height=\"23.447\" viewBox=\"0 0 21.762 23.447\">\n          <g id=\"Group_21\" data-name=\"Group 21\" transform=\"translate(0)\">\n            <path id=\"Path_20\" data-name=\"Path 20\" d=\"M2660.313,313.618h0l-10.833,3.9,1.637,14.4,9.2,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-2649.48 -313.618)\" fill=\"#37474f\"/>\n            <path id=\"Path_21\" data-name=\"Path 21\" d=\"M2741.883,313.618v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-2731.05 -313.618)\" fill=\"#263238\"/>\n            <path id=\"Path_22\" data-name=\"Path 22\" d=\"M2692.293,379.169h11.724V368.618h-11.724Zm11.159-.6h-10.608v-9.345h10.621v9.345Z\" transform=\"translate(-2687.274 -362.17)\" fill=\"#fff\"/>\n            <path id=\"Path_23\" data-name=\"Path 23\" d=\"M2709.331,393.688l.4.416,2.265-2.28-2.294-2.294-.4.4,1.893,1.893Z\" transform=\"translate(-2702.289 -380.631)\" fill=\"#fff\"/>\n            <rect id=\"Rectangle_12\" data-name=\"Rectangle 12\" width=\"3.517\" height=\"0.469\" transform=\"translate(9.709 13.744)\" fill=\"#fff\"/>\n          </g>\n        </svg>\n      </a>\n  \n      <a class=\"circle-link\" title=\"Augury\" href=\"https://augury.rangle.io/\" target=\"_blank\" rel=\"noopener\">\n        <svg alt=\"Angular Augury Logo\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"21.81\" height=\"23.447\" viewBox=\"0 0 21.81 23.447\">\n          <defs>\n            <clipPath id=\"clip-path\">\n              <rect id=\"Rectangle_13\" data-name=\"Rectangle 13\" width=\"10.338\" height=\"10.27\" fill=\"none\"/>\n            </clipPath>\n          </defs>\n          <g id=\"Group_25\" data-name=\"Group 25\" transform=\"translate(0)\">\n            <path id=\"Path_24\" data-name=\"Path 24\" d=\"M3780.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-3769.274 -311.417)\" fill=\"#4a3493\"/>\n            <path id=\"Path_25\" data-name=\"Path 25\" d=\"M3862.088,311.417v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-3851.207 -311.417)\" fill=\"#311b92\"/>\n            <g id=\"Group_24\" data-name=\"Group 24\" transform=\"translate(6.194 6.73)\" opacity=\"0.5\">\n              <g id=\"Group_23\" data-name=\"Group 23\" transform=\"translate(0 0)\">\n                <g id=\"Group_22\" data-name=\"Group 22\" clip-path=\"url(#clip-path)\">\n                  <path id=\"Path_26\" data-name=\"Path 26\" d=\"M3832.4,373.252a5.168,5.168,0,1,1-5.828-4.383,5.216,5.216,0,0,1,2.574.3,3.017,3.017,0,1,0,3.252,4.086Z\" transform=\"translate(-3822.107 -368.821)\" fill=\"#fff\"/>\n                </g>\n              </g>\n            </g>\n            <path id=\"Path_27\" data-name=\"Path 27\" d=\"M3830.582,370.848a5.162,5.162,0,1,1-3.254-4.086,3.017,3.017,0,1,0,3.252,4.086Z\" transform=\"translate(-3814.311 -359.969)\" fill=\"#fff\"/>\n          </g>\n        </svg>\n      </a>\n  \n      <a class=\"circle-link\" title=\"Protractor\" href=\"https://www.protractortest.org/\" target=\"_blank\" rel=\"noopener\">\n        <svg alt=\"Angular Protractor Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.81\" height=\"23.447\" viewBox=\"0 0 21.81 23.447\">\n          <g id=\"Group_26\" data-name=\"Group 26\" transform=\"translate(0)\">\n            <path id=\"Path_28\" data-name=\"Path 28\" d=\"M4620.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-4609.274 -311.417)\" fill=\"#e13439\"/>\n            <path id=\"Path_29\" data-name=\"Path 29\" d=\"M4702.088,311.417v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-4691.207 -311.417)\" fill=\"#b52f32\"/>\n            <path id=\"Path_30\" data-name=\"Path 30\" d=\"M4651.044,369.58v-.421h1.483a7.6,7.6,0,0,0-2.106-5.052l-1.123,1.123-.3-.3,1.122-1.121a7.588,7.588,0,0,0-4.946-2.055v1.482h-.421v-1.485a7.589,7.589,0,0,0-5.051,2.058l1.122,1.121-.3.3-1.123-1.123a7.591,7.591,0,0,0-2.106,5.052h1.482v.421h-1.489v1.734h15.241V369.58Zm-10.966-.263a4.835,4.835,0,0,1,9.67,0Z\" transform=\"translate(-4634.008 -355.852)\" fill=\"#fff\"/>\n          </g>\n        </svg>\n      </a>\n  \n      <a class=\"circle-link\" title=\"Find a Local Meetup\" href=\"https://www.meetup.com/find/?keywords=angular\" target=\"_blank\" rel=\"noopener\">\n        <svg alt=\"Meetup Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24.607\" height=\"23.447\" viewBox=\"0 0 24.607 23.447\">\n          <path id=\"logo--mSwarm\" d=\"M21.221,14.95A4.393,4.393,0,0,1,17.6,19.281a4.452,4.452,0,0,1-.8.069c-.09,0-.125.035-.154.117a2.939,2.939,0,0,1-2.506,2.091,2.868,2.868,0,0,1-2.248-.624.168.168,0,0,0-.245-.005,3.926,3.926,0,0,1-2.589.741,4.015,4.015,0,0,1-3.7-3.347,2.7,2.7,0,0,1-.043-.38c0-.106-.042-.146-.143-.166a3.524,3.524,0,0,1-1.516-.69A3.623,3.623,0,0,1,2.23,14.557a3.66,3.66,0,0,1,1.077-3.085.138.138,0,0,0,.026-.2,3.348,3.348,0,0,1-.451-1.821,3.46,3.46,0,0,1,2.749-3.28.44.44,0,0,0,.355-.281,5.072,5.072,0,0,1,3.863-3,5.028,5.028,0,0,1,3.555.666.31.31,0,0,0,.271.03A4.5,4.5,0,0,1,18.3,4.7a4.4,4.4,0,0,1,1.334,2.751,3.658,3.658,0,0,1,.022.706.131.131,0,0,0,.1.157,2.432,2.432,0,0,1,1.574,1.645,2.464,2.464,0,0,1-.7,2.616c-.065.064-.051.1-.014.166A4.321,4.321,0,0,1,21.221,14.95ZM13.4,14.607a2.09,2.09,0,0,0,1.409,1.982,4.7,4.7,0,0,0,1.275.221,1.807,1.807,0,0,0,.9-.151.542.542,0,0,0,.321-.545.558.558,0,0,0-.359-.534,1.2,1.2,0,0,0-.254-.078c-.262-.047-.526-.086-.787-.138a.674.674,0,0,1-.617-.75,3.394,3.394,0,0,1,.218-1.109c.217-.658.509-1.286.79-1.918a15.609,15.609,0,0,0,.745-1.86,1.95,1.95,0,0,0,.06-1.073,1.286,1.286,0,0,0-1.051-1.033,1.977,1.977,0,0,0-1.521.2.339.339,0,0,1-.446-.042c-.1-.092-.2-.189-.307-.284a1.214,1.214,0,0,0-1.643-.061,7.563,7.563,0,0,1-.614.512A.588.588,0,0,1,10.883,8c-.215-.115-.437-.215-.659-.316a2.153,2.153,0,0,0-.695-.248A2.091,2.091,0,0,0,7.541,8.562a9.915,9.915,0,0,0-.405.986c-.559,1.545-1.015,3.123-1.487,4.7a1.528,1.528,0,0,0,.634,1.777,1.755,1.755,0,0,0,1.5.211,1.35,1.35,0,0,0,.824-.858c.543-1.281,1.032-2.584,1.55-3.875.142-.355.28-.712.432-1.064a.548.548,0,0,1,.851-.24.622.622,0,0,1,.185.539,2.161,2.161,0,0,1-.181.621c-.337.852-.68,1.7-1.018,2.552a2.564,2.564,0,0,0-.173.528.624.624,0,0,0,.333.71,1.073,1.073,0,0,0,.814.034,1.22,1.22,0,0,0,.657-.655q.758-1.488,1.511-2.978.35-.687.709-1.37a1.073,1.073,0,0,1,.357-.434.43.43,0,0,1,.463-.016.373.373,0,0,1,.153.387.7.7,0,0,1-.057.236c-.065.157-.127.316-.2.469-.42.883-.846,1.763-1.262,2.648A2.463,2.463,0,0,0,13.4,14.607Zm5.888,6.508a1.09,1.09,0,0,0-2.179.006,1.09,1.09,0,0,0,2.179-.006ZM1.028,12.139a1.038,1.038,0,1,0,.01-2.075,1.038,1.038,0,0,0-.01,2.075ZM13.782.528a1.027,1.027,0,1,0-.011,2.055A1.027,1.027,0,0,0,13.782.528ZM22.21,6.95a.882.882,0,0,0-1.763.011A.882.882,0,0,0,22.21,6.95ZM4.153,4.439a.785.785,0,1,0,.787-.78A.766.766,0,0,0,4.153,4.439Zm8.221,18.22a.676.676,0,1,0-.677.666A.671.671,0,0,0,12.374,22.658ZM22.872,12.2a.674.674,0,0,0-.665.665.656.656,0,0,0,.655.643.634.634,0,0,0,.655-.644A.654.654,0,0,0,22.872,12.2ZM7.171-.123A.546.546,0,0,0,6.613.43a.553.553,0,1,0,1.106,0A.539.539,0,0,0,7.171-.123ZM24.119,9.234a.507.507,0,0,0-.493.488.494.494,0,0,0,.494.494.48.48,0,0,0,.487-.483A.491.491,0,0,0,24.119,9.234Zm-19.454,9.7a.5.5,0,0,0-.488-.488.491.491,0,0,0-.487.5.483.483,0,0,0,.491.479A.49.49,0,0,0,4.665,18.936Z\" transform=\"translate(0 0.123)\" fill=\"#f64060\"/>\n        </svg>\n      </a>\n  \n      <a class=\"circle-link\" title=\"Join the Conversation on Gitter\" href=\"https://gitter.im/angular/angular\" target=\"_blank\" rel=\"noopener\">\n        <svg alt=\"Gitter Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19.447\" height=\"19.447\" viewBox=\"0 0 19.447 19.447\">\n          <g id=\"Group_40\" data-name=\"Group 40\" transform=\"translate(-1612 -405)\">\n            <rect id=\"Rectangle_19\" data-name=\"Rectangle 19\" width=\"19.447\" height=\"19.447\" transform=\"translate(1612 405)\" fill=\"#e60257\"/>\n            <g id=\"gitter\" transform=\"translate(1617.795 408.636)\">\n              <g id=\"Group_33\" data-name=\"Group 33\" transform=\"translate(0 0)\">\n                <rect id=\"Rectangle_15\" data-name=\"Rectangle 15\" width=\"1.04\" height=\"9.601\" transform=\"translate(2.304 2.324)\" fill=\"#fff\"/>\n                <rect id=\"Rectangle_16\" data-name=\"Rectangle 16\" width=\"1.04\" height=\"9.601\" transform=\"translate(4.607 2.324)\" fill=\"#fff\"/>\n                <rect id=\"Rectangle_17\" data-name=\"Rectangle 17\" width=\"1.04\" height=\"4.648\" transform=\"translate(6.91 2.324)\" fill=\"#fff\"/>\n                <rect id=\"Rectangle_18\" data-name=\"Rectangle 18\" width=\"1.04\" height=\"6.971\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n              </g>\n            </g>\n          </g>\n        </svg>\n      </a>\n    </div>\n  \n    <!-- Footer -->\n    <footer>\n        Love Angular?&nbsp;\n        <a href=\"https://github.com/angular/angular\" target=\"_blank\" rel=\"noopener\"> Give our repo a star.\n          <div class=\"github-star-badge\">\n              <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>\n            Star\n          </div>\n        </a>\n        <a href=\"https://github.com/angular/angular\" target=\"_blank\" rel=\"noopener\">\n          <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\" fill=\"#1976d2\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n        </a>\n    </footer>\n  \n    <svg id=\"clouds\" alt=\"Gray Clouds Background\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2611.084\" height=\"485.677\" viewBox=\"0 0 2611.084 485.677\">\n      <path id=\"Path_39\" data-name=\"Path 39\" d=\"M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z\" transform=\"translate(142.69 -634.312)\" fill=\"#eee\"/>\n    </svg>\n  \n  </div>\n  \n  <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n  <!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\n  <!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n  <!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n  <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n  <!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\n  <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n  \n  \n  \n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/qrscanner/qrscanner.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/qrscanner/qrscanner.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"scanner-shell\" [hidden]=\"!hasDevices\">\n\n    <mat-menu #appMenu=\"matMenu\">\n      <mat-selection-list>\n        <mat-list-option checkboxPosition=\"start\" (click)=\"toggleTryHarder()\" [selected]=\"tryHarder\">\n          Enable Try-harder\n        </mat-list-option>\n        <mat-list-option checkboxPosition=\"start\" (click)=\"toggleTorch()\" [selected]=\"torchEnabled\"\n          *ngIf=\"torchAvailable$ | async\">\n          Enable Torch\n        </mat-list-option>\n      </mat-selection-list>\n      <mat-divider></mat-divider>\n      <button mat-menu-item (click)=\"openFormatsDialog()\">Barcode formats</button>\n      <button mat-menu-item (click)=\"openInfoDialog()\">App info</button>\n    </mat-menu>\n  \n    <header>\n      <mat-form-field appearance=\"fill\">\n        <select matNativeControl matInput (change)=\"onDeviceSelectChange($event.target.value)\">\n          <option value=\"\" [selected]=\"!currentDevice\">No Device Selected</option>\n          <option *ngFor=\"let device of availableDevices\" [value]=\"device.deviceId\"\n            [selected]=\"currentDevice && device.deviceId === currentDevice.deviceId\">{{device.label}}</option>\n        </select>\n      </mat-form-field>\n      <button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n    </header>\n  \n    <zxing-scanner [torch]=\"torchEnabled\" [(device)]=\"currentDevice\" (scanSuccess)=\"onCodeResult($event)\"\n      [formats]=\"formatsEnabled\" [tryHarder]=\"tryHarder\" (permissionResponse)=\"onHasPermission($event)\"\n      (camerasFound)=\"onCamerasFound($event)\" (torchCompatible)=\"onTorchCompatible($event)\"></zxing-scanner>\n  \n    <section class=\"results\" *ngIf=\"qrResultString\">\n      <div>\n        <small>Result</small>\n        <strong>{{ qrResultString }}</strong>\n      </div>\n      <button mat-icon-button (click)=\"clearResult()\">&times;</button>\n    </section>\n  \n  </div>\n  \n  <ng-container *ngIf=\"hasPermission === undefined\">\n  \n    <h2>Waiting for permissions.</h2>\n  \n    <blockquote>\n      If your device does not has cameras, no permissions will be asked.\n    </blockquote>\n  \n  </ng-container>\n  \n  <ng-container *ngIf=\"hasPermission === false\">\n  \n    <h2>You denied the camera permission, we can't scan anything without it. 😪</h2>\n  \n  </ng-container>\n  \n  <ng-container *ngIf=\"hasDevices === undefined\">\n  \n    <h2>Couldn't check for devices.</h2>\n  \n    <blockquote>\n      This may be caused by some security error.\n    </blockquote>\n  \n  </ng-container>\n  \n  <ng-container *ngIf=\"hasDevices === false\">\n  \n    <h2>No devices were found.</h2>\n  \n    <blockquote>\n      I believe your device has no media devices attached to.\n    </blockquote>\n  \n  </ng-container>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-info-dialog/app-info-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/app-info-dialog/app-info-dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: AppInfoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInfoDialogComponent", function() { return AppInfoDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let AppInfoDialogComponent = class AppInfoDialogComponent {
    constructor(data) {
        this.data = data;
        this.hasDevices = data.hasDevices;
        this.hasPermission = data.hasPermission;
    }
};
AppInfoDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
AppInfoDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app-info-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-info-dialog/app-info-dialog.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AppInfoDialogComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _qrscanner_qrscanner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qrscanner/qrscanner.component */ "./src/app/qrscanner/qrscanner.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





const routes = [
    { path: 'scanner', component: _qrscanner_qrscanner_component__WEBPACK_IMPORTED_MODULE_3__["QRScannerComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app-ui.module.ts":
/*!**********************************!*\
  !*** ./src/app/app-ui.module.ts ***!
  \**********************************/
/*! exports provided: AppUiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUiModule", function() { return AppUiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/fesm2015/zxing-ngx-scanner.js");














const UI_MODULES = [
    // Angular
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
    // Material
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
    // Local
    _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_13__["ZXingScannerModule"],
];
let AppUiModule = class AppUiModule {
};
AppUiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({ exports: UI_MODULES })
], AppUiModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("zxing-scanner {\n  max-width: 100%;\n}\n\nheader {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding: 10px;\n  background: #333;\n  display: flex;\n}\n\nheader button {\n  margin-left: 8px;\n}\n\nheader mat-form-field {\n  width: 100%;\n  font-weight: bold;\n}\n\nheader mat-form-field ::ng-deep .mat-form-field-wrapper {\n  padding: 0;\n}\n\nheader mat-form-field ::ng-deep .mat-form-field-wrapper .mat-form-field-flex {\n  padding-top: 0;\n}\n\nheader mat-form-field ::ng-deep .mat-form-field-underline {\n  bottom: 0;\n}\n\nheader mat-form-field option {\n  padding: 10px;\n  line-height: 2;\n  background: #474747;\n  color: #fff;\n}\n\n.results {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0;\n  padding: 15px;\n  background: #02c3c3;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.results small {\n  font-weight: bolder;\n  display: block;\n  font-size: 60%;\n  margin: -0.6em 0 0 0;\n}\n\n.results button {\n  background: none;\n  border: none;\n  line-height: 1;\n  font-weight: bolder;\n  font-size: 120%;\n  float: right;\n  color: #fff;\n  margin: -8px -8px -8px 8px;\n}\n\nh2 {\n  padding: 0 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iaXN3YWplZXQvV29ya3NwYWNlL0FuZ3VsYXIvUVJTY2FubmVyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUU7RUFFRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNBSjs7QURFSTtFQUNFLGdCQUFBO0FDQU47O0FER0k7RUFFRSxXQUFBO0VBQ0EsaUJBQUE7QUNGTjs7QURLUTtFQUVFLFVBQUE7QUNKVjs7QURNVTtFQUNFLGNBQUE7QUNKWjs7QURPUTtFQUNFLFNBQUE7QUNMVjs7QURTTTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDUFI7O0FEWUU7RUFFRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ1hKOztBRGFJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDWE47O0FEY0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSwwQkFBQTtBQ2JOOztBRGlCRTtFQUNFLGVBQUE7QUNkSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInp4aW5nLXNjYW5uZXIge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgaGVhZGVyIHtcbiAgXG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIFxuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH1cbiAgXG4gICAgbWF0LWZvcm0tZmllbGQge1xuICBcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIFxuICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICBcbiAgICAgICAgICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgb3B0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0NzQ3NDc7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLnJlc3VsdHMge1xuICBcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICMwMmMzYzM7XG4gICAgY29sb3I6ICNmZmY7XG4gIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIFxuICAgIHNtYWxsIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogNjAlO1xuICAgICAgbWFyZ2luOiAtLjZlbSAwIDAgMDtcbiAgICB9XG4gIFxuICAgIGJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgZm9udC1zaXplOiAxMjAlO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAkbWc6IDhweDtcbiAgICAgIG1hcmdpbjogKC0kbWcpICgtJG1nKSAoLSRtZykgJG1nO1xuICAgIH1cbiAgfVxuICBcbiAgaDIge1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgfSIsInp4aW5nLXNjYW5uZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgZGlzcGxheTogZmxleDtcbn1cbmhlYWRlciBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuaGVhZGVyIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaGVhZGVyIG1hdC1mb3JtLWZpZWxkIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDA7XG59XG5oZWFkZXIgbWF0LWZvcm0tZmllbGQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5oZWFkZXIgbWF0LWZvcm0tZmllbGQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBib3R0b206IDA7XG59XG5oZWFkZXIgbWF0LWZvcm0tZmllbGQgb3B0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGJhY2tncm91bmQ6ICM0NzQ3NDc7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucmVzdWx0cyB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogIzAyYzNjMztcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5yZXN1bHRzIHNtYWxsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogNjAlO1xuICBtYXJnaW46IC0wLjZlbSAwIDAgMDtcbn1cbi5yZXN1bHRzIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAtOHB4IC04cHggLThweCA4cHg7XG59XG5cbmgyIHtcbiAgcGFkZGluZzogMCAxNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.navigateByUrl("/home");
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _qrscanner_qrscanner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qrscanner/qrscanner.component */ "./src/app/qrscanner/qrscanner.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_ui_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-ui.module */ "./src/app/app-ui.module.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _qrscanner_qrscanner_component__WEBPACK_IMPORTED_MODULE_5__["QRScannerComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _app_ui_module__WEBPACK_IMPORTED_MODULE_7__["AppUiModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/barcode-formats.ts":
/*!************************************!*\
  !*** ./src/app/barcode-formats.ts ***!
  \************************************/
/*! exports provided: formatsAvailable, formatNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatsAvailable", function() { return formatsAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNames", function() { return formatNames; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zxing/library */ "./node_modules/@zxing/library/esm5/index.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_1__);


const formatsAvailable = [
    _zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].CODE_128,
    _zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].DATA_MATRIX,
    _zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].EAN_13,
    _zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].EAN_8,
    _zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].ITF,
    _zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].QR_CODE,
    _zxing_library__WEBPACK_IMPORTED_MODULE_1__["BarcodeFormat"].RSS_14,
];
const formatNames = [
    'Aztec 2D barcode format.',
    'CODABAR 1D format.',
    'Code 39 1D format.',
    'Code 93 1D format.',
    'Code 128 1D format.',
    'Data Matrix 2D barcode format.',
    'EAN-8 1D format.',
    'EAN-13 1D format.',
    'ITF (Interleaved Two of Five) 1D format.',
    'MaxiCode 2D barcode format.',
    'PDF417 format.',
    'QR Code 2D barcode format.',
    'RSS 14',
    'RSS EXPANDED',
    'UPC-A 1D format.',
    'UPC-E 1D format.',
    'UPC/EAN extension format. Not a stand-alone format.',
];


/***/ }),

/***/ "./src/app/formats-dialog/formats-dialog.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/formats-dialog/formats-dialog.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-dialog-actions {\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iaXN3YWplZXQvV29ya3NwYWNlL0FuZ3VsYXIvUVJTY2FubmVyL3NyYy9hcHAvZm9ybWF0cy1kaWFsb2cvZm9ybWF0cy1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvcm1hdHMtZGlhbG9nL2Zvcm1hdHMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1hdHMtZGlhbG9nL2Zvcm1hdHMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9IiwibWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/formats-dialog/formats-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/formats-dialog/formats-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: FormatsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatsDialogComponent", function() { return FormatsDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _barcode_formats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../barcode-formats */ "./src/app/barcode-formats.ts");




let FormatsDialogComponent = class FormatsDialogComponent {
    constructor(data, _dialogRef) {
        this.data = data;
        this._dialogRef = _dialogRef;
        this.formatsAvailable = _barcode_formats__WEBPACK_IMPORTED_MODULE_3__["formatsAvailable"];
        this.formatNames = _barcode_formats__WEBPACK_IMPORTED_MODULE_3__["formatNames"];
        this.formatsEnabled = data.formatsEnabled || [];
    }
    close() {
        this._dialogRef.close(this.formatsEnabled);
    }
    isEnabled(format) {
        return this.formatsEnabled.find(x => x === format);
    }
    onSelectionChange(event) {
        this.formatsEnabled = event.source.selectedOptions.selected.map(selected => selected.value);
    }
};
FormatsDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
FormatsDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-formats-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./formats-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/formats-dialog/formats-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./formats-dialog.component.scss */ "./src/app/formats-dialog/formats-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], FormatsDialogComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.title = 'QRScanner';
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/qrscanner/qrscanner.component.scss":
/*!****************************************************!*\
  !*** ./src/app/qrscanner/qrscanner.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Fyc2Nhbm5lci9xcnNjYW5uZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/qrscanner/qrscanner.component.ts":
/*!**************************************************!*\
  !*** ./src/app/qrscanner/qrscanner.component.ts ***!
  \**************************************************/
/*! exports provided: QRScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRScannerComponent", function() { return QRScannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @zxing/library */ "./node_modules/@zxing/library/esm5/index.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _formats_dialog_formats_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../formats-dialog/formats-dialog.component */ "./src/app/formats-dialog/formats-dialog.component.ts");
/* harmony import */ var _app_info_dialog_app_info_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-info-dialog/app-info-dialog.component */ "./src/app/app-info-dialog/app-info-dialog.component.ts");







let QRScannerComponent = class QRScannerComponent {
    constructor(_dialog) {
        this._dialog = _dialog;
        this.currentDevice = null;
        this.formatsEnabled = [
            _zxing_library__WEBPACK_IMPORTED_MODULE_3__["BarcodeFormat"].CODE_128,
            _zxing_library__WEBPACK_IMPORTED_MODULE_3__["BarcodeFormat"].DATA_MATRIX,
            _zxing_library__WEBPACK_IMPORTED_MODULE_3__["BarcodeFormat"].EAN_13,
            _zxing_library__WEBPACK_IMPORTED_MODULE_3__["BarcodeFormat"].QR_CODE,
        ];
        this.torchEnabled = false;
        this.torchAvailable$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.tryHarder = false;
    }
    clearResult() {
        this.qrResultString = null;
    }
    onCamerasFound(devices) {
        this.availableDevices = devices;
        this.hasDevices = Boolean(devices && devices.length);
    }
    onCodeResult(resultString) {
        this.qrResultString = resultString;
    }
    onDeviceSelectChange(selected) {
        const device = this.availableDevices.find(x => x.deviceId === selected);
        this.currentDevice = device || null;
    }
    openFormatsDialog() {
        const data = {
            formatsEnabled: this.formatsEnabled,
        };
        this._dialog
            .open(_formats_dialog_formats_dialog_component__WEBPACK_IMPORTED_MODULE_5__["FormatsDialogComponent"], { data })
            .afterClosed()
            .subscribe(x => { if (x) {
            this.formatsEnabled = x;
        } });
    }
    onHasPermission(has) {
        this.hasPermission = has;
    }
    openInfoDialog() {
        const data = {
            hasDevices: this.hasDevices,
            hasPermission: this.hasPermission,
        };
        this._dialog.open(_app_info_dialog_app_info_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AppInfoDialogComponent"], { data });
    }
    onTorchCompatible(isCompatible) {
        this.torchAvailable$.next(isCompatible || false);
    }
    toggleTorch() {
        this.torchEnabled = !this.torchEnabled;
    }
    toggleTryHarder() {
        this.tryHarder = !this.tryHarder;
    }
};
QRScannerComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
QRScannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-qrscanner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./qrscanner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/qrscanner/qrscanner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./qrscanner.component.scss */ "./src/app/qrscanner/qrscanner.component.scss")).default]
    })
], QRScannerComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/biswajeet/Workspace/Angular/QRScanner/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map