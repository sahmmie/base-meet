import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stream-creation',
  templateUrl: './stream-creation.component.html',
  styleUrls: ['./stream-creation.component.scss']
})
export class StreamCreationComponent implements OnInit {
  micOff = false;
  constructor() { }

  ngOnInit(): void {
  }

}
