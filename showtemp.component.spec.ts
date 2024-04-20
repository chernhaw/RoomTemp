import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtempComponent } from './showtemp.component';

describe('ShowtempComponent', () => {
  let component: ShowtempComponent;
  let fixture: ComponentFixture<ShowtempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowtempComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
