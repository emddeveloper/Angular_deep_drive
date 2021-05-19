import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  appdata = [
    {
      type: 'server',
      name: 'AWS-1',
      desc: 'This is my first aws server',
    },
  ];
  constructor() {}
  onServerCreated(serverData: { name: string; desc: string }) {
    this.appdata.push({
      type: 'server',
      name: serverData.name,
      desc: serverData.desc,
    });
  }
  onServerBlueprintCreated(serverBlueprintData: {
    name: string;
    desc: string;
  }) {
    this.appdata.push({
      type: 'blueprint',
      name: serverBlueprintData.name,
      desc: serverBlueprintData.desc,
    });
  }
  ngOnInit() {}
}
