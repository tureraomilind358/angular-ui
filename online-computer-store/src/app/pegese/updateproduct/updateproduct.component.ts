import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputerService } from 'src/app/servicess/computer.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent {
  constructor(private service:ComputerService, private activetedRoute:ActivatedRoute,private router:Router) { }
updataProduct:any={
  id: 0,
  brand: "",
  cpu: "",
  ram: 0,
  price:0 
}
productId:any;
  ngOnInit(): void {
    this.activetedRoute.params.subscribe((id)=>{
      console.log(id['id']);
      this.productId = id['id'];
    })

    this.service.getComputersById(this.productId).subscribe(data=>{
      console.log(data);
      this.updataProduct = data
      
    })
  }

  


onSubmit(updateData: NgForm) {
  console.log(updateData.value);
  this.service.updateComputerById(this.productId,updateData.value).subscribe(res=>{
    console.log(res);
    alert("Product Updated Successfully");
    this.router.navigate(['/productView']);
  }
  )
}

}
