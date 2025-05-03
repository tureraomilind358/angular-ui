import { Component, OnInit } from '@angular/core';
import { ComputerService } from 'src/app/servicess/computer.service';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
  constructor(private service:ComputerService){}
  products:any;
  ngOnInit(): void {
    this.service.getAllComputers().subscribe((data:any)=>{
      this.products = data;
      console.log(this.products);
    },(error:any)=>{
      console.log(error);
    })
  }

  deleteProduct(id:any){
    console.log(id);
    this.service.deleteProductById(id).subscribe(res=>{
      console.log(res);
      alert("Product Deleted Successfully");
      window.location.reload()
    })
  }

}
