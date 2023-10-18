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
  @Output() currentDirection = new EventEmitter<'asc' | 'desc'>();
  query = '';
  direction: 'asc' | 'desc' = 'asc';

  onSetSortCondition(name: string) {
    this.condition.emit(name);
    this.word.emit(this.query);
    this.direction = this.direction === 'asc' ? 'desc' : 'asc';
    this.currentDirection.emit(this.direction);
  }

  onQuerySet(event: string) {
    this.query = event;
  }
}
