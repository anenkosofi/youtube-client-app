import { Pipe, PipeTransform } from '@angular/core';

import { YoutubeClient } from '../interfaces/youtube-client';

@Pipe({
  name: 'sortYoutubeList',
})
export class SortYoutubeListPipe implements PipeTransform {
  transform(
    youtubeList: YoutubeClient[],
    name: string,
    query: string,
    direction: 'asc' | 'desc'
  ): YoutubeClient[] {
    switch (name) {
      case 'date':
        return youtubeList.sort((a, b) => {
          const prev = Date.parse(a.snippet.publishedAt);
          const next = Date.parse(b.snippet.publishedAt);

          if (direction === 'asc') {
            return prev - next;
          } else {
            return next - prev;
          }
        });

      case 'views':
        return youtubeList.sort((a, b) => {
          const prev = Number(a.statistics.viewCount);
          const next = Number(b.statistics.viewCount);

          if (direction === 'asc') {
            return prev - next;
          } else {
            return next - prev;
          }
        });

      case 'word':
        return youtubeList.filter(item =>
          item.snippet.channelTitle.toLowerCase().includes(query.trim().toLowerCase())
        );

      default:
        return youtubeList;
    }
  }
}
