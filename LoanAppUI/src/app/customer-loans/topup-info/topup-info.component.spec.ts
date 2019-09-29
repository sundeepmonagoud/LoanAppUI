import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupInfoComponent } from './topup-info.component';

describe('TopupInfoComponent', () => {
  let component: TopupInfoComponent;
  let fixture: ComponentFixture<TopupInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopupInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
