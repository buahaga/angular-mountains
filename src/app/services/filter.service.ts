import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filter } from '../models/filter';

@Injectable()
export class FilterService {

  constructor() { }

  filter: BehaviorSubject<Filter> = new BehaviorSubject<Filter | any>({});

  setFilter(filter) {
    this.filter.next(filter);
  }

}
