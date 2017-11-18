
const menus = [
  {
    path: '/home',
    title: 'Home!',
    icon: 'home',
  },

  {
    path: '/catalogo',
    title: 'catalogo!',
    icon: 'connectdevelop',
    routes: [
      {
        path: '/catalogo/categorias',
        title: 'categorias!',
        replace: '/catalogo/categorias/list',
        icon: 'usb',
        routes: [
          {
            path: '/catalogo/categorias/list',
            title: 'list cat!',
          },
          {
            path: '/catalogo/categorias/new',
            title: 'new cat!',
          },
          {
            path: '/catalogo/categorias/edit/:id',
            title: 'edit cat!',
          }
        ]

      },
    ]
  }
]

export { menus }
