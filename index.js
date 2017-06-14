var faker = require('faker/locale/zh_CN')

module.exports = () => {
  let users = []

  for (let id = 0; id < 50; id++) {
    const firstName = faker.name.lastName()
    const lastName = faker.name.firstName()
    const phoneNumber = faker.phone.phoneNumberFormat()

    users.push({
      id,
      name: {
        firstName,
        lastName,
      },
      info: {
        phoneNumber,
        address: {
          city: faker.address.city(),
          zpiCode: faker.address.zipCode(),
        },
      },
    })
  }

  const banners = [
    {
      comment: '',
      title: '北弗里斯兰 · 不如去旅行',
      url: 'https://www.tuchuang001.com/images/2017/06/14/sunset-50494_1280.md.jpg',
    }, {
      comment: '',
      title: '也许只是承让了',
      url: 'https://www.tuchuang001.com/images/2017/06/14/bird-2369177__480.md.jpg',
    }, {
      comment: '',
      title: '人类学研究笔记',
      url: 'https://www.tuchuang001.com/images/2017/06/14/buildings-2297210__480.md.jpg',
    },
  ]


  const startImage = {
    text: '© HaHa',
    img: 'https://www.tuchuang001.com/images/2017/06/14/ship-2275399_1280.jpg',
  }

  const posts = Array(faker.random.number({
    min: 10,
    max: 30,
  })).fill(0).
    map(() => ({
      title: faker.lorem.slug(),
      img: faker.image.nature(),
      date: faker.date.recent(),
    })
  )

  posts.sort((pre, next) => new Date(next.date) - new Date(pre.date))

  return {
    users,
    banners,
    'start-image': startImage,
    posts,
  }
}
