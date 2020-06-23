﻿import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '@environments/environment';
import {User, Group} from '@app/_models';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {

  // TODO: is this used anywhere????
  // users: User[];

  constructor(private http: HttpClient) {
  }

  public getAllUsers() : Observable<User[]> {
    return this.http.get<User[]>(`${environment.usersUrl}/in-my-groups`);
  }

  public getAllGroups() : Observable<Group[]> {
    return this.http.get<Group[]>(`${environment.apiUrl}/groups`);
  }
}
