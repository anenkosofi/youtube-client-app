import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() isFormSubmitted = new EventEmitter<boolean>();

  onSubmitHandler() {
    const isFormSubmitted = true;
    this.isFormSubmitted.emit(isFormSubmitted);
  }
}
