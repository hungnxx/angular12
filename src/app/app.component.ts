import { Component } from '@angular/core';
import { TokenStorageService } from './containers/_services/token-storage.service';
// declare var name: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  title: string | undefined;
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {

    // new name();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.data.roles;
      this.showAdminBoard = this.roles.includes('SYS_USER_DEL_CODE');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.data.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
