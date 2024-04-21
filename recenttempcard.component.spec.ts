import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecenttempcardComponent } from './recenttempcard.component';

describe('RecenttempcardComponent', () => {
  let component: RecenttempcardComponent;
  let fixture: ComponentFixture<RecenttempcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecenttempcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecenttempcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
