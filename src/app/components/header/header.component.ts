import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../_models/user';
import { AuthenticationService } from '../../_services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser!: User;
  constructor(
    private router: Router,
    private authentificationService: AuthenticationService
  ) {
    this.authentificationService.currentUser.subscribe(x => this.currentUser = x);
  }
  logout(){
    this.authentificationService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
