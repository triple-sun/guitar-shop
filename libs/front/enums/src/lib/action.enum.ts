export enum EFetchAction {
  FetchItems = 'data/fetchItems',
  FetchCurrentItem = 'data/fetchCurrentMovieData',
  FetchUserInfo = 'data/fetchUserInfo',
  FetchOrders = 'data/fetchFavorites',
}

export enum EChangeAction {
  AddReview = 'review/addReview',
  AddToCart = 'items/addToCart',
  ToggleStringCount = 'items/toggleStringCount',
  ToggleGuitarType = 'items/toggleGuitarType',
  SetSort = 'items/setSort',
  SetMinPrice = 'items/setPriceMin',
  SetMaxPrice = 'items/setPriceMax',
  SetPage = 'items/setPage',
  RedirectToRoute = 'app/redirectToRoute',
}

export enum EUserAction {
  SetAuth = 'user/setAuthorization',
  CheckAuth = 'user/checkAuthorization',
  Login = 'user/login',
  Logout = 'user/logout',
}
