let getData = (idValue) => document.getElementById(idValue).value;




export let layThongTinTuForm = () => {
    let ma = getData("foodID")
    let ten = getData("tenMon")
    let loai = getData("loai")
    let gia = getData("giaMon")
    let khuyenMai = getData("khuyenMai")
    let tinhTrang = getData("tinhTrang")
    let hinhAnh = getData("hinhMon")
    let moTa = getData("moTa")
    console.log({
        ma, // ma:ma
        ten,
        loai,
        gia,
        khuyenMai,
        tinhTrang,
        hinhAnh,
        moTa,

   
    });
    return {
        ma, // ma:ma
        ten,
        loai,
        gia,
        khuyenMai,
        tinhTrang,
        hinhAnh,
        moTa,
        tinhGKM:function(){
            return this.gia*(1-this.khuyenMai);
        },

   
    };

};


