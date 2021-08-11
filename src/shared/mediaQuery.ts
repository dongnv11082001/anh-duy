export const mediaQueryDesktop = (css: string) => `@media (min-width: 1025px) and (max-width: 1280px) {
    ${css}
  }`;

export const mediaQueryTablet = (css: string) => `@media (min-width: 768px) and (max-width: 1024px) {
    ${css}
  }`;

export const mediaQueryTabletAndDesktop = (css: string) => `@media (min-width: 768px) {
    ${css}
  }`;

export const mediaQueryMobile = (css: string) => `@media (max-width: 767px) {
    ${css}
  }`;
