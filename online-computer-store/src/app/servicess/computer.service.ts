import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  constructor(private http:HttpClient) { }
  baseUrl = "http://localhost:8080/api";

  addComputer(addData:any){
    return this.http.post(`${this.baseUrl}/computers`,addData);
  }

  getAllComputers(){
    return this.http.get(`${this.baseUrl}/computers`)
  }

  getComputersById(id:any){
    return this.http.get(`${this.baseUrl}/computers/`+id);
  }

  updateComputerById(id:any, updateData:any){
    return this.http.put(`${this.baseUrl}/computers/`+id,updateData);
  }

  deleteProductById(id:any){
    return this.http.delete(`${this.baseUrl}/computers/`+id);
  }

}
