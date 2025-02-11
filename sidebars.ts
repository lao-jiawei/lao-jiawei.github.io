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
  tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  javascript: [
    {
      label: 'Javascript',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        'javascript/javascript-menu',
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
          label: '【面向开发】',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'javascript/【面向开发】',
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
        {
          label: 'JSchallenger',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'javascript/JSchallenger',
            },
          ],
        },
        {
          label: '知识库',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'javascript/知识库',
            },
          ],
        },
      ]
    }
  ],
  react: [
    {
      label: 'React',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        'react/react-useSkill',
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
        {
          label: '源码阅读',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'react/源码阅读',
            },
          ],
        },
        {
          label: '知识库',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'react/知识库',
            },
          ],
        },
        'react/react-useSkill-mobx',
        'react/react-create-react-app-source-code',
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
  regExp: [
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
  ],
  git: [
    {
      label: 'git',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'git',
        }
      ],
    }
  ],
  frontend: [
    {
      label: '前端工程化',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'frontend',
        }
      ],
    }
  ],
  webpack: [
    {
      label: 'webpack',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'webpack',
        }
      ],
    }
  ],
  vite: [
    {
      label: 'vite',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'vite',
        }
      ],
    }
  ],
  htmlandcss: [
    {
      label: 'HtmlAndCss',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          label: 'Html',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'htmlandcss/html',
            },
          ],
        },
        {
          label: 'Css',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'htmlandcss/css',
            },
          ],
        },
        {
          label: 'Scss',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'htmlandcss/scss',
            },
          ],
        },
        'htmlandcss/htmlAndCss-svg-cainiao-note'
      ],
    }
  ],
  java: [
    {
      label: 'Java',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          label: '基础语法',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'java/基础语法',
            },
          ],
        },
        {
          label: '面向对象',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'java/面向对象',
            },
          ],
        },
        {
          label: '高级技巧',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'java/高级技巧',
            },
          ],
        },
      ]
    },
  ],
  nodejs: [
    {
      label: 'nodejs',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'nodejs',
        }
      ],
    }
  ],
  npm: [
    {
      label: 'npm',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        'npm/package-manager-menu',
        {
          type: 'autogenerated',
          dirName: 'npm',
        }
      ],
    }
  ],
  docs: [
    {
      label: '文档',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          label: 'jvtools使用文档',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'docs/jvtools',
            },
          ],
        },
      ]
    },
  ],
  cs: [
    {
      label: '计算机组成原理',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'cs',
        }
      ],
    }
  ],
  os: [
    {
      label: '操作系统',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'os',
        }
      ],
    }
  ],
  tool: [
    {
      label: '工具使用技巧',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'tool',
        }
      ],
    }
  ],
  db: [
    {
      label: '数据库',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          label: 'mysql',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'db/mysql',
            },
          ],
        },
        {
          label: 'mongodb',
          type: 'category',
          link: { type: 'generated-index' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'db/mongodb',
            },
          ],
        },
      ]
    }
  ],
  algorithm: [
    {
      label: '数据结构与算法笔记',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        {
          type: "link",
          label: "力扣笔记",
          href: 'https://leetcode.cn/u/lao-jiawei/',
        },
        {
          type: 'autogenerated',
          dirName: 'algorithm',
        },
      ],
    }
  ]
}

export default sidebars;
