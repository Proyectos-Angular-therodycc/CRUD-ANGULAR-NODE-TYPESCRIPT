import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/game';
import { httpFetchService } from 'src/app/services/http-fetch.service';
import { HttpService } from 'src/app/services/http.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-game-forms',
  templateUrl: './game-forms.component.html',
  styleUrls: ['./game-forms.component.scss'],
})
export class GameFormsComponent implements OnInit {
  game: Game = {
    id: 0,
    tittle: '',
    _description: '',
    image: '',
    create_at: new Date(),
  };
  edit: boolean = false;

  constructor(
    private sweetService: SweetAlertService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private httpService: HttpService
  ) {}

  async ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    if (params.id) {
      this.edit = true;
      this.httpService
        .getOne('http://localhost:3000/api/games/', params.id)
        .subscribe(
          (res) => (this.game = res),
          (error) => console.log(error)
        );
    } else {
      this.edit = false;
    }
  }

  postGameHttp() {
    this.httpService
      .save('http://localhost:3000/api/games/', this.game)
      .subscribe(
        (res) => {
          console.log(res);
          this.clearForm();
          this.sweetService.sweetAdded();
          this.router.navigate(['/games/list']);
        },
        (error) => console.error(error)
      );
  }

  async updateGame() {
    delete this.game.create_at;
    delete this.game.id;
    const id = this.activeRoute.snapshot.params.id;

    this.httpService
      .update('http://localhost:3000/api/games/', id, this.game)
      .subscribe(
        (res) => {
          console.log(res);
          this.sweetService.sweetUpdated();
          this.router.navigate(['/games/list']);
        },
        (error) => {
          console.log(error);
          this.sweetService.sweetError();
        }
      );
  }

  clearForm() {
    this.game = {
      tittle: '',
      _description: '',
      image: '',
    };
  }
}
