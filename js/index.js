//Bài 1
document.getElementById("handleThi").onclick = function () {
  // B1: xác định input
  var diemChuan = +document.getElementById("diemChuan").value;
  var diem1 = +document.getElementById("diem1").value;
  var diem2 = +document.getElementById("diem2").value;
  var diem3 = +document.getElementById("diem3").value;
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = +document.getElementById("doiTuong").value;
  var diemKhuVuc, diemDoiTuong;
  // B2: xử lý
  switch (khuVuc) {
    case "X":
      diemKhuVuc = 0;
    case "A":
      diemKhuVuc = 2;
      break;
    case "B":
      diemKhuVuc = 1;
      break;
    case "C":
      diemKhuVuc = 0.5;
      break;
    default:
      diemKhuVuc = 0;
      break;
  }
  switch (doiTuong) {
    case 0:
      diemDoiTuong = 0;
    case 1:
      diemDoiTuong = 2.5;
      break;
    case 2:
      diemDoiTuong = 1.5;
      break;
    case 3:
      diemDoiTuong = 1;
      break;
    default:
      diemDoiTuong = 0;
      break;
  }
  var diemUuTien = diemKhuVuc + diemDoiTuong;
  var diemTong = diem1 + diem2 + diem3 + diemUuTien;
  if (diemTong >= diemChuan && diem1 != 0 && diem2 != 0 && diem3 != 0)
    html = "Thí sinh đã ĐẬU";
  else html = "Thí sinh đã RỚT";
  // B3: hiển thị
  document.getElementById("resultThi").innerHTML = `
  Tổng số điểm thí sinh đạt được: ${diemTong} <br/>
  ${html} 
`;
};
// Biến tiền toàn cục
const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
//Bài 2
document.getElementById("handleKw").onclick = function () {
  // B1: xác định input
  var tenKw = document.getElementById("tenKw").value;
  var soKw = +document.getElementById("soKw").value;
  // B2: xử lý
  var tongTien = 0;
  var gia50KwDau = 500;
  var gia50KwKe = 650;
  var gia100KwKe = 850;
  var gia150KwKe = 1100;
  var giaKwConLai = 1300;

  if (soKw <= 50) {
    tongTien = gia50KwDau * soKw;
  } else if (soKw > 50 && soKw <= 100) {
    tongTien = gia50KwDau * 50 + gia50KwKe * (soKw - 50);
  } else if (soKw > 100 && soKw <= 200) {
    tongTien = gia50KwDau * 50 + gia50KwKe * 50 + gia100KwKe * (soKw - 100);
  } else if (soKw > 200 && soKw <= 350) {
    tongTien =
      gia50KwDau * 50 +
      gia50KwKe * 50 +
      gia100KwKe * 100 +
      gia150KwKe * (soKw - 200);
  } else {
    tongTien =
      gia50KwDau * 50 +
      gia50KwKe * 50 +
      gia100KwKe * 100 +
      gia150KwKe * 150 +
      giaKwConLai * (soKw - 350);
  }
  // B3: hiển thị
  document.getElementById("resultKw").innerHTML = `
  Họ Tên : ${tenKw} <br/>
  Tiền điện: ${VND.format(tongTien)}
`;
};
//Bài 3
document.getElementById("handleThue").onclick = function () {
  // B1: xác định input
  var ten = document.getElementById("ten").value; 
  var thuNhap = +document.getElementById("thuNhap").value;
  var soNguoi = +document.getElementById("soNguoi").value;
  var tienThue = 0;
  // B2: xử lý
  var thuNhapChiuThue = thuNhap - 4000000 - soNguoi * 1600000;
  if (thuNhapChiuThue <= 60e+6) {
    tienThue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue > 60e+6 && thuNhapChiuThue <= 120e+6) {
    tienThue = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue > 120e+6 && thuNhapChiuThue <= 210e+6) {
    tienThue = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue > 210e+6 && thuNhapChiuThue <= 384e+6) {
    tienThue = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue > 384e+6 && thuNhapChiuThue <= 624e+6) {
    tienThue = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue > 624e+6 && thuNhapChiuThue <= 960e+6) {
    tienThue = thuNhapChiuThue * 0.3;
  } else tienThue = thuNhapChiuThue * 0.35;
  // B3: hiển thị
  document.getElementById("resultThue").innerHTML = `
  Họ Tên : ${ten} <br/>
  Tiền thuế thu nhập cá nhân: ${VND.format(tienThue)}
`;
};
//Bài 4
document.getElementById("handleCap").onclick = function () {
  // B1: xác định input
  var maKhachHang = document.getElementById("maKhachHang").value; 
  var soKetNoi = +document.getElementById("soKetNoi").value;
  var soKenh = +document.getElementById("soKenh").value;
  var phiXuliHoaDon, phiDichVuCoBan, phiThueKenh;
  var tienCap = 0;
  var mySelect = document.getElementById("mySelect").value; 
  // B2: xử lý
  if (mySelect == 'nhaDan') {
    phiXuliHoaDon = 4.5; phiDichVuCoBan = 20.5; phiThueKenh = 7.5;
    tienCap = phiXuliHoaDon + phiDichVuCoBan + phiThueKenh * soKenh; 
  }
  else if (mySelect == 'doanhNghiep') {
    phiXuliHoaDon = 15; phiDichVuCoBan = 75; phiThueKenh = 50;
    if (soKetNoi > 10)
    tienCap = phiXuliHoaDon + phiDichVuCoBan + phiThueKenh*soKenh + (soKetNoi - 10)*5;
    else
    tienCap = phiXuliHoaDon + phiDichVuCoBan + phiThueKenh*soKenh;
  }
  // B3: hiển thị
  document.getElementById("resultCap").innerHTML = `
  Mã Khách Hàng : ${maKhachHang} <br/>
  Tiền cáp: ${USDollar.format(tienCap)}
  `;
};