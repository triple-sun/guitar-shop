import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useItems from './use-items';

describe('useItems', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useItems());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
