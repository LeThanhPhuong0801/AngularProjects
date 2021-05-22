import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component } from '@angular/core';
import { ɵTestingCompilerFactory } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Xin chao cac ban';
  textColor = "red";
  styleOb = {color: "white", background: "black"};
  withBorder = true;

  btnHide(){
    this.withBorder = !this.withBorder;
  }
}