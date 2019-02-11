function desnodeadd(self) {
    var data = []
    var file = ((self.parents('tr').find("input[type='file']").val()).split("\\"))[2];
    var fileobj = self.parents('tr').find("input[type='file']").get(0).files[0];
    var title = self.parents('tr').find("input[name='title']").val();
    var content = self.parents('tr').find("input[name='content']").val();
    var tag = self.parents('tr').find("input[name='tag']").val();
    if (!file ||!title ||!content ) {
        layer.alert('请填写正确的数据！', {icon: 6});
    } else {
            var formData = new FormData();
            formData.append("file",fileobj)
            formData.append("img_name",file)
            formData.append("title",title)
            formData.append("content",content)
            formData.append("tag",tag)
            $.ajax({  
                url: "/des/node/add", 
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
    }
}
function desnodedel(self) {
    var title = self[0].value
    var data = {"title":title}
    $.post("/des/node/del",data,function(data){
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
            '<td><input type="text" name="title" value="'+ data[i].title +'" disabled="disabled"></td>' 
            '<td><input type="text" name="content" value="'+ data[i].content +'" disabled="disabled"></td>' 
            '<td><input type="text" name="tag" value="'+ data[i].tag +'" disabled="disabled"></td>' 
        tr += '<td>' +
            '<button type="button" class="btn btn-danger btn-sm" value="'+data[i].title+'" onclick="desdel($(this))">删除</button>' +
            '</td>' +
            '</tr>'
    }

    ftr += '<tr>' +
        '<td><input type="file" name="file" ><div><label for="file"  style="position: absolute;left:90px">上传</label> </div></td>' +
        '<td><input type="text" name="title" ></td>' +
        '<td><input type="text" name="content" ></td>' +
        '<td><input type="text" name="tag" ></td>' +
        '<td><button type="button" class="btn btn-success btn-sm" onclick="desadd($(this))">增加</button></td>' +
        '</tr>';

    kc_config_table.children('tbody').html(tr);
    kc_config_table.children('tfoot').html(ftr);
}
