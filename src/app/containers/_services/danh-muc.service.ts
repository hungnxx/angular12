import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://192.168.1.185:8094/';


@Injectable({
  providedIn: 'root'
})
export class DanhMucService {
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }
  token = "Bearer " + this.tokenStorage.getUser().data.token;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": this.token })
  };

  dMLoaiBaoCao(): Observable<any> {
    return this.http.get(AUTH_API + 'dmuc-loai-bcao/danh-sach/tat-ca', this.httpOptions);
  }
  dMDonViTao(): Observable<any> {
    return this.http.get(AUTH_API + 'dmuc-don-vi/danh-sach/tat-ca', this.httpOptions);
  }
  timBaoCao(maLoaiBaoCao: String, maDonVi: String): Observable<any> {
    return this.http.get(AUTH_API + 'bao-cao/tong-hop/' + maLoaiBaoCao + "/" + maDonVi, this.httpOptions);
  }
}
