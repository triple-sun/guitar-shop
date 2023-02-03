import { AuthStatus } from '../enums/common.enum';
import {store} from '../store/store';
import IUser from '@guitar-s'

export type State = ReturnType<typeof store.getState>;

export type TPlayerState = {
  progress: number,
  time: number,
  isPlaying: boolean,
  isMuted: boolean;
};

export type CurrentMovieState = TData<TCurrentMovieData> & {
  isAddingReview: boolean;
};

export type UserState = {
  userInfo: TUser | null;
  favorites: TData<TMovie[]>;
  authStatus: AuthStatus;
};

export type MainPageState = TData<TMainPageData> & {
  selectedGenre: Genre
};

