import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  @Output() areSettingsActive = new EventEmitter<boolean>();
  settingsStatus = false;

  onOpenSettings() {
    this.settingsStatus = !this.settingsStatus;
    this.areSettingsActive.emit(this.settingsStatus);
  }
}
