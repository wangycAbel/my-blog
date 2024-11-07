interface PhotoItem {
  url: any; // 图片链接
  desc: string; // 图片描述
  link: string; // 关联链接
}
type PhotoList = PhotoItem[];
const photoList: PhotoList = [
  {
    url: "https://css-tricks.com/wp-content/uploads/2024/11/example1.png",
    desc: "A css skill blog , 可以再上边找到很多特殊css 技巧与灵感",
    link: "https://css-tricks.com/",
  },
  {
    url: "https://chokcoco.github.io/CSS-Inspiration/images/logo2.png",
    desc: "css动画网站，只通过css效果完成预期动效，可以学习，也可以直接CV",
    link: "https://chokcoco.github.io/CSS-Inspiration/#/",
  },
  {
    url: "/photo/CSSAnimate.png",
    desc: "小快灵的css动效库",
    link: "https://animate.style/",
  },
];
export default photoList;
