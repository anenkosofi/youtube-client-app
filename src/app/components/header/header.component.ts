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
}
