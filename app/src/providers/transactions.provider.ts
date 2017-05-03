import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { GlobalConstants } from '../app/app.constants';
import { Cookie } from 'ng2-cookies/ng2-cookies';
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
      this.http.get(GlobalConstants.urlServer + '/transactions?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  getTransactionById(transactionId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/transaction/' + transactionId + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  getTransactionByUserAndAnnounce(userId, announceId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/transaction/user/'+ userId +'/announce/'+ announceId + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  getTransactionBySeller(sellerId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/transactions/seller/' + sellerId + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  getTransactionByBuyer(buyerId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/transactions/buyer/' + buyerId + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  getTransactionsByAnnounce(announceId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/transactions/announce/' + announceId + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  getAcceptedTransaction(announceId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/transaction/announce/' + announceId + '/accepted?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  postTransaction(transaction) {
    return new Promise(resolve => {
      this.http.post(GlobalConstants.urlServer + '/transaction?token='+Cookie.get('ahCookie'), transaction)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  acceptTransaction(transactionId) {
    return new Promise(resolve => {
      this.http.put(GlobalConstants.urlServer + '/transaction/' + transactionId + '/accept?token='+Cookie.get('ahCookie'), { accepterId : 1 })
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  endTransaction(transactionId,comment) {
    return new Promise(resolve => {
      this.http.put(GlobalConstants.urlServer + '/transaction/' + transactionId + '/end' + '?token='+Cookie.get('ahCookie'), { accepterId : 1, comment : comment })
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  closeTransaction(transactionId,comment) {
    return new Promise(resolve => {
      this.http.put(GlobalConstants.urlServer + '/transaction/' + transactionId + '/close' + '?token='+Cookie.get('ahCookie'), { accepterId : 1, comment : comment })
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  cancelTransaction(transactionId) {
    return new Promise(resolve => {
      this.http.put(GlobalConstants.urlServer + '/transaction/' + transactionId + '/cancel' + '?token='+Cookie.get('ahCookie'), { accepterId : 1 })
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  deleteTransaction(transactionId) {
    return new Promise(resolve => {
      this.http.delete(GlobalConstants.urlServer + '/transaction/' + transactionId + '?token='+Cookie.get('ahCookie'))
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

}

