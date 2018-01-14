import { Component } from '@angular/core';

import { Customer } from './CustomerModel';
//import { FormsModule } from '@angular/forms';

@Component({
    selector: 'customer-component',
    templateUrl: './customer.component.html',

})

export class CustomerComponent {

    currentCustomer: Customer = new Customer();

    customers: Array<Customer> = new Array<Customer>();

    Select(selectedCust: Customer) {

        this.currentCustomer = Object.assign({}, selectedCust); 
    }
    Add() {

        this.customers.push(this.currentCustomer);
        this.currentCustomer = new Customer();
    }

}