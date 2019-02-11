function storeadd(self) {
    var data = []
    var file = ((self.parents('tr').find("input[type='file']").val()).split("\\"))[2];
    var fileobj = self.parents('tr').find("input[type='file']").get(0).files[0];
    var type = self.parents('tr').find("input[name='type']").val();

    if (!file ||!type) {
        layer.alert('请填写正确的数据！', {icon: 6});
    } else {
        if(type=='cheap' || type=='discount' || type=='station' ||type=='banner'   ){
            var formData = new FormData();
            formData.append("file",fileobj)
            formData.append("img_name",file)
            formData.append("type",type)
            $.ajax({  
                url: "/store/add", 
                type: 'POST',  
                data: formData,  
                dataType: 'JSON',  
                cache: false,  
                processData: false,  
                contentType: false,
                success:function(data){
                    console.log(data.data)
                    window.location.reload(true)
                }  
            })
            layer.msg('配置添加成功', {icon: 1});
        }else{
            layer.alert('请填写正确的数据！', {icon: 6});
        }
    }
}
function storedel(self) {
    var file = self[0].value
    // var des = self.parents('tr').find("input[name='']").val();
    var data = {"filename":file}
    $.post("/store/del",data,function(data){
        window.location.reload(true)
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
            '<td><input type="text" name="type" value="'+ data[i].type +'" disabled="disabled"></td>' 
        tr += '<td>' +
            '<button type="button" class="btn btn-danger btn-sm" value="'+data[i].filename+'" onclick="storedel($(this))">删除</button>' +
            '</td>' +
            '</tr>'
    }

    ftr += '<tr>' +
        '<td><input type="file" name="file" ><div><label for="file"  style="position: absolute;left:90px">上传</label> </div></td>' +
        '<td><input type="text" name="type" ></td>' +
        '<td><button type="button" class="btn btn-success btn-sm" onclick="storeadd($(this))">增加</button></td>' +
        '</tr>';

    kc_config_table.children('tbody').html(tr);
    kc_config_table.children('tfoot').html(ftr);
}
