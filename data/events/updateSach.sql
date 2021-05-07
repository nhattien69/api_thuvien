update [dbo].[Sach]
set [IdTheLoai]=@IdTheLoai,
    [IdNhaXuatBan]=@IdNhaXuatBan,
    [TenSach]=@TenSach,
    [MoTa]=@MoTa,
    [NamSanXuat]=@NamSanXuat,
    [HinhAnh]=@HinhAnh
where [IdSach]=@IdSach

SELECT *
from [dbo].[Sach]
where [IdSach]=@IdSach