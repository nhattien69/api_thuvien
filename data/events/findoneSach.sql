SELECT Sach.IdSach, TacGia.TenTacGia, TheLoai.TheLoai, NhaXuatBan.TenNhaXuatBan, Sach.TenSach, Sach.MoTa,Sach.NamSanXuat,Sach.SoLuong,Sach.HinhAnh
FROM Sach
inner join TacGia on Sach.IdTacGia = TacGia.IdTacGia
inner join TheLoai on Sach.IdTheLoai = TheLoai.IdTheLoai
inner join NhaXuatBan on Sach.IdNhaXuatBan = NhaXuatBan.IdNhaXuatBan
WHERE [IdSach]=@IdSach