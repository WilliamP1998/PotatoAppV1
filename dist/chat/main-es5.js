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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li *ngIf = \"login\" class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"login\">Login <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"group\">Group</a>\n      </li>\n      <li class=\"nav-item\">\n        <a href=\"\" class=\"nav-link\" (click) = \"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/channel/channel.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/channel/channel.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-title\">\n    <h3>{{channelname}}</h3>\n    <h3>History: {{history}}</h3>\n    <form *ngIf = \"checkauth(group)\" class=\"form-horizontal\">\n            <h3>Add User</h3>\n            <div class=\"form-group\"> <!-- Full Name -->\n                <label for=\"full_name_id\" class=\"control-label col-sm-2\">Name:</label>\n                <div class=\"col-sm-10\">\n                <select [(ngModel)] = \"addusername\" name = \"addusername\">\n                        <option *ngFor = \"let user of temp\">\n                            {{user.name}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n            \n            <div class=\"form-group\"> <!-- Submit Button -->\n                <div class=\"col-sm-10 col-sm-offset-2\">                     \n                    <button type=\"submit\" (click)= \"adduser()\" class=\"btn btn-primary\">Add user</button>\n                </div>\n            </div>        \n             \n        </form><br><br> \n        \n        <form *ngIf = \"checkauth(group)\" class=\"form-horizontal\">\n                <h3>Remove User</h3>\n                <div class=\"form-group\"> <!-- Full Name -->\n                    <label for=\"full_name_id\" class=\"control-label col-sm-2\">Name:</label>\n                    <div class=\"col-sm-10\">\n                    <select [(ngModel)] = \"deleteusername\" name = \"deleteusername\">\n                            <option *ngFor = \"let user of deletetmp\">\n                                {{user}}\n                            </option>\n                        </select>\n                    </div>\n                </div>\n                \n                <div class=\"form-group\"> <!-- Submit Button -->\n                    <div class=\"col-sm-10 col-sm-offset-2\">                     \n                        <button type=\"submit\" (click)= \"deleteuser()\" class=\"btn btn-primary\">Remove user</button>\n                    </div>\n                </div>        \n                 \n            </form><br><br> \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/chat.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n    <form>\n        <div class = \"form-group\" *ngIf = \"isinRoom\">\n            <label for = \"messagecontent\">New message</label>\n            <input type = \"text\" [(ngModel)] = \"messagecontent\" name = \"messagecontent\" id = \"messagecontent\" class = \"form-control\"/>\n        </div>\n        <div class = \"form-group\">\n            <button *ngIf = \"isinRoom\" (click) =\"chat(messagecontent)\" class = \"btn btn-primary\">Chat</button> &nbsp;\n            <button *ngIf = \"!isinRoom\" (click) = \"joinroom()\" class = \"btn btn-primary\">Join</button>&nbsp;\n            <button *ngIf = \"isinRoom\" (click) = \"leaveroom()\" class = \"btn btn-primary\">Leave</button>&nbsp;\n        </div>\n\n        <select [(ngModel)] = \"roomslist\" name = \"roomslist\">\n            <option [ngValue] = \"null\">Select Room</option>\n            <option *ngFor = \"let room of rooms\">\n                {{room}}\n            </option>\n        </select><br><br>\n        <label for = \"newroom\">New Room</label>\n            <input typr = \"text\" [(ngModel)] = \"newroom\" name = \"newroom\" id = \"newroom\" class = \"form-control\"/>\n            <button (click) = \"createroom()\" class = \"btn btn-primary\">Create new room</button>\n    \n    </form>\n    <h3>Notices</h3>\n    {{roomnotice}}<br>\n    <button (click) = \"clearnotice()\" class = \"btn btn-primary\">Clear Notice</button><br>\n    <h3>Chat Messages for {{currentroom}} - {{numusers}} Active Users</h3>\n    <ul>\n        <li *ngFor = \"let message of messages\">{{message}}</li>\n    </ul>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/group/group.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/group/group.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"table-title\">\n    <h3>Group -by {{username}}</h3>\n    </div>\n    <table class=\"table-fill\">\n    <thead>\n    <tr>\n    <th class=\"text-left\">Name</th>\n    <th class=\"text-left\">Members</th>\n    <th class=\"text-left\">Channels</th>\n    <th class=\"text-left\">Manage</th>\n    <th class=\"text-left\">Assis</th>\n    </tr>\n    </thead>\n    <tbody class=\"table-hover\">\n    <ng-container *ngFor = \"let group of showngroups\">\n    <tr>\n    <td class=\"text-left\">{{group.name}}</td>\n    <td class=\"text-left\">\n        {{group.members}}\n        <select [(ngModel)] = \"aname\" name = \"aname\" *ngIf = \"isadmin||issuper\">\n                <option *ngFor = \"let user of getaddgroupuser(group.members)\">\n                    {{user}}\n                </option>\n            </select>\n            <button class=\"btn btn-primary\" (click) = \"adduser(group.name)\" *ngIf = \"isadmin||issuper\">Add member</button><br>\n            <select [(ngModel)] = \"dname\" name = \"dname\" *ngIf = \"isadmin||issuper\">\n                    <option *ngFor = \"let user of group.members\">\n                        {{user}}\n                    </option>\n                </select>\n                <button class=\"btn btn-primary\" (click) = \"deluser(group.name)\" *ngIf = \"isadmin||issuper\">Delete member</button><br>\n    </td>\n    <td class=\"text-left\"><div *ngFor = \"let channel of group.channels\"><a href = \"/channel\" (click) = \"go(channel)\">{{channel}}</a><button *ngIf = \"isadmin||issuper\" class=\"btn btn-primary\" (click) = \"removechannel(channel,group.name)\">Removechannel</button></div></td>\n    <td>\n    <button class=\"btn btn-primary\" (click) = \"remove(group.name)\"  *ngIf = \"isadmin\">Remove</button><br>\n    <input [(ngModel)] = \"channelname\" type=\"text\" class=\"form-control\" id=\"channelname\" name=\"channelname\" placeholder=\"channelname\"  *ngIf = \"checkauth(group.name)\">\n    <button class=\"btn btn-primary\" (click) = \"addchannel(group.name)\" *ngIf = \"checkauth(group.name)\">Createchannel</button>\n    </td>\n    <td >\n        <select [(ngModel)] = \"assisname\" name = \"assisname\" *ngIf = \"isadmin||issuper\">\n            <option *ngFor = \"let user of assislist\">\n                {{user.name}}\n            </option>\n        </select>\n        <button class=\"btn btn-primary\" (click) = \"addassis(group.name)\" *ngIf = \"isadmin||issuper\">Add Assis</button><br>\n    </td>\n    </tr>\n    </ng-container>\n    </tbody>\n    </table>\n    \n\n    <form *ngIf = \"isadmin\" class=\"form-horizontal\">\n        <h3>Create User</h3>\n        <div class=\"form-group\"> <!-- Full Name -->\n            <label for=\"full_name_id\" class=\"control-label col-sm-2\">Name</label>\n            <div class=\"col-sm-10\">\n                <input [(ngModel)] = \"name\" type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Name\">\n            </div>  \n        </div>\n    \n        <div class=\"form-group\"> <!-- Email -->\n            <label for=\"email_id\" class=\"control-label col-sm-2\">Email</label>\n            <div class=\"col-sm-10\">\n                <input type=\"email\" [(ngModel)] =\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\">\n            </div>  \n        </div>\n        \n        <div class=\"form-group\"> <!-- Frequency Field -->\n            <label class=\"control-label col-sm-2\">Role</label>\n            <div class=\"col-sm-10\">\n                <div  *ngIf = \"issuper\" class=\"radio\">\n                    <label class=\"radio\">\n                        <input name=\"admin\" type=\"radio\" [(ngModel)] =\"admin\" value = \"admin\"/>\n                        Group admin\n                    </label>\n                </div>\n                <div class=\"radio\">\n                    <label class=\"radio\">\n                        <input name=\"admin\" type=\"radio\" [(ngModel)] =\"admin\" value = \"normal\" checked/>\n                        Normal\n                    </label>\n                </div>\n                <div *ngIf = \"issuper\" class=\"radio\">\n                    <label class=\"radio\">\n                        <input name=\"admin\" type=\"radio\" [(ngModel)] =\"admin\" value = \"super\"/>\n                        Super admin\n                    </label>\n                </div>\t\t\t\t\t\t\t\t\n            </div>\n        </div>\t\t\t\t\t\t\t\n         \n        <div class=\"form-group\"> <!-- Submit Button -->\n            <div class=\"col-sm-10 col-sm-offset-2\">                     \n                <button type=\"submit\" (click)= \"add()\" class=\"btn btn-primary\">Create</button>\n            </div>\n        </div>        \n         \n    </form><br><br>\n    \n    \n    <form *ngIf = \"isadmin\" class=\"form-horizontal\">\n        <h3>Create Group</h3>\n        <div class=\"form-group\"> <!-- Full Name -->\n            <label for=\"full_name_id\" class=\"control-label col-sm-2\">Name</label>\n            <div class=\"col-sm-10\">\n                <input [(ngModel)] = \"groupname\" type=\"text\" class=\"form-control\" id=\"groupname\" name=\"groupname\" placeholder=\"groupname\">\n            </div>  \n        </div>\n        \n        <div class=\"form-group\"> <!-- Submit Button -->\n            <div class=\"col-sm-10 col-sm-offset-2\">                     \n                <button type=\"submit\" (click)= \"creategroup()\" class=\"btn btn-primary\">Create</button>\n            </div>\n        </div>        \n         \n    </form><br><br>        \n\n    <form *ngIf = \"issuper\" class=\"form-horizontal\">\n            <h3>Delete User</h3>\n            <div class=\"form-group\"> <!-- Full Name -->\n                <label for=\"full_name_id\" class=\"control-label col-sm-2\">Name:</label>\n                <div class=\"col-sm-10\">\n                <select [(ngModel)] = \"deleteusername\" name = \"deleteusername\">\n                        <option *ngFor = \"let user of usernamelist\">\n                            {{user}}\n                        </option>\n                    </select><br><br>\n                </div>\n            </div>\n            \n            <div class=\"form-group\"> <!-- Submit Button -->\n                <div class=\"col-sm-10 col-sm-offset-2\">                     \n                    <button type=\"submit\" (click)= \"deleteuser()\" class=\"btn btn-primary\">Delete</button>\n                </div>\n            </div>        \n             \n        </form><br><br>  \n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"container\">\n        <div class=\"d-flex justify-content-center h-100\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <h3>Sign In</h3>\n                </div>\n                <div class=\"card-body\">\n                    <form>\n                        <div class=\"input-group form-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n                            </div>\n                            <input type=\"text\" [(ngModel)] = \"username\" name = \"username\" id= \"username \" class=\"form-control\" placeholder=\"username\">\n                            \n                        </div>\n                        <div class=\"form-group\">\n                            <button type=\"submit\" (click) = \"login()\" class=\"btn float-right login_btn\">Login</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    </body>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _group_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group/group.component */ "./src/app/group/group.component.ts");
/* harmony import */ var _channel_channel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./channel/channel.component */ "./src/app/channel/channel.component.ts");







