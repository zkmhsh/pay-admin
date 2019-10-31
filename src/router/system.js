let routes = [
  {
    path:'system/role/list',
    name: 'RoleList',
    component: resolve => require(['@/pages/system/role/List'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF']
    }
  },
  {
    path:'system/resource/list',
    name: 'ResourceList',
    component: resolve => require(['@/pages/system/resource/List'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF']
    }
  },
  {
    path:'/system/user/list',
    name: 'UserList',
    component: resolve => require(['@/pages/system/user/List'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF']
    }
  }
  
]
export default routes