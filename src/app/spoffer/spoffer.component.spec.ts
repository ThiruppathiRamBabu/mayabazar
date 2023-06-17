import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpofferComponent } from './spoffer.component';

describe('SpofferComponent', () => {
  let component: SpofferComponent;
  let fixture: ComponentFixture<SpofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpofferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
