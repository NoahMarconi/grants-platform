import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-grants',
  templateUrl: './latest-grants.page.html',
  styleUrls: ['./latest-grants.page.scss'],
})
export class LatestGrantsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  latestGrants =[
    {
      title:"Untitled Grant", 
      link:"https://grantlink.com",
      managersTitle:"Grant Manager",
      managerName:"John Smith",
      managerImg:"avatar-02",
      recepientsTitle:"Grant Recepients",
      cost:"1,500",
      totalCost:"5,000", 
      imgs :["avatar-02", "avatar-03", "avatar-04"],
      reIimgs :["avatar-02", "avatar-03", "avatar-04","avatar-02", "avatar-03", "avatar-04"]
     }, {
      title:"Untitled Grant", 
      link:"https://grantlink.com",
      managersTitle:"Grant Manager",
      managerName:"John Smith",
      managerImg:"avatar-03",
      recepientsTitle:"Grant Recepients",
      cost:"1,500",
      totalCost:"5,000", 
      imgs :["avatar-02", "avatar-03", "avatar-04"],
      reIimgs :["avatar-02", "avatar-03", "avatar-04","avatar-02", "avatar-03"]
     }, {
      title:"Untitled Grant", 
      link:"https://grantlink.com",
      managersTitle:"Grant Manager",
      managerName:"John Smith",
      managerImg:"avatar-04",
      recepientsTitle:"Grant Recepients",
      cost:"1,500",
      totalCost:"5,000", 
      imgs :["avatar-02", "avatar-03", "avatar-04"],
      reIimgs :["avatar-02", "avatar-03", "avatar-04","avatar-02"]
     }
   ]

}
