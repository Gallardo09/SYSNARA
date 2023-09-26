import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  public isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  setLoggedIn(value: boolean) {
    this.isLoggedIn$.next(value);
  }
}
