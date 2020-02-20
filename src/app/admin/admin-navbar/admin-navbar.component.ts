import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/authService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router : Router
  ) { }

  ngOnInit() {
        this.verifyAdmin();
  }
  verifyAdmin() {
    this.authService.verify().subscribe(res =>{
        var object = res.json();
        if (!object.isAdmin || !object.isModerator ){
        this.router.navigate(['login']);
        }
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }


}
