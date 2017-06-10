"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.successMessage = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.angularVersion = core_1.VERSION.full;
        this.title = "Angular-CLI 1.1 + Angular " + this.angularVersion + " + ASP.Net Core 1.1 + Azure";
    };
    AppComponent.prototype.onClick = function () {
        var _this = this;
        var promise = this.executePost();
        promise.then(function (response) { return _this.onClickSuccess(response); });
    };
    AppComponent.prototype.onClickSuccess = function (response) {
        this.successMessage = response;
        console.log("onClickSuccess - successMessage= " + this.successMessage);
    };
    AppComponent.prototype.executePost = function () {
        var promise = this.http.post('Home/MyTestAsync', null)
            .toPromise()
            .then(function Success(response) {
            return response.json();
        });
        return promise;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map