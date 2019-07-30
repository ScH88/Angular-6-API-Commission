import { TestBed } from '@angular/core/testing';

import { SelectCurrencyService } from './select-currency.service';

describe('SelectCurrencyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectCurrencyService = TestBed.get(SelectCurrencyService);
    expect(service).toBeTruthy();
  });
});
