import { Component, OnInit } from '@angular/core';
import{DiscountOffers} from "../../ViewModels/discount-offers";
import {ICategory} from '../../ViewModels/icategory';
import {IProduct} from '../../ViewModels/iproduct';
import {Store} from '../../ViewModels/store' ;



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {

  public IsPurshased:boolean=false;
  public selectedDevice :number=0 ;
  public ProductList:IProduct[];
  public SelectedProduct :any;
  public CategoryList:ICategory[];
  ClientName:string="" ;
  Discount : DiscountOffers =DiscountOffers.TenPercent;
  Store : Store = new Store("AppStore",["Cairo","Alex"],"assets/1.jpg");
  constructor( ) { 

   this.ProductList=[
      {
      ID : 1 ,
      Name :"Iphone 7" ,
    	Quantity : 20,
    	Price : 100 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 1 ,      
     },
    {
      ID : 2 ,
      Name :"Samsung s8" ,
    	Quantity : 10,
    	Price : 200 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 1 ,      
    },
    {
      ID : 3 ,
      Name :"Oppo f7" ,
    	Quantity : 20,
    	Price : 300 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 1 ,      
    },
    {
      ID : 4 ,
      Name :"Toushiba Alarabi" ,
    	Quantity : 20,
    	Price : 300 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 2 ,      
    },
    {
      ID : 5 ,
      Name :"LG 2886E6" ,
    	Quantity : 20,
    	Price : 300 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 2,      
    },
    {
      ID : 6 ,
      Name :"Sony 6F566" ,
    	Quantity : 20,
    	Price : 300 ,
    	Img : "asset/1.jpg" ,
      CateogryID : 2,      
    },

    ]

    this.CategoryList=[
      {
        ID:1,
        Name:"phones",

      },
      {
        ID:2,
        Name:"TV",

      },

      
    ]
    
  this.onChange() ;
}


onChange() {

  if (this.selectedDevice==0)
         this.SelectedProduct=this.ProductList;
     else
       this.SelectedProduct = this.ProductList.filter((product)=>product.CateogryID==this.selectedDevice)

}

btnClick(){
  this.IsPurshased=!this.IsPurshased;
}



}
