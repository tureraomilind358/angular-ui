import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockAcComponent } from './unlock-ac.component';

describe('UnlockAcComponent', () => {
  let component: UnlockAcComponent;
  let fixture: ComponentFixture<UnlockAcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnlockAcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
