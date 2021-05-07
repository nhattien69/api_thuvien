update [dbo].[SinhVien]
set [HoTen]=@HoTen,
    [MatKhau]=@MatKhau,
    [SoDT]=@SoDT,
    [TinhTrang]=@TinhTrang
where [Email]=@Email

SELECT *
from [dbo].[SinhVien]
where [Email]=@Email