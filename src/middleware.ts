import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['et', 'en', 'de', 'fr'],
 
  // Used when no locale matches
  defaultLocale: 'et',
  localePrefix: 'never',  
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/','/cart', '/checkout', '/(et|en|de|fr)/:path*']
};