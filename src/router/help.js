let routes = [
  {
    path:'help/list',
    component: resolve => require(['@/pages/help/List'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF']
    }
  }
]
export default routes