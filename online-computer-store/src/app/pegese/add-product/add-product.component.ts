import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ComputerService } from 'src/app/servicess/computer.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
constructor(private service:ComputerService,private router:Router){}

 product = {
    brand: "",
    cpu: "",
    ram: 0,
    price: 0
}
onSubmit(data: NgForm) {
console.log(data.value);
this.service.addComputer(data.value).subscribe((res)=>{
  data.reset()
  console.log(res);
  this.router.navigate(['productView'])
},err=>{
  console.log(err);
  
})
}


}
