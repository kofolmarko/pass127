import { Component, OnInit, AfterViewInit } from '@angular/core';



declare var PatternLock: any;
@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.scss']
})

export class PatternComponent implements OnInit, AfterViewInit {
  title = 'pattern-lock';
  matchedPattern = 5784;
  isMatched: boolean|null = null;

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    const me = this;
    var p = new PatternLock(document.getElementById('lock'), {
        onPattern: function(pattern:any){
          if(pattern) {
            if(me.matchedPattern === pattern) {
              me.isMatched = true;
              this.success()
            } else {
              me.isMatched = false;
              this.error()
            }
          }
          
        }
    });
  }
  
}