import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class ApiService {
  private baseURL = 'https://gateway.marvel.com:443/v1/public/';
  private privateKey = 'e8b65f84acf29444acbc923a006b9c4963bfb1f6';
  private publicKey = '59a89e925adfc0807da3394a4528b889';

  constructor(private http: Http) {}

  fetchCharacters() {
    const ts = Date.now();
    const stringToHash = ts + this.privateKey + this.publicKey;
    const hash = Md5.hashStr(stringToHash);
    return this.http.get(`${this.baseURL}characters?limit=50&ts=${ts}&apikey=${this.publicKey}&hash=${hash}`)
      .map((res: Response) => res.json().data.results)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
