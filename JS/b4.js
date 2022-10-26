/**
 * Khói 1: Nhập vào 3 cạnh dài
 * Khối 2: Các bước xử lý
 *  B1: Tạo 3 cạnh dài để nhập vào
 *  B2: Xử lý phân loại:
 *  Nếu:
 *     + 3 cạnh bằng là tam giác dều 
 *     + 2 cạnh bằng là tam giác cân 
 *     + Bình phương 1 cạnh bằng tổng bình phương 2 cạnh còn lại thì là tam giác vuông 
 *     + Còn lại là tam giác thường
 * Khối 3: Xuất ra kết quả
 */


  function loaiTamGiac() {
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);
    if  (a == "" || b == "" || c == "") {
      document.getElementById("loaiTamGiac").innerHTML = "Mời nhập thêm";

    } else {
      if (
       a + b > c &&
        b + c > a &&
        c + a > b
      ) {
        if  (a == c && b == c) {
          document.getElementById("loaiTamGiac").innerHTML = "Tam giác đều";
        } else if  (a == b || a == c || b == c) {
          document.getElementById("loaiTamGiac").innerHTML = "Tam giác cân";

        } else if (
          Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2) ||
          Math.pow(b, 2) == Math.pow (a, 2) + Math.pow(c, 2) ||
          Math.pow(c, 2) == Math.pow (a, 2) + Math.pow(b, 2)
        ) {
          document.getElementById("loaiTamGiac").innerHTML = "Tam giác vuông"
        } else {
          document.getElementById("loaiTamGiac").innerHTML = "Tam giác thường"

        }
      } else {
        document.getElementById("loaiTamGiac").innerHTML = "Không đúng dữ liệu"
      }
    }

  }
  document.getElementById("duDoan").onclick = loaiTamGiac;