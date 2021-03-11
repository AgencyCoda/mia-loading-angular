import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaLoadingComponent } from './mia-loading.component';

describe('MiaLoadingComponent', () => {
  let component: MiaLoadingComponent;
  let fixture: ComponentFixture<MiaLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
