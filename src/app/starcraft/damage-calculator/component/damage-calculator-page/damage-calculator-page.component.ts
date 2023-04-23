import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpLobby } from '@core/http/arcade/model/http-lobby.model';
import { HttpSc2ArcadeLobbiesService } from '@core/http/arcade/service/http-sc2-arcade-lobbies.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-damage-calculator-page',
  templateUrl: './damage-calculator-page.component.html',
  styleUrls: ['./damage-calculator-page.component.scss']
})
export class DamageCalculatorPageComponent implements OnInit {

  displayedColumns: string[] = ['regionId', 'hostname'];
  dataSource: MatTableDataSource<HttpLobby>;

  filterLobbies: HttpLobby[] = [];
  lobbies: HttpLobby[] = [];


  constructor(
    private httpSc2ArcadeLobbiesService: HttpSc2ArcadeLobbiesService
  ) { }

  ngOnInit(): void {

    this.httpSc2ArcadeLobbiesService.getActiveLobbies().pipe(tap((lobbies: HttpLobby[]) => {
      this.dataSource = new MatTableDataSource(lobbies)
      this.lobbies = lobbies;
      this.filterLobbies = lobbies;
    }
    )).subscribe();

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterr(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterLobbies = this.lobbies.filter(lobby => {
      return lobby.hostName.toLowerCase().includes(filterValue.trim().toLowerCase());
    });
  }
}



  // activeLobbies$: Observable<HttpLobby[]>;

  // constructor(
  //   private httpSc2ArcadeLobbiesService: HttpSc2ArcadeLobbiesService
  // ) { }

  // ngOnInit(): void {

  //   this.activeLobbies$ =
  // }

// }
