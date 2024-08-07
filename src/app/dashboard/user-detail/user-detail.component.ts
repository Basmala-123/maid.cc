import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
// import { Router } from '';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit{

  public user :any;
constructor(
  private _activeRoute:ActivatedRoute,
  private _dashboardService:DashboardService,
  private _router:Router
){}

  ngOnInit(): void {
      const userId = this._activeRoute.snapshot.paramMap.get('id'); 
      if(userId){
        this.getUserData(+userId)
      }
  
  }
  getUserData(id:number){
    // this._dashboardService.getUserById(id).subscribe(data => {
    //   this.user = data.data;
    // });
    this._dashboardService.getUserById(id).subscribe({
      next:(res)=>{
        this._dashboardService.notFound = false;
        this.user = res.data;
        console.log(this._dashboardService.notFound);
        
      },
      error:(err)=>{
        console.log("err",this._dashboardService.notFound);
        this._dashboardService.notFound = true;
      },

    })
  }

  back(){
    this._router.navigate(['/dashboard/users']);
  }

}
