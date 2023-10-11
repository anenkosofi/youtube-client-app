import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-by-word',
  templateUrl: './filter-by-word.component.html',
  styleUrls: ['./filter-by-word.component.scss'],
})
export class FilterByWordComponent {
  @Output() word = new EventEmitter<string>();
  query = '';

  getQuery() {
    this.word.emit(this.query);
  }
}
