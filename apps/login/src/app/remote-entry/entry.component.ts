import { Component } from '@angular/core';
import { UserService } from '@ng-mfe/shared/data-access-user';

@Component({
  selector: 'ng-mfe-login-entry',
  template: `
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col max-w-md mx-auto">
    <form (ngSubmit)="login()">
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="username" [(ngModel)]="username" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" name="password" [(ngModel)]="password" id="password" type="password" placeholder="******************">
      <p class="text-red text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="submit">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        Forgot Password?
      </a>
    </div>
    </form>
    <div *ngIf="isLoggedIn$ | async">User is logged in!</div>
</div>
  `,
})
export class RemoteEntryComponent {
  public username = '';
  public password = '';

  public isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private userService: UserService) {}

  public login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}