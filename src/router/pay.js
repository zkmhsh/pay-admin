let routes = [
  {
    path:'pay/demonstrate/list',
    component: resolve => require(['@/pages/pay/demonstrate/List'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF']
    }
  },
  {
    path:'pay/list',
    component: resolve => require(['@/pages/pay/List'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF']
    }
  },
  {
    path:'pay/info',
    component: resolve => require(['@/pages/pay/Info'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF']
    }
  },
  {
    path:'pay/business/list',
    component: resolve => require(['@/pages/pay/business/List'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF']
    }
  },
  {
    path:'pay/pass/list',
    component: resolve => require(['@/pages/pay/pass/List'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF']
    }
  },
  {
    path:'pay/sys/list',
    component: resolve => require(['@/pages/pay/sys/List'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF']
    }
  },
  {
    path:'pay/task/list',
    component: resolve => require(['@/pages/pay/task/List'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF']
    }
  },
]
export default routes