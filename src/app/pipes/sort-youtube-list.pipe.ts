import { Pipe, PipeTransform } from '@angular/core';

import { YoutubeClient } from '../interfaces/youtube-client';

@Pipe({
  name: 'sortYoutubeList',
})
export class SortYoutubeListPipe implements PipeTransform {
  transform(youtubeList: YoutubeClient[], name: string, query: string): YoutubeClient[] {
    switch (name) {
      case 'date':
        return youtubeList.sort(
          (a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt)
        );

      case 'views':
        return youtubeList.sort(
          (a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
        );

      case 'word':
        return youtubeList.filter(item =>
          item.snippet.description.toLowerCase().includes(query.trim().toLowerCase())
        );

      default:
        return youtubeList;
    }
  }
}
