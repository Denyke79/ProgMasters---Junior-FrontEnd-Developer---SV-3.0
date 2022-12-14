import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-form-component',
  templateUrl: './customer-form-component.component.html',
  styleUrls: ['./customer-form-component.component.scss']
})
export class CustomerFormComponentComponent implements OnInit {

  newCustomerForm: FormGroup = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      newsletter: new FormControl(false),
      isVIP: new FormControl(false)
    }
  )

  get firstName() { return this.newCustomerForm.get('firstName') };
  get lastName() { return this.newCustomerForm.get('lastName') };
  get email() { return this.newCustomerForm.get('email') };
  get gender() { return this.newCustomerForm.get('gender') };
  get newsletter() { return this.newCustomerForm.get('newsletter') };
  get isVIP() { return this.newCustomerForm.get('isVIP') };

  @ViewChild('submitBtn') btn?: ElementRef<HTMLButtonElement>;

  genderOptions: { key: string, value: string }[] = [
    { key: 'male', value: 'Male' },
    { key: 'female', value: 'Female' },
    { key: 'other', value: 'Other' }
  ];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  saveCustomer() {

    if (this.isVIP?.value === true) {
      const newVIPCustomer: Customer = this.newCustomerForm.value;

      this.customerService.createCustomer(newVIPCustomer);
    } else {
      const newCustomer: Customer = this.newCustomerForm.value;

      this.customerService.createCustomer(newCustomer);
    };

    if (this.newCustomerForm.value) {
      this.newCustomerForm.reset();
    }

  }

}
