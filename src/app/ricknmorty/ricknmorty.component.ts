import { Component, OnInit } from '@angular/core';
import {RicknmortyService} from "../services/ricknmorty.service";

@Component({
  selector: 'app-ricknmorty',
  templateUrl: './ricknmorty.component.html',
  styleUrls: ['./ricknmorty.component.css']
})
export class RicknmortyComponent  implements OnInit{
  data: Response;
  constructor(private rmService: RicknmortyService) { }

  ngOnInit() {
    this.rmService
      .getData()
      .subscribe((resp: Response) => {
        const serverData = resp;
        console.log(serverData);
        this.data = serverData;
      })

  }

}
