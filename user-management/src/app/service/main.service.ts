import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }
  base_Url = "http://localhost:9090";

  emailCheck(email: any) {
    return this.http.get(`${this.base_Url}/emailcheck/${email}`,{responseType: 'text'});
  }

  getCountry() {
    return this.http.get(`${this.base_Url}/countries`);
  }
  getState(countryId: any) {
    return this.http.get(`${this.base_Url}/states/${countryId}`);
  }
  getCity(stateId: any) {
    return this.http.get(`${this.base_Url}/cities/${stateId}`);
  }

  registerUser(data: any) {
    return this.http.post(`${this.base_Url}/saveUser/`, data, {responseType: 'text'});
  }

}
