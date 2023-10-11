import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeClientComponent } from './youtube-client.component';

describe('YoutubeClientComponent', () => {
  let component: YoutubeClientComponent;
  let fixture: ComponentFixture<YoutubeClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubeClientComponent]
    });
    fixture = TestBed.createComponent(YoutubeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
