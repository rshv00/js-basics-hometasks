import { Injectable } from '@angular/core';
import {ModalWindowComponent} from '../shared/modal-window/modal-window.component';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  openModalWindow(title: string, text: string): Observable<boolean> {
    const dialogRef = this.dialog.open(ModalWindowComponent, {
      data: {title, text}
    });

    return dialogRef.afterClosed();
  }

}
