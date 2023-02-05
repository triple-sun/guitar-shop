export enum AppAction {
  FetchItems = 'data/fetchItems',
  FetchSingleItem = 'data/fetchSingleItem',
  FetchUserInfo = 'data/fetchUserInfo',
  FetchOrders = 'data/fetchOrders',
  RedirectToRoute = 'app/redirectToRoute',
}

export enum ItemAction {
  AddReview = 'review/addReview',
  ToggleStringCount = 'items/toggleStringCount',
  ToggleGuitarType = 'items/toggleGuitarType',
  SetSort = 'items/setSort',
  SetSortOrder = 'items/setSortOrder',
  SetMinPrice = 'items/setPriceMin',
  SetMaxPrice = 'items/setPriceMax',
  SetPage = 'items/setPage',
  ResetFilters = 'items/resetFilters',
  ResetSort = 'item/resetSort'
}

export enum UserAction {
  SetAuthAction = 'user/setAuth',
  Login = 'user/login',
  Logout = 'user/logout',
}

export enum CartAction {
  AddToCart = 'cart/addToCart',
  RemoveFromCart = 'cart/removeFromCart',
  DecreaseCount = 'cart/decreaseCount',
  IncreaseCount = 'cart/increaseCount'
}

export enum OrderAction {
  AddToCart = 'cart/addToCart',
  RemoveFromCart = 'cart/removeFromCart',
  DecreaseCount = 'cart/decreaseCount',
  IncreaseCount = 'cart/increaseCount'
}

