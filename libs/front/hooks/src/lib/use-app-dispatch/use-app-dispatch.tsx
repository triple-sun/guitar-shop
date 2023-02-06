import { TAppDispatch } from '@guitar-shop/front/store';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
