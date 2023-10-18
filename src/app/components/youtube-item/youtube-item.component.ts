import { Component, Input } from '@angular/core';
import { YoutubeClient } from 'src/app/interfaces/youtube-client';

@Component({
  selector: 'app-youtube-item',
  templateUrl: './youtube-item.component.html',
  styleUrls: ['./youtube-item.component.scss'],
})
export class YoutubeItemComponent {
  @Input() youtubeItem!: YoutubeClient;

  getColorStatusByDate(date: string) {
    const today = new Date();
    const youtubeTime = new Date(date);

    let className = '';

    let years = today.getFullYear() - youtubeTime.getFullYear();
    let months = today.getMonth() - youtubeTime.getMonth();
    let days = today.getDate() - youtubeTime.getDate();

    if (days < 0) {
      months--;
      const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      days += lastDayOfLastMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years || (years && months > 6)) {
      className = 'youtube__status_red';
    } else if (!years && months > 1 && months <= 6) {
      className = 'youtube__status_yellow';
    } else if (!years && months <= 1 && days > 7) {
      className = 'youtube__status_green';
    } else if (!years && months < 1 && days <= 7) {
      className = 'youtube__status_blue';
    }
    return className;
  }
}