var routes = [
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'group', component: _group_group_component__WEBPACK_IMPORTED_MODULE_5__["GroupComponent"] },
    { path: 'channel', component: _channel_channel_component__WEBPACK_IMPORTED_MODULE_6__["ChannelComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'chat';
        this.login = true;
        this.hidelogin();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.hidelogin = function () {
        var username = localStorage.getItem('username');
        if (username) {
            this.login = false;
        }
    };
    AppComponent.prototype.logout = function () {
        localStorage.clear();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _group_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./group/group.component */ "./src/app/group/group.component.ts");
/* harmony import */ var _channel_channel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./channel/channel.component */ "./src/app/channel/channel.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _group_group_component__WEBPACK_IMPORTED_MODULE_8__["GroupComponent"],
                _channel_channel_component__WEBPACK_IMPORTED_MODULE_9__["ChannelComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/channel/channel.component.css":
/*!***********************************************!*\
  !*** ./src/app/channel/channel.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100);\n\nbody {\n  font-family: \"Roboto\", helvetica, arial, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  text-rendering: optimizeLegibility;\n}\n\ndiv.table-title {\n   display: block;\n  margin: auto;\n  max-width: 600px;\n  padding:5px;\n  width: 100%;\n}\n\n.table-title h3 {\n   color: #3e94ec;\n   font-size: 30px;\n   font-weight: 400;\n   font-style:normal;\n   font-family: \"Roboto\", helvetica, arial, sans-serif;\n   text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\n   text-transform:uppercase;\n}\n\n/*** Table Styles **/\n\n.table-fill {\n  background: white;\n  border-radius:3px;\n  border-collapse: collapse;\n  height: 320px;\n  margin: auto;\n  max-width: 600px;\n  padding:5px;\n  width: 100%;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n  -webkit-animation: float 5s infinite;\n          animation: float 5s infinite;\n}\n\nth {\n  color:#D5DDE5;;\n  background:#1b1e24;\n  border-bottom:4px solid #9ea7af;\n  border-right: 1px solid #343a45;\n  font-size:23px;\n  font-weight: 100;\n  padding:24px;\n  text-align:left;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  vertical-align:middle;\n}\n\nth:first-child {\n  border-top-left-radius:3px;\n}\n\nth:last-child {\n  border-top-right-radius:3px;\n  border-right:none;\n}\n\ntr {\n  border-top: 1px solid #C1C3D1;\n  border-bottom-: 1px solid #C1C3D1;\n  color:#666B85;\n  font-size:16px;\n  font-weight:normal;\n  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);\n}\n\ntr:hover td {\n  background:#4E5066;\n  color:#FFFFFF;\n  border-top: 1px solid #22262e;\n}\n\ntr:first-child {\n  border-top:none;\n}\n\ntr:last-child {\n  border-bottom:none;\n}\n\ntr:nth-child(odd) td {\n  background:#EBEBEB;\n}\n\ntr:nth-child(odd):hover td {\n  background:#4E5066;\n}\n\ntr:last-child td:first-child {\n  border-bottom-left-radius:3px;\n}\n\ntr:last-child td:last-child {\n  border-bottom-right-radius:3px;\n}\n\ntd {\n  background:#FFFFFF;\n  padding:20px;\n  text-align:left;\n  vertical-align:middle;\n  font-weight:300;\n  font-size:18px;\n  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\n  border-right: 1px solid #C1C3D1;\n}\n\ntd:last-child {\n  border-right: 0px;\n}\n\nth.text-left {\n  text-align: left;\n}\n\nth.text-center {\n  text-align: center;\n}\n\nth.text-right {\n  text-align: right;\n}\n\ntd.text-left {\n  text-align: left;\n}\n\ntd.text-center {\n  text-align: center;\n}\n\ntd.text-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbC9jaGFubmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFOztBQUUvRTtFQUNFLG1EQUFtRDtFQUNuRCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtDQUFrQztBQUNwQzs7QUFFQTtHQUNHLGNBQWM7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7R0FDRyxjQUFjO0dBQ2QsZUFBZTtHQUNmLGdCQUFnQjtHQUNoQixpQkFBaUI7R0FDakIsbURBQW1EO0dBQ25ELDZDQUE2QztHQUM3Qyx3QkFBd0I7QUFDM0I7O0FBR0Esb0JBQW9COztBQUVwQjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUNBQXlDO0VBQ3pDLG9DQUE0QjtVQUE1Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLHlDQUF5QztFQUN6QyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCw2Q0FBNkM7RUFDN0MsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY2hhbm5lbC9jaGFubmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw1MDAsNzAwLDMwMCwxMDApO1xuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIGhlbHZldGljYSwgYXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuZGl2LnRhYmxlLXRpdGxlIHtcbiAgIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHBhZGRpbmc6NXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRhYmxlLXRpdGxlIGgzIHtcbiAgIGNvbG9yOiAjM2U5NGVjO1xuICAgZm9udC1zaXplOiAzMHB4O1xuICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgIGZvbnQtc3R5bGU6bm9ybWFsO1xuICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIGhlbHZldGljYSwgYXJpYWwsIHNhbnMtc2VyaWY7XG4gICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG59XG5cblxuLyoqKiBUYWJsZSBTdHlsZXMgKiovXG5cbi50YWJsZS1maWxsIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6M3B4O1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBoZWlnaHQ6IDMyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHBhZGRpbmc6NXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGFuaW1hdGlvbjogZmxvYXQgNXMgaW5maW5pdGU7XG59XG4gXG50aCB7XG4gIGNvbG9yOiNENURERTU7O1xuICBiYWNrZ3JvdW5kOiMxYjFlMjQ7XG4gIGJvcmRlci1ib3R0b206NHB4IHNvbGlkICM5ZWE3YWY7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzNDNhNDU7XG4gIGZvbnQtc2l6ZToyM3B4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBwYWRkaW5nOjI0cHg7XG4gIHRleHQtYWxpZ246bGVmdDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbn1cblxudGg6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjNweDtcbn1cbiBcbnRoOmxhc3QtY2hpbGQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czozcHg7XG4gIGJvcmRlci1yaWdodDpub25lO1xufVxuICBcbnRyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDMUMzRDE7XG4gIGJvcmRlci1ib3R0b20tOiAxcHggc29saWQgI0MxQzNEMTtcbiAgY29sb3I6IzY2NkI4NTtcbiAgZm9udC1zaXplOjE2cHg7XG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDI1NiwgMjU2LCAyNTYsIDAuMSk7XG59XG4gXG50cjpob3ZlciB0ZCB7XG4gIGJhY2tncm91bmQ6IzRFNTA2NjtcbiAgY29sb3I6I0ZGRkZGRjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyMjI2MmU7XG59XG4gXG50cjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6bm9uZTtcbn1cblxudHI6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206bm9uZTtcbn1cbiBcbnRyOm50aC1jaGlsZChvZGQpIHRkIHtcbiAgYmFja2dyb3VuZDojRUJFQkVCO1xufVxuIFxudHI6bnRoLWNoaWxkKG9kZCk6aG92ZXIgdGQge1xuICBiYWNrZ3JvdW5kOiM0RTUwNjY7XG59XG5cbnRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweDtcbn1cbiBcbnRyOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjNweDtcbn1cbiBcbnRkIHtcbiAgYmFja2dyb3VuZDojRkZGRkZGO1xuICBwYWRkaW5nOjIwcHg7XG4gIHRleHQtYWxpZ246bGVmdDtcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICBmb250LXdlaWdodDozMDA7XG4gIGZvbnQtc2l6ZToxOHB4O1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDMUMzRDE7XG59XG5cbnRkOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDBweDtcbn1cblxudGgudGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGgudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRoLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxudGQudGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGQudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/channel/channel.component.ts":
/*!**********************************************!*\
  !*** ./src/app/channel/channel.component.ts ***!
  \**********************************************/
/*! exports provided: ChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelComponent", function() { return ChannelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../group.service */ "./src/app/group.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _useradd_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useradd.service */ "./src/app/useradd.service.ts");





var ChannelComponent = /** @class */ (function () {
    function ChannelComponent(addservice, groupservice, loginservice) {
        this.addservice = addservice;
        this.groupservice = groupservice;
        this.loginservice = loginservice;
        this.channelname = "";
        this.history = "";
        this.members = [];
        this.temp = [];
        this.deletetmp = [];
        this.addusername = "";
        this.deleteusername = "";
        this.group = "";
        this.isadmin = false;
        this.issuper = false;
        this.username = "";
        this.channels = [];
        this.userlist = [];
        this.groups = [];
    }
    ChannelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groupservice.initSocket();
        this.loginservice.initSocket();
        this.addservice.initSocket();
        var username = localStorage.getItem('username');
        this.groupservice.getgroup();
        this.groupservice.getgrouped(function (res) { _this.groups = JSON.parse(res); });
        this.channelname = JSON.parse(localStorage.getItem("channelname"));
        this.groupservice.getchannel();
        this.groupservice.getchanneled(function (res) {
            _this.channels = JSON.parse(res);
            for (var i = 0; i < _this.channels.length; i++) {
                if (_this.channelname == _this.channels[i].name) {
                    _this.history = _this.channels[i].history;
                    _this.members = _this.channels[i].members;
                    _this.group = _this.channels[i].group;
                }
            }
            console.log(_this.members);
            for (var i = 0; i < _this.members.length; i++) {
                _this.deletetmp.push(_this.members[i]);
            }
            for (var i = 0; i < _this.deletetmp.length; i++) {
                if (username == _this.deletetmp[i]) {
                    _this.deletetmp.splice(i, 1);
                }
            }
            console.log(_this.deletetmp);
        });
        this.loginservice.login();
        this.loginservice.logined(function (res) {
            _this.userlist = JSON.parse(res);
            for (var i = 0; i < _this.userlist.length; i++) {
                if (username == _this.userlist[i].name) {
                    _this.isadmin = _this.userlist[i].admin;
                    _this.issuper = _this.userlist[i].super;
                }
            }
            console.log(_this.members);
            _this.temp = _this.userlist;
            for (var i = 0; i < _this.members.length; i++) {
                for (var j = 0; j < _this.userlist.length; j++) {
                    if (_this.members[i] == _this.userlist[j].name) {
                        _this.temp.splice(j, 1);
                    }
                }
            }
            console.log(_this.temp);
        });
        this.username = username;
    };
    ChannelComponent.prototype.adduser = function () {
        // add username to channel
        this.groupservice.addusertochannel(this.addusername, this.channelname, this.group);
        alert("add successful");
        location.reload();
    };
    ChannelComponent.prototype.deleteuser = function () {
        this.groupservice.deleteusertochannel(this.deleteusername, this.channelname);
        alert("delete successful");
        location.reload();
    };
    ChannelComponent.prototype.checkauth = function (groupname) {
        for (var i = 0; i < this.groups.length; i++) {
            if (groupname == this.groups[i].name) {
                for (var j = 0; j < this.groups[i].assis.length; j++) {
                    if (this.username == this.groups[i].assis[j]) {
                        return true;
                    }
                }
            }
        }
        if (this.isadmin == true || this.issuper == true) {
            return true;
        }
    };
    ChannelComponent.ctorParameters = function () { return [
        { type: _useradd_service__WEBPACK_IMPORTED_MODULE_4__["UseraddService"] },
        { type: _group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"] },
        { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
    ]; };
    ChannelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-channel',
            template: __webpack_require__(/*! raw-loader!./channel.component.html */ "./node_modules/raw-loader/index.js!./src/app/channel/channel.component.html"),
            styles: [__webpack_require__(/*! ./channel.component.css */ "./src/app/channel/channel.component.css")]
        })
    ], ChannelComponent);
    return ChannelComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");



var ChatComponent = /** @class */ (function () {
    function ChatComponent(socketservice) {
        this.socketservice = socketservice;
        this.messagecontent = "";
        this.messages = [];
        this.rooms = [];
        this.roomslist = "";
        this.roomnotice = "";
        this.currentroom = "";
        this.isinRoom = false;
        this.newroom = "";
        this.numusers = 0;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketservice.initSocket();
        this.socketservice.getMessage(function (m) { _this.messages.push(m); });
        this.socketservice.reqroomList();
        this.socketservice.getroomList(function (msg) { _this.rooms = JSON.parse(msg); });
        this.socketservice.notice(function (msg) { _this.roomnotice = msg; });
        this.socketservice.joined(function (msg) {
            _this.currentroom = msg;
            if (_this.currentroom != "") {
                _this.isinRoom = true;
            }
            else {
                _this.isinRoom = false;
            }
        });
    };
    ChatComponent.prototype.joinroom = function () {
        var _this = this;
        this.socketservice.joinroom(this.roomslist);
        this.socketservice.reqnumusers(this.roomslist);
        this.socketservice.getnumusers(function (res) { _this.numusers = res; });
    };
    ChatComponent.prototype.clearnotice = function () {
        this.roomnotice = "";
    };
    ChatComponent.prototype.leaveroom = function () {
        var _this = this;
        this.socketservice.leaveroom(this.currentroom);
        this.socketservice.reqnumusers(this.currentroom);
        this.socketservice.getnumusers(function (res) { _this.numusers = res; });
        this.roomslist = null;
        this.currentroom = "";
        this.isinRoom = false;
        this.numusers = 0;
        this.roomnotice = "";
        this.messages = [];
    };
    ChatComponent.prototype.createroom = function () {
        console.log(this.createroom);
        this.socketservice.createroom(this.newroom);
        this.socketservice.reqroomList();
        this.newroom = "";
    };
    ChatComponent.prototype.chat = function () {
        if (this.messagecontent) {
            this.socketservice.sendMessage(this.messagecontent);
            this.messagecontent = null;
        }
        else {
            console.log('No Message');
        }
    };
    ChatComponent.ctorParameters = function () { return [
        { type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }
    ]; };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        })
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/group.service.ts":
/*!**********************************!*\
  !*** ./src/app/group.service.ts ***!
  \**********************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);



var SERVER_URL = 'http://localhost:3000/group';
var GroupService = /** @class */ (function () {
    function GroupService() {
    }
    GroupService.prototype.initSocket = function () {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(SERVER_URL);
    };
    GroupService.prototype.getgroup = function () {
        this.socket.emit('getgroup');
    };
    GroupService.prototype.getgrouped = function (next) {
        this.socket.on("getgroup", function (res) { return next(res); });
    };
    GroupService.prototype.getchannel = function () {
        this.socket.emit('getchannel');
    };
    GroupService.prototype.getchanneled = function (next) {
        this.socket.on("getchannel", function (res) { return next(res); });
    };
    GroupService.prototype.addgroup = function (group) {
        this.socket.emit("addgroup", group);
    };
    GroupService.prototype.removegroup = function (groupname, username) {
        this.socket.emit("removegroup", groupname, username);
    };
    GroupService.prototype.addchannel = function (channel) {
        this.socket.emit("addchannel", channel);
    };
    GroupService.prototype.removechannel = function (channelname, groupname) {
        this.socket.emit("removechannel", channelname, groupname);
    };
    GroupService.prototype.addusertochannel = function (username, channelname, groupname) {
        this.socket.emit("addusertochannel", username, channelname, groupname);
    };
    GroupService.prototype.deleteusertochannel = function (username, channelname) {
        this.socket.emit("deleteusertochannel", username, channelname);
    };
    GroupService.prototype.addassistogroup = function (groupname, assisname) {
        this.socket.emit("addassistogroup", groupname, assisname);
    };
    GroupService.prototype.addusertogroup = function (groupname, username) {
        this.socket.emit("adduser", groupname, username);
    };
    GroupService.prototype.deluserofgroup = function (groupname, username) {
        this.socket.emit("deluser", groupname, username);
    };
    GroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], GroupService);
    return GroupService;
}());



/***/ }),

