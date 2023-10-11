import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-youtube-client',
  templateUrl: './youtube-client.component.html',
  styleUrls: ['./youtube-client.component.scss'],
})
export class YoutubeClientComponent {
  @Input() isFormSubmitted!: boolean;
  @Input() condition!: string;
  @Input() query!: string;
}
