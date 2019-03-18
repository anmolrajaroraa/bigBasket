(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-adminModule-admin-module"],{

/***/ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".csstoButton{\r\n    margin:1rem;\r\n    background-color:#fdd835; \r\n}\r\n\r\n.heading{\r\n    text-align: center;\r\n    background-color:#3F51B5;\r\n    color:white;\r\n    padding:1rem;\r\n\r\n\r\n\r\n}\r\n\r\n::ng-deep .mat-dialog-container{\r\npadding:0px !important;\r\n}\r\n\r\n#form{\r\n    margin-top:1rem;\r\ndisplay: flex;\r\njustify-content: center;    \r\n\r\n}\r\n\r\n#addDialogBox{\r\n   \r\n    text-align: center;\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9EaWFsb2dzL0FkZC9hZGQtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTs7OztDQUloQjs7QUFDRDtBQUNBLHVCQUF1QjtDQUN0Qjs7QUFDRDtJQUNJLGdCQUFnQjtBQUNwQixjQUFjO0FBQ2Qsd0JBQXdCOztDQUV2Qjs7QUFFRDs7SUFFSSxtQkFBbUI7O0NBRXRCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9EaWFsb2dzL0FkZC9hZGQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3NzdG9CdXR0b257XHJcbiAgICBtYXJnaW46MXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZkZDgzNTsgXHJcbn1cclxuXHJcbi5oZWFkaW5ne1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojM0Y1MUI1O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBwYWRkaW5nOjFyZW07XHJcblxyXG5cclxuXHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxucGFkZGluZzowcHggIWltcG9ydGFudDtcclxufVxyXG4jZm9ybXtcclxuICAgIG1hcmdpbi10b3A6MXJlbTtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgIFxyXG5cclxufVxyXG5cclxuI2FkZERpYWxvZ0JveHtcclxuICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"addDialogBox\">\r\n   \r\n<div class=\"heading\"><h1 >ADD NEW DATA</h1></div>\r\n<form id=\"form\" [formGroup]=\"demo\" (ngSubmit)=\"Add(demo.value)\">\r\n   <div>\r\n    <mat-form-field formArrayName=\"addarray\" *ngFor=\"let key of keyArray; let i=index\">\r\n        <mat-label>{{key}}</mat-label>\r\n        <input matInput placeholder=\"\" [formControlName]=\"i\" >\r\n    \r\n      \r\n      </mat-form-field></div>\r\n      <div>\r\n      <button mat-raised-button  class=\"csstoButton\" [disabled]=\"!demo.valid\">Submit</button>\r\n      <button mat-raised-button  type=\"button\" class=\"csstoButton\" (click)=\"Cancel()\">Cancel</button>\r\n    </div>\r\n</form>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDialogComponent", function() { return AddDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../moduleServices/dialogDataService */ "./src/app/modules/adminModule/moduleServices/dialogDataService.ts");
/* harmony import */ var src_app_globalServices_Validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/globalServices/Validation */ "./src/app/globalServices/Validation.ts");






var AddDialogComponent = /** @class */ (function () {
    //private addarray:FormArray;
    function AddDialogComponent(object, dialogRef, dialogService, error_message) {
        this.object = object;
        this.dialogRef = dialogRef;
        this.dialogService = dialogService;
        this.error_message = error_message;
        this.sessionkey = null;
        this.keyArray = [];
        this.resultArray = [];
        this.error_messages = this.error_message.geterror();
    }
    AddDialogComponent.prototype.checkTypeOfCategory = function (checkobject) {
        var checkkey = Object.keys(checkobject)[0];
        switch (checkkey) {
            case 'categoryId':
                this.sessionkey = 'category';
                break;
            case 'subcategoryId':
                this.sessionkey = "subcategory";
                break;
            case 'productId':
                this.sessionkey = 'products';
                // code block
                break;
            case 'subproductId':
                this.sessionkey = 'subProducts';
                break;
            default: this.sessionkey = null;
            // code block
        }
    };
    AddDialogComponent.prototype.ngOnInit = function () {
        this.demo = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            addarray: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([])
        });
        for (var key in this.object) {
            if (this.objCheck(this.object[key])) {
                this.keyArray.push(key);
                this.demo.get('addarray').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
            }
            else {
                this.resultArray.push(this.object[key]);
            }
        }
    };
    AddDialogComponent.prototype.Cancel = function () {
        this.dialogRef.close(null);
    };
    AddDialogComponent.prototype.Add = function (form) {
        var _a;
        this.checkTypeOfCategory(this.object);
        if (this.sessionkey != null) {
            var obj = (_a = {},
                _a[this.sessionkey] = form,
                _a);
            this.dialogService.updateDataSource(obj);
        }
        this.dialogRef.close(this.resultArray);
        // sessionStorage.setItem('')
        //add form data to session storage to form object
    };
    AddDialogComponent.prototype.objCheck = function (value) {
        if (typeof (value) == "object") {
            return false;
        }
        else {
            return true;
        }
    };
    AddDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-dialog',
            template: __webpack_require__(/*! ./add-dialog.component.html */ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-dialog.component.css */ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_4__["DialogDataService"], src_app_globalServices_Validation__WEBPACK_IMPORTED_MODULE_5__["getErrorMessage"]])
    ], AddDialogComponent);
    return AddDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".csstoButton{\r\n    margin:1rem;\r\n    background-color:#fdd835; \r\n}\r\n\r\n.heading{\r\n    text-align: center;\r\n    background-color:#3F51B5;\r\n    color:white;\r\n    padding:1rem;\r\n\r\n\r\n\r\n}\r\n\r\n::ng-deep .mat-dialog-container{\r\npadding:0px !important;\r\n}\r\n\r\n#form{\r\n    margin-top:1rem;\r\ndisplay: flex;\r\njustify-content: center;    \r\n\r\n}\r\n\r\n#addDialogBox{\r\n   \r\n    text-align: center;\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9EaWFsb2dzL0RlbGV0ZS9kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTs7OztDQUloQjs7QUFDRDtBQUNBLHVCQUF1QjtDQUN0Qjs7QUFDRDtJQUNJLGdCQUFnQjtBQUNwQixjQUFjO0FBQ2Qsd0JBQXdCOztDQUV2Qjs7QUFFRDs7SUFFSSxtQkFBbUI7O0NBRXRCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9EaWFsb2dzL0RlbGV0ZS9kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3NzdG9CdXR0b257XHJcbiAgICBtYXJnaW46MXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZkZDgzNTsgXHJcbn1cclxuXHJcbi5oZWFkaW5ne1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojM0Y1MUI1O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBwYWRkaW5nOjFyZW07XHJcblxyXG5cclxuXHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxucGFkZGluZzowcHggIWltcG9ydGFudDtcclxufVxyXG4jZm9ybXtcclxuICAgIG1hcmdpbi10b3A6MXJlbTtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgIFxyXG5cclxufVxyXG5cclxuI2FkZERpYWxvZ0JveHtcclxuICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"addDialogBox\">\r\n<div class=\"heading\"><h1 >DELETE THE DATA</h1></div>\r\n<div id=\"form\">\r\n<h2>Are you sure you want to delete this Entry</h2>\r\n</div>\r\n<div>\r\n        <button mat-raised-button  class=\"csstoButton\" (click)=\"Delete()\">Delete</button>\r\n        <button mat-raised-button  type=\"button\" class=\"csstoButton\" (click)=\"Cancel()\">Cancel</button>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent(object, dialogRef) {
        this.object = object;
        this.dialogRef = dialogRef;
    }
    DeleteDialogComponent.prototype.Cancel = function () {
        this.dialogRef.close(null);
    };
    DeleteDialogComponent.prototype.Delete = function () {
        this.dialogRef.close(true); //change later
        //manipulate the object here and fill it into result
    };
    DeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'delete-dialog',
            template: __webpack_require__(/*! ./delete-dialog.component.html */ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-dialog.component.css */ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".csstoButton{\r\n    margin:1rem;\r\n    background-color:#fdd835; \r\n}\r\n\r\n.heading{\r\n    text-align: center;\r\n    background-color:#3F51B5;\r\n    color:white;\r\n    padding:1rem;\r\n\r\n\r\n\r\n}\r\n\r\n::ng-deep .mat-dialog-container{\r\npadding:0px !important;\r\n}\r\n\r\n#form{\r\n    margin-top:1rem;\r\ndisplay: flex;\r\njustify-content: center;    \r\n\r\n}\r\n\r\n#addDialogBox{\r\n   \r\n    text-align: center;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9EaWFsb2dzL0VkaXQvZWRpdC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhOzs7O0NBSWhCOztBQUNEO0FBQ0EsdUJBQXVCO0NBQ3RCOztBQUNEO0lBQ0ksZ0JBQWdCO0FBQ3BCLGNBQWM7QUFDZCx3QkFBd0I7O0NBRXZCOztBQUVEOztJQUVJLG1CQUFtQjs7Q0FFdEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluTW9kdWxlL0RpYWxvZ3MvRWRpdC9lZGl0LWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNzc3RvQnV0dG9ue1xyXG4gICAgbWFyZ2luOjFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZGQ4MzU7IFxyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzNGNTFCNTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgcGFkZGluZzoxcmVtO1xyXG5cclxuXHJcblxyXG59XHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXJ7XHJcbnBhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuI2Zvcm17XHJcbiAgICBtYXJnaW4tdG9wOjFyZW07XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyOyAgICBcclxuXHJcbn1cclxuXHJcbiNhZGREaWFsb2dCb3h7XHJcbiAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"addDialogBox\">\r\n   \r\n        <div class=\"heading\"><h1 >EDIT THE DATA</h1></div>\r\n<form id=\"form\" [formGroup]=\"demo\" (ngSubmit)=\"Edit(demo.value)\">\r\n   <div>\r\n    <mat-form-field formArrayName=\"addarray\" *ngFor=\"let key of keyArray; let i=index\">\r\n        <mat-label>{{key}}</mat-label>\r\n        <input matInput placeholder=\"\" [formControlName]=\"i\" [value]='inputArray[i]' >\r\n\r\n      </mat-form-field>\r\n      </div>\r\n      <div>\r\n      <button mat-raised-button class=\"csstoButton\" [disabled]='demo.invalid'>Submit</button>\r\n      <button mat-raised-button  class=\"csstoButton\" type=\"button\" (click)=\"Cancel()\">Cancel</button>\r\n    </div>\r\n    </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialogComponent", function() { return EditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var EditDialogComponent = /** @class */ (function () {
    function EditDialogComponent(object, dialogRef) {
        this.object = object;
        this.dialogRef = dialogRef;
        this.keyArray = [];
        this.resultArray = [];
    }
    EditDialogComponent.prototype.ngOnInit = function () {
        this.inputArray = Object.values(this.object);
        this.demo = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            addarray: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([])
        });
        for (var key in this.object) {
            if (this.objCheck(this.object[key])) { //creation of formarray and reactive form,validations
                this.keyArray.push(key); //based on object recieved
                this.demo.get('addarray').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
            }
            else {
                this.resultArray.push(this.object[key]);
            }
        }
    };
    EditDialogComponent.prototype.Cancel = function () {
        this.dialogRef.close();
    };
    EditDialogComponent.prototype.Edit = function (newObject) {
        console.log(newObject); //create a better object and send it as result
        var i = 0;
        for (var key in this.object) {
            if (i < newObject.addarray.length) {
                this.object[key] = newObject.addarray[i]; //form values are transferred to object
            }
            i++;
        }
        this.dialogRef.close(this.object);
        //store in permanent obj as well
    };
    EditDialogComponent.prototype.objCheck = function (value) {
        if (typeof (value) == "object") {
            return false;
        }
        else {
            return true;
        }
    };
    EditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'edit-dialog',
            template: __webpack_require__(/*! ./edit-dialog.component.html */ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-dialog.component.css */ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], EditDialogComponent);
    return EditDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/admin-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/adminModule/admin-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _productUpload_productUpload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productUpload/productUpload.component */ "./src/app/modules/adminModule/productUpload/productUpload.component.ts");
