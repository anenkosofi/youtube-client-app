import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() isFormSubmitted = new EventEmitter<boolean>();
  @Output() sortCondition = new EventEmitter<string>();
  @Output() query = new EventEmitter<string>();
  @Output() currentDirection = new EventEmitter<'asc' | 'desc'>();
  areSettingsActive = false;

  onFormSubmitted(event: boolean) {
    this.isFormSubmitted.emit(event);
  }

  onSettingsActive(event: boolean) {
    this.areSettingsActive = event;
  }

  onConditionSet(event: string) {
    this.sortCondition.emit(event);
  }

  onQuerySet(event: string) {
    this.query.emit(event);
  }

  onCurrentDirectionSet(event: 'asc' | 'desc') {
    this.currentDirection.emit(event);
  }
}
