/**Mô hình 3 khối
 *Khối 1: Nhập thông tin
 * Khối 2: Xử lý 
 *  B1: Tạo value ở các option
 *  B2:
 * Khối 3: xuất dữ liệu chào
 */

function guiLoiChao() {
  var valueOpttions = document.getElementById('exampleFormControlSelect1').value;

  if (valueOpttions == 'n') {
    document.getElementById("chao").innerHTML = "Xin chào người lạ ơi";
  } else if (valueOpttions == 'b') {
    document.getElementById("chao").innerHTML = "Xin chào Bố";
  } else if (valueOpttions == 'm') {
    document.getElementById("chao").innerHTML = "Xin chào Mẹ";
  } else if (valueOpttions == 'a') {
    document.getElementById("chao").innerHTML = "Xin chào Anh Trai";
  } else if (valueOpttions == 'e') {
    document.getElementById("chao").innerHTML = "Xin chào Em Gái";
  }
}

document.getElementById("guiLoiChao").onclick = guiLoiChao;