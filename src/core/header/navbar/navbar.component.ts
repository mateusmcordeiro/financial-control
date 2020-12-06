import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  active = false;
  @Output() 
  activeChange = new EventEmitter<boolean>(false);
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleActive() {
    this.active = !this.active;
    this.activeChange.emit(this.active);
  }

}
