interface project {
  name: string;
  type: string;
  link: string;
  icon: string;
}
type projectLine = project[];

const projectlist: projectLine[] = [
  [
    {
      name: "my-blog",
      icon: "/icon/nuxt.png",
      type: "NuxtJS",
      link: "https://github.com/wangycAbel/my-blog",
    },
    
  ],
];
export default projectlist;
