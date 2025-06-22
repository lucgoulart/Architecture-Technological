import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.menu-open') menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
  document.body.classList.toggle('menu-open', this.menuOpen);
}

  constructor() { }

  ngOnInit(): void {
  }


}
