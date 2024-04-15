function layThongTinTuForm(){
    var ma = document.getElementById('txtMa').value
    var ten = document.getElementById('txtTen').value
    var email = document.getElementById('txtEmail').value
    var matKhau = document.getElementById('txtMKhau').value
    var toan = document.getElementById('txtToan').value*1
    var ly = document.getElementById('txtLy').value*1
    var hoa = document.getElementById('txtHoa').value*1
    var sv = new SinhVien(ma,ten,email,matKhau,toan,ly,hoa)
    return sv
}
function renderTable(arr){
    var content = ''
    for(var i=0; i<arr.length; i++){
        var sv = arr[i]
        var trString = `
        <tr>
            <td>${sv.ma}</td>
            <td>${sv.ten}</td>
            <td>${sv.email}</td>
            <td>${sv.dtb().toFixed(2)}</td>
            <td>
            <button class="btn btn-danger" onclick="xoaSV('${sv.ma}')">Xóa</button>
            <button class="btn btn-success" onclick="suaSV('${sv.ma}')">Sửa</button>
            </td>
        </tr>`
        content += trString
    }
    document.getElementById('tBody').innerHTML = content
}