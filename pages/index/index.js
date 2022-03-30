// index.js
// 获取应用实例
import {translate} from '../../utils/translateApi.js'
const app = getApp()

Page({
  data: {
    query:'',  //输入的内容
    hideClearIcon:true,  //是否隐藏 ‘x’
    result:[],           //用户查询的数据
    curLang:{}          //语言
  },

  onLoad:function (options){
    console.log('onload...');
    console.log(options)
    if(options.query){
      this.setData({query:options.query})
    }
  },

  onShow:function(){
    if(this.data.curLang.lang !== app.globalData.curLang.lang){
      this.setData({curLang: app.globalData.curLang})
      this.onConfirm()
    }
  },
  
  onInput:function(e){
    this.setData({'query':e.detail.value}) //输入的文本显示
    if(this.data.query.length>0){
      this.setData({hideClearIcon:false})
    }else{
      this.setData({'hideClearIcon':true})
    }
    console.log('focus')
  },

  onTapClose:function(){
    this.setData({query:'',hideClearIcon:true})
    this.setData({result:''})
  },

  onConfirm:function(){
    let repeat = this.data.query
    if(!this.data.query) return
    translate(this.data.query,{from:'auto',to: this.data.curLang.lang})
    .then(res=>{
      this.setData({'result':res.trans_result})
      let history = wx.getStorageSync('history') || []
      history.unshift({query:this.data.query,result:res.trans_result[0].dst})
      history.length = history.length > 10 ? 10:history.length
      wx.setStorageSync('history',history)
    })
  }
})