/***/ "./src/app/group/group.component.css":
/*!*******************************************!*\
  !*** ./src/app/group/group.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100);\n\nbody {\n  font-family: \"Roboto\", helvetica, arial, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  text-rendering: optimizeLegibility;\n}\n\ndiv.table-title {\n   display: block;\n  margin: auto;\n  max-width: 600px;\n  padding:5px;\n  width: 100%;\n}\n\n.table-title h3 {\n   color: #3e94ec;\n   font-size: 30px;\n   font-weight: 400;\n   font-style:normal;\n   font-family: \"Roboto\", helvetica, arial, sans-serif;\n   text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\n   text-transform:uppercase;\n}\n\n/*** Table Styles **/\n\n.table-fill {\n  background: white;\n  border-radius:3px;\n  border-collapse: collapse;\n  height: 320px;\n  margin: auto;\n  max-width: 600px;\n  padding:5px;\n  width: 100%;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n  -webkit-animation: float 5s infinite;\n          animation: float 5s infinite;\n}\n\nth {\n  color:#D5DDE5;;\n  background:#1b1e24;\n  border-bottom:4px solid #9ea7af;\n  border-right: 1px solid #343a45;\n  font-size:23px;\n  font-weight: 100;\n  padding:24px;\n  text-align:left;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  vertical-align:middle;\n}\n\nth:first-child {\n  border-top-left-radius:3px;\n}\n\nth:last-child {\n  border-top-right-radius:3px;\n  border-right:none;\n}\n\ntr {\n  border-top: 1px solid #C1C3D1;\n  border-bottom-: 1px solid #C1C3D1;\n  color:#666B85;\n  font-size:16px;\n  font-weight:normal;\n  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);\n}\n\ntr:hover td {\n  background:#4E5066;\n  color:#FFFFFF;\n  border-top: 1px solid #22262e;\n}\n\ntr:first-child {\n  border-top:none;\n}\n\ntr:last-child {\n  border-bottom:none;\n}\n\ntr:nth-child(odd) td {\n  background:#EBEBEB;\n}\n\ntr:nth-child(odd):hover td {\n  background:#4E5066;\n}\n\ntr:last-child td:first-child {\n  border-bottom-left-radius:3px;\n}\n\ntr:last-child td:last-child {\n  border-bottom-right-radius:3px;\n}\n\ntd {\n  background:#FFFFFF;\n  padding:20px;\n  text-align:left;\n  vertical-align:middle;\n  font-weight:300;\n  font-size:18px;\n  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\n  border-right: 1px solid #C1C3D1;\n}\n\ntd:last-child {\n  border-right: 0px;\n}\n\nth.text-left {\n  text-align: left;\n}\n\nth.text-center {\n  text-align: center;\n}\n\nth.text-right {\n  text-align: right;\n}\n\ntd.text-left {\n  text-align: left;\n}\n\ntd.text-center {\n  text-align: center;\n}\n\ntd.text-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXAvZ3JvdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrRUFBK0U7O0FBRS9FO0VBQ0UsbURBQW1EO0VBQ25ELGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0NBQWtDO0FBQ3BDOztBQUVBO0dBQ0csY0FBYztFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtHQUNHLGNBQWM7R0FDZCxlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCLGlCQUFpQjtHQUNqQixtREFBbUQ7R0FDbkQsNkNBQTZDO0dBQzdDLHdCQUF3QjtBQUMzQjs7QUFHQSxvQkFBb0I7O0FBRXBCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsb0NBQTRCO1VBQTVCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YseUNBQXlDO0VBQ3pDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztFQUNkLDZDQUE2QztFQUM3QywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ncm91cC9ncm91cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNTAwLDcwMCwzMDAsMTAwKTtcblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBoZWx2ZXRpY2EsIGFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbmRpdi50YWJsZS10aXRsZSB7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBwYWRkaW5nOjVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50YWJsZS10aXRsZSBoMyB7XG4gICBjb2xvcjogIzNlOTRlYztcbiAgIGZvbnQtc2l6ZTogMzBweDtcbiAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICBmb250LXN0eWxlOm5vcm1hbDtcbiAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBoZWx2ZXRpY2EsIGFyaWFsLCBzYW5zLXNlcmlmO1xuICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xufVxuXG5cbi8qKiogVGFibGUgU3R5bGVzICoqL1xuXG4udGFibGUtZmlsbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOjNweDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBwYWRkaW5nOjVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBhbmltYXRpb246IGZsb2F0IDVzIGluZmluaXRlO1xufVxuIFxudGgge1xuICBjb2xvcjojRDVEREU1OztcbiAgYmFja2dyb3VuZDojMWIxZTI0O1xuICBib3JkZXItYm90dG9tOjRweCBzb2xpZCAjOWVhN2FmO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzQzYTQ1O1xuICBmb250LXNpemU6MjNweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgcGFkZGluZzoyNHB4O1xuICB0ZXh0LWFsaWduOmxlZnQ7XG4gIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG59XG5cbnRoOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czozcHg7XG59XG4gXG50aDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6M3B4O1xuICBib3JkZXItcmlnaHQ6bm9uZTtcbn1cbiAgXG50ciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQzFDM0QxO1xuICBib3JkZXItYm90dG9tLTogMXB4IHNvbGlkICNDMUMzRDE7XG4gIGNvbG9yOiM2NjZCODU7XG4gIGZvbnQtc2l6ZToxNnB4O1xuICBmb250LXdlaWdodDpub3JtYWw7XG4gIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgyNTYsIDI1NiwgMjU2LCAwLjEpO1xufVxuIFxudHI6aG92ZXIgdGQge1xuICBiYWNrZ3JvdW5kOiM0RTUwNjY7XG4gIGNvbG9yOiNGRkZGRkY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjIyNjJlO1xufVxuIFxudHI6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOm5vbmU7XG59XG5cbnRyOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOm5vbmU7XG59XG4gXG50cjpudGgtY2hpbGQob2RkKSB0ZCB7XG4gIGJhY2tncm91bmQ6I0VCRUJFQjtcbn1cbiBcbnRyOm50aC1jaGlsZChvZGQpOmhvdmVyIHRkIHtcbiAgYmFja2dyb3VuZDojNEU1MDY2O1xufVxuXG50cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czozcHg7XG59XG4gXG50cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozcHg7XG59XG4gXG50ZCB7XG4gIGJhY2tncm91bmQ6I0ZGRkZGRjtcbiAgcGFkZGluZzoyMHB4O1xuICB0ZXh0LWFsaWduOmxlZnQ7XG4gIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgZm9udC13ZWlnaHQ6MzAwO1xuICBmb250LXNpemU6MThweDtcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQzFDM0QxO1xufVxuXG50ZDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XG59XG5cbnRoLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRoLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50aC50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbnRkLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRkLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZC50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/group/group.component.ts":
/*!******************************************!*\
  !*** ./src/app/group/group.component.ts ***!
  \******************************************/
/*! exports provided: GroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupComponent", function() { return GroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _useradd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useradd.service */ "./src/app/useradd.service.ts");
/* harmony import */ var _group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../group.service */ "./src/app/group.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");





