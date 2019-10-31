export default [
  {
    leaf: false,
    icon: 'fa fa-fw fa-certificate',
    name: '系统管理',
    children: [{
        leaf: false,
        icon: 'fa fa-fw fa-user',
        name: '权限管理',
        children: [
          {
            leaf: true,
            icon: 'fa fa-fw fa-lock',
            name: '角色管理',
            path: '/system/role/list'
          },
          {
            leaf: true,
            icon: 'fa fa-fw fa-lock',
            name: '资源管理',
            path: '/system/resource/list'
          },
          {
            leaf: true,
            icon: 'fa fa-fw fa-lock',
            name: '用户管理',
            path: '/system/user/list'
          },
        ]
      },
      
    ]
  },
  {
    leaf: false,
    icon: 'fa fa-fw fa-certificate',
    name: '业务系统演示',
    children: [{
        leaf: false,
        icon: 'fa fa-fw fa-user',
        name: '新中金支付',
        children: [
          {
            leaf: true,
            icon: 'fa fa-fw fa-lock',
            name: '支付演示页面',
            path: '/pay/demonstrate/list'
          }
        ]
      },
      {
        leaf: false,
        icon: 'fa fa-fw fa-user',
        name: '支付数据管理',
        children: [
          {
            leaf: true,
            icon: 'fa fa-fw fa-lock',
            name: '支付总表',
            path: '/pay/list'
          },
          {
            leaf: true,
            icon: 'fa fa-fw fa-lock',
            name: '支付详情表',
            path: '/pay/info'
          },
          {
            leaf: true,
            icon: 'fa fa-fw fa-lock',
            name: '商户详情表',
            path: '/pay/business/list'
          },
          {
            leaf: true,
            icon: 'fa fa-fw fa-lock',
            name: '密码因子表',
            path: '/pay/pass/list'
          },
          {
            leaf: true,
            icon: 'fa fa-fw fa-lock',
            name: '系统控制表',
            path: '/pay/sys/list'
          }
        ]
      },
      {
        leaf: true,
        icon: 'fa fa-fw fa-user-circle-o',
        name: '定时任务',
        path: '/pay/task/list'
      },
    ]
  },
  {
    leaf: false,
    icon: 'fa fa-fw fa-certificate',
    name: '财务结算管理',
    children: [{
        leaf: false,
        icon: 'fa fa-fw fa-user',
        name: '交易管理',
        children: [
          {
            leaf: true,
            icon: 'fa fa-fw fa-lock',
            name: '交易总表',
            path: '/finance/trade/list'
          }
        ]
      },
      {
        leaf: false,
        icon: 'fa fa-fw fa-user',
        name: '商家出金管理',
        children: [
          {
            leaf: true,
            icon: 'fa fa-fw fa-lock',
            name: '结算订单管理',
            path: '/finance/order/list'
          }
        ]
      },
      {
        leaf: false,
        icon: 'fa fa-fw fa-user',
        name: '佣金管理',
        children: [
          {
            leaf: true,
            icon: 'fa fa-fw fa-lock',
            name: '佣金提现',
            path: '/finance/commission/list'
          }
        ]
      }, 
      {
        leaf: false,
        icon: 'fa fa-fw fa-user',
        name: '对账差异管理',
        children: [
          {
            leaf: true,
            icon: 'fa fa-fw fa-lock',
            name: '对账差异表',
            path: '/finance/difference/list'
          }
        ]
      }, 
    ]
  },
  {
    leaf: false,
    icon: 'fa fa-fw fa-user',
    name: '帮助后台管理',
    children: [
      {
        leaf: true,
        icon: 'fa fa-fw fa-user-circle-o',
        name: '帮助中心列表',
        path: '/help/list'
      }
    ]
  }
]