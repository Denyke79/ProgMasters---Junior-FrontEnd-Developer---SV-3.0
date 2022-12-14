import { Customer } from './../../models/customer';
import { Component, OnInit } from '@angular/core';
import { Observable, merge, zip, of, from, forkJoin } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';
import { map, mergeAll, mergeMap } from 'rxjs/operators'

@Component({
  selector: 'app-customer-list-component',
  templateUrl: './customer-list-component.component.html',
  styleUrls: ['./customer-list-component.component.scss']
})
export class CustomerListComponentComponent implements OnInit {

  customers$?: Observable<Customer[]>;
  vipCustomers$?: Observable<Customer[]>;
  allCustomers$?: Observable<Customer[]>

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customers$ = this.customerService.getCustomers();
    this.vipCustomers$ = this.customerService.getVipCustomers();

    this.allCustomers$ = merge(this.customers$, this.vipCustomers$);

    // this.allCustomers$ = forkJoin([this.customers$, this.vipCustomers$]);

    // this.allCustomers$ = merge(this.customerService.getCustomers(), this.customerService.getVipCustomers())


  }

}
