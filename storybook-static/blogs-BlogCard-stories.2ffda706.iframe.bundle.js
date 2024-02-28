"use strict";(self.webpackChunkportfolio_website=self.webpackChunkportfolio_website||[]).push([[595],{"./src/components/blogs/BlogCard.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BlogCard_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),Badge=__webpack_require__("./src/components/global/badge/Badge.tsx"),__jsx=react.createElement,BlogCard=function BlogCard(_ref){var blogTitle=_ref.blogTitle,blogDescription=_ref.blogDescription,blogLink=_ref.blogLink,blogImage=_ref.blogImage,topics=_ref.topics;return __jsx(motion.E.article,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},className:"p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"},__jsx("div",{className:"flex justify-between items-center mb-5 text-gray-500"},__jsx(next_image.Z,{className:"w-full h-30 rounded-2xl",src:blogImage,height:150,width:200,alt:blogTitle})),__jsx("h2",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},blogTitle),__jsx("div",{className:"flex flex-row flex-wrap w-full"},topics.map((function(topic){return __jsx(Badge.Z,{key:topic,title:topic,variant:"pill"})}))),__jsx("p",{className:"mb-5 font-light text-gray-500 dark:text-gray-400 mt-2"},blogDescription),__jsx("div",{className:"flex justify-end items-center"},__jsx(link_default(),{rel:"noopener noreferrer",target:"_blank",href:blogLink,className:"inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"},"Read more",__jsx("svg",{className:"ml-2 w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})))))};BlogCard.displayName="BlogCard";const blogs_BlogCard=BlogCard;try{BlogCard.displayName="BlogCard",BlogCard.__docgenInfo={description:"",displayName:"BlogCard",props:{blogTitle:{defaultValue:null,description:"",name:"blogTitle",required:!0,type:{name:"string"}},blogDescription:{defaultValue:null,description:"",name:"blogDescription",required:!0,type:{name:"string"}},blogLink:{defaultValue:null,description:"",name:"blogLink",required:!0,type:{name:"string"}},blogImage:{defaultValue:null,description:"",name:"blogImage",required:!0,type:{name:"string"}},topics:{defaultValue:null,description:"",name:"topics",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/blogs/BlogCard.tsx#BlogCard"]={docgenInfo:BlogCard.__docgenInfo,name:"BlogCard",path:"src/components/blogs/BlogCard.tsx#BlogCard"})}catch(__react_docgen_typescript_loader_error){}const BlogCard_stories={title:"Components/BlogCard",component:blogs_BlogCard,parameters:{layout:"centered"},tags:["autodocs"]};var Basic={args:{blogTitle:"Sample Blog Title",blogDescription:"This is a sample blog description. You can put some short description in this section to describe the theme of the blog.",blogLink:"/",blogImage:"https://ik.imagekit.io/debajit13/Blogs/Blog%20Placeholder%20Banner.webp?updatedAt=1708254981754",topics:["topic 1","topic 2","topic 3"]}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    blogTitle: 'Sample Blog Title',\n    blogDescription: 'This is a sample blog description. You can put some short description in this section to describe the theme of the blog.',\n    blogLink: '/',\n    blogImage: 'https://ik.imagekit.io/debajit13/Blogs/Blog%20Placeholder%20Banner.webp?updatedAt=1708254981754',\n    topics: ['topic 1', 'topic 2', 'topic 3']\n  }\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./src/components/global/badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var __jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement,Badge=function Badge(_ref){var title=_ref.title,variant=_ref.variant;return __jsx("span",{className:{rectangle:"rectangle flex h-fit items-center gap-1 font-semibold bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 rounded px-2 py-0.5",pill:"pill mt-2 bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 w-fit"}[variant]},title)};Badge.displayName="Badge";const __WEBPACK_DEFAULT_EXPORT__=Badge;try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"pill"'},{value:'"rectangle"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/global/badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/global/badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}}}]);