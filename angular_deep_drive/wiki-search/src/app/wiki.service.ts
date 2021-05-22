import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WikiModel } from './wiki.model';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WikiService {
  private searchData = new Subject<WikiModel>();
  public currentData$ = this.searchData.asObservable();
  constructor(private http: HttpClient) {}
  getSearch(seachQuery: string) {
    this.http
      .get(
        `https://en.wikipedia.org/w/api.php?action=query&limit=10&format=json&list=search&utf8=1&srsearch=${seachQuery}&origin=*`
      )
      .subscribe((res: any) => this.searchData.next(res.query.search));
  }
}
