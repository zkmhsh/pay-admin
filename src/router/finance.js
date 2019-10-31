let routes = [
  {
    path:'finance/trade/list',
    component: resolve => require(['@/pages/finance/trade/List'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF']
    }
  },
  {
    path:'finance/order/list',
    component: resolve => require(['@/pages/finance/order/List'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF']
    }
  },
  {
    path:'finance/commission/list',
    component: resolve => require(['@/pages/finance/commission/List'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF']
    }
  },
  {
    path:'finance/difference/list',
    component: resolve => require(['@/pages/finance/difference/List'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF']
    }
  }
]
export default routes