var GroupComponent = /** @class */ (function () {
    function GroupComponent(addservice, groupservice, loginservice) {
        this.addservice = addservice;
        this.groupservice = groupservice;
        this.loginservice = loginservice;
        this.email = "";
        this.name = "";
        this.admin = "";
        this.issuper = false;
        this.isadmin = false;
        this.isassis = false;
        this.grouplist = [];
        this.admingrouplist = [];
        this.groups = [];
        this.showngroups = [];
        this.groupname = "";
        this.username = "";
        this.usernamelist = [];
        this.channels = [];
        this.channelname = "";
        this.deleteusername = "";
        this.assislist = [];
        this.assisname = "";
        this.userlist = [];
        this.aname = "";
        this.dname = "";
    }
    GroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        var username = localStorage.getItem('username');
        this.username = username;
        this.loginservice.initSocket();
        this.addservice.initSocket();
        this.groupservice.initSocket();
        this.loginservice.login();
        this.loginservice.logined(function (res) {
            _this.userlist = JSON.parse(res);
            for (var i = 0; i < _this.userlist.length; i++) {
                _this.usernamelist.push(_this.userlist[i].name);
                if (username == _this.userlist[i].name) {
                    _this.isadmin = _this.userlist[i].admin;
                    _this.issuper = _this.userlist[i].super;
                    _this.grouplist = _this.userlist[i].grouplist;
                    _this.admingrouplist = _this.userlist[i].admingrouplist;
                    _this.assislist.splice(i, 1);
                }
            }
            _this.assislist = _this.userlist;
        });
        this.groupservice.initSocket();
        this.groupservice.getgroup();
        this.groupservice.getgrouped(function (res) {
            _this.groups = JSON.parse(res);
            for (var i = 0; i < _this.groups.length; i++) {
                for (var j = 0; j < _this.groups[i].members.length; j++) {
                    if (username == _this.groups[i].members[j]) {
                        _this.showngroups.push(_this.groups[i]);
                    }
                }
            }
        });
        this.groupservice.getchannel();
        this.groupservice.getchanneled(function (res) { _this.channels = JSON.parse(res); });
        console.log(this.assislist);
        //Show the group current user has joined
        this.username = username;
        console.log(this.showngroups);
    };
    GroupComponent.prototype.add = function () {
        if (this.admin == "admin") {
            var newuser = {
                name: this.name,
                super: false,
                admin: true,
                email: this.email,
                grouplist: [],
                admingrouplist: []
            };
        }
        else if (this.admin == "super") {
            var newuser = {
                name: this.name,
                super: true,
                admin: true,
                email: this.email,
                grouplist: [],
                admingrouplist: []
            };
        }
        else {
            var newuser = {
                name: this.name,
                super: false,
                admin: false,
                email: this.email,
                grouplist: [],
                admingrouplist: []
            };
        }
        this.userlist.push(newuser);
        var newupload = JSON.stringify(this.userlist);
        this.addservice.add(newupload);
        location.reload();
    };
    GroupComponent.prototype.creategroup = function () {
        var username = localStorage.getItem('username');
        var empty = [];
        empty.push(username);
        var grouplist = {
            name: this.groupname,
            members: empty,
            channels: [],
            assis: []
        };
        this.groups.push(grouplist);
        console.log(this.groups);
        this.addservice.addgroup(username, this.groupname);
        this.groupservice.addgroup(JSON.stringify(grouplist));
        alert("create successful");
        location.reload();
    };
    GroupComponent.prototype.remove = function (groupname) {
        var username = localStorage.getItem('username');
        for (var i = 0; i < this.groups.length; i++) {
            if (groupname == this.groups[i].name) {
                this.groups.splice(i, 1);
            }
        }
        console.log(this.groups);
        this.groupservice.removegroup(groupname, username);
        location.reload();
    };
    GroupComponent.prototype.addchannel = function (groupname) {
        var username = localStorage.getItem('username');
        var empty = [];
        empty.push(username);
        var channel = {
            name: this.channelname,
            group: groupname,
            members: empty,
            history: ""
        };
        this.groupservice.addchannel(channel);
        location.reload();
    };
    GroupComponent.prototype.removechannel = function (channelname, groupname) {
        this.groupservice.removechannel(channelname, groupname);
        location.reload();
    };
    GroupComponent.prototype.deleteuser = function () {
        this.addservice.delete(this.deleteusername);
        location.reload();
    };
    GroupComponent.prototype.go = function (channelname) {
        localStorage.setItem("channelname", JSON.stringify(channelname));
    };
    GroupComponent.prototype.addassis = function (groupname) {
        this.groupservice.addassistogroup(groupname, this.assisname);
        alert("add successful");
        location.reload();
    };
    GroupComponent.prototype.adduser = function (groupname) {
        this.groupservice.addusertogroup(groupname, this.aname);
        alert("successful");
        location.reload();
    };
    GroupComponent.prototype.deluser = function (groupname) {
        this.groupservice.deluserofgroup(groupname, this.dname);
        alert("successful");
        location.reload();
    };
    //check the current is assis,admin,super or not
    GroupComponent.prototype.checkauth = function (groupname) {
        for (var i = 0; i < this.grouplist.length; i++) {
            if (groupname == this.grouplist[i].name) {
                for (var j = 0; j < this.grouplist[i].assis.length; j++) {
                    if (this.username == this.grouplist[i].assis[j]) {
                        return true;
                    }
                }
            }
        }
        if (this.isadmin == true || this.issuper == true) {
            return true;
        }
    };
    GroupComponent.prototype.getaddgroupuser = function (groupmember) {
        var userlist = this.userlist;
        var addgroupuser = [];
        for (var i = 0; i < userlist.length; i++) {
            addgroupuser.push(userlist[i].name);
        }
        for (var i = 0; i < addgroupuser.length; i++) {
            for (var j = 0; j < groupmember.length; j++) {
                if (groupmember[j] == addgroupuser[i]) {
                    addgroupuser.splice(i, 1);
                }
            }
        }
        return addgroupuser;
    };
    GroupComponent.ctorParameters = function () { return [
        { type: _useradd_service__WEBPACK_IMPORTED_MODULE_2__["UseraddService"] },
        { type: _group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"] },
        { type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
    ]; };
    GroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-group',
            template: __webpack_require__(/*! raw-loader!./group.component.html */ "./node_modules/raw-loader/index.js!./src/app/group/group.component.html"),
            styles: [__webpack_require__(/*! ./group.component.css */ "./src/app/group/group.component.css")]
        })
    ], GroupComponent);
    return GroupComponent;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);



