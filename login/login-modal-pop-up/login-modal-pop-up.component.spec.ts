import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModalPopUpComponent } from './login-modal-pop-up.component';

describe('LoginModalPopUpComponent', () => {
  let component: LoginModalPopUpComponent;
  let fixture: ComponentFixture<LoginModalPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginModalPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginModalPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
