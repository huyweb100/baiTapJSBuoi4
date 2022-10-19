/**
 * Khối 1: Nhập 3 số 
 * 
 * Khối 2: Các bước xử lý
 *  B1: Nhập vào 3 số (a, b, c)
 *  B2: so sánh 
 *      Nếu: a > b, b > c => //? c, b, a
 *      Nếu: a > b, a > c, c > b => //? b, c, a     
 *      Nếu: b > a, b > c, a > c //? c,a,b
 *      Nếu: a < b, a < c, c < b => //? a,c,b
 *      Nếu: a < b, b < c =>   //? a, b, c     
 *      Nếu: c>a, c>b, a>b     //? b, a, c
 *      
 *      
 *      Nếu 
 * Khối 3: xuất 3 số theo thứ tự từ bé đến lớn */



function soSanh() {
    var a = document.getElementById("so1").value;
    var b = document.getElementById("so2").value;
    var c = document.getElementById("so3").value;
    if (a > b && b > c) {
        console.log(c, b, a);
        document.getElementById("ketQua").innerHTML = c + "," + b + "," + a;
    } else if (a > b && a > c && c > b) {
        document.getElementById("ketQua").innerHTML = b + c + a
    } else if (b > a && a > c) {
        document.getElementById("ketQua").innerHTML = c + "," + a + "," + b;
    } else if (b > a && b > c && c > a) {
        document.getElementById("ketQua").innerHTML = a + "," + c + "," + b;
    } else if (c > b && b > a) {
        document.getElementById("ketQua").innerHTML = a + "," + b + "," + c;
    } else {
        document.getElementById("ketQua").innerHTML = b + "," + a + "," + c;
    }
}

document.getElementById("btnSoSanh").onclick = soSanh;

