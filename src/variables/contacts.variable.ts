export default {
  title: 'Доставка пиццы',
  city: 'Новосибирск',
  mapGeo: {
    latitude: 55.025787,
    longitude: 82.914887
  },
  points: [
    {
      street: 'ул. Чаплыгина, д. 35',
      workTime: 'Открыты ежедневно с 10:00 до 23:00',
      geo: {
        latitude: 55.025787,
        longitude: 82.914887
      },
      metroStation: {
        title: 'Площадь Ленина',
        Icon: require('images/ico_moscow_metro.svg').default
      }
    },
    {
      street: 'ул. Блюхера, д. 12',
      workTime: 'Открыты ежедневно с 9:00 до 22:00',
      geo: {
        latitude: 54.989729,
        longitude: 82.900128
      },
      metroStation: {
        title: 'Студенческая',
        Icon: require('images/ico_moscow_metro.svg').default
      }
    }
  ],
  phone: {
    title: '8 800 405-56-80',
    href: '+78004055680'
  },
  email: {
    title: 'logopizza@mail.com',
    href: 'logopizza@mail.com'
  },
  socialLinks: [
    {
      type: 'ok',
      href: 'ok.ru/dodopizza'
    },
    {
      type: 'inst',
      href: 'instagram.com/dodopizza'
    },
    {
      type: 'vk',
      href: 'vk.com/dodo'
    },
    {
      type: 'fb',
      href: 'facebook.com/dodopizza/'
    },
    {
      type: 'yt',
      href: 'youtube.com/channel/UCkPTVsNw2R5lwQ_VxF6Wuow'
    }
  ],
  aboutLink: '/'
};