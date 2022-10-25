/**Mô hình 3 khối
 * Khối 1: 
 * 
 * Khối 2: 
 * Khối 3: Xuất ra 
 */

function demSo() {
    var a = document.getElementById("soNguyen1").value
    var b = document.getElementById("soNguyen2").value
    var c = document.getElementById("soNguyen3").value
    var count = 0;
    if (a % 2=== 0) {
        count++;
        // count=count+1
        // count+=1
    }
    if(b % 2 ===0){
        count++;
    }
     if(c % 2 ===0){
        count++;
        
    }
    var countLe = 3 - count;
    // console.log(countLe);
    document.getElementById("demSo").innerHTML = "có " + count + " chẵn và " + countLe + " lẻ";
 }
document.getElementById("btnDem").onclick = demSo;