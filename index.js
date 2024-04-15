var dssv = []
var dataJSON = localStorage.getItem('DSSV')
if(dataJSON !== null){
    var dssvRaw = JSON.parse(dataJSON)
    for(var i=0; i<dssvRaw.length; i++){
        var data = dssvRaw[i]
        var sv = new SinhVien(data.ma,data.ten,data.email,data.matKhau,data.toan,data.ly,data.hoa)
        dssv.push(sv)
    }
    renderTable(dssv)
}
function themSV(){
    var sv = layThongTinTuForm()
    dssv.push(sv)
    var dataJSON = JSON.stringify(dssv)
    localStorage.setItem('DSSV',dataJSON)
    renderTable(dssv)
    resetForm()
}
function xoaSV(id){
    var index = dssv.findIndex(function(item){
        return item.ma == id
    })
    dssv.splice(index,1)
    renderTable(dssv)
}
function suaSV(id){
    var index = dssv.findIndex(function(item){
        return item.ma == id
    })
    var sv = dssv[index]
    document.getElementById('txtMa').value = sv.ma
    document.getElementById('txtTen').value = sv.ten
    document.getElementById('txtEmail').value = sv.email
    document.getElementById('txtMKhau').value = sv.matKhau
    document.getElementById('txtToan').value = sv.toan
    document.getElementById('txtLy').value = sv.ly
    document.getElementById('txtHoa').value = sv.hoa
    document.getElementById('txtMa').readOnly = true
}
function resetForm(){
    document.getElementById('QLSV').reset()
    document.getElementById('txtMa').readOnly = false
}
function capNhat(){
    var sv = layThongTinTuForm()
    var index = dssv.findIndex(function(item){
        return item.ma == sv.ma
    })
    dssv[index] = sv
    renderTable(dssv)
    resetForm()
}