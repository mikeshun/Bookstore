import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Books } from 'src/app/Models/books.model';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  selectedItem:Books
  item:Books

  constructor(private dialogRef: MatDialogRef<EditBookComponent>, @Inject(MAT_DIALOG_DATA) public data:any, private bookService:BooksService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.selectedItem = this.data;
  }


  onSave(){
  
    this.bookService.editBook(this.item)
    .subscribe(
     p=> {
        
      if(p)
      {
        console.log("this was successful")
        this.dialog.closeAll()
      
      } 
      
    } ,
     e => {
     },
   )
  }
}
