"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AatempPage = (function () {
    function AatempPage() {
    }
    AatempPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    AatempPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return AatempPage;
}());
exports.AatempPage = AatempPage;
//# sourceMappingURL=app.po.js.map