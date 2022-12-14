import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, doc, DocumentData, Firestore, getDocs, writeBatch } from "@angular/fire/firestore";
import data from './data.json';
import { Customer } from "../models/customer";
import { from, Observable } from 'rxjs';
import { orderBy, query } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private static readonly REGULAR_CUSTOMER_COLLECTION: string = 'customer';
  private static readonly VIP_CUSTOMER_COLLECTION: string = 'vipCustomer';

  private readonly customersCollectionRef = collection(this.firestore, 'customer');
  private readonly customersVIPCollectionRef = collection(this.firestore, 'vipCustomer');

  constructor(private firestore: Firestore) {
  }

  public async initializeDb(): Promise<void> {
    await this.dropCollection(CustomerService.REGULAR_CUSTOMER_COLLECTION);
    await this.dropCollection(CustomerService.VIP_CUSTOMER_COLLECTION);
    await this.uploadCollection(CustomerService.REGULAR_CUSTOMER_COLLECTION, data.customers);
    await this.uploadCollection(CustomerService.VIP_CUSTOMER_COLLECTION, data.vipCustomers);
  }

  private async dropCollection(collectionName: string): Promise<void> {
    console.log(`Dropping collection ${collectionName}`);

    const c = collection(this.firestore, collectionName);
    const snapshot = await getDocs(c);

    const batch = writeBatch(this.firestore);
    for (let doc of snapshot.docs) {
      batch.delete(doc.ref);
    }
    await batch.commit();

    console.log(`Done!`);
  }

  private async uploadCollection(collectionName: string, data: { [key: string]: Customer }): Promise<void> {
    console.log(`Uploading collection ${collectionName}`);

    const batch = writeBatch(this.firestore);
    for (let id in data) {
      delete data[id].id; // I'm way too lazy to do this by hand in the JSON :(
      batch.set(doc(this.firestore, collectionName, id), data[id]);
    }
    await batch.commit();
    console.log(`Done!`);
  }

  // TODO: add getCustomers(), getVipCustomers(), createCustomer() methods
  createCustomer(customer: Customer): Observable<DocumentData> {
    if (customer.isVIP === true) {
      return from(addDoc(this.customersVIPCollectionRef, customer))
    } else {
      return from(addDoc(this.customersCollectionRef, customer))
    }
  }

  getCustomers(): Observable<Customer[]> {
    return collectionData(this.customersCollectionRef, { idField: 'id' }) as Observable<Customer[]>
  }

  getVipCustomers(): Observable<Customer[]> {
    return collectionData(this.customersVIPCollectionRef, { idField: 'id' }) as Observable<Customer[]>
  }

}
