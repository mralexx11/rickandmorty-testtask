import { Component, OnInit } from '@angular/core';
import {RicknmortyService} from "../services/ricknmorty.service";
import {PageEvent} from "@angular/material/paginator";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ricknmorty',
  templateUrl: './ricknmorty.component.html',
  styleUrls: ['./ricknmorty.component.css']
})
export class RicknmortyComponent  implements OnInit {
  data: Response;
  public params: Partial<PageEvent> = {
    pageSize: 20,
    pageIndex: 1
  };

  constructor(
    private rmService: RicknmortyService,
    private _router: Router,
  ) {
  }

  ngOnInit() {
    this.rmService
      .getData()
      .subscribe((resp: Response) => {
        const serverData = resp;
        console.log(serverData);
        this.data = serverData;
      })

  }

  public changePage(event: PageEvent): void {
    this.params = {...event, pageIndex: event.pageIndex + 1};
    this._router.navigate(['/products'], { queryParams: this.params });
  }
}
