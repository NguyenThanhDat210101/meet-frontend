import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMeetroomComponent } from './edit-meetroom.component';

describe('EditMeetroomComponent', () => {
  let component: EditMeetroomComponent;
  let fixture: ComponentFixture<EditMeetroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMeetroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMeetroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
