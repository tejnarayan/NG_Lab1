"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CustomerModel_1 = require("./CustomerModel");
//import { FormsModule } from '@angular/forms';
var CustomerComponent = (function () {
    function CustomerComponent() {
        this.currentCustomer = new CustomerModel_1.Customer();
        this.customers = new Array();
    }
    CustomerComponent.prototype.Select = function (selectedCust) {
        this.currentCustomer = Object.assign({}, selectedCust);
    };
    CustomerComponent.prototype.Add = function () {
        this.customers.push(this.currentCustomer);
        this.currentCustomer = new CustomerModel_1.Customer();
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    core_1.Component({
        selector: 'customer-component',
        templateUrl: './customer.component.html',
    })
], CustomerComponent);
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=customer.component.js.map