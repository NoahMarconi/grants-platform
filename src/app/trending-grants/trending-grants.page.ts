import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-grants',
  templateUrl: './trending-grants.page.html',
  styleUrls: ['./trending-grants.page.scss'],
})
export class TrendingGrantsPage implements OnInit {

  constructor() { }

  approvedPayments =[
    {
      title:"Untitled Grant", 
      link:"https://grantlink.com",
      cost:"1,500",
      milestone:"1", 
      apuserimg : "avatar-03",
      apusername : "John Smith"
     }, {
      title:"Untitled Grant", 
      link:"https://grantlink.com",
      cost:"1,500",
      milestone:"1", 
      apuserimg : "avatar-04",
      apusername : "John Smith"
     }
   ]
   withdrawnPayments =[
    {
      title:"Untitled Grant", 
      link:"https://grantlink.com",
      cost:"1,500",
      milestone:"1", 
      apuserimg : "avatar-03",
      apusername : "John Smith",
      wptime:"Withdrawn on 02.02.2019"
     }, {
      title:"Untitled Grant", 
      link:"https://grantlink.com",
      cost:"1,500",
      milestone:"1", 
      apuserimg : "avatar-04",
      apusername : "John Smith",
      wptime:"Withdrawn on 02.02.2019"
     }, {
      title:"Untitled Grant", 
      link:"https://grantlink.com",
      cost:"1,500",
      milestone:"1", 
      apuserimg : "avatar-04",
      apusername : "John Smith",
      wptime:"Withdrawn on 02.02.2019"
     }
   ]
  ngOnInit() {
  }

}
