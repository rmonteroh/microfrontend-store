import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '@ng-mfe/shared/data-access-user';
import { createPopper } from "@popperjs/core";

@Component({
  selector: 'ng-mfe-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss']
})
export class UserDropdownComponent implements AfterViewInit {
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false })
  public btnDropdownRef!: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  public popoverDropdownRef!: ElementRef;

  constructor(private userService: UserService) {}

  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-end",
      }
    );
  }

  toggleDropdown(event: any) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }

  public logout() {
    this.userService.logout();
  }
}
