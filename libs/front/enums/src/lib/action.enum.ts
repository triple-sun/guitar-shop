export enum AppAction {
  FetchCatalog = 'data/fetchItems',
  FetchCurrentItem = 'data/fetchCurrentItem',
  FetchCurrentOrder = 'data/fetchCurrentOrder',
  FetchUserData = 'data/fetchUserData',
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
  ResetSort = 'item/resetSort',
  ResetCurrentItem = 'item/resetCurrentItem'
}

export enum UserAction {
  SetAuthAction = 'user/setAuth',
  Login = 'user/login',
  Logout = 'user/logout',
  Register = 'user/register'
}

export enum CartAction {
  AddToCart = 'cart/addToCart',
  RemoveFromCart = 'cart/removeFromCart',
  DecreaseCount = 'cart/decreaseCount',
  IncreaseCount = 'cart/increaseCount'
}

export enum OrderAction {
  DeleteOrder = 'order/delete',
  EditOrder = 'cart/edit',
  RemoveItem = 'cart/decreaseCount',
}

