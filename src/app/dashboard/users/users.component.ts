import { Component, OnInit } from '@angular/core';
import { DashboardUser } from '../../interfaces/dashboard-User';
import { DashboardService } from '../../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{
  public currentPage: number = 1;
  public totalPages!: number ;
  public isShown!:boolean ;
  public dashboardUser: DashboardUser[] = []
  ngOnInit(): void {
    this.getDashboardUser();
  }

  constructor(
    private _dashboardService: DashboardService,
    private _router : Router,
  ){
     this.isShown = this._dashboardService.notFound ;
  }

  getDashboardUser(){
    this._dashboardService.getAllUser(this.currentPage).subscribe({
      next:(res)=>{
        this.dashboardUser = res.data;
        this.totalPages = res.total_pages;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.getDashboardUser();
  }
  showDetail(userId:number){
    this._router.navigate(['/dashboard/users', userId]);
  }
}
