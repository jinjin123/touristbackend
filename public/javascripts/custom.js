$(function(){
    var preview = document.querySelector('#preview');
    var eleFile = document.querySelector('#file');
    eleFile.addEventListener('change', function() {
        var file = this.files[0];                
        // 确认选择的文件是图片                
        if(file.type.indexOf("image") == 0) {
            var reader = new FileReader();
            reader.readAsDataURL(file);                    
            reader.onload = function(e) {
                // 图片base64化
                var newUrl = this.result;
                preview.style.backgroundImage = 'url(' + newUrl + ')';
            };
        }
    });
})