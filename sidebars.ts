import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  
  // introSidebar: [{type:"doc",label:"Introduction" ,id:"Introduction/index"}],
  // kbSidebar: [{type:"category",label:"Scripts", link: {type:"generated-index"}, items:[{type:"autogenerated", dirName:'Scripts'}]}],
  // guideSidebar: [{type:"category",label:"Guides", link: {type:"generated-index"}, items:[{type:"autogenerated", dirName:'Guides'}]}],
  mainSidebar: [
    'Introduction/index',
    {
      type: 'category',
      label: 'Guides',
      items: [{type:"autogenerated", dirName:'Guides'}],
    },
    {
      type: 'category',
      label: 'Scripts',
      items: ['single-docs/Open Source', { type: "autogenerated", dirName: 'Scripts' }],
    },
    {
      type: 'category',
      label: 'Information',
      items: ['Roadmap/timeline',{type:"autogenerated", dirName:'Information'}]
    }
  ],

  rulesSidebar: [
    {
      type: 'category',
      label: 'Rules',
      items: [{type:"autogenerated", dirName:'Rules'}],
    },
  ]

};



export default sidebars;