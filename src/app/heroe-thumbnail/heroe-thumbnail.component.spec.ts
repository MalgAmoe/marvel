import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeThumbnailComponent } from './heroe-thumbnail.component';

describe('HeroeThumbnailComponent', () => {
  let component: HeroeThumbnailComponent;
  let fixture: ComponentFixture<HeroeThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroeThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
