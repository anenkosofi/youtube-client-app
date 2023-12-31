import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeItemComponent } from './youtube-item.component';

describe('YoutubeItemComponent', () => {
  let component: YoutubeItemComponent;
  let fixture: ComponentFixture<YoutubeItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubeItemComponent]
    });
    fixture = TestBed.createComponent(YoutubeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
