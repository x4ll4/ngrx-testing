import { Action } from '@ngrx/store';
import {User} from '../../models/user';

export enum AuthActionTypes {
  LoginAction = '[Login] Action',
  LogoutAction = '[Logout] Action',
}

export class Login implements Action {
  readonly type = AuthActionTypes.LoginAction;
  constructor(public payload: User) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LogoutAction;
}

export type AuthActions = Login | Logout;
