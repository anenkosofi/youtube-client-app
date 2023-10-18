import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isFormSubmitted = false;
  condition = '';
  query = '';
  direction: 'asc' | 'desc' = 'asc';

  onFormSubmitted(event: boolean) {
    this.isFormSubmitted = event;
  }

  onConditionSet(event: string) {
    this.condition = event;
  }

  onQuerySet(event: string) {
    this.query = event;
  }

  onCurrentDirectionSet(event: 'asc' | 'desc') {
    this.direction = event;
  }
}
