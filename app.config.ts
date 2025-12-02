export type HTTPMethod =
  | 'get'
  | 'post'
  | 'put'
  | 'patch'
  | 'delete'
  | 'head'
  | 'options';

export const appConfig = {
  laravelApiURL: process.env.NEXT_PUBLIC_LARAVEL_API_URL as string,
  nextApiURL: process.env.NEXT_PUBLIC_NEXT_API_URL as string,
};
