import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterareaComponent } from './footerarea.component';

describe('FooterareaComponent', () => {
  let component: FooterareaComponent;
  let fixture: ComponentFixture<FooterareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
