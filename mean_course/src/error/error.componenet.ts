import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './error.componenet.html',
})
export class ErrorComponenet {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
}
