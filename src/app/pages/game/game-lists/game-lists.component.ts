import { Component, OnInit } from '@angular/core';
import { httpFetchService } from 'src/app/services/http-fetch.service';
import { HttpService } from 'src/app/services/http.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-game-lists',
  templateUrl: './game-lists.component.html',
  styleUrls: ['./game-lists.component.scss'],
})
export class GameListsComponent implements OnInit {
  games: any = [];

  constructor(
    private httpFetchService: httpFetchService,
    private sweetAlertService: SweetAlertService,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.httpService.getData('http://localhost:3000/api/games').subscribe(
      (res) => {
        this.games = res;
      },
      (error) => console.log(error)
    );
  }

  async deleteGame(id: number) {
    const confirmation = await this.sweetAlertService.sweetQuestionDelete();

    if (confirmation) {
      this.httpService.delete('http://localhost:3000/api/games/', id).subscribe(
        (res) => {
          this.sweetAlertService.sweetDeleted();
          this.getGames();
        },
        (error) => {
          console.log(error);
          this.sweetAlertService.sweetError();
        }
      );
    }
  }
}
