import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() areSettingsActive!: boolean;
  @Output() condition = new EventEmitter<string>();
  @Output() word = new EventEmitter<string>();
  query = '';

  onSetSortCondition(name: string) {
    this.condition.emit(name);
    this.word.emit(this.query);
  }

  onQuerySet(event: string) {
    this.query = event;
  }
}
