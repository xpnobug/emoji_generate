module.exports = [
  {
    // 文件路径，heo 从 src/image/heo 目录下寻找文件
    path: 'heo',
    // 生成json时的前缀
    prefix: 'heo-',
    // 图片基路径
    baseUrl: 'http://blogcn.ml/heo/image',
    twikoo: {
      // twikoo 生成的tab栏名称
      name: `<img src="${'http://blogcn.ml/heo/image'}/害羞.png" style="width: 30px;top: 4px;position: relative;" title="Heo">`
    },
    artalk: {
      // artalk 生成的tab栏名称
      name: `Heo`
    },
    waline: {
      name: 'Heo',
      icon: '害羞.png'
    },
    discuss: {
      name: `Heo`
    }
  },
  {
    path: 'aru',
    prefix: 'aru-',
    baseUrl: 'http://blogcn.ml/aru/image',
    twikoo: {
      name: `阿鲁`
    },
    artalk: {
      name: `阿鲁`
    },
    waline: {
      name: '阿鲁',
      icon: '001.gif'
    },
    discuss: {
      name: `阿鲁`
    }
  },
  {
    path: 'kcoin',
    prefix: 'kcoin-',
    baseUrl: 'http://blogcn.ml/kcoin/image',
    twikoo: {
      name: `酷币`
    },
    artalk: {
      name: `酷币`
    },
    waline: {
      name: '酷币',
      icon: 'coolb1.png'
    },
    discuss: {
      name: `酷币`
    }
  },
  {
    path: 'bili_tv',
    prefix: 'btv-',
    baseUrl: 'http://blogcn.ml/bili_tv/image',
    twikoo: {
      name: `哔哩TV`
    },
    artalk: {
      name: `哔哩TV`
    },
    waline: {
      name: '哔哩TV',
      icon: '点赞.gif'
    },
    discuss: {
      name: `哔哩TV`
    }
  },
  {
    path: 'huaji',
    prefix: 'huaji-',
    baseUrl: 'http://blogcn.ml/huaji/image',
    twikoo: {
      name: `滑稽`
    },
    artalk: {
      name: `滑稽`
    },
    waline: {
      name: '滑稽',
      icon: '啊哈哈.jpg'
    },
    discuss: {
      name: `滑稽`
    }
  },
  {
    path: 'parrot',
    prefix: 'parrot-',
    baseUrl: 'http://blogcn.ml/parrot/image',
    twikoo: {
      name: `小鹦鹉`
    },
    artalk: {
      name: `小鹦鹉`
    },
    waline: {
      name: '小鹦鹉',
      icon: '摇椅.gif'
    },
    discuss: {
      name: `小鹦鹉`
    }
  },
  {
    path: 'other',
    prefix: 'other-',
    baseUrl: 'http://blogcn.ml/other/image',
    twikoo: {
      name: `其他`
    },
    artalk: {
      name: `其他`
    },
    waline: {
      name: '其他',
      icon: '00015.gif'
    },
    discuss: {
      name: `其他`
    }
  },
  {
    path: 'blob',
    prefix: 'blob-',
    baseUrl: 'http://blogcn.ml/blob/image',
    twikoo: {
      name: `Blob`
    },
    artalk: {
      name: `Blob`
    },
    waline: {
      name: 'Blob',
      icon: 'blob.png'
    },
    discuss: {
      name: `Blob`
    }
  }
]
