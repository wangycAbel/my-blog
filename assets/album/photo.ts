interface PhotoItem {
  url: any; // 图片链接
  desc: string; // 图片描述
  link: string; // 关联链接
}
type PhotoList = PhotoItem[];
const photoList: PhotoList = [
  {
    url: '/photo/1.jpg',
    desc: "listlistlistlistlistlistlistlistlistlistlistlistlistlistlistlistlistlist",
    link: "https://www.baidu.com",
  },
  {
    url: "/_nuxt/assets/album/2.jpg",
    desc: "listlistlistlistlistlistlistlistlistlistlistlistlistlistlistlistlistlist",
    link: "www.baidu.com",
  },
  {
    url: "/_nuxt/assets/album/3.jpg",
    desc: "listlistlistlistlistlistlistlistlistlistlistlistlistlistlistlistlistlist",
    link: "www.baidu.com",
  },
  {
    url: "/_nuxt/assets/album/4.jpg",
    desc: "listlistlistlistlistlistlistlistlistlistlistlistlistlistlistlistlistlist",
    link: "www.baidu.com",
  },
  {
    url: "/_nuxt/assets/album/5.jpg",
    desc: "listlistlistlistlistlistlistlistlistlistlistlistlistlistlistlistlistlist",
    link: "www.baidu.com",
  },
  {
    url: "/_nuxt/assets/album/6.jpg",
    desc: "listlistlistlistlistlistlistlistlistlistlistlistlistlistlistlistlistlist",
    link: "www.baidu.com",
  },
  {
    url: "/_nuxt/assets/album/7.jpg",
    desc: "listlistlistlistlistlistlistlistlistlistlistlistlistlistlistlistlistlist",
    link: "www.baidu.com",
  },
];
export default photoList;
