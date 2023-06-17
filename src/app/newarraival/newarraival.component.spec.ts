import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewarraivalComponent } from './newarraival.component';

describe('NewarraivalComponent', () => {
  let component: NewarraivalComponent;
  let fixture: ComponentFixture<NewarraivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewarraivalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewarraivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
