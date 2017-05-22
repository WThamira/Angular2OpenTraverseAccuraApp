webpackJsonp([1,4],{

/***/ 292:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 292;


/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(402);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Traverse Computation!';
        this.values = new Array();
        this.angValues = new Array();
        this.centErroArry = new Array();
        this.stdOfTraAng = new Array();
        this.stdOfTraDist = new Array();
        this.forwardAngle = new Array();
        this.varinceSe = new Array();
        this.varinceSn = new Array();
        this.coreVarinceSen = new Array();
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'deg': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](),
            'min': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](),
            'sec': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](),
            'meet': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]()
        });
        this.myForm2 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'anglePrecision': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](),
            'distancePrecisionMM': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](),
            'distancePrecisionPPM': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](),
            'centringErrorConstant': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](),
            'se': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](),
            'sn': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](),
            'sen': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]()
        });
        this.values.push([1, ((25 / 180) * Math.PI), 126.305]);
        this.values.push([2, (((105 + (22 / 60) + (20 / 3600)) / 180) * Math.PI), 57.995]);
        this.values.push([3, (((190 + (16 / 60) + (15 / 3600)) / 180) * Math.PI), 133.545]);
        this.values.push([4, (((290 + (42 / 60) + (30 / 3600)) / 180) * Math.PI), 91.38]);
    }
    AppComponent.prototype.onSubmit = function () {
        // var numbers = new Array(this.myForm.value.deg, this.myForm.value.min, this.myForm.value.sec, this.myForm.value.meet); 
        var degree = this.myForm.value.deg + ((this.myForm.value.min + ((this.myForm.value.sec) / 60)) / 60);
        degree = (degree * (22 / 7)) / 180;
        var numbers = new Array(this.values.length + 1, degree, this.myForm.value.meet);
        this.values.push(numbers);
        var x = Math.sin(30);
        console.log(this.values);
        console.log(x);
        for (var i = 0; i < this.values.length; i++) {
            console.log(i);
        }
    };
    AppComponent.prototype.onSubmit2 = function () {
        for (var i = 0; i < this.values.length - 2; i++) {
            this.angValues.push(Math.PI - this.values[i][1] + this.values[i + 1][1]);
        }
        // console.log(this.angValues);
        for (var i = 0; i < this.values.length - 2; i++) {
            var x = this.myForm2.value.centringErrorConstant * (Math.sqrt((1 / (Math.pow(this.values[i][2], 2))) + (1 / (Math.pow(this.values[i + 1][2], 2))) - (Math.cos(this.angValues[0]) / (this.values[i][2] * this.values[i + 1][2]))));
            this.centErroArry.push(x);
        }
        // console.log(this.centErroArry);
        for (var i = 0; i < this.centErroArry.length; i++) {
            var x = Math.pow(this.centErroArry[i], 2);
            var y = Math.pow(((this.myForm2.value.anglePrecision * Math.PI) / (180 * 3600)), 2);
            var z = x + y;
            this.stdOfTraAng.push(Math.sqrt(z));
        }
        // console.log(this.stdOfTraAng);
        for (var i = 0; i < this.values.length - 1; i++) {
            var x = Math.round((this.myForm2.value.distancePrecisionMM / 1000 + ((this.myForm2.value.distancePrecisionPPM) / 1000000 * this.values[i][2])) * 1000) / 1000;
            this.stdOfTraDist.push(x);
        }
        // console.log(this.stdOfTraDist);
        this.forwardAngle.push(0);
        for (var i = 0; i < this.angValues.length; i++) {
            var x = Math.sqrt((Math.pow(this.forwardAngle[i], 2)) + Math.pow(this.stdOfTraAng[i], 2));
            this.forwardAngle.push(x);
        }
        // console.log(this.forwardAngle);
        // console.log("sadasdsad");
        this.varinceSe.push(this.myForm2.value.se);
        this.varinceSn.push(this.myForm2.value.sn);
        this.coreVarinceSen.push(this.myForm2.value.sen);
        for (var i = 0; i < this.values.length - 1; i++) {
            var a = Math.pow(Math.sin(this.values[i][1]), 2) * Math.pow(this.stdOfTraDist[i], 2);
            var b = Math.pow(this.values[i][2] * Math.cos(this.values[i][1]), 2) * Math.pow(this.forwardAngle[i], 2);
            var c = a + b + this.varinceSe[i];
            this.varinceSe.push(c);
            var d = Math.pow(Math.cos(this.values[i][1]), 2) * Math.pow(this.stdOfTraDist[i], 2);
            var e = Math.pow(this.values[i][2] * Math.sin(this.values[i][1]), 2) * Math.pow(this.forwardAngle[i], 2);
            var f = d + e + this.varinceSn[i];
            this.varinceSn.push(f);
            var g = (Math.sin(this.values[i][1]) * Math.cos(this.values[i][1])) * Math.pow(this.stdOfTraDist[i], 2);
            var h = this.values[i][2] * (Math.sin(this.values[i][1]) * Math.cos(this.values[i][1])) * Math.pow(this.forwardAngle[i], 2);
            var j = g + h + this.coreVarinceSen[i];
            this.coreVarinceSen.push(j);
        }
        // console.log(this.varinceSe);
        // console.log(this.varinceSn);
        // console.log(this.coreVarinceSen)
        var a = Math.cos(this.values[this.values.length - 1][1]) / this.values[this.values.length - 1][2];
        var b = -Math.sin(this.values[this.values.length - 1][1]) / this.values[this.values.length - 1][2];
        var d = Math.cos(this.values[this.values.length - 1][1]);
        var e = -Math.sin(this.values[this.values.length - 1][1]);
        // console.log("sasdsad");
        // console.log(a);
        // console.log(b);
        // console.log(d);
        // console.log(e);
        var m = (this.varinceSe[this.varinceSe.length - 1]) * (Math.pow(e, 2));
        var n = (this.varinceSn[this.varinceSn.length - 1] * Math.pow(d, 2));
        var o = Math.pow(d, 2) * Math.pow(e, 2) * this.coreVarinceSen[this.coreVarinceSen.length - 1];
        // console.log('sssssss');
        // console.log(m);
        // console.log(n);
        // console.log(o);
        var LinearMisclosure = Math.sqrt(m + n + o);
        console.log(LinearMisclosure);
        this.LinearMisclosure = LinearMisclosure;
        var p = (this.varinceSe[this.varinceSe.length - 1]) * (Math.pow(a, 2));
        var q = (this.varinceSn[this.varinceSn.length - 1] * Math.pow(b, 2));
        var r = Math.pow(a, 2) * Math.pow(b, 2) * this.coreVarinceSen[this.coreVarinceSen.length - 1];
        var angMisclosure = Math.sqrt(p + q + r);
        console.log(angMisclosure);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(461),
            styles: [__webpack_require__(456)],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_alert__ = __webpack_require__(458);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(191)();
// imports


// module
exports.push([module.i, ".bearing {\n    text-align: center;\n    margin-bottom: 40px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: dimgrey\">\n  <h1 style=\"text-align: center;padding: 20px; font-family: 'Actor';font-size: 50px; color: aliceblue;\">\n  {{title}}\n</h1>\n</div>\n<div class=\"panel panel-default\" style=\"margin: 10px; padding: 10px;\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div>\n        <div class=\"box box-info \">\n\n          <form class=\"form-horizontal\" action=\"#\" style=\"padding-top: 20px;\" [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"box-body\">\n              <div class=\"row\">\n\n                <div class=\"col-md-8\">\n                  <div class=\"panel panel-default\">\n                    <h3 class=\"box-title bearing\">Bearing</h3>\n                    <div class=\"form-group\" style=\"padding: 10px;\">\n                      <div class=\"col-sm-4\">\n                        <input type=\"number\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Deg.\" formControlName='deg'>\n                      </div>\n\n                      <div class=\"col-sm-4\">\n                        <input type=\"number\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Min.\" formControlName='min'>\n                      </div>\n\n                      <div class=\"col-sm-4\">\n                        <input type=\"number\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Sec.\" formControlName='sec'>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"panel panel-default\">\n                    <h3 class=\"box-title bearing\">Distance</h3>\n                    <div class=\"form-group\" style=\"padding: 10px;\">\n                      <div class=\"col-md-6\">\n                        <input type=\"number\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"m\" formControlName='meet' step='0.0001'>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <button type=\"submit\" class=\"btn btn-info pull-right\">Ok</button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          \n          </form>\n\n        </div>\n      </div>\n      <div>\n        <div class=\"box\">\n          <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Bordered Table</h3>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <table class=\"table table-bordered\">\n              <tbody>\n                <tr>\n                  <th style=\"width: 10px\">#</th>\n                  <th>Bearing</th>\n                  <th>Distance(m)</th>\n\n                </tr>\n                <tr *ngFor=\"let value of values\">\n                  <td *ngFor=\"let v of value\">{{v}}</td>\n                </tr>\n\n              </tbody>\n            </table>\n          </div>\n          <!-- /.box-body -->\n          <div class=\"box-footer clearfix\">\n          </div>\n        </div>\n        <!-- /.box -->\n\n      </div>\n    </div>\n    <div div class=\"col-md-6\">\n      <div>\n        <div class=\"box box-info \">\n\n          <form class=\"form-horizontal\" style=\"padding-top: 20px;\" action=\"#\" [formGroup]=\"myForm2\" (ngSubmit)=\"onSubmit2()\">\n            <div class=\"box-body\">\n              <div class=\"row\">\n\n                <div class=\"col-md-8\">\n                  <div class=\"panel panel-default\">\n                    <h4 class=\"box-title bearing\">Instrument Specification</h4>\n                    <div class=\"form-group\" style=\"padding: 10px;\">\n                      <div class=\"col-sm-4\">\n                        <h6 class=\"box-title bearing\">Angle Precision</h6>\n                        <input type=\"number\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Sec.\" formControlName='anglePrecision'>\n                      </div>\n\n                      <div class=\"col-sm-8\">\n                        <h6 class=\"box-title bearing\">Distance Precision</h6>\n                        <div class=\"form-group\">\n                          <div class=\"col-sm-6\">\n                            <input type=\"number\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"mm\" formControlName='distancePrecisionMM'>\n                          </div>\n\n                          <div class=\"col-sm-6\">\n                            <input type=\"number\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"ppm\" formControlName='distancePrecisionPPM'>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div style=\"margin: 10px;\">\n\n                      <div class=\"form-group\">\n                        <label style=\"text-align: left;\" for=\"inputEmail3\" class=\"col-sm-8 control-label\">Centring Error Constant</label>\n\n                        <div class=\"col-sm-4\">\n                          <input type=\"number\" class=\"form-control\" id=\"inputEmail3\" formControlName='centringErrorConstant'step='0.001'>\n                        </div>\n                      </div>\n                    </div>\n\n\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"panel panel-default\">\n                    <h4 class=\"box-title bearing\">Error of Start Point</h4>\n                    <div style=\"margin: 10px;\">\n\n                      <div class=\"form-group\">\n                        <label style=\"text-align: left;\" for=\"inputEmail3\" class=\"col-sm-4 control-label\">SE</label>\n\n                        <div class=\"col-sm-8\">\n                          <input type=\"number\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"\" formControlName='se' step='0.0001'>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"inputEmail3\" class=\"col-sm-4 control-label\" style=\"text-align: left;\">SN</label>\n\n                        <div class=\"col-sm-8\">\n                          <input type=\"number\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"\" formControlName='sn' step='0.0001'>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"inputEmail3\" class=\"col-sm-4 control-label\" style=\"text-align: left;\">SEN</label>\n\n                        <div class=\"col-sm-8\">\n                          <input type=\"number\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"\" formControlName='sen' step='0.0001'>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                   <button type=\"submit\" class=\"btn btn-success\" style=\"width: 100%\">calculate</button>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"box-footer\">\n            </div>\n\n          </form>\n\n        </div>\n      </div>\n      <div>\n        <div class=\"panel panel-default\" style=\"padding: 10px;\">\n          <h4 class=\"box-title bearing\">Error of End Point</h4>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label for=\"inputEmail3\" class=\"col-sm-4 control-label\" style=\"text-align: left;\">Linear Misclosure</label>\n\n              <div class=\"col-sm-8\">\n                <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"\" [value]=\"LinearMisclosure\">\n              </div>\n            </div>\n            <div style=\"margin: 10px;\"> . </div>\n            <div class=\"form-group\">\n              <label for=\"inputEmail3\" class=\"col-sm-4 control-label\" style=\"text-align: left;\">Angular Misclosure</label>\n\n              <div class=\"col-sm-8\">\n                <div class=\"form-group\" style=\"text-align: left\">\n                  <label for=\"inputEmail3\" class=\"col-sm-4 control-label\" style=\"text-align: left;\">Deg.</label>\n\n                  <label for=\"inputEmail3\" class=\"col-sm-4 control-label\" style=\"text-align: left;\">min.</label>\n\n                  <label for=\"inputEmail3\" class=\"col-sm-4 control-label\" style=\"text-align: left;\">sec.</label>\n                </div>\n\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(293);


/***/ })

},[474]);
//# sourceMappingURL=main.bundle.js.map