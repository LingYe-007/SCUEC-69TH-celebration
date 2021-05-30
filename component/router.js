const app=getApp()
module.exports = [
  {
    "pagePath": "/pages/liuyan/liuyan",
    "iconPath": "/images/talk.png",
      "selectedIconPath": "/images/talk1.png",
    "auth": 0,
    "id":"d1",
    "show":true
  },
  {
    "pagePath": "/pages/home/home",
    "iconPath": "/images/light.png",
    "selectedIconPath": "/images/light.png",
    "auth": 0,
    "id":"d2",
    "show":app.show
  },
  {
    "pagePath": "/pages/information/information",
    "iconPath": "/images/people.png",
    "selectedIconPath": "/images/people1.png",
    "auth": 0,
    "id":"d3",
    "show":true
  }
]