var SERVER_URL = 'http://localhost:3000/login';
var LoginService = /** @class */ (function () {
    function LoginService() {
    }
    LoginService.prototype.initSocket = function () {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(SERVER_URL);
    };
    LoginService.prototype.login = function () {
        this.socket.emit("login");
    };
    LoginService.prototype.logined = function (next) {
        this.socket.on("login", function (res) { return next(res); });
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,body{\n    background-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    height: 100%;\n    font-family: 'Numans', sans-serif;\n    }\n    \n    .container{\n    height: 100%;\n    align-content: center;\n    }\n    \n    .card{\n    height: 370px;\n    margin-top: auto;\n    margin-bottom: auto;\n    width: 400px;\n    background-color: rgba(0,0,0,0.5) !important;\n    }\n    \n    .social_icon span{\n    font-size: 60px;\n    margin-left: 10px;\n    color: #FFC312;\n    }\n    \n    .social_icon span:hover{\n    color: white;\n    cursor: pointer;\n    }\n    \n    .card-header h3{\n    color: white;\n    }\n    \n    .social_icon{\n    position: absolute;\n    right: 20px;\n    top: -45px;\n    }\n    \n    .input-group-prepend span{\n    width: 50px;\n    background-color: #FFC312;\n    color: black;\n    border:0 !important;\n    }\n    \n    input:focus{\n    outline: 0 0 0 0  !important;\n    box-shadow: 0 0 0 0 !important;\n    \n    }\n    \n    .remember{\n    color: white;\n    }\n    \n    .remember input\n    {\n    width: 20px;\n    height: 20px;\n    margin-left: 15px;\n    margin-right: 5px;\n    }\n    \n    .login_btn{\n    color: black;\n    background-color: #FFC312;\n    width: 100px;\n    }\n    \n    .login_btn:hover{\n    color: black;\n    background-color: white;\n    }\n    \n    .links{\n    color: white;\n    }\n    \n    .links a{\n    margin-left: 4px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlGQUFpRjtJQUNqRixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQ0FBaUM7SUFDakM7O0lBRUE7SUFDQSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCOztJQUVBO0lBQ0EsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDRDQUE0QztJQUM1Qzs7SUFFQTtJQUNBLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkOztJQUVBO0lBQ0EsWUFBWTtJQUNaLGVBQWU7SUFDZjs7SUFFQTtJQUNBLFlBQVk7SUFDWjs7SUFFQTtJQUNBLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWOztJQUVBO0lBQ0EsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25COztJQUVBO0lBQ0EsNEJBQTRCO0lBQzVCLDhCQUE4Qjs7SUFFOUI7O0lBRUE7SUFDQSxZQUFZO0lBQ1o7O0lBRUE7O0lBRUEsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCOztJQUVBO0lBQ0EsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1o7O0lBRUE7SUFDQSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCOztJQUVBO0lBQ0EsWUFBWTtJQUNaOztJQUVBO0lBQ0EsZ0JBQWdCO0lBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsYm9keXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9nZXR3YWxscGFwZXJzLmNvbS93YWxscGFwZXIvZnVsbC9hLzUvZC81NDQ3NTAuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LWZhbWlseTogJ051bWFucycsIHNhbnMtc2VyaWY7XG4gICAgfVxuICAgIFxuICAgIC5jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgLmNhcmR7XG4gICAgaGVpZ2h0OiAzNzBweDtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAuc29jaWFsX2ljb24gc3BhbntcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgY29sb3I6ICNGRkMzMTI7XG4gICAgfVxuICAgIFxuICAgIC5zb2NpYWxfaWNvbiBzcGFuOmhvdmVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkLWhlYWRlciBoM3tcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIFxuICAgIC5zb2NpYWxfaWNvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiAtNDVweDtcbiAgICB9XG4gICAgXG4gICAgLmlucHV0LWdyb3VwLXByZXBlbmQgc3BhbntcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6MCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICBpbnB1dDpmb2N1c3tcbiAgICBvdXRsaW5lOiAwIDAgMCAwICAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgIWltcG9ydGFudDtcbiAgICBcbiAgICB9XG4gICAgXG4gICAgLnJlbWVtYmVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgXG4gICAgLnJlbWVtYmVyIGlucHV0XG4gICAge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG4gICAgXG4gICAgLmxvZ2luX2J0bntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzMxMjtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuICAgIFxuICAgIC5sb2dpbl9idG46aG92ZXJ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAubGlua3N7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAubGlua3MgYXtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../group.service */ "./src/app/group.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginservice, router, groupservice) {
        this.loginservice = loginservice;
        this.router = router;
        this.groupservice = groupservice;
        this.username = "";
        this.user = [];
        this.groups = [];
        this.channels = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginservice.initSocket();
        this.loginservice.login();
        this.loginservice.logined(function (res) { _this.user = JSON.parse(res); });
        this.groupservice.initSocket();
        this.groupservice.getgroup();
        this.groupservice.getgrouped(function (res) { _this.groups = JSON.parse(res); });
        this.groupservice.getchannel();
        this.groupservice.getchanneled(function (res) { _this.channels = JSON.parse(res); });
    };
    LoginComponent.prototype.login = function () {
        var a = 0;
        for (var i = 0; i < this.user.length; i++) {
            if (this.username == this.user[i].name) {
                alert("successful");
                localStorage.setItem("username", this.username);
                this.router.navigate(['/group']);
                a = 1;
                break;
            }
        }
        if (a == 0) {
            alert("Try again");
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);



var SERVER_URL = 'http://localhost:3000/chat';
var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    SocketService.prototype.initSocket = function () {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(SERVER_URL);
    };
    SocketService.prototype.joinroom = function (selroom) {
        this.socket.emit("joinRoom", selroom);
    };
    SocketService.prototype.leaveroom = function (selroom) {
        this.socket.emit("leaveroom", selroom);
    };
    SocketService.prototype.joined = function (next) {
        this.socket.on('joined', function (res) { return next(res); });
    };
    SocketService.prototype.createroom = function (newroom) {
        this.socket.emit('newroom', newroom);
    };
    SocketService.prototype.reqnumusers = function (selroom) {
        this.socket.emit("numusers", selroom);
    };
    SocketService.prototype.getnumusers = function (next) {
        this.socket.on('numusers', function (res) { return next(res); });
    };
    SocketService.prototype.reqroomList = function () {
        this.socket.emit('roomlist', 'list please');
    };
    SocketService.prototype.getroomList = function (next) {
        this.socket.on('roomlist', function (res) { return next(res); });
    };
    SocketService.prototype.notice = function (next) {
        this.socket.on('notice', function (res) { return next(res); });
    };
    SocketService.prototype.sendMessage = function (message) {
        this.socket.emit('message', message);
    };
    SocketService.prototype.getMessage = function (next) {
        this.socket.on('message', function (message) { return next(message); });
    };
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/useradd.service.ts":
/*!************************************!*\
  !*** ./src/app/useradd.service.ts ***!
  \************************************/
/*! exports provided: UseraddService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseraddService", function() { return UseraddService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);



var SERVER_URL = 'http://localhost:3000/useradd';
var UseraddService = /** @class */ (function () {
    function UseraddService() {
    }
    UseraddService.prototype.initSocket = function () {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(SERVER_URL);
    };
    UseraddService.prototype.add = function (user) {
        this.socket.emit('add', user);
    };
    UseraddService.prototype.addgroup = function (username, groupname) {
        this.socket.emit('addgroup', username, groupname);
    };
    UseraddService.prototype.delete = function (username) {
        this.socket.emit('deleteuser', username);
    };
    UseraddService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UseraddService);
    return UseraddService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/phamminh/Documents/assss1/Assignment1/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map