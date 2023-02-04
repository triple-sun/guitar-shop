export enum EAppRoute {
  AddReview = '/items/:id/review',
  Login = '/login',
  Register = '/register',
  Cart = '/cart',
  Main = '/',
  Item = '/items/:id',
  Orders = '/orders',
  Order = '/order/:id',
  NonExistent = '/non-existent-route',
  NotFound = '*',
}
