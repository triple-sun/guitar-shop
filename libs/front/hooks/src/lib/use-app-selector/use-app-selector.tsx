import { TState } from '@guitar-shop/front/store';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;

export default useAppSelector;
