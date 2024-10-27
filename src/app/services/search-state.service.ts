// search-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchStateService {
  private searchResultsSubject = new BehaviorSubject<any[]>([]);
  searchResults$ = this.searchResultsSubject.asObservable();

  private searchPerformedSubject = new BehaviorSubject<boolean>(false);
  searchPerformed$ = this.searchPerformedSubject.asObservable();

  updateSearchResults(results: any[]) {
    this.searchResultsSubject.next(results);
    this.searchPerformedSubject.next(true);
  }

  resetSearch() {
    this.searchResultsSubject.next([]);
    this.searchPerformedSubject.next(false);
  }
}
