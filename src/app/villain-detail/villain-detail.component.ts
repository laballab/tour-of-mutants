import { Component, OnInit, Input } from '@angular/core';
import { VillainService } from '../villain.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Villain } from '../villain';

@Component({
  selector: 'app-villain-detail',
  templateUrl: './villain-detail.component.html',
  styleUrls: ['./villain-detail.component.css']
})
export class VillainDetailComponent implements OnInit {
  @Input() villain: Villain;

  constructor(
    private heroService: VillainService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getVillain();
  }

  getVillain(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getVillain(id)
    .subscribe(villain => this.villain = villain);
  }

  goBack(): void {
    this.location.back();
  }
}

