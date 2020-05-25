import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwbouwComponent } from './nieuwbouw.component';

describe('NieuwbouwComponent', () => {
  let component: NieuwbouwComponent;
  let fixture: ComponentFixture<NieuwbouwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieuwbouwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuwbouwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
