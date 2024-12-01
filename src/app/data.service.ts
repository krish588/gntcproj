import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private _url = "/assets/data.json";
  // private apiUrl = 'https://api.instantwebtools.net/v1/airlines';
  // private apiUrl = 'https://script.googleusercontent.com/macros/echo?user_content_key=hXfdb-ySR8cUHKDrAVCW2p98H1X_XzFZ4Y56AZxJ0uGKt1sOQOQJgNBIeVh14lne_eKpEz3nSUmTb-Vr3r4eC6ckWDujAUJtm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEyRYshRoOlR57kzHnpQ8cWsyQRK7_BOD7B0ME6PG01y73qRYp8U0w9D68KXuUBP6_x81qWVknYn1wASQPRSYCKrCCB74J2-d9z9Jw9Md8uu&lib=M_HSCK43US7y_op2yhnmIpSBcyTm5vB1y';

  constructor(private http : HttpClient) {   }

  // getData(){
  //   return this.http.get(this.apiUrl);
  // }
  getdata() {
    return this.http.get<any>("https://script.googleusercontent.com/macros/echo?user_content_key=hXfdb-ySR8cUHKDrAVCW2p98H1X_XzFZ4Y56AZxJ0uGKt1sOQOQJgNBIeVh14lne_eKpEz3nSUmTb-Vr3r4eC6ckWDujAUJtm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEyRYshRoOlR57kzHnpQ8cWsyQRK7_BOD7B0ME6PG01y73qRYp8U0w9D68KXuUBP6_x81qWVknYn1wASQPRSYCKrCCB74J2-d9z9Jw9Md8uu&lib=M_HSCK43US7y_op2yhnmIpSBcyTm5vB1y");
  }
}
