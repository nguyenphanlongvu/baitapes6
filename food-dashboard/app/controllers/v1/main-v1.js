import { layThongTinTuForm } from "./controller-v1.js";



let themMon = () => {
 let data = layThongTinTuForm();
 console.log("😃 - themMon - data:", data)
 // destructuring

let {ma, ten,loai,gia,khuyenMai,tinhTrang,hinhAnh,moTa} = data;
console.log("😃 - themMon - hinhAnh:", document.getElementById("imgMonAn"))

//show data lên layout 
document.getElementById("spMa").innerText= ma ;
document.getElementById("spTenMon").innerText = ten ;
document.getElementById("spGia").innerText = gia ;
document.getElementById("spLoaiMon").innerText = loai == "loai1"?"chay":"Mặn";
document.getElementById("spTT").innerText = tinhTrang == "0" ? "hết" :"còn";
document.getElementById("imgMonAn").src = hinhAnh ;
document.getElementById("pMoTa").innerText = moTa ;
document.getElementById("spKM").innerText = khuyenMai + "%"
document.getElementById("spGiaKM").innerText = data.tinhGKM();
};
window.themMon = themMon;
// cos () => 1