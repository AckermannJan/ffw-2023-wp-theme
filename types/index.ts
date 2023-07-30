/* *************** */
/*     PopMenu     */
/* *************** */

import type { RouteLocationRaw } from 'vue-router';

export interface MenuItem {
  name: string;
  icon: string;
  to?: object;
  href?: string;
  active?: boolean;
  children?: Child[];
}

export interface Child {
  name: string;
  icon: string;
  to?: RouteLocationRaw;
  href?: string;
  active?: boolean;
}

/* *************** */
/*    HeaderNav    */
/* *************** */

export interface NavItem {
  name: string;
  to?: object;
  href?: string;
  items?: MenuItem[];
}
