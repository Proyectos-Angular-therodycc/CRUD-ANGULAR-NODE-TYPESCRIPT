import { Component, OnInit } from '@angular/core';
import { httpFetchService } from 'src/app/services/http-fetch.service';
import { HttpService } from 'src/app/services/http.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-console-list',
  templateUrl: './console-list.component.html',
  styleUrls: ['./console-list.component.scss'],
})
export class ConsoleListComponent implements OnInit {
  consoles: any = [];

  constructor(
    private httpService: HttpService,
    private httpFetchService: httpFetchService,
    private SweetAlertService: SweetAlertService
  ) {}

  ngOnInit() {
    this.getConsoles();
  }

  getConsoles() {
    this.httpService.getData('http://localhost:3000/api/consoles').subscribe(
      (res) => {
        console.log(res);
        this.consoles = res;
      },
      (error) => console.error(error)
    );
  }

  async delete(id: number) {
    const confirm = await this.SweetAlertService.sweetQuestionDelete();
    if (confirm) {
      this.httpService
        .delete('http://localhost:3000/api/consoles/', id)
        .subscribe(
          (res) => {
            this.SweetAlertService.sweetDeleted();
            this.getConsoles();
          },
          (error) => {
            console.error(error);
            this.SweetAlertService.sweetError();
          }
        );
    }
  }
}
