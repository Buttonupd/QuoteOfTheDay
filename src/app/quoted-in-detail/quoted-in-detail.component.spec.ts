import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotedInDetailComponent } from './quoted-in-detail.component';

describe('QuotedInDetailComponent', () => {
  let component: QuotedInDetailComponent;
  let fixture: ComponentFixture<QuotedInDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotedInDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotedInDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
