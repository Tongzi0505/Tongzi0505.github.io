// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

// 复制提醒
document.addEventListener("copy",function(e){
  debounce(function(){
    new Vue({
      data:function(){
        this.$notify({
          title:"复制成功喵",
          message:"若要转载请务必保留原文链接！谢谢！",
          position: 'top-left',
          offset: 50,
          showClose: false,
          type:"success"
        });
        return{visible:false}
      }
    })
  },300);
})