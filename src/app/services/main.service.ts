import { Injectable } from "@angular/core";
import { DynamicClient } from "./dynamicClient";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private dynamicClient: DynamicClient
  ) { }

  public async getContacts() {
    await this.dynamicClient.getRequest('contacts').toPromise();
  }
}
