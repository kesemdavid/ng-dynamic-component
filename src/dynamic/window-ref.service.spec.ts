/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WindowRefService, WINDOW_REF } from './window-ref.service';

describe('Service: WindowRef', () => {
  let service: WindowRefService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WindowRefService,
        { provide: WINDOW_REF, useValue: 'my-window' },
      ],
    });
    service = TestBed.get(WindowRefService);
  });

  it('should have `nativeWindow` prop', () => {
    expect(service.nativeWindow).toBeDefined();
  });

  describe('`nativeWindow` prop', () => {
    it('should be the value from DI token `WINDOW_REF`', () => {
      expect(service.nativeWindow).toBe('my-window');
    });
  });
});
