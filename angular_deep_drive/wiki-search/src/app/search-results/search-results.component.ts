import { Component, OnDestroy, OnInit } from '@angular/core';
import { WikiModel } from '../wiki.model';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  constructor(private wikiservice: WikiService) {}
  serachResults: WikiModel;
  ngOnInit(): void {
    this.wikiservice.currentData$.subscribe((m) => (this.serachResults = m));
  }
  ngOnDestroy() {
    // this.wikiservice.currentData$.unsubscribe();
  }
}
