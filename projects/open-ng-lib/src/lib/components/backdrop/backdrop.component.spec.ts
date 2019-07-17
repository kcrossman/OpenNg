import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenNgBackdropComponent } from './backdrop.component';

describe('OpenNgBackdropComponent', () => {
  let component: OpenNgBackdropComponent;
  let fixture: ComponentFixture<OpenNgBackdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpenNgBackdropComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenNgBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
