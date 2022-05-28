import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Books } from 'src/app/Models/books.model';
import { BooksService } from 'src/app/Services/books.service';
import { SuccessAlertComponent } from '../success-alert/success-alert.component';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  selectedItem:Books
  durationInSeconds = 5;
  item:Books

  constructor(private dialogRef: MatDialogRef<EditBookComponent>, @Inject(MAT_DIALOG_DATA) public data:any, private bookService:BooksService,private dialog:MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.selectedItem = this.data;
  }


  openSnackBar() {
    this._snackBar.openFromComponent(SuccessAlertComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  onSave(){
  
    this.bookService.editBook(this.selectedItem.id, this.item)
    .subscribe(
     p=> {
        
      if(p)
      {
        console.log("this was successful")
        this.dialog.closeAll()
        this.openSnackBar()
      
      } 
      
    } ,
     e => {
     },
   )
  }
}
