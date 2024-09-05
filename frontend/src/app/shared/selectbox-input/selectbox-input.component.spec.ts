import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectboxInputComponent } from './selectbox-input.component';

describe('SelectboxInputComponent', () => {
  let component: SelectboxInputComponent;
  let fixture: ComponentFixture<SelectboxInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectboxInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectboxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
