import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements AfterViewInit {
  constructor(private cdr: ChangeDetectorRef){}
  ngAfterViewInit(): void {
    this.checkScreenSize()
  }
  @ViewChild('drawer') public drawer !: MatDrawer;
  openSideNav !: boolean;

  menuItems = [
    { name: 'Dashboard', icon: 'dashboard', route: '/' },
    { name: 'Users', icon: 'people', route: '/users' },
    { name: 'Settings', icon: 'settings', route: '/settings' },
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }
  checkScreenSize() {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 1024) {
        this.openSideNav = false;
      }else{
        this.openSideNav = true;
      }
      this.cdr.detectChanges();
    }
  }

  clickMenu() {
    this.openSideNav = false
  }
  ngOnChanges(): void {
    this.detectSideNavChanges();
  }
  sideNavOpen(event: any) {
    this.drawer.toggle()
  }
  detectSideNavChanges(): void {
    (this.openSideNav) ? this.drawer.open() : this.drawer?.close();
  };
  logout() { }

}
