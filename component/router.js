const app = getApp();
module.exports = [
  {
    pagePath: "/pages/liuyan/liuyan",
    iconPath: "https://ks3-cn-beijing.ksyuncs.com/lingye-space/map/comment.png",
    selectedIconPath:
      "https://ks3-cn-beijing.ksyuncs.com/lingye-space/asset/comment.png",
    auth: 0,
    id: "d1",
    show: true,
  },
  {
    pagePath: "/pages/home/home",
    iconPath: "https://ks3-cn-beijing.ksyuncs.com/lingye-space/map/xing.png",
    selectedIconPath: "https://ks3-cn-beijing.ksyuncs.com/lingye-space/map/xing.png",
    auth: 0,
    id: "d2",
    show: app.show,
  },
  {
    pagePath: "/pages/information/information",
    iconPath: "https://ks3-cn-beijing.ksyuncs.com/lingye-space/map/tabperson2.png",
    selectedIconPath: "https://ks3-cn-beijing.ksyuncs.com/lingye-space/asset/tabPerson.png",
    auth: 0,
    id: "d3",
    show: true,
  },
];
