document.onkeydown = function (e) {
    debounce(function(){
    if (e.keyCode === 123 || 
        (e.ctrlKey && e.shiftKey && [74, 73, 67].includes(e.keyCode)) || 
        (e.ctrlKey && e.keyCode === 85)) {
        // 仅保留信息提示部分
        new Vue({
            data: function () {
                this.$notify({
                    title: "在干嘛？不要乱玩控制台喵",
                    message: "看吧看吧，不过要遵循GPL协议喵",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "warning",
                    duration: 5000
                });
            }
        })
    }},300);
};