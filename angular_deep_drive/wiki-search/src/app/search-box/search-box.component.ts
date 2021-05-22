import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit {
  constructor(private wikisearvice: WikiService) {}

  ngOnInit(): void {}
  doSearch(searchQuery: any) {
    if (searchQuery.value != '') {
      this.wikisearvice.getSearch(searchQuery.value);
    }
    return;
  }
}
