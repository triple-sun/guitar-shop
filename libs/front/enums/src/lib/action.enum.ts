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
  VerifyUser = 'user/verifyUser',
  Login = 'user/login',
  Logout = 'user/logout',
  AddToCart = 'user/addToCart',
  RemoveFromCart = 'user/removeFromCart'
}
