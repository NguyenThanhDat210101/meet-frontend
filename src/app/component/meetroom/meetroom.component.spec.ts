import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetroomComponent } from './meetroom.component';

describe('MeetroomComponent', () => {
  let component: MeetroomComponent;
  let fixture: ComponentFixture<MeetroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
