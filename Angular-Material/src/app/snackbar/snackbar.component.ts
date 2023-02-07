import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    //this.snackbar.open('Hello People', 'Close', { duration: 2000 })
  }

  public openSnackBar() {

    const snackBar = this.snackbar.open('Hello People', 'Close', {
      duration: 2000
    })

    //dismissed, quando fecha o snack bar, sendou ou não com a ação do usuário
    snackBar.afterDismissed().subscribe(_ => {
      console.log('DISMISSED');
    })

    snackBar.onAction().subscribe(_ => {
      console.log('on Action');
    })
  }

}
