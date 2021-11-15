import { TestBed } from '@angular/core/testing';

import { MeetroomService } from './meetroom.service';

describe('MeetroomService', () => {
  let service: MeetroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
