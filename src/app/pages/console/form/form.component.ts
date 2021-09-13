import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { httpFetchService } from 'src/app/services/http-fetch.service';
import { HttpService } from 'src/app/services/http.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  edit: boolean = false;
  idParams: number = 0;
  console: any = {
    id: 0,
    _name: '',
    _description: '',
    image: '',
    create_at: new Date(),
  };
  constructor(
    private httpService: HttpService,
    private httpFetchService: httpFetchService,
    private sweetAlertService: SweetAlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.KnowParamsId();
  }

  KnowParamsId() {
    this.idParams = this.activatedRoute.snapshot.params.id;
    if (this.idParams) {
      this.httpService
        .getOne('http://localhost:3000/api/consoles/', this.idParams)
        .subscribe(
          (res) => {
            console.log(res);
            this.console = res;
          },
          (error) => console.log(error)
        );
      this.edit = true;
    } else {
      this.edit = false;
    }
  }

  updateGame() {
    this.httpService
      .update(
        'http://localhost:3000/api/consoles/',
        this.idParams,
        this.console
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.sweetAlertService.sweetUpdated();
          this.router.navigate(['console/list']);
        },
        (error) => {
          console.log(error);
          this.sweetAlertService.sweetError();
        }
      );
  }

  postGameHttp() {
    this.httpService
      .save('http://localhost:3000/api/consoles', this.console)
      .subscribe(
        (res) => {
          console.log(res);
          this.sweetAlertService.sweetAdded();
          this.router.navigate(['/console/list']);
        },
        (error) => console.error(error)
      );
  }
}
