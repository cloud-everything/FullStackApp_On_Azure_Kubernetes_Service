import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditviewComponent } from './editview.component';

describe('EditviewComponent', () => {
  let component: EditviewComponent;
  let fixture: ComponentFixture<EditviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
