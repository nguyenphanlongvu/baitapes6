import { https } from "../../../service/service.js";
import { rederFoodList, showDataForm} from "./controller-v2.js";
import {layThongTinTuForm} from "../v1/controller-v1.js"

let fetchFoodList = () => {
    console.log('object');
    https.get("/Food").then((res) => {
   rederFoodList(res.data);
})
.catch((err) => {
    console.log(err);
});
// lần đầu khi load tang 

}


fetchFoodList();

function deleteFood(id) {
    console.log("😃 - deleteFood - id:", id)
    https.delete(`/Food/${id}`)
    .then((res)=> {
        // sau khi xoa thành công => gọi lại api lấy data mới nhất => update lay out
        console.log("😃 - .then - res:", res)
        fetchFoodList();
        
        
    })
    .catch((err) => {
        
        console.log("😃 - deleteFood - err:", err)
        
    });
      
}
window.deleteFood = deleteFood;
window.addFood = () => {
    $("exampleModal").modal("hide");
    console.log("yes");
    let Food = layThongTinTuForm();
    console.log("😃 - Food:", Food)
   
    https.post("/food", Food)
    .then((res)=> {
        console.log(res);
    })
    .catch((err) => {
        console.log("😃 - err:", err)
        
    });
    
};
window.editFood = (id) => {
    console.log("😃 - id:", id)
    /**
     * 1. mở modal
     * 2. gọi api lấy chi tiết
     * 3. show respone lên form
     * 
     */
    $("#exampleModal").modal("show");
    https.get(`/Food/${id}`)
    .then((res)=>{
        console.log("res");
        showDataForm(res.data);

        
    })
    .catch((err) => {
        console.log("err")
    })
    
};
// update 
window.updateFood =() => {
    $("#exampleModal").modal("hide")
    let Food = layThongTinTuForm();
    console.log("😃 - Food:", Food.ma)
   
    https.put(`/Food/${Food.ma}`,{...Food})
    .then((res)=> {
        fetchFoodList();
        console.log(res);
    })
    .catch((err) => {
        console.log("😃 - err:", err)
        
    });
}