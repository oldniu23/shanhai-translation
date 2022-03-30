// logs.js
const util = require('../../utils/util.js')
//获取独一无二的全局app（主要是为了得到glpbalData的langList）
const app = getApp()

Page({
  data: {
    curLang:{},
    langList:app.globalData.langList
  },
  //onShow 每次进来都做一次检测  
  onShow:function(){
    this.setData({curLang:app.globalData.curLang})
  },
  onTapItem:function(e){
    //dataset存储着自定义属性
    let langObj = e.currentTarget.dataset
     wx.setStorageSync('language', langObj)
     this.setData({'curLang':langObj})
     app.globalData.curLang = langObj
     //选中语言后回到index页面
     wx.switchTab({
       url: '/pages/index/index',
     })
  }
})