/* harmony import */ var _categoryCrud_categoryCrud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categoryCrud/categoryCrud */ "./src/app/modules/adminModule/categoryCrud/categoryCrud.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/adminModule/login/login.component.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin.component */ "./src/app/modules/adminModule/admin.component.ts");








var routes = [
    { path: '', component: _admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"],
        children: [
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["adminloginComponent"] },
            { path: 'categorycrud', component: _categoryCrud_categoryCrud__WEBPACK_IMPORTED_MODULE_5__["categoryCrud"] },
            { path: 'productUpload', component: _productUpload_productUpload_component__WEBPACK_IMPORTED_MODULE_4__["productUploadComponent"] },
        ] },
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());

var routingComponents = [_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"], _categoryCrud_categoryCrud__WEBPACK_IMPORTED_MODULE_5__["categoryCrud"], _productUpload_productUpload_component__WEBPACK_IMPORTED_MODULE_4__["productUploadComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["adminloginComponent"]];


/***/ }),

/***/ "./src/app/modules/adminModule/admin.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modules/adminModule/admin.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5Nb2R1bGUvYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/adminModule/admin.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/adminModule/admin.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/modules/adminModule/admin.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/adminModule/admin.component.ts ***!
  \********************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/modules/adminModule/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/modules/adminModule/admin.component.css")]
        })
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/admin.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/adminModule/admin.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.component */ "./src/app/modules/adminModule/admin.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/modules/adminModule/admin-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Dialogs/Add/add-dialog.component */ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.ts");
/* harmony import */ var _Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dialogs/Delete/delete-dialog.component */ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.ts");
/* harmony import */ var _Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dialogs/Edit/edit-dialog.component */ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table/table.component */ "./src/app/modules/adminModule/table/table.component.ts");
/* harmony import */ var _productUpload_services_imageCrud__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./productUpload/services/imageCrud */ "./src/app/modules/adminModule/productUpload/services/imageCrud.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _importMats_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../importMats.module */ "./src/app/importMats.module.ts");
/* harmony import */ var _globalServices_jsonretreiver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../globalServices/jsonretreiver */ "./src/app/globalServices/jsonretreiver.ts");
/* harmony import */ var _globalServices_categorylistjson__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../globalServices/categorylistjson */ "./src/app/globalServices/categorylistjson.ts");
/* harmony import */ var _sharedModule_sharedModule__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../sharedModule/sharedModule */ "./src/app/modules/sharedModule/sharedModule.ts");
/* harmony import */ var _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./moduleServices/dataService */ "./src/app/modules/adminModule/moduleServices/dataService.ts");
/* harmony import */ var _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./moduleServices/dialogDataService */ "./src/app/modules/adminModule/moduleServices/dialogDataService.ts");
/* harmony import */ var _sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../sharedModule/successSnackbar */ "./src/app/modules/sharedModule/successSnackbar.ts");
/* harmony import */ var _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./moduleServices/dataStorage */ "./src/app/modules/adminModule/moduleServices/dataStorage.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./header/header.component */ "./src/app/modules/adminModule/header/header.component.ts");
/* harmony import */ var _moduleServices_AuthInterceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./moduleServices/AuthInterceptor */ "./src/app/modules/adminModule/moduleServices/AuthInterceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_service_dologin__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/service/dologin */ "./src/app/modules/adminModule/login/service/dologin.ts");
/* harmony import */ var _subproducts_data_subproducts_data_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./subproducts-data/subproducts-data.component */ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.ts");
/* harmony import */ var _subproducts_data_services_uploadform__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./subproducts-data/services/uploadform */ "./src/app/modules/adminModule/subproducts-data/services/uploadform.ts");
/* harmony import */ var _table_services_pushobject__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./table/services/pushobject */ "./src/app/modules/adminModule/table/services/pushobject.ts");
/* harmony import */ var _productUpload_services_excelUpload__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./productUpload/services/excelUpload */ "./src/app/modules/adminModule/productUpload/services/excelUpload.ts");






























var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponents"],
                _Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddDialogComponent"],
                _Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteDialogComponent"],
                _Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditDialogComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_8__["TableComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_19__["adminheaderComponent"],
                _subproducts_data_subproducts_data_component__WEBPACK_IMPORTED_MODULE_23__["SubproductsDataComponent"]
            ],
            exports: [],
            providers: [_globalServices_jsonretreiver__WEBPACK_IMPORTED_MODULE_12__["Jsonretriever"], _globalServices_categorylistjson__WEBPACK_IMPORTED_MODULE_13__["CategoryJsonretriever"], _productUpload_services_imageCrud__WEBPACK_IMPORTED_MODULE_9__["ImageCrud"], _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_15__["DataService"],
                _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_16__["DialogDataService"], _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_18__["Data"], _login_service_dologin__WEBPACK_IMPORTED_MODULE_22__["Dologin"], _subproducts_data_services_uploadform__WEBPACK_IMPORTED_MODULE_24__["UploadService"], _table_services_pushobject__WEBPACK_IMPORTED_MODULE_25__["PushChanges"], _productUpload_services_excelUpload__WEBPACK_IMPORTED_MODULE_26__["excelUpload"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"],
                    useClass: _moduleServices_AuthInterceptor__WEBPACK_IMPORTED_MODULE_20__["AuthInterceptor"],
                    multi: true
                }],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _sharedModule_sharedModule__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _importMats_module__WEBPACK_IMPORTED_MODULE_11__["MyOwnCustomMaterialModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"]
            ],
            entryComponents: [_Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddDialogComponent"],
                _Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteDialogComponent"],
                _Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditDialogComponent"],
                _sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_17__["SuccessComponent"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/categoryCrud/categoryCrud.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/adminModule/categoryCrud/categoryCrud.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide{\r\n    display: none;\r\n}\r\n\r\n.show{\r\n    display: show;\r\n}\r\n\r\n.data_section{\r\n    text-align: center !important;\r\n   \r\n\r\n\r\n\r\n}\r\n\r\n#category_container{\r\n    width: 60%;\r\n    \r\nmargin:0rem 1rem;\r\n}\r\n\r\n.flexcontainer{\r\n    padding:1rem;\r\n display: flex;\r\n}\r\n\r\n#categorylist{\r\n    margin:1rem;\r\n   width:100%;\r\n    position: relative;\r\n   \r\n    \r\n\r\n}\r\n\r\n.table_content{\r\nwidth:40%;\r\n}\r\n\r\n.parentNode{\r\n    position: absolute;\r\n    left:0%;\r\n    top:0%;\r\n    width:20%;\r\n}\r\n\r\n.final_data{\r\nfont-size:1rem;\r\nmargin:0.2rem 0px 0rem 2.5rem;\r\n}\r\n\r\n::ng-deep .material-icons{\r\nfont-size: 1rem !important;\r\n    \r\n}\r\n\r\n::ng-deep #categorylist .mat-form-field-appearance-legacy .mat-form-field-underline{\r\ndisplay:none;}\r\n\r\n::ng-deep #categorylist .mat-form-field-appearance-legacy .mat-form-field-wrapper{\r\n    padding-bottom:0px !important;\r\n}\r\n\r\n.dataEntry{\r\n   \r\n    width:100%;\r\n}\r\n\r\n.firstNodeItem{\r\n\r\nposition: absolute;\r\n\r\nwidth:100%;\r\nleft:165px;\r\ntop:0%;\r\n\r\n}\r\n\r\n.secondNodeItem{\r\n   \r\n    position: absolute;\r\n   \r\n    width:100%;\r\n    left:200px;\r\n    top:0%;\r\n    margin-left:1rem;\r\n    }\r\n\r\n.thirdNodeItem{\r\n   \r\n        position: absolute;\r\n        width:100%;\r\n        left:205px;\r\n        top:0%;\r\n        margin-left:1rem;\r\n        \r\n        }\r\n\r\n.csssetting:hover{\r\n        background-color:lightskyblue;\r\n    }\r\n\r\n.csssetting{\r\n    \r\n    border-bottom:1px solid darkgrey;\r\n    border-radius:3%;\r\n    color:grey;\r\n    font-weight: 300;\r\n    \r\n  \r\n}\r\n\r\n.node_container{\r\n    height:200px;\r\n   width:200px;\r\n    overflow: scroll;\r\n}\r\n\r\n#heading{\r\n    color:white;\r\n    background-color: #3F51B5;\r\n        text-align: center;\r\n    \r\n}\r\n\r\n   \r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9jYXRlZ29yeUNydWQvY2F0ZWdvcnlDcnVkLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUdEO0lBQ0ksOEJBQThCOzs7OztDQUtqQzs7QUFFRDtJQUNJLFdBQVc7O0FBRWYsaUJBQWlCO0NBQ2hCOztBQUNEO0lBQ0ksYUFBYTtDQUNoQixjQUFjO0NBQ2Q7O0FBRUQ7SUFDSSxZQUFZO0dBQ2IsV0FBVztJQUNWLG1CQUFtQjs7OztDQUl0Qjs7QUFFRDtBQUNBLFVBQVU7Q0FDVDs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsT0FBTztJQUNQLFVBQVU7Q0FDYjs7QUFHRDtBQUNBLGVBQWU7QUFDZiw4QkFBOEI7Q0FDN0I7O0FBRUQ7QUFDQSwyQkFBMkI7O0NBRTFCOztBQUdEO0FBQ0EsYUFBYSxDQUFDOztBQUdkO0lBQ0ksOEJBQThCO0NBQ2pDOztBQUNEOztJQUVJLFdBQVc7Q0FDZDs7QUFHRDs7QUFFQSxtQkFBbUI7O0FBRW5CLFdBQVc7QUFDWCxXQUFXO0FBQ1gsT0FBTzs7Q0FFTjs7QUFHRDs7SUFFSSxtQkFBbUI7O0lBRW5CLFdBQVc7SUFDWCxXQUFXO0lBQ1gsT0FBTztJQUNQLGlCQUFpQjtLQUNoQjs7QUFFRDs7UUFFSSxtQkFBbUI7UUFDbkIsV0FBVztRQUNYLFdBQVc7UUFDWCxPQUFPO1FBQ1AsaUJBQWlCOztTQUVoQjs7QUFHTDtRQUNJLDhCQUE4QjtLQUNqQzs7QUFDTDs7SUFFSSxpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxpQkFBaUI7OztDQUdwQjs7QUFDRDtJQUNJLGFBQWE7R0FDZCxZQUFZO0lBQ1gsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtRQUN0QixtQkFBbUI7O0NBRTFCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9jYXRlZ29yeUNydWQvY2F0ZWdvcnlDcnVkLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNob3d7XHJcbiAgICBkaXNwbGF5OiBzaG93O1xyXG59XHJcblxyXG5cclxuLmRhdGFfc2VjdGlvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICBcclxuXHJcblxyXG5cclxufVxyXG5cclxuI2NhdGVnb3J5X2NvbnRhaW5lcntcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBcclxubWFyZ2luOjByZW0gMXJlbTtcclxufVxyXG4uZmxleGNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6MXJlbTtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiNjYXRlZ29yeWxpc3R7XHJcbiAgICBtYXJnaW46MXJlbTtcclxuICAgd2lkdGg6MTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgXHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi50YWJsZV9jb250ZW50e1xyXG53aWR0aDo0MCU7XHJcbn1cclxuXHJcbi5wYXJlbnROb2Rle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDowJTtcclxuICAgIHRvcDowJTtcclxuICAgIHdpZHRoOjIwJTtcclxufVxyXG5cclxuXHJcbi5maW5hbF9kYXRhe1xyXG5mb250LXNpemU6MXJlbTtcclxubWFyZ2luOjAuMnJlbSAwcHggMHJlbSAyLjVyZW07XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0ZXJpYWwtaWNvbnN7XHJcbmZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgI2NhdGVnb3J5bGlzdCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtcclxuZGlzcGxheTpub25lO31cclxuXHJcblxyXG46Om5nLWRlZXAgI2NhdGVnb3J5bGlzdCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTowcHggIWltcG9ydGFudDtcclxufVxyXG4uZGF0YUVudHJ5e1xyXG4gICBcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcblxyXG4uZmlyc3ROb2RlSXRlbXtcclxuXHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbndpZHRoOjEwMCU7XHJcbmxlZnQ6MTY1cHg7XHJcbnRvcDowJTtcclxuXHJcbn1cclxuXHJcblxyXG4uc2Vjb25kTm9kZUl0ZW17XHJcbiAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICBcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBsZWZ0OjIwMHB4O1xyXG4gICAgdG9wOjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6MXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudGhpcmROb2RlSXRlbXtcclxuICAgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgbGVmdDoyMDVweDtcclxuICAgICAgICB0b3A6MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MXJlbTtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIC5jc3NzZXR0aW5nOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRza3libHVlO1xyXG4gICAgfVxyXG4uY3Nzc2V0dGluZ3tcclxuICAgIFxyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgZGFya2dyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOjMlO1xyXG4gICAgY29sb3I6Z3JleTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBcclxuICBcclxufVxyXG4ubm9kZV9jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6MjAwcHg7XHJcbiAgIHdpZHRoOjIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuI2hlYWRpbmd7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjUxQjU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuXHJcbiAgIFxyXG4gICAgIl19 */"

/***/ }),

