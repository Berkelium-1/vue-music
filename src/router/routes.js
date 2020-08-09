export const routes = [
  // 默认打开主界面
  {
    path: '/',
    redirect: {
      name: 'Main'
    },
  },
  // 主界面
  {
    path: '/Main',
    name: 'Main',
    component: () => import('@/views/Main'),
    redirect: {
      name: 'Find'
    },

    children: [
      // 我的
      {
        path: 'my',
        name: 'My',
        component: () => import('@/views/main/My')
      },
      // 发现
      {
        path: 'find',
        name: 'Find',
        component: () => import('@/views/main/Find')
      }
    ]
  }
]