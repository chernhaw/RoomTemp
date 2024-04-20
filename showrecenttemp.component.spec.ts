import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowrecenttempComponent } from './showrecenttemp.component';

describe('ShowrecenttempComponent', () => {
  let component: ShowrecenttempComponent;
  let fixture: ComponentFixture<ShowrecenttempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowrecenttempComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowrecenttempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
