"use strict";(self.webpackChunkportfolio_website=self.webpackChunkportfolio_website||[]).push([[516],{"./src/components/projects/ProjectCard.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProjectCard_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),Button=__webpack_require__("./src/components/global/button/Button.tsx"),Badge=__webpack_require__("./src/components/global/badge/Badge.tsx"),__jsx=react.createElement,ProjectCard=function ProjectCard(_ref){var title=_ref.title,image=_ref.image,techstack=_ref.techstack,description=_ref.description,githubURL=_ref.githubURL,webURL=_ref.webURL;return __jsx("div",{key:title,className:"flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col space-y-4 h-full"},__jsx("div",{className:"flex h-full flex-col justify-center gap-4 p-6"},__jsx(motion.E.div,{initial:{scale:0,opacity:0},whileInView:{opacity:1,scale:1,rotate:360},transition:{type:"spring",stiffness:260,damping:20},viewport:{once:!0},className:"w-full flex content-center justify-center",whileHover:{scale:1.1,transition:{duration:1}},whileTap:{scale:.8}},__jsx(next_image.Z,{className:"rounded-full",src:image,height:150,width:150,alt:title})),__jsx("h3",{className:"text-2xl font-bold leading-tight text-gray-900 dark:text-white"},title),__jsx("div",{className:"flex flex-row flex-wrap w-full justify-center"},techstack.map((function(tech){return __jsx(Badge.Z,{key:tech,variant:"pill",title:tech})}))),__jsx("p",{className:"text-lg font-normal text-gray-500 dark:text-gray-400"},description),__jsx("div",{className:"flex mt-4 md:mt-6 justify-center "},__jsx(Button.Z,{title:"GitHub",variant:"primary",href:githubURL}),__jsx(Button.Z,{title:"Website",variant:"white",href:webURL}))))};ProjectCard.displayName="ProjectCard";const projects_ProjectCard=ProjectCard;try{ProjectCard.displayName="ProjectCard",ProjectCard.__docgenInfo={description:"",displayName:"ProjectCard",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},techstack:{defaultValue:null,description:"",name:"techstack",required:!0,type:{name:"string[]"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},githubURL:{defaultValue:null,description:"",name:"githubURL",required:!0,type:{name:"string"}},webURL:{defaultValue:null,description:"",name:"webURL",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/projects/ProjectCard.tsx#ProjectCard"]={docgenInfo:ProjectCard.__docgenInfo,name:"ProjectCard",path:"src/components/projects/ProjectCard.tsx#ProjectCard"})}catch(__react_docgen_typescript_loader_error){}const ProjectCard_stories={title:"Components/ProjectCard",component:projects_ProjectCard,parameters:{layout:"centered"},tags:["autodocs"]};var Basic={args:{title:"Project Name",image:"https://ik.imagekit.io/debajit13/utilitis/Logo.webp?updatedAt=1708256500208",techstack:["skill 1","skill 2","skill 3"],description:"You can put your project description here.",githubURL:"/",webURL:"/"}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Project Name',\n    image: 'https://ik.imagekit.io/debajit13/utilitis/Logo.webp?updatedAt=1708256500208',\n    techstack: ['skill 1', 'skill 2', 'skill 3'],\n    description: 'You can put your project description here.',\n    githubURL: '/',\n    webURL: '/'\n  }\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./src/components/global/badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var __jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement,Badge=function Badge(_ref){var title=_ref.title,variant=_ref.variant;return __jsx("span",{className:{rectangle:"rectangle flex h-fit items-center gap-1 font-semibold bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 rounded px-2 py-0.5",pill:"pill mt-2 bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 w-fit"}[variant]},title)};Badge.displayName="Badge";const __WEBPACK_DEFAULT_EXPORT__=Badge;try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"pill"'},{value:'"rectangle"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/global/badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/global/badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/global/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Button=function Button(_ref){var title=_ref.title,variant=_ref.variant,href=_ref.href,disabled=_ref.disabled,variants={primary:"group justify-center p-0.5 font-medium relative focus:z-10 border border-transparent enabled:hover:bg-cyan-800 dark:enabled:hover:bg-cyan-700 inline-flex items-center px-2 py-1 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",white:"group justify-center p-0.5 relative focus:z-10 enabled:hover:bg-cyan-800 dark:enabled:hover:bg-cyan-700 inline-flex items-center px-2 py-1 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3",primaryDisabled:"group justify-center p-0.5 font-medium relative focus:z-10 cursor-not-allowed opacity-50 border border-transparent enabled:hover:bg-cyan-800 dark:enabled:hover:bg-cyan-700 inline-flex items-center px-2 py-1 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",whiteDisabled:"group justify-center p-0.5 relative focus:z-10 cursor-not-allowed opacity-50 enabled:hover:bg-cyan-800 dark:enabled:hover:bg-cyan-700 inline-flex items-center px-2 py-1 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"};return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,disabled?__jsx("button",{type:"button",disabled:!0,className:variants[variant]},__jsx("span",{className:"flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2"},title)):href&&__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href,rel:"noopener noreferrer",target:"_blank",className:variants[variant]},__jsx("span",{className:"flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2"},title,__jsx("svg",{className:"ml-2 w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})))))};const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"white"'},{value:'"primaryDisabled"'},{value:'"whiteDisabled"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/global/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/global/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);