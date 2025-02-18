// 复制提醒
document.addEventListener("copy",function(e){
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
  })