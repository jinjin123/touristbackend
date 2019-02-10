function user_index_add(self) {
    var data = []
    var file = ((self.parents('tr').find("input[type='file']").val()).split("\\"))[2];
    var fileobj = self.parents('tr').find("input[type='file']").get(0).files[0];
    var des = self.parents('tr').find("input[name='des']").val();

    if (!file || !des) {
        layer.alert('请填写正确的数据！', {icon: 6});
    } else {
            var formData = new FormData();
            formData.append("file",fileobj)
            formData.append("img_name",file)
            formData.append("des",des)
            $.ajax({  
                url: "/user/index/add", 
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
function user_index_del(self) {
    var des = self.parents('tr').find("input[name='des']").val();
    var data = {"des":des}
    $.post("/user/index/del",data,function(data){
        renderTbody(data.data)
    })
    // $.ajax({  
    //     url: "/user/index/del", 
    //     type: 'POST',  
    //     data: formData,  
    //     dataType: 'JSON',  
    //     cache: false,  
    //     processData: false,  
    //     contentType: false,
    //     success:function(data){
    //         console.log(data)
    //         // renderTbody(data.data)
    //     }  
    // })
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
        tr += '<td>' +
            '<button type="button" class="btn btn-danger btn-sm" onclick="user_index_del($(this))">删除</button>' +
            '</td>' +
            '</tr>'
    }

    ftr += '<tr>' +
        '<td><input type="file" name="file" ><div><label for="file"  style="position: absolute;left:90px">上传</label> </div></td>' +
        '<td><input type="text" name="des" ></td>' +
        '<td><button type="button" class="btn btn-success btn-sm" onclick="user_index_add($(this))">增加</button></td>' +
        '</tr>';

    kc_config_table.children('tbody').html(tr);
    kc_config_table.children('tfoot').html(ftr);
}

function regadd(self){
    var data = []
    var file = ((self.parents('tr').find("input[type='file']").val()).split("\\"))[2];
    var fileobj = self.parents('tr').find("input[type='file']").get(0).files[0];

    if (!file) {
        layer.alert('请填写正确的数据！', {icon: 6});
    } else {
            var formData = new FormData();
            formData.append("file",fileobj)
            formData.append("img_name",file)
            $.ajax({  
                url: "/user/register/add", 
                type: 'POST',  
                data: formData,  
                dataType: 'JSON',  
                cache: false,  
                processData: false,  
                contentType: false,
                success:function(data){
                    console.log(data)
                    regrenderTbody(data.data)
                }  
            })
            layer.msg('配置添加成功', {icon: 1});
    } 
}
function regdel(self) {
    var filename =self[0].value
    // var des = self.parents('tr').find("input[name='des']").val();
    var data = {"filename":filename}
    $.post("/user/register/del",data,function(data){
        console.log(data)
        regrenderTbody(data.data)
    })
    layer.msg('配置添加成功', {icon: 1});
}
function regrenderTbody(data) {
    var tr = '';
    var ftr = '';
    var kc_config_table = $('#kc_config_table');
    for (var i=0;i<data.length;i++) {
        tr += '<tr>' +
            '<td><image src="'+ data[i].path +'" style="height:5rem;width:5rem"></td>' 
        tr += '<td>' +
            '<button type="button" class="btn btn-danger btn-sm" value="'+data[i].filename + '"  onclick="regdel($(this))">删除</button>' +
            '</td>' +
            '</tr>'
    }

    ftr += '<tr>' +
        '<td><input type="file" name="file" ><div><label for="file"  style="position: absolute;left:90px">上传</label> </div></td>' +
        '<td><button type="button" class="btn btn-success btn-sm" onclick="regadd($(this))">增加</button></td>' +
        '</tr>';

    kc_config_table.children('tbody').html(tr);
    kc_config_table.children('tfoot').html(ftr);
}