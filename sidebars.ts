import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

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
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  javascript: [
    {
      label: 'Javascript',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          label: 'Javascript高级程序设计',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'javascript/JavaScript高级程序设计',
            },
          ],
        },
        {
          label: 'JavaScript工程师都应懂的33个概念',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'javascript/JavaScript工程师都应懂的33个概念',
            },
          ],
        },
        {
          label: '【面向学习】',
          type: 'category',
          link: { type: 'generated-index' },
          description: "存储三方学习笔记",
          items: [
            {
              type: 'autogenerated',
              dirName: 'javascript/【面向学习】',
            },
          ],
        },
        {
          label: 'freeCodeCamp',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'javascript/freeCodeCamp',
            },
          ],
        },
        'javascript/javascript-test',
        'javascript/javascript-test1',
      ]
    }
  ],
  react: [
    {
      label: 'React',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          label: '【面向学习】',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'react/【面向学习】',
            },
          ],
        },
        'react/react-useSkill',
        'react/react-useSkill-mobx',
        'react/react-create-react-app-source-code',
        'react/react-source-code-useState',
      ],
    },
  ],
  vue: [
    {
      label: 'Vue',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'vue',
        },
      ],
    },
  ],
  typescript: [
    {
      label: 'TypeScript',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'typescript',
        },
      ],
    },
  ],
  network: [
    {
      label: '计算机网络',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'network',
        }
      ],
    }
  ],
  regExp:[
    {
      label: '正则表达式',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'regExp',
        }
      ],
    }
  ]
}

export default sidebars;