/***/ "./src/app/modules/adminModule/categoryCrud/categoryCrud.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/adminModule/categoryCrud/categoryCrud.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<adminheader></adminheader>\r\n\r\n<div class=\"flexcontainer\">\r\n    <div id=\"category_container\">\r\n    <div id=\"heading\">CATEGORY LIST</div>  \r\n            <div id=\"categorylist\">\r\n<div class=\"parentNode\">\r\n                <div  *ngFor=\"let categorylist of category ; let i=index\">\r\n                        <div class=\"data_section\">\r\n                              \r\n                                <button mat-button class=\"csssetting\" (click)=editorAdd(category) blockShow>{{categorylist.categoryName}}</button>\r\n                         <div class=\"hide firstNodeItem\">\r\n                                <div class=\"node_container\" >\r\n                    <div  *ngFor=\"let subcategory of categorylist.subcategory\" >\r\n                 <div class=\"data_section\">\r\n                        \r\n                            <button mat-button class=\"dataEntry csssetting\" (click)=editorAdd(categorylist.subcategory) blockShow>{{subcategory.subcategoryName}}</button> \r\n                           \r\n                            <div class=\"hide secondNodeItem\" >\r\n                                <div class=\"node_container\">\r\n                  <div *ngFor=\"let products of subcategory.products\">\r\n                        <div class=\"data_section\">\r\n                               \r\n                            <button mat-button (click)=editorAdd(subcategory.products) class=\"dataEntry csssetting\" blockShow>{{products.productName}}</button>\r\n                            <div class=\"hide thirdNodeItem\" >\r\n                                    <div class=\"node_container\">\r\n                      <div *ngFor=\"let subproduct of products.subProducts\">\r\n                            <div class=\"data_section\">\r\n                                   \r\n                                <button mat-button (click)=editorAdd(products.subProducts) class=\"dataEntry csssetting\" toggle>{{subproduct.subproductName}}</button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                    </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n               \r\n                </div>\r\n                </div>\r\n                </div>\r\n                </div>\r\n                </div>\r\n                </div>\r\n         \r\n        </div>\r\n        </div>\r\n    </div>\r\n\r\n        <div class=\"table_content\">\r\n        <tablehere></tablehere>\r\n    </div>\r\n    </div>\r\n        \r\n\r\n"

/***/ }),

/***/ "./src/app/modules/adminModule/categoryCrud/categoryCrud.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/adminModule/categoryCrud/categoryCrud.ts ***!
  \******************************************************************/
/*! exports provided: categoryCrud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryCrud", function() { return categoryCrud; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _moduleServices_categoryDatabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moduleServices/categoryDatabase */ "./src/app/modules/adminModule/moduleServices/categoryDatabase.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../globalmodel/listitem/category */ "./src/app/globalmodel/listitem/category.ts");
/* harmony import */ var _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../moduleServices/dataService */ "./src/app/modules/adminModule/moduleServices/dataService.ts");
/* harmony import */ var _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../moduleServices/dialogDataService */ "./src/app/modules/adminModule/moduleServices/dialogDataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var categoryCrud = /** @class */ (function () {
    function categoryCrud(categoryDatabase, fb, dataSource, dialogData, router) {
        this.categoryDatabase = categoryDatabase;
        this.fb = fb;
        this.dataSource = dataSource;
        this.dialogData = dialogData;
        this.router = router;
        this.isDone = false;
        this.checkkey = null;
        console.log(localStorage.getItem('id_token') == null);
        if (localStorage.getItem('id_token') == '-1' || localStorage.getItem('id_token') == null) {
            this.router.navigate(['/admin/login']);
        }
        this.newPushObject = new _globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_4__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    }
    categoryCrud.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryDatabase.dataChange.subscribe(function (data) {
            _this.category = data;
        });
    };
    categoryCrud.prototype.editorAdd = function (object) {
        this.dataSource.updateDataSource(object);
    };
    categoryCrud = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'categoryCrud',
            template: __webpack_require__(/*! ./categoryCrud.html */ "./src/app/modules/adminModule/categoryCrud/categoryCrud.html"),
            providers: [_moduleServices_categoryDatabase__WEBPACK_IMPORTED_MODULE_2__["CategoryDatabase"]],
            styles: [__webpack_require__(/*! ./categoryCrud.css */ "./src/app/modules/adminModule/categoryCrud/categoryCrud.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_moduleServices_categoryDatabase__WEBPACK_IMPORTED_MODULE_2__["CategoryDatabase"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_5__["DataService"], _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_6__["DialogDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], categoryCrud);
    return categoryCrud;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/header/header.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modules/adminModule/header/header.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".space{\r\nflex: 1 0.5 auto;\r\n}\r\n\r\n.small_text{\r\n    color:white;\r\n    font-size: 1rem;\r\nbackground-color:#92a8d1;\r\n}\r\n\r\n.smallspace{\r\n    position: relative;\r\n    margin-left:1rem;\r\n}\r\n\r\n#addressDetails{\r\n    position: absolute;\r\n    margin-left:1rem;\r\n    width:13rem;\r\n    right:1rem;\r\n   \r\n}\r\n\r\n#titlebar{\r\n    background-color:#034f84;\r\n    color:white;\r\n}\r\n\r\na{\r\n    color:white;\r\n}\r\n\r\n#details{\r\n   background-color:white;\r\n\r\n\r\n}\r\n\r\nmat-select{\r\n    background-color: inherit;\r\n}\r\n\r\n::ng-deep  #details .mat-select-arrow-wrapper {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    padding-left: 100px !important;\r\n}\r\n\r\n.mat-select-placeholder {\r\n    color: rgba(0,0,0,.42);\r\n}\r\n\r\n.material-icons{\r\n    font-size:20px !important;\r\n}\r\n\r\n.mat-icon{\r\n      background-color:#FF007B;\r\n     padding:2px 5px 2px; \r\n      border-radius:35px;\r\n      width:29px;\r\n      \r\n  }\r\n\r\n::ng-deep #header_container .mat-form-field-infix{\r\n      font-size: 1rem;\r\n      width:auto !important;\r\n  }\r\n\r\n.box{\r\n      width:24px;\r\n      padding:2px;\r\n  }\r\n\r\n.mat-form-field-appearance-outline .mat-form-field-outline {\r\n      top:2rem !important;\r\n  }\r\n\r\n#header_container .mat-input-wrapper{\r\n    width:400px !important;\r\n  }\r\n\r\n.example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n\r\n.example-full-width {\r\n    width: 100%;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxpQkFBaUI7Q0FDaEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCLHlCQUF5QjtDQUN4Qjs7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXOztDQUVkOztBQUVEO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFHRDtHQUNHLHVCQUF1Qjs7O0NBR3pCOztBQUNEO0lBQ0ksMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QiwrQkFBK0I7Q0FDbEM7O0FBRUQ7SUFDSSx1QkFBdUI7Q0FDMUI7O0FBR0Q7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBRUM7TUFDSSx5QkFBeUI7S0FDMUIsb0JBQW9CO01BQ25CLG1CQUFtQjtNQUNuQixXQUFXOztHQUVkOztBQUlEO01BQ0ksZ0JBQWdCO01BQ2hCLHNCQUFzQjtHQUN6Qjs7QUFDRDtNQUNJLFdBQVc7TUFDWCxZQUFZO0dBQ2Y7O0FBR0g7TUFDTSxvQkFBb0I7R0FDdkI7O0FBRUQ7SUFDRSx1QkFBdUI7R0FDeEI7O0FBRUQ7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7R0FDYjs7QUFFRDtJQUNFLFlBQVksQ0FBQyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5Nb2R1bGUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNle1xyXG5mbGV4OiAxIDAuNSBhdXRvO1xyXG59XHJcblxyXG4uc21hbGxfdGV4dHtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiM5MmE4ZDE7XHJcbn1cclxuLnNtYWxsc3BhY2V7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDoxcmVtO1xyXG59XHJcblxyXG4jYWRkcmVzc0RldGFpbHN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDoxcmVtO1xyXG4gICAgd2lkdGg6MTNyZW07XHJcbiAgICByaWdodDoxcmVtO1xyXG4gICBcclxufVxyXG5cclxuI3RpdGxlYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDM0Zjg0O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuXHJcbiNkZXRhaWxze1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5cclxuXHJcbn1cclxubWF0LXNlbGVjdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAgI2RldGFpbHMgLm1hdC1zZWxlY3QtYXJyb3ctd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1zZWxlY3QtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjQyKTtcclxufVxyXG5cclxuXHJcbi5tYXRlcmlhbC1pY29uc3tcclxuICAgIGZvbnQtc2l6ZToyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiAgLm1hdC1pY29ue1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRjAwN0I7XHJcbiAgICAgcGFkZGluZzoycHggNXB4IDJweDsgXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6MzVweDtcclxuICAgICAgd2lkdGg6MjlweDtcclxuICAgICAgXHJcbiAgfVxyXG5cclxuIFxyXG5cclxuICA6Om5nLWRlZXAgI2hlYWRlcl9jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkLWluZml4e1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIHdpZHRoOmF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJveHtcclxuICAgICAgd2lkdGg6MjRweDtcclxuICAgICAgcGFkZGluZzoycHg7XHJcbiAgfVxyXG5cclxuICBcclxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgICAgIHRvcDoycmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjaGVhZGVyX2NvbnRhaW5lciAubWF0LWlucHV0LXdyYXBwZXJ7XHJcbiAgICB3aWR0aDo0MDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7fSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/header/header.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/adminModule/header/header.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header_container\" >\r\n  <mat-toolbar class=\"small_text\">\r\n    <span class=\"space\"></span>\r\n    <span><mat-icon>phone</mat-icon>1800-678-449</span>\r\n  \r\n    \r\n        \r\n   \r\n  </mat-toolbar>  \r\n  <mat-toolbar id=\"titlebar\" >  \r\n        <mat-toolbar-row>\r\n          \r\n          <span class=\"space\"></span>\r\n\r\n          <span class=\"space\"></span>\r\n        \r\n          <span *ngIf=\"tokenid!='-1'\">\r\n            <button mat-raised-button type='button' (click)='signOut()'>Sign Out</button>\r\n          </span>\r\n            <span *ngIf=\"tokenid=='-1'\">\r\n             <a routerLink='/userPlan'>\r\n              <mat-icon>person</mat-icon>\r\n            </a> </span>\r\n        \r\n        </mat-toolbar-row>\r\n      \r\n     \r\n      </mat-toolbar>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/adminModule/header/header.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/adminModule/header/header.component.ts ***!
  \****************************************************************/
/*! exports provided: adminheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminheaderComponent", function() { return adminheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var adminheaderComponent = /** @class */ (function () {
    function adminheaderComponent(route) {
        this.route = route;
        this.tokenid = '-1';
    }
    adminheaderComponent.prototype.signOut = function () {
        localStorage.setItem('id_token', '-1');
        this.tokenid = '-1';
        this.route.navigate(['/admin/login']);
    };
    adminheaderComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('id_token') != '-1' && localStorage.getItem('id_token') != null) {
            this.tokenid = localStorage.getItem('id_token');
            this.route.navigate(['/admin/categorycrud']);
        }
        this.display = false;
    };
    adminheaderComponent.prototype.displayblock = function () {
        if (this.display == false)
            this.display = true;
        else
            this.display = false;
    };
    adminheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'adminheader',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/modules/adminModule/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/modules/adminModule/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], adminheaderComponent);
    return adminheaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/login/login.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/adminModule/login/login.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field{\r\n    display:block;\r\n}\r\n\r\n.signin{\r\n    margin:1rem;\r\n}\r\n\r\n.flexcontainer{\r\n    display:flex;\r\n    justify-content: center;\r\n    margin-top:1rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGR7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcblxyXG4uc2lnbmlue1xyXG4gICAgbWFyZ2luOjFyZW07XHJcbn1cclxuXHJcbi5mbGV4Y29udGFpbmVye1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOjFyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/login/login.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/adminModule/login/login.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<adminheader></adminheader>\r\n<div class=\"flexcontainer\">\r\n<mat-card id=\"login_container\">\r\n      <mat-card-header>Sign In</mat-card-header>\r\n    <mat-card-content>\r\n    <div>\r\n\r\n        <form [formGroup]=\"loginDetails\" (ngSubmit)=\"onLogin(loginDetails.value)\" class=\"signin\">\r\n                <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Id</mat-label>\r\n                  <input matInput placeholder=\"Username\" formControlName=\"id\">\r\n                  <mat-error *ngFor=\"let validation of error_messages.id\">\r\n                        <mat-error class=\"error-message\" *ngIf=\"loginDetails.get('id').hasError(validation.type) && \r\n                        (loginDetails.get('id').dirty || \r\n                        loginDetails.get('id').touched)\">{{validation.message}}</mat-error>\r\n                         </mat-error>\r\n                </mat-form-field>\r\n           \r\n            <mat-form-field appearance=\"outline\">\r\n                     <mat-label>Name</mat-label>\r\n               <input matInput placeholder=\"Username\" formControlName=\"name\">\r\n               <mat-error *ngFor=\"let validation of error_messages.name\">\r\n                     <mat-error class=\"error-message\" *ngIf=\"loginDetails.get('name').hasError(validation.type) && \r\n                     (loginDetails.get('name').dirty || \r\n                     loginDetails.get('name').touched)\">{{validation.message}}</mat-error>\r\n                      </mat-error>\r\n             </mat-form-field>\r\n           \r\n             <mat-form-field appearance =\"outline\">\r\n                 <mat-label>Password</mat-label>\r\n               <input matInput placeholder=\"Password\" formControlName=\"password\">\r\n               <mat-error *ngFor=\"let validation of error_messages.pwd\">\r\n                     <mat-error class=\"error-message\" *ngIf=\"loginDetails.get('password').hasError(validation.type) && \r\n                     (loginDetails.get('password').dirty || \r\n                     loginDetails.get('password').touched)\">{{validation.message}}</mat-error>\r\n                      </mat-error>\r\n               \r\n             </mat-form-field>\r\n     \r\n             <button mat-raised-button [disabled]=\"loginDetails.invalid\" color=\"accent\">Sign In</button>\r\n         </form>\r\n             \r\n           </div>\r\n           </mat-card-content>\r\n           </mat-card>\r\n           </div>"

/***/ }),

/***/ "./src/app/modules/adminModule/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/adminModule/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: adminloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminloginComponent", function() { return adminloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _globalServices_Validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globalServices/Validation */ "./src/app/globalServices/Validation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_dologin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/dologin */ "./src/app/modules/adminModule/login/service/dologin.ts");






var adminloginComponent = /** @class */ (function () {
    function adminloginComponent(geterrormessage, router, dologin) {
        this.geterrormessage = geterrormessage;
        this.router = router;
        this.dologin = dologin;
        this.error_messages = this.geterrormessage.geterror();
    }
    adminloginComponent.prototype.ngOnInit = function () {
        this.loginDetails = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?=.*[0-9])/)])
        });
    };
    adminloginComponent.prototype.onLogin = function (form) {
        var _this = this;
        this.dologin.login(form).subscribe(function (data) {
            if (data) {
                console.log(data.token);
                localStorage.setItem('id_token', data.token);
                _this.router.navigate(['admin/categorycrud']);
            }
        }, function (err) {
            alert(err);
        });
    };
    adminloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'adminlogin',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/adminModule/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/modules/adminModule/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globalServices_Validation__WEBPACK_IMPORTED_MODULE_3__["getErrorMessage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_dologin__WEBPACK_IMPORTED_MODULE_5__["Dologin"]])
    ], adminloginComponent);
    return adminloginComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/login/service/dologin.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/adminModule/login/service/dologin.ts ***!
  \**************************************************************/
/*! exports provided: Dologin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dologin", function() { return Dologin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalmodel_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var Dologin = /** @class */ (function () {
    function Dologin(http) {
        this.http = http;
        this.url = _globalmodel_url__WEBPACK_IMPORTED_MODULE_3__["url"].locallogin;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    Dologin.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = 'Front End Error';
        }
        else {
            // server-side error
            errorMessage = 'BackEnd Error';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
    };
    ;
    Dologin.prototype.login = function (details) {
        return this.http.post(this.url, details, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ;
    Dologin = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], Dologin);
    return Dologin;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/moduleServices/AuthInterceptor.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/adminModule/moduleServices/AuthInterceptor.ts ***!
  \***********************************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var idToken = localStorage.getItem('id_token');
        console.log(idToken);
        if (idToken) {
            var clonereq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + idToken)
            });
            return next.handle(clonereq);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/moduleServices/categoryDatabase.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/adminModule/moduleServices/categoryDatabase.ts ***!
  \************************************************************************/
/*! exports provided: CategoryDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDatabase", function() { return CategoryDatabase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globalServices_categorylistjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globalServices/categorylistjson */ "./src/app/globalServices/categorylistjson.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var CategoryDatabase = /** @class */ (function () {
    function CategoryDatabase(categoryjson) {
        var _this = this;
        this.categoryjson = categoryjson;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.categoryjson.jsonretrieve().subscribe(function (data) {
            _this.dataChange.next(data);
        });
    }
    CategoryDatabase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globalServices_categorylistjson__WEBPACK_IMPORTED_MODULE_2__["CategoryJsonretriever"]])
    ], CategoryDatabase);
    return CategoryDatabase;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/moduleServices/dataService.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/adminModule/moduleServices/dataService.ts ***!
  \*******************************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DataService = /** @class */ (function () {
    function DataService() {
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    DataService.prototype.updateDataSource = function (obj) {
        this.dataSource.next(obj);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/moduleServices/dataStorage.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/adminModule/moduleServices/dataStorage.ts ***!
  \*******************************************************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Data = /** @class */ (function () {
    function Data() {
    }
    Data = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Data);
    return Data;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/moduleServices/dialogDataService.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/adminModule/moduleServices/dialogDataService.ts ***!
  \*************************************************************************/
/*! exports provided: DialogDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataService", function() { return DialogDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DialogDataService = /** @class */ (function () {
    function DialogDataService() {
        this.dialogdataSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.pushdata = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    DialogDataService.prototype.updateDataSource = function (obj) {
        console.log(obj);
        this.dialogdataSource.next(obj);
    };
    DialogDataService.prototype.updatePushObj = function (obj) {
        this.pushdata.next(obj);
    };
    DialogDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DialogDataService);
    return DialogDataService;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/model/imageObject.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/model/imageObject.ts ***!
  \************************************************************************/
/*! exports provided: ImageObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageObj", function() { return ImageObj; });
var ImageObj = /** @class */ (function () {
    function ImageObj() {
    }
    return ImageObj;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/productUpload.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/productUpload.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flexcontainer{\r\n    display: flex;\r\n\r\n}\r\n#image_container img{\r\n    width:100%;\r\n    height:100%;\r\n}\r\n#imageSection{\r\n    width:100%;\r\n}\r\n.container{\r\n    margin:2rem auto;\r\n    width:80%;\r\n}\r\n.activeImageCard{\r\n    width:99%;\r\n}\r\n#upload_container\r\n{\r\n    width:95%;\r\n}\r\n.imageUploadSection .mat-card{\r\n    padding:0px !important;\r\n}\r\n.imageUploadSection .csssetting .mat-icon{\r\n    border-radius: 35px;\r\n\r\n    background-color:white ;\r\n}\r\n.imageUploadSection .csssetting .mat-card .material-icons{\r\n    font-size: 20px;\r\n}\r\n.card_title{\r\nbackground-color: #3F51B5;\r\ncolor:white;\r\n}\r\n.custom-file-upload {\r\n  \r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    text-align: center;\r\n    background-color:#FF007B;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    color:white;\r\n  }\r\ninput[type=\"file\"]{\r\n    display:none;\r\n}\r\n.csssetting{\r\n    min-width: 170px;\r\n    max-width: 1700px;\r\n    flex-basis: auto; /* default value */\r\nwidth: 170px;\r\nmargin: 1rem 2% 0px 0px;\r\nposition: relative;\r\n\r\n\r\n}\r\n.active{\r\n    background-color:lightblue;\r\n}\r\n#imageList{\r\n    width:100%;\r\n}\r\n#imagelist_container{\r\n    display:flex;\r\n    flex-wrap: nowrap;\r\n    justify-content: flex-start;\r\n    overflow:scroll;\r\n}\r\n#imagelist_container img{\r\nwidth:100%;\r\n\r\n}\r\n.image{\r\n    width:100%;\r\n    margin:0.3rem;\r\n\r\n\r\n}\r\n.clear{\r\n    position: absolute;\r\n    left: 76%;\r\n    top: 10%;\r\n    z-index: 2;\r\n    cursor: pointer;\r\n}\r\n.image img{\r\n   \r\nwidth:100%;\r\n\r\n\r\n}\r\n#subproductData{\r\nmargin:0px auto;\r\n    width:95%;\r\n    overflow: scroll;\r\n    height:350px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9wcm9kdWN0VXBsb2FkL3Byb2R1Y3RVcGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7O0NBRWpCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsWUFBWTtDQUNmO0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0NBQ2I7QUFDRDtJQUNJLFVBQVU7Q0FDYjtBQUNEOztJQUVJLFVBQVU7Q0FDYjtBQUNEO0lBQ0ksdUJBQXVCO0NBQzFCO0FBRUQ7SUFDSSxvQkFBb0I7O0lBRXBCLHdCQUF3QjtDQUMzQjtBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBRUQ7QUFDQSwwQkFBMEI7QUFDMUIsWUFBWTtDQUNYO0FBQ0Q7O0lBRUksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxhQUFhO0NBQ2hCO0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQixDQUFDLG1CQUFtQjtBQUN6QyxhQUFhO0FBQ2Isd0JBQXdCO0FBQ3hCLG1CQUFtQjs7O0NBR2xCO0FBQ0Q7SUFDSSwyQkFBMkI7Q0FDOUI7QUFFRDtJQUNJLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0NBQ25CO0FBRUQ7QUFDQSxXQUFXOztDQUVWO0FBSUQ7SUFDSSxXQUFXO0lBQ1gsY0FBYzs7O0NBR2pCO0FBSUQ7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZ0JBQWdCO0NBQ25CO0FBRUQ7O0FBRUEsV0FBVzs7O0NBR1Y7QUFHRDtBQUNBLGdCQUFnQjtJQUNaLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5Nb2R1bGUvcHJvZHVjdFVwbG9hZC9wcm9kdWN0VXBsb2FkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleGNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG59XHJcbiNpbWFnZV9jb250YWluZXIgaW1ne1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG4jaW1hZ2VTZWN0aW9ue1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgbWFyZ2luOjJyZW0gYXV0bztcclxuICAgIHdpZHRoOjgwJTtcclxufVxyXG4uYWN0aXZlSW1hZ2VDYXJke1xyXG4gICAgd2lkdGg6OTklO1xyXG59XHJcbiN1cGxvYWRfY29udGFpbmVyXHJcbntcclxuICAgIHdpZHRoOjk1JTtcclxufVxyXG4uaW1hZ2VVcGxvYWRTZWN0aW9uIC5tYXQtY2FyZHtcclxuICAgIHBhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWFnZVVwbG9hZFNlY3Rpb24gLmNzc3NldHRpbmcgLm1hdC1pY29ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlIDtcclxufVxyXG5cclxuLmltYWdlVXBsb2FkU2VjdGlvbiAuY3Nzc2V0dGluZyAubWF0LWNhcmQgLm1hdGVyaWFsLWljb25ze1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZF90aXRsZXtcclxuYmFja2dyb3VuZC1jb2xvcjogIzNGNTFCNTtcclxuY29sb3I6d2hpdGU7XHJcbn1cclxuLmN1c3RvbS1maWxlLXVwbG9hZCB7XHJcbiAgXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGMDA3QjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuLmNzc3NldHRpbmd7XHJcbiAgICBtaW4td2lkdGg6IDE3MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxNzAwcHg7XHJcbiAgICBmbGV4LWJhc2lzOiBhdXRvOyAvKiBkZWZhdWx0IHZhbHVlICovXHJcbndpZHRoOiAxNzBweDtcclxubWFyZ2luOiAxcmVtIDIlIDBweCAwcHg7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblxyXG59XHJcbi5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Ymx1ZTtcclxufVxyXG5cclxuI2ltYWdlTGlzdHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuI2ltYWdlbGlzdF9jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG92ZXJmbG93OnNjcm9sbDtcclxufVxyXG5cclxuI2ltYWdlbGlzdF9jb250YWluZXIgaW1ne1xyXG53aWR0aDoxMDAlO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4uaW1hZ2V7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luOjAuM3JlbTtcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5jbGVhcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDc2JTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmltYWdlIGltZ3tcclxuICAgXHJcbndpZHRoOjEwMCU7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbiNzdWJwcm9kdWN0RGF0YXtcclxubWFyZ2luOjBweCBhdXRvO1xyXG4gICAgd2lkdGg6OTUlO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIGhlaWdodDozNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/productUpload.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/productUpload.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<adminheader></adminheader>\r\n\r\n<mat-tab-group mat-align-tabs=\"center\">\r\n    <mat-tab label=\"SINGLE UPLOAD\"> \r\n      <div id='stackTrace'>\r\n        <span *ngFor='let id of parentTrace;let i =index;'>\r\n          {{id}}<span *ngIf=\"parentTrace[i+1]\">-></span>\r\n        </span>\r\n        </div>\r\n      \r\n      <div class=\"flexcontainer\">\r\n        <div class=\"container\"> \r\n      <div class=\"imageUploadSection\">\r\n          <mat-grid-list cols=\"8\" rowHeight=\"2:1\">\r\n              <mat-grid-tile colspan='4' rowspan='6'>\r\n             \r\n                <mat-card *ngIf=\"  activeImageObj!=null && activeImageObj.uri!=null \" class=\"activeImageCard\">\r\n                    <mat-card-header>\r\n                        {{subproductFullData.subproductName}}\r\n                      </mat-card-header>\r\n                  <div id=\"imageSection\">\r\n                  <span *ngIf='activeImageObj!=null'>{{activeImageObj.index}}</span>\r\n                   <div id=\"image_container\">\r\n                      <img *ngIf='activeImageObj.uri!=null' [src]=\"activeImageObj.uri\" >\r\n      \r\n                       </div>\r\n                </div>\r\n                </mat-card>\r\n              </mat-grid-tile>\r\n              <mat-grid-tile colspan ='4' rowspan='2'>\r\n                <div id=\"upload_container\">\r\n                <mat-card class=\"file_upload\">\r\n                      <mat-card-header class=\"card_title\">\r\n                      \r\n                        <mat-card-title >Upload Image</mat-card-title>\r\n                        \r\n                      </mat-card-header>\r\n                      <mat-card-actions>\r\n                          <label class=\"custom-file-upload\">\r\n                              Upload Image<input type=\"file\" name=\"uploadImage\" \r\n                              accept=\".jpg,.jpeg,.png\" (change)=\"imageUpload(uploadImage)\" #uploadImage ></label>\r\n                      </mat-card-actions>\r\n                    </mat-card>\r\n                  </div>\r\n        \r\n              </mat-grid-tile> \r\n              <mat-grid-tile colspan ='4' rowspan='6'>\r\n      \r\n                  <app-subproducts-data id=\"subproductData\"></app-subproducts-data>\r\n                        </mat-grid-tile> \r\n                    \r\n      \r\n      \r\n              <mat-grid-tile colspan='4' rowspan='1'> \r\n      <div id=\"imageList\">\r\n        \r\n        <div *ngIf=\"imageList!=null\"  id=\"imagelist_container\">\r\n         <div *ngFor='let imageObj of imageList' class=\"csssetting\">\r\n           <button mat-button *ngIf='activeImageObj!=null' [ngClass]=\"{'active': activeImageObj.selected==true }\" class='image' (click)=\"selectImage(imageObj)\">\r\n        \r\n            <img *ngIf='imageObj.uri!=null' [src]='imageObj.uri' alt=\"Product List\">\r\n           \r\n           </button>\r\n           <span (click)=\"removeThisImage(imageObj.index)\" class=\"clear\"><mat-icon>clear</mat-icon></span> \r\n      \r\n         </div>\r\n        </div>\r\n        \r\n      </div>\r\n      \r\n              </mat-grid-tile>\r\n            \r\n            </mat-grid-list>\r\n      </div>\r\n      </div>\r\n      </div></mat-tab>\r\n      <mat-tab label=\"ADD BULK LIST\">\r\n\r\n          <div>\r\n                  <label class=\"custom-file-upload dropdown\">\r\n                  Excel File<input type=\"file\" name=\"productupload\" accept=\".xlsx, .xls, .csv\" (change)=\"OnChange(productupload)\" #productupload >\r\n                  </label> \r\n                  </div> \r\n                  <button mat-raised-button class=\"uploadButton\" type=\"button\" [disabled]=\"!isSelected\" \r\n                  (click)=\"uploadExcel()\">Upload All</button>\r\n                           \r\n  \r\n      \r\n  \r\n  </mat-tab>\r\n   \r\n  </mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/productUpload.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/productUpload.component.ts ***!
  \******************************************************************************/
/*! exports provided: productUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productUploadComponent", function() { return productUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_imageDatabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/imageDatabase */ "./src/app/modules/adminModule/productUpload/services/imageDatabase.ts");
/* harmony import */ var _model_imageObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/imageObject */ "./src/app/modules/adminModule/productUpload/model/imageObject.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sharedModule/successSnackbar */ "./src/app/modules/sharedModule/successSnackbar.ts");
/* harmony import */ var _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../moduleServices/dataStorage */ "./src/app/modules/adminModule/moduleServices/dataStorage.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_excelUpload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/excelUpload */ "./src/app/modules/adminModule/productUpload/services/excelUpload.ts");









var productUploadComponent = /** @class */ (function () {
    function productUploadComponent(excelUpload, imageDatabase, snackBar, dataStorage, router) {
        this.excelUpload = excelUpload;
        this.imageDatabase = imageDatabase;
        this.snackBar = snackBar;
        this.dataStorage = dataStorage;
        this.router = router;
        this.isSelected = false;
        this.parentTrace = [];
        this.index = 0;
        this.form = new FormData();
        this.imageList = [];
        this.activeImageObj = new _model_imageObject__WEBPACK_IMPORTED_MODULE_3__["ImageObj"]();
        if (localStorage.getItem('id_token') == '-1' && localStorage.getItem('id_token') == null || typeof (dataStorage.storage) == 'undefined') {
            this.router.navigate(['/admin/login']);
        }
        this.parentTrace = dataStorage.storage.stackTrace;
        this.subproductFullData = dataStorage.storage.otherInfo;
        console.log(this.parentTrace);
        if (dataStorage.storage.initialImage) {
            for (var _i = 0, _a = dataStorage.storage.initialImage; _i < _a.length; _i++) {
                var obj = _a[_i];
                this.index++;
                console.log(this.index);
                obj.index = this.index;
                this.imageList.push(obj);
            }
            this.selectImage(this.imageList[0]);
        }
    }
    productUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formdata = new FormData();
        this.formdata.set('idToken', localStorage.getItem('id_token'));
        this.categoryId = this.parentTrace[0];
        this.subcategoryId = this.parentTrace[1];
        this.productId = this.parentTrace[2];
        this.subproductId = this.parentTrace[3];
        this.activeSrc = "";
        this.form.set('idToken', localStorage.getItem('id_token'));
        this.form.set('categoryId', this.categoryId);
        this.form.set('subcategoryId', this.subcategoryId);
        this.form.set('productId', this.productId);
        this.form.set('subproductId', this.subproductId);
        this.imageDatabase.getimageObj().subscribe(function (data) {
            if (data != null) {
                _this.openSnackBar();
                _this.index++;
                data.index = _this.index;
                _this.imageList.push(data);
            }
        });
    };
    productUploadComponent.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(_sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_5__["SuccessComponent"], {
            duration: 1500,
        });
    };
    productUploadComponent.prototype.deleteFromBackend = function (element, index) {
    };
    productUploadComponent.prototype.selectImage = function (imageObj) {
        this.imageList.forEach(function (obj) {
            if (obj != null) {
                obj.selected = false;
            }
        });
        if (imageObj) {
            imageObj.selected = true;
            console.log(imageObj);
            this.activeImageObj.index = imageObj.index;
            this.activeImageObj.uri = imageObj.uri;
        }
    };
    productUploadComponent.prototype.uploadImage = function (form) {
        this.imageDatabase.uploadFile(form);
    };
    productUploadComponent.prototype.removeThisImage = function (index) {
        var i;
        for (i = 0; i < this.imageList.length; i++) {
            var element = this.imageList[i];
            if (element.index == index) {
                this.deleteFromBackend(element, index);
                this.imageList.splice(i, 1);
                if (this.imageList[i + 1] != null) {
                    this.activeImageObj = this.imageList[i + 1];
                }
                else if (this.imageList[i - 1] != null) {
                    this.activeImageObj = this.imageList[i - 1];
                }
                else {
                    this.activeImageObj.uri = null;
                    this.activeImageObj.index = null;
                }
            }
        }
        ;
    };
    productUploadComponent.prototype.imageUpload = function (inputFile) {
        this.form.set('index', (this.index + 1).toString());
        if (inputFile.files.length != 0) {
            this.form.set('myImage', inputFile.files[0]);
            this.uploadImage(this.form);
        }
    };
    productUploadComponent.prototype.OnChange = function (inputParam) {
        if (inputParam.files.length != 0) {
            this.formdata.set(inputParam.getAttribute("name"), inputParam.files[0]);
            console.log(this.formdata.get(inputParam.getAttribute("name")));
            this.isSelected = true;
        }
    };
    productUploadComponent.prototype.uploadExcel = function () {
        var _this = this;
        this.excelUpload.exceluploader(this.formdata).subscribe(function (res) {
            if (res) {
                _this.openSnackBar();
            }
        }, function (err) {
            alert(err);
        });
    };
    productUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'productUpload',
            template: __webpack_require__(/*! ./productUpload.component.html */ "./src/app/modules/adminModule/productUpload/productUpload.component.html"),
            providers: [_services_imageDatabase__WEBPACK_IMPORTED_MODULE_2__["ImageDatabase"]],
            styles: [__webpack_require__(/*! ./productUpload.component.css */ "./src/app/modules/adminModule/productUpload/productUpload.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_excelUpload__WEBPACK_IMPORTED_MODULE_8__["excelUpload"], _services_imageDatabase__WEBPACK_IMPORTED_MODULE_2__["ImageDatabase"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_6__["Data"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], productUploadComponent);
    return productUploadComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/services/excelUpload.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/services/excelUpload.ts ***!
  \***************************************************************************/
/*! exports provided: excelUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "excelUpload", function() { return excelUpload; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _globalmodel_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../globalmodel/url */ "./src/app/globalmodel/url.ts");






var excelUpload = /** @class */ (function () {
    function excelUpload(http) {
        this.http = http;
        this.url = _globalmodel_url__WEBPACK_IMPORTED_MODULE_5__["url"].localExceluri;
    }
    excelUpload.prototype.handleError = function (error) {
        var err = '';
        if (error.error instanceof ErrorEvent) {
            err = 'FrontEnd Error';
        }
        else {
            err = 'BackendError';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
    };
    ;
    excelUpload.prototype.exceluploader = function (form) {
        return this.http.post(this.url, form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ;
    excelUpload = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], excelUpload);
    return excelUpload;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/services/imageCrud.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/services/imageCrud.ts ***!
  \*************************************************************************/
/*! exports provided: ImageCrud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCrud", function() { return ImageCrud; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _globalmodel_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ImageCrud = /** @class */ (function () {
    function ImageCrud(http) {
        this.http = http;
        this.url = _globalmodel_url__WEBPACK_IMPORTED_MODULE_4__["url"].localImageuri;
    }
    ImageCrud.prototype.handleError = function (error) {
        var err = '';
        if (error.error instanceof ErrorEvent) {
            err = 'FrontEnd Error';
        }
        else {
            err = 'BackendError';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
    };
    ;
    ImageCrud.prototype.uploadFile = function (details) {
        return this.http.post(this.url, details).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ;
    ImageCrud = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ImageCrud);
    return ImageCrud;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/services/imageDatabase.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/services/imageDatabase.ts ***!
  \*****************************************************************************/
/*! exports provided: ImageDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDatabase", function() { return ImageDatabase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _imageCrud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageCrud */ "./src/app/modules/adminModule/productUpload/services/imageCrud.ts");




var ImageDatabase = /** @class */ (function () {
    function ImageDatabase(imageCrud) {
        this.imageCrud = imageCrud;
        this.isDone = false;
        this.imageChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    ImageDatabase.prototype.setimageObj = function () {
    };
    ImageDatabase.prototype.getimageObj = function () {
        return this.imageChange;
    };
    ImageDatabase.prototype.uploadFile = function (form) {
        var _this = this;
        this.imageCrud.uploadFile(form).subscribe(function (data) {
            console.log(data);
            _this.imageChange.next(data);
            _this.isDone = true;
        }, function (err) {
            alert('Failure In Upload');
            _this.isDone = false;
        });
        return this.isDone;
    };
    ImageDatabase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_imageCrud__WEBPACK_IMPORTED_MODULE_3__["ImageCrud"]])
    ], ImageDatabase);
    return ImageDatabase;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/subproducts-data/services/uploadform.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/adminModule/subproducts-data/services/uploadform.ts ***!
  \*****************************************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globalmodel_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../globalmodel/headerDetails */ "./src/app/globalmodel/headerDetails.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
        this.url = _globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].localEditProducts;
    }
    UploadService.prototype.handleError = function (error) {
        var err = '';
        if (error.error instanceof ErrorEvent) {
            err = 'FrontEnd Error';
        }
        else {
            err = 'BackendError';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
    };
    ;
    UploadService.prototype.uploadForm = function (details) {
        return this.http.post(this.url, details, _globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_5__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    ;
    UploadService.prototype.register = function (form) {
        return this.http.post(this.url, form, _globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_5__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/adminModule/subproducts-data/subproducts-data.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flexcontainer{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.flexcontainer div{\r\n    margin:0.1rem;\r\n}\r\n.flexcontainer .mat-form-field{\r\n    width:100%;\r\n    \r\n}\r\n#dataEntry{\r\n    overflow:scroll;\r\n}\r\n#description{\r\n    margin-right:1rem;\r\n    width:40%;\r\n}\r\n#benefitsAndUses{\r\n    width:40%;\r\n    margin-right: 1rem;\r\n}\r\n.amount{\r\n    width:23%;\r\n}\r\n.suffix{\r\n    width:20%;\r\n\r\n}\r\n.price{\r\n    width:18%;\r\n}\r\n.discount{\r\n     width:18%;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9zdWJwcm9kdWN0cy1kYXRhL3N1YnByb2R1Y3RzLWRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCwrQkFBK0I7Q0FDbEM7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFFRDtJQUNJLFdBQVc7O0NBRWQ7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7Q0FDYjtBQUVEO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtDQUN0QjtBQUlEO0lBQ0ksVUFBVTtDQUNiO0FBRUQ7SUFDSSxVQUFVOztDQUViO0FBRUQ7SUFDSSxVQUFVO0NBQ2I7QUFDQTtLQUNJLFVBQVU7RUFDYiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5Nb2R1bGUvc3VicHJvZHVjdHMtZGF0YS9zdWJwcm9kdWN0cy1kYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleGNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmZsZXhjb250YWluZXIgZGl2e1xyXG4gICAgbWFyZ2luOjAuMXJlbTtcclxufVxyXG5cclxuLmZsZXhjb250YWluZXIgLm1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIFxyXG59XHJcblxyXG4jZGF0YUVudHJ5e1xyXG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xyXG59XHJcblxyXG4jZGVzY3JpcHRpb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6MXJlbTtcclxuICAgIHdpZHRoOjQwJTtcclxufVxyXG5cclxuI2JlbmVmaXRzQW5kVXNlc3tcclxuICAgIHdpZHRoOjQwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuXHJcblxyXG4uYW1vdW50e1xyXG4gICAgd2lkdGg6MjMlO1xyXG59XHJcblxyXG4uc3VmZml4e1xyXG4gICAgd2lkdGg6MjAlO1xyXG5cclxufVxyXG5cclxuLnByaWNle1xyXG4gICAgd2lkdGg6MTglO1xyXG59XHJcbiAuZGlzY291bnR7XHJcbiAgICAgd2lkdGg6MTglO1xyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/adminModule/subproducts-data/subproducts-data.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id =\"dataEntry\">\r\n\r\n  <form [formGroup]=\"dataForm\" id=\"form\"  (ngSubmit)='onSubmit(dataForm.value)'>\r\n    <div>\r\n    <mat-form-field id =\"description\">\r\n       <mat-label>Description</mat-label>\r\n        <textarea matInput formControlName='description' ></textarea>\r\n      </mat-form-field>\r\n      <mat-form-field id =\"benefitsAndUses\">\r\n        <mat-label>Benefits And Uses</mat-label>\r\n          <textarea matInput formControlName='benefitsAndUses' ></textarea>\r\n        </mat-form-field>\r\n    </div>\r\n        <div formArrayName=\"priceAndAmount\" *ngFor =\"let priceObj of dataForm.controls.priceAndAmount.controls; let i = index;\">\r\n          <div class=\"flexcontainer\" formGroupName ='{{i}}'> \r\n         <div class=\"amount\">\r\n            <mat-form-field >\r\n              <mat-label>Amount</mat-label>\r\n            <input matInput formControlName='amount' >\r\n          \r\n          </mat-form-field>\r\n          </div>\r\n          <div class=\"suffix\">\r\n          <mat-form-field > \r\n            <mat-label>Suffix</mat-label>\r\n              <input matInput formControlName='suffix'>\r\n            \r\n            </mat-form-field>\r\n            </div>\r\n            <div class=\"price\">\r\n            <mat-form-field>\r\n              <mat-label>Price</mat-label>\r\n                <input matInput formControlName='price' >\r\n              \r\n              </mat-form-field>\r\n              </div>\r\n              <div class=\"discount\">\r\n              <mat-form-field>\r\n                <mat-label>Discount</mat-label>\r\n                  <input matInput formControlName='discount' >\r\n                \r\n                </mat-form-field>\r\n                </div>\r\n                <div>\r\n                  <button mat-raised-button type=\"button\" color='accent' (click)='deleteThisIndex(i)'>Delete</button>\r\n                </div>\r\n              </div>\r\n        </div>\r\n\r\n        <button mat-raised-button color='accent' type='button' (click)='addOptions()'>Add</button>\r\n        \r\n        <button mat-raised-button color='primary' [disabled]='dataForm.invalid'>\r\nSubmit\r\n        </button>\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/adminModule/subproducts-data/subproducts-data.component.ts ***!
  \************************************************************************************/
/*! exports provided: SubproductsDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubproductsDataComponent", function() { return SubproductsDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../moduleServices/dataStorage */ "./src/app/modules/adminModule/moduleServices/dataStorage.ts");
/* harmony import */ var _services_uploadform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/uploadform */ "./src/app/modules/adminModule/subproducts-data/services/uploadform.ts");





var SubproductsDataComponent = /** @class */ (function () {
    function SubproductsDataComponent(fb, data, uploadform) {
        this.fb = fb;
        this.data = data;
        this.uploadform = uploadform;
        this.arr = [];
        this.info = data.storage.otherInfo.info;
        console.log(this.info);
        this.initialPriceAndAmount();
    }
    SubproductsDataComponent.prototype.initialPriceAndAmount = function () {
        for (var _i = 0, _a = this.info.priceAndAmount; _i < _a.length; _i++) {
            var obj = _a[_i];
            this.arr.push(this.createPriceAmount(obj));
        }
    };
    SubproductsDataComponent.prototype.deleteThisIndex = function (index) {
        this.arr.splice(index, 1);
        this.createForm();
    };
    SubproductsDataComponent.prototype.addOptions = function () {
        this.arr.push(this.createPriceAmount('-1'));
        console.log(this.arr);
        this.createForm();
    };
    SubproductsDataComponent.prototype.createPriceAmount = function (obj) {
        if (obj != '-1') {
            return this.fb.group({
                amount: [obj.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                suffix: [obj.suffix, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                price: [obj.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                discount: [obj.discount, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
        }
        else {
            return this.fb.group({
                amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                suffix: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                discount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
        }
    };
    SubproductsDataComponent.prototype.createForm = function () {
        this.dataForm = this.fb.group({
            description: [this.info.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            benefitsAndUses: [this.info.benefitsAndUses, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            priceAndAmount: this.fb.array(this.arr)
        });
    };
    SubproductsDataComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    SubproductsDataComponent.prototype.onSubmit = function (form) {
        form['stackTrace'] = this.data.storage.stackTrace;
        console.log(form);
        this.uploadform.uploadForm(form).subscribe(function (data) {
            if (data) {
                alert('success');
            }
        }, function (err) {
            alert(err);
        });
    };
    SubproductsDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subproducts-data',
            template: __webpack_require__(/*! ./subproducts-data.component.html */ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.html"),
            styles: [__webpack_require__(/*! ./subproducts-data.component.css */ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_3__["Data"], _services_uploadform__WEBPACK_IMPORTED_MODULE_4__["UploadService"]])
    ], SubproductsDataComponent);
    return SubproductsDataComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/table/services/pushobject.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/adminModule/table/services/pushobject.ts ***!
  \******************************************************************/
/*! exports provided: PushChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushChanges", function() { return PushChanges; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalmodel_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../globalmodel/headerDetails */ "./src/app/globalmodel/headerDetails.ts");







var PushChanges = /** @class */ (function () {
    function PushChanges(http) {
        this.http = http;
        this.url = _globalmodel_url__WEBPACK_IMPORTED_MODULE_3__["url"].localCategorylist;
    }
    PushChanges.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = 'FrontEnd Error';
        }
        else {
            // server-side error
            errorMessage = 'BackEnd Error';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
    };
    ;
    PushChanges.prototype.pushChanges = function (details) {
        return this.http.post(this.url, { 'categorylist': details }, _globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_6__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ;
    PushChanges = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PushChanges);
    return PushChanges;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/table/table.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/adminModule/table/table.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#heading{\r\n    display: flex;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.headingData{\r\n    width:20%;\r\n    margin:0.5rem auto;\r\n\r\n}\r\n\r\n::ng-deep .mat-toolbar-single-row{\r\n    height:inherit !important;\r\n}\r\n\r\n.example-container {\r\n    overflow-x: scroll;\r\n  }\r\n\r\n.example-container {\r\n    height: 300px;\r\n    overflow: auto;\r\n  }\r\n\r\n.mat-cell, .mat-footer-cell, .mat-header-cell{\r\n    justify-content: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjs7Q0FFdEI7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsbUJBQW1COztDQUV0Qjs7QUFFRDtJQUNJLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLG1CQUFtQjtHQUNwQjs7QUFFRDtJQUNFLGNBQWM7SUFDZCxlQUFlO0dBQ2hCOztBQUdEO0lBQ0Usd0JBQXdCO0dBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRpbmd7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuXHJcbi5oZWFkaW5nRGF0YXtcclxuICAgIHdpZHRoOjIwJTtcclxuICAgIG1hcmdpbjowLjVyZW0gYXV0bztcclxuXHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRvb2xiYXItc2luZ2xlLXJvd3tcclxuICAgIGhlaWdodDppbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBcclxuXHJcbiAgLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsLCAubWF0LWhlYWRlci1jZWxse1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/table/table.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/adminModule/table/table.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar id=\"heading\" color=\"primary\">\r\n  <span class='headingData'>DATA TABLE\r\n    </span>\r\n\r\n    <button  mat-raised-button type=\"button\" color='accent' (click)='pushChanges()'>Push Changes</button>\r\n\r\n  \r\n</mat-toolbar>\r\n\r\n\r\n\r\n<div style=\"width: 100\" class=\"example-container mat-elevation-z8\">\r\n\r\n\r\n  <mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-cell\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <!-- ID Column -->\r\n    <ng-container *ngFor=\"let col of columns\" matColumnDef={{col}}>\r\n  \r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>{{col}}</mat-header-cell>\r\n      <mat-cell  *matCellDef=\"let row\" ><button mat-raised-button (click)=\"redirectToImageUpload(row,row['imageUrls'])\" [color]=\"primary\" *ngIf=\"col=='Other Data'\">Manage Data</button> <p *ngIf=\"col!='Other Data'\">{{row[col]}}</p></mat-cell>\r\n    \r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n        <button mat-icon-button color=\"primary\" (click)=\"addNew(dataSource)\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n        </button>\r\n      </mat-header-cell>\r\n\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n        <button mat-icon-button color=\"accent\" (click)=\"startEdit(row,i,dataSource)\">\r\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button color=\"accent\" (click)=\"deleteItem(row,i,dataSource)\">\r\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns;sticky: true\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n  <div class=\"no-results\" [style.display]=\"dataSource.length == 0 ? '' : 'none'\">\r\n    No results\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/modules/adminModule/table/table.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/adminModule/table/table.component.ts ***!
  \**************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Dialogs/Add/add-dialog.component */ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.ts");
/* harmony import */ var _Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Dialogs/Edit/edit-dialog.component */ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.ts");
/* harmony import */ var _Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Dialogs/Delete/delete-dialog.component */ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.ts");
/* harmony import */ var _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../moduleServices/dataService */ "./src/app/modules/adminModule/moduleServices/dataService.ts");
/* harmony import */ var src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/globalmodel/listitem/category */ "./src/app/globalmodel/listitem/category.ts");
/* harmony import */ var _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../moduleServices/dialogDataService */ "./src/app/modules/adminModule/moduleServices/dialogDataService.ts");
/* harmony import */ var _moduleServices_categoryDatabase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../moduleServices/categoryDatabase */ "./src/app/modules/adminModule/moduleServices/categoryDatabase.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../moduleServices/dataStorage */ "./src/app/modules/adminModule/moduleServices/dataStorage.ts");
/* harmony import */ var _services_pushobject__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/pushobject */ "./src/app/modules/adminModule/table/services/pushobject.ts");
/* harmony import */ var _sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../sharedModule/successSnackbar */ "./src/app/modules/sharedModule/successSnackbar.ts");














var TableComponent = /** @class */ (function () {
    function TableComponent(pushobject, dataStorage, router, snackBar, dialog, dataObj, dialogData, categoryDatabase) {
        this.pushobject = pushobject;
        this.dataStorage = dataStorage;
        this.router = router;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.dataObj = dataObj;
        this.dialogData = dialogData;
        this.categoryDatabase = categoryDatabase;
        this.columns = [];
        this.stackArray = [];
        this.isNull = false;
        this.isCompleted = false;
        this.displayedColumns = [];
        this.checkArray = [];
        this.noMore = false;
        this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    }
    TableComponent.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(_sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_13__["SuccessComponent"], {
            duration: 1500,
        });
    };
    TableComponent.prototype.pushChanges = function () {
        var _this = this;
        console.log(this.mainDataSource);
        this.pushobject.pushChanges(this.mainDataSource).subscribe(function (data) {
            _this.openSnackBar();
        }, function (err) {
            alert('Error Ocurred');
        });
    };
    TableComponent.prototype.deletethisObject = function (mainarray, object, index) {
        mainarray.splice(index, 1);
    };
    TableComponent.prototype.editDataObject = function (mainarray, result, index) {
        mainarray.splice(index, 1, result);
    };
    TableComponent.prototype.pushObject = function (array, obj) {
        array.push(obj);
    };
    TableComponent.prototype.trimPushObject = function (pushObj) {
        console.log(this.isNull);
        if (this.isNull == false) {
            console.log('i m in', pushObj);
            for (var key in pushObj) {
                if (pushObj[key] != null) {
                    console.log(typeof (pushObj[key]));
                    if (typeof (pushObj[key]) != 'object') {
                        console.log(pushObj);
                        this.newPushObject = pushObj;
                        this.isNull = true;
                        console.log(this.newPushObject);
                        return;
                    }
                }
                if (pushObj[key] != null && typeof (pushObj[key]) == 'object') {
                    this.trimPushObject(pushObj[key][0]);
                }
            }
        }
        else {
            this.isNull = false;
            return;
        }
    };
    TableComponent.prototype.recursiveFinder = function (mainarray, checkData, functionCall, pushData, index) {
        var _this = this;
        if (!this.isCompleted) {
            mainarray.forEach(function (mainobj) {
                if (Object.keys(mainobj)[0] == Object.keys(checkData[0])[0]) {
                    if (Object.values(mainobj)[0] == Object.values(checkData[0])[0]) {
                        console.log(functionCall);
                        functionCall(mainarray, pushData, index);
                        _this.isCompleted = true;
                    }
                }
                for (var mainkey in mainobj) {
                    if (typeof (mainobj[mainkey]) == 'object' && Array.isArray(mainobj[mainkey])) {
                        _this.recursiveFinder(mainobj[mainkey], checkData, functionCall, pushData, index);
                    }
                }
            });
        }
        else {
            return;
        }
    };
    TableComponent.prototype.setDataSource = function (nodeCheck, functionCall, data, index) {
        this.isCompleted = false;
        this.recursiveFinder(this.mainDataSource, nodeCheck, functionCall, data, index);
        this.categoryDatabase.dataChange.next(this.mainDataSource);
    };
    TableComponent.prototype.iterativeDialogMaker = function (data) {
        var _this = this;
        if (Object.keys(data)) {
            if (Object.keys(data)[0] != 'uri') {
                var dialogRef = this.dialog.open(_Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddDialogComponent"], {
                    height: '300px',
                    width: '400px',
                    data: data,
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    console.log(result);
                    if (result != null) {
                        var newData = null;
                        newData = result[0];
                        console.log(newData);
                        if (newData != null && Array.isArray(newData)) {
                            _this.iterativeDialogMaker(newData[0]);
                        }
                    }
                });
            }
        }
    };
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataObj.dataSource.subscribe(function (data) {
            data.forEach(function (element) {
            });
            _this.dataSource = data;
            if (_this.mainDataSource == null || _this.mainDataSource.length == 0) {
                _this.mainDataSource = _this.dataSource.slice();
            }
            _this.makeColoumns();
        });
        this.dialogData.dialogdataSource.subscribe(function (data) {
            switch (Object.keys(data)[0]) {
                case 'category':
                    if (_this.newPushObject != null) {
                    }
                    else {
                        _this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
                    }
                    for (var key in data) {
                        _this.newPushObject.categoryId = data[key].addarray[0];
                        _this.newPushObject.categoryName = data[key].addarray[1];
                    }
                    break;
                case 'subcategory':
                    if (_this.newPushObject != null && _this.newPushObject.subcategory != null) {
                    }
                    else {
                        _this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
                    }
                    for (var key in data) {
                        _this.newPushObject.subcategory[0].subcategoryId = data[key].addarray[0];
                        _this.newPushObject.subcategory[0].subcategoryName = data[key].addarray[1];
                    }
                    break;
                case 'products':
                    if (_this.newPushObject != null && _this.newPushObject.subcategory != null && _this.newPushObject.subcategory[0].products != null) {
                    }
                    else {
                        _this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
                    }
                    for (var key in data) {
                        _this.newPushObject.subcategory[0].products[0].productId = data[key].addarray[0];
                        _this.newPushObject.subcategory[0].products[0].productName = data[key].addarray[1];
                    }
                    // code block
                    break;
                case 'subProducts':
                    if (_this.newPushObject.subcategory != null && _this.newPushObject.subcategory[0].products != null && _this.newPushObject.subcategory[0].products[0].subProducts != null) {
                    }
                    else {
                        _this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
                    }
                    for (var key in data) {
                        _this.newPushObject.subcategory[0].products[0].subProducts[0].subproductId = data[key].addarray[0];
                        _this.newPushObject.subcategory[0].products[0].subProducts[0].subproductName = data[key].addarray[1];
                    }
                    console.log(_this.newPushObject);
                    _this.isNull = false;
                    _this.trimPushObject(_this.newPushObject);
                    _this.setDataSource(_this.parentCheckNode, _this.pushObject, _this.newPushObject, 0);
                    _this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
                    break;
                default:
                // code block
            }
        });
    };
    TableComponent.prototype.objCheck = function (value) {
        if (typeof (value) == "object") {
            return false;
        }
        else {
            return true;
        }
    };
    TableComponent.prototype.addNew = function (data) {
        this.parentCheckNode = data;
        this.iterativeDialogMaker(data[0]);
    };
    TableComponent.prototype.startEdit = function (row, index, dataSource) {
        var _this = this;
        var dialogRef = this.dialog.open(_Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EditDialogComponent"], {
            height: '300px',
            width: '400px',
            data: row,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != null) {
                _this.setDataSource(dataSource, _this.editDataObject, result, index);
            }
        });
    };
    TableComponent.prototype.deleteItem = function (row, index, dataSource) {
        var _this = this;
        var dialogRef = this.dialog.open(_Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DeleteDialogComponent"], {
            height: '300px',
            width: '400px',
            data: row,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != null) {
                console.log(index);
                var clone = _this.dataSource.slice();
                clone.splice(index, 1);
                _this.dataSource = clone;
                _this.setDataSource(dataSource, _this.deletethisObject, result, index);
            }
        });
    };
    TableComponent.prototype.makeColoumns = function () {
        this.columns.splice(0, this.columns.length); //used to draw columns of table
        var object = this.dataSource[0];
        console.log(object);
        for (var key in object) {
            if (this.objCheck(object[key])) {
                console.log(key);
                this.columns.push(key);
            }
            if (key == "imageUrls") {
                this.columns.push("Other Data");
            }
        }
        this.displayedColumns = this.columns.concat(['actions']);
    };
    TableComponent.prototype.parentStackTrace = function (obj) {
        var noMore = false;
        var categoryid;
        var subcategoryid;
        var productid;
        for (var _i = 0, _a = this.mainDataSource; _i < _a.length; _i++) {
            var category_1 = _a[_i];
            if (!noMore) {
                categoryid = category_1.categoryId;
                for (var _b = 0, _c = category_1.subcategory; _b < _c.length; _b++) {
                    var subcategory = _c[_b];
                    if (!noMore) {
                        subcategoryid = subcategory.subcategoryId;
                        for (var _d = 0, _e = subcategory.products; _d < _e.length; _d++) {
                            var products = _e[_d];
                            if (!noMore) {
                                productid = products.productId;
                                for (var _f = 0, _g = products.subProducts; _f < _g.length; _f++) {
                                    var subProduct = _g[_f];
                                    if (!noMore) {
                                        if (subProduct.subproductId == obj.subproductId) {
                                            this.stackArray.push(categoryid, subcategoryid, productid, subProduct.subproductId);
                                            noMore = true;
                                            return;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    TableComponent.prototype.redirectToImageUpload = function (data, initialData) {
        this.stackArray = [];
        console.log(initialData);
        this.parentStackTrace(data);
        this.dataStorage.storage = {
            'stackTrace': this.stackArray,
            'initialImage': initialData,
            'otherInfo': data
        };
        this.dataSource = null;
        this.router.navigate(["admin/productUpload"]);
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tablehere',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/modules/adminModule/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/modules/adminModule/table/table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pushobject__WEBPACK_IMPORTED_MODULE_12__["PushChanges"], _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_11__["Data"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_8__["DialogDataService"], _moduleServices_categoryDatabase__WEBPACK_IMPORTED_MODULE_9__["CategoryDatabase"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-adminModule-admin-module.js.map