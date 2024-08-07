export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/tobiui/dashboards',
    '/tobiui/configurations',
    '/tobiui/configurations/create',
  ],
};
