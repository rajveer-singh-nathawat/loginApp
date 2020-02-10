import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedcomponentsComponent } from './sharedcomponents.component';

describe('SharedcomponentsComponent', () => {
  let component: SharedcomponentsComponent;
  let fixture: ComponentFixture<SharedcomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedcomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
