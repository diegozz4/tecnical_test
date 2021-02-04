import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

import { environment } from 'src/environments/environment';

// .append('Authorization', 'Basic SUNYQ2FuZGlkYXRlOldlbGNvbWUyMDIx');

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DynamicClient {
  header: any;

  constructor(
    private http: HttpClient
  ) {
    this.header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': 'Basic ICXCandidate:Welcome2021'
      })
    }
  }

  /**
   * Método reutilizable tipo GET
   * @param partialEndPoint Cadena tipo string con el endpoint a realizar la solicitud
   */
  public getRequest(partialEndPoint: string) {
    console.log(this.header);

    return this.http.get(apiUrl + partialEndPoint, { headers: this.header })
      .pipe(
        map(res => {
          console.log(res);
        })
      )
  }

  // /**
  //  * Método reutilizable tipo POST
  //  * @param partialEndPoint Cadena tipo string con el endpoint a realizar la solicitud
  //  */
  // public postRequest(partialEndPoint: string, data?: any) {
  //   return this.http.post(apiUrl + partialEndPoint, data, { headers })
  //     .pipe(
  //       map(res => {
  //         console.log(res);
  //       })
  //     )
  // }

  // /**
  //  * Método reutilizable tipo PUT
  //  * @param partialEndPoint Cadena tipo string con el endpoint a realizar la solicitud
  //  */
  // public putRequest(partialEndPoint: string, data?: any) {
  //   return this.http.put(apiUrl + partialEndPoint, data, { headers })
  //     .pipe(
  //       map(res => {
  //         console.log(res);
  //       })
  //     )
  // }
}