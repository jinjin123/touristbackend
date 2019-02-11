function desadd(self) {
    var data = []
    var file = ((self.parents('tr').find("input[type='file']").val()).split("\\"))[2];
    var fileobj = self.parents('tr').find("input[type='file']").get(0).files[0];
    var des = self.parents('tr').find("input[name='des']").val();
    // var po = self.parents('tr').find("input[name='po']").val();
    if (!file ||!des ) {
        layer.alert('请填写正确的数据！', {icon: 6});
    } else {
            var formData = new FormData();
            formData.append("file",fileobj)
            formData.append("img_name",file)
            formData.append("des",des)
            // formData.append("po",po)
            $.ajax({  
                url: "/des/index/add", 
                type: 'POST',  
                data: formData,  
                dataType: 'JSON',  
                cache: false,  
                processData: false,  
                contentType: false,
                success:function(data){
                    console.log(data.data)
                    renderTbody(data.data)
                }  
            })
            layer.msg('配置添加成功', {icon: 1});
    }
}
function desdel(self) {
    var des = self[0].value
    var data = {"des":des}
    $.post("/des/index/del",data,function(data){
        renderTbody(data.data)
    })
    layer.msg('配置添加成功', {icon: 1});
}
function renderTbody(data) {
    var tr = '';
    var ftr = '';
    var kc_config_table = $('#kc_config_table');
    for (var i=0;i<data.length;i++) {
        tr += '<tr>' +
            '<td><image src="'+ data[i].path +'" style="height:5rem;width:5rem"></td>' +
            '<td><input type="text" name="des" value="'+ data[i].des +'" disabled="disabled"></td>' 
            // '<td><input type="text" name="po" value="'+ data[i].po +'" disabled="disabled"></td>' 
        tr += '<td>' +
            '<button type="button" class="btn btn-danger btn-sm" value="'+data[i].des+'" onclick="desdel($(this))">删除</button>' +
            '</td>' +
            '</tr>'
    }

    ftr += '<tr>' +
        '<td><input type="file" name="file" ><div><label for="file"  style="position: absolute;left:90px">上传</label> </div></td>' +
        '<td><input type="text" name="des" ></td>' +
        // '<td><input type="text" name="po" ></td>' +
        '<td><button type="button" class="btn btn-success btn-sm" onclick="desadd($(this))">增加</button></td>' +
        '</tr>';

    kc_config_table.children('tbody').html(tr);
    kc_config_table.children('tfoot').html(ftr);
}
