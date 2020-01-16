import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.less']
})
export class MyComponentComponent implements OnInit {
  valor = "valor123"
  valores = []

  constructor() { }

  @ViewChild("searchInput", { read: false, static: true }) searchInput: ElementRef;
  onClick() {
    if (this.valor) {
      this.valores.push(this.valor);
      this.valor = "";
      this.searchInput.nativeElement.focus();
    } else {
      alert('digite um valor');
    }
  }

  onKeyUp(e: any) {
    this.valor = e.target.value;
    console.log(this.valor);
  }

  ngOnInit() {
  }
}
