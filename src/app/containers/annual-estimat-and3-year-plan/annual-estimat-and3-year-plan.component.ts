import { Component, OnInit } from '@angular/core';
import { DanhMucService } from '../_services/danh-muc.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-annual-estimat-and3-year-plan',
  templateUrl: './annual-estimat-and3-year-plan.component.html',
  styleUrls: ['./annual-estimat-and3-year-plan.component.css']
})
export class AnnualEstimatAnd3YearPlanComponent implements OnInit {
  idLoading = true;
  errorMessage = "";
  donViTaos = [{ maDvi: "", tenDvi: "" }];
  donViTao = "";
  loaiBaoCao = "";
  baoCaos = [{ ma: "", ten: "" }];
  nam = "";
  tuNgay = "";
  denNgay = "";
  maBaoCao = "";
  danhSachBaoCao = [];
  constructor(private danhMucService: DanhMucService, private tokenStorage: TokenStorageService) { }


  ngOnInit(): void {
    this.danhMucService.dMLoaiBaoCao().subscribe(
      data => {
        if (data.statusCode == 0) {
          this.baoCaos = data.data;
        } else {
          this.errorMessage = "Có lỗi trong quá trình vấn tin!";
        }
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
      })

    this.danhMucService.dMDonViTao().subscribe(
      data => {
        if (data.statusCode == 0) {
          console.log(data.data);
          this.donViTaos = data.data;
        } else {
          this.errorMessage = "Có lỗi trong quá trình vấn tin!";
        }
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
      })

    this.idLoading = true;

  }

  onSubmit() {
    this.danhMucService.timBaoCao(this.loaiBaoCao, this.donViTao).subscribe(
      data => {
        if (data.statusCode == 0) {
          console.log(data.data);

          this.danhSachBaoCao = data.data;
        } else {
          this.errorMessage = "Có lỗi trong quá trình vấn tin!";
        }
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
      })

    this.idLoading = true;
    console.log(this.nam, this.tuNgay, this.denNgay, this.donViTao, this.maBaoCao, this.loaiBaoCao);

  }
}
