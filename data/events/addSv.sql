insert into [SinhVien]
(
    [HoTen],
    [Email],
    [MatKhau],
    [SoDT],
    [NgayLamThe],
    [NgayHetHan],
    [TinhTrang]
)
values (
    @HoTen,
    @Email,
    @MatKhau,
    @SoDT,
    @NgayLamThe,
    @NgayHetHan,
    @TinhTrang
)
SELECT SCOPE_IDENTITY() as IdSV