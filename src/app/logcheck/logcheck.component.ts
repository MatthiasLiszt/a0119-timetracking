import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logcheck',
  templateUrl: './logcheck.component.html',
  styleUrls: ['./logcheck.component.sass']
})
export class LogcheckComponent implements OnInit {
  username: string;
  constructor(/*private route: ActivatedRoute*/) { 

  }

  ngOnInit() {
    //alert(this.route.params['logname'].jwt);
    var w=window.location.href;
    var p=w.split('=');
    var n=p[1].split('&'); 
    //alert(n[0]);
    this.username=n[0];
  }

}
