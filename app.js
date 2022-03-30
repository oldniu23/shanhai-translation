// app.js  存放语言列表
App({
  onLaunch:function() {
    //初始化时从本地存储中读取当前语言 没有就默认是英语
    this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langList[0]
  },
  globalData: {
    curLang:{},  //当前语言  currentLanguage
    langList:[    //语言列表
      {"chs":'英语', "lang":'en',"index":0},
      {"chs":'中文', "lang":'zh',"index":1},
      {"chs":'日语', "lang":'jp',"index":2},
      {"chs":'韩语', "lang":'kor',"index":3},
      {"chs":'法语', "lang":'fra',"index":4},
      {"chs":'西班牙语', "lang":'spa',"index":5},
      {"chs":'阿拉伯语', "lang":'ara',"index":6},
    ]
  }
})
