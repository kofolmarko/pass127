import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextgridComponent } from './textgrid.component';

describe('TextgridComponent', () => {
  let component: TextgridComponent;
  let fixture: ComponentFixture<TextgridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextgridComponent]
    });
    fixture = TestBed.createComponent(TextgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
