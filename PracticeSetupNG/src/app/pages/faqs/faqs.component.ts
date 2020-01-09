import { Component, OnInit } from '@angular/core';
import { on } from 'cluster';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  flip = false;
  constructor() { }

  ngOnInit() {
  }

  clickEvent() {
    // console.log(btn.innerText);
    alert('You clicked me, prepare to die!');
  }

  switch(v) {
    console.log(v);
    this.flip = this.flip ? !this.flip : !!!this.flip;
    v.innerText = this.flip ? 'Off' : 'On';
  }
}
