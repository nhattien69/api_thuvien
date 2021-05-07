insert into [Sach]
(
    [IdSach],
    [IdTacGia],
    [IdTheLoai],
    [IdNhaXuatBan],
    [TenSach],
    [MoTa],
    [NamSanXuat],
    [SoLuong],
    [HinhAnh]
)
values (
    @IdSach,
    @IdTacGia,
    @IdTheLoai,
    @IdNhaXuatBan,
    @TenSach,
    @MoTa,
    @NamSanXuat,
/*     @.select COUNT [IdDauSach]
    from [dbo].[DauSach]
    where [IdSach] = @IdSach  and [TinhTrang] = (N'Tốt')), */
    @HinhAnh
)
SELECT SCOPE_IDENTITY() as IdSach