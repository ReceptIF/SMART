import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { GlobalConstants } from '../app/app.constants';
import 'rxjs/add/operator/map';

@Injectable()
export class TransactionProvider {
  headers : Headers;
  options : RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getTransactions() {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/transactions')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  getTransactionById(transactionId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/transaction/' + transactionId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  getTransactionBySeller(sellerId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/transactions/seller/' + sellerId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  getTransactionByBuyer(buyerId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/transactions/buyer/' + buyerId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  getTransactionsByAnnounce(announceId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/transactions/announce/' + announceId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  getAcceptedTransaction(announceId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/transaction/announce/' + announceId + '/accepted')
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  postTransaction(transaction) {
    return new Promise(resolve => {
      this.http.post(GlobalConstants.urlServer + '/transaction', transaction)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  acceptTransaction(transactionId) {
    return new Promise(resolve => {
      this.http.put(GlobalConstants.urlServer + '/transaction/' + transactionId + '/accept', { accepterId : 1 })
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  endTransaction(transactionId,comment) {
    return new Promise(resolve => {
      this.http.put(GlobalConstants.urlServer + '/transaction/' + transactionId + '/end', { accepterId : 1, comment : comment })
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  closeTransaction(transactionId,comment) {
    return new Promise(resolve => {
      this.http.put(GlobalConstants.urlServer + '/transaction/' + transactionId + '/close', { accepterId : 1, comment : comment })
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  cancelTransaction(transactionId) {
    return new Promise(resolve => {
      this.http.put(GlobalConstants.urlServer + '/transaction/' + transactionId + '/cancel', { accepterId : 1 })
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  deleteTransaction(transactionId) {
    return new Promise(resolve => {
      this.http.delete(GlobalConstants.urlServer + '/transaction/' + transactionId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

}

