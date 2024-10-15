import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  score: string  = ''  ;
  constructor (private route: ActivatedRoute) {
    this.score = this.route.snapshot.paramMap.get('score') || "";
  }
}
