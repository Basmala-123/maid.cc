import { Component, EventEmitter, Output } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() open: EventEmitter<boolean> = new EventEmitter();
  public notFound =false;
  constructor(private router: Router, private _dashboardService: DashboardService) { }
  clickMenu() {
    this.open.emit(true);
  };
  onSearch(event: any): void {
    const userId = event.target.value;
    if (userId) {
      this._dashboardService.getUserById(userId).subscribe(
        data => {
          if (data && data.data) {
            this._dashboardService.notFound = false;
            this.router.navigate(['/dashboard/users', userId]);
          } else {
            this._dashboardService.notFound = true;
          }
        },
        error => {
          this._dashboardService.notFound = true;
        }
      );
    }
    else {
      this.router.navigate(['/dashboard/users']);
    } 
  }
}

