create table pinjam_buku (
	id bigint primary key generated always as identity not null,
	Nama_Buku varchar(100) not null,
	Nama_Peminjam varchar(50) not null,
	Pengembalian boolean ,
	is_active boolean ,
	create_by varchar(50)not null,
	create_date date not null,
	modify_by varchar (50),
	modify_date date
);

select * from pinjam_buku pb 