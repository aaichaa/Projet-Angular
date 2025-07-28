import { ComponentFixture, TestBed } from '@angular/core/testing';

import { password_reset } from './password_reset';

describe('password_reset', () => {
  let component: password_reset;
  let fixture: ComponentFixture<password_reset>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [password_reset]
    })
    .compileComponents();

    fixture = TestBed.createComponent(password_reset);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
