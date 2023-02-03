export enum AppRoute {
  AddReview = '/films/:id/review',
  Login = '/login',
  Main = '/',
  Movie = '/films/:id',
  MoviePlayer = '/player/:id',
  Movies = '/films/',
  MyList = '/mylist',
  NonExistent = '/non-existent-route',
  NotFound = '*',
  Player = '/player/',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
