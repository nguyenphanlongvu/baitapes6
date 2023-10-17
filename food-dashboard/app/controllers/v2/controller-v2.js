export let rederFoodList = (foodArr) => {
    console.log("😃 - rederFoodList - foodArr:", foodArr)
    let contentHTML= "";
    foodArr.forEach((food) => {
        let {id,ten,gia,loai,tinhTrang,moTa, hinhAnh} = food;
        let trString = `<tr>
                   <td>${id}</td>
                   <td>${ten}</td>
                   <td>${loai}</td>
                   <td>${gia}</td>
                   <td>${khuyenMai}</td>
                   <td>0</td>
                   <td>${tinhTrang}</td>
                   <td><button onclick="deleteFood(${id})" class = " btn btn-danger">XOÁ </button><td/>
                   <td><button onclick="editFood('${id}')" class = " btn btn-primary">Sửa </button><td/>
        </tr>`;
        contentHTML = contentHTML + trString;

    });
    document.getElementById("tbodyFood").innerHTML = contentHTML








    
};
const monChay = "loai1"
const monMan = "loai2"
const chay = true;
const man = false;
const tinhTrangCon = "0"
const tinhTrangHet = "1"
// loai :true chay, false mặn
export let showDataForm = (Food) => {
    let {id, ten,loai,gia,khuyenMai,tinhTrang,hinhAnh,moTa} = Food;
    document.getElementById("foodID").value = id;
    document.getElementById("tenMon").value = ten;
    document.getElementById("loai").value = loai == true ? "loai1" : "loai2";
    document.getElementById("giaMon").value = gia;
    document.getElementById("khuyenMai").value = khuyenMai ;
    document.getElementById("tinhTrang").value = tinhTrang == conMon ? tinhTrangCon : tinhTrangHet;
    document.getElementById("hinhMon").value = hinhAnh;
    document.getElementById("moTa").value = moTa;
};