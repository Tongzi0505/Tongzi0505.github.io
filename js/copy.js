// 复制提醒
document.addEventListener("copy", function () {
  debounce(function () {
      new Vue({
          data: function () {
              this.$notify({
                  title: "复制成功喵",
                  message: "若要转载最好保留原文链接哦，谢谢！",
                  position: 'top-left',
                  offset: 50,
                  showClose: true,
                  type: "success",
                  duration: 5000
              });
          }
      })
  }, 300);
})