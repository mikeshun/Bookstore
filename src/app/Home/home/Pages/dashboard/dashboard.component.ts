import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Books } from 'src/app/Models/books.model';
import { BooksService } from 'src/app/Services/books.service';
import { EditBookComponent } from '../../Components/Dialogs/edit-book/edit-book.component';
import { SuccessAlertComponent } from '../../Components/Dialogs/success-alert/success-alert.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  durationInSeconds = 5;

  constructor(private booksService:BooksService, private dialog:MatDialog,private _snackBar: MatSnackBar) {
    
    this.item = new Books()
    this.myitem = new Books()
   }

   @ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any>;
   @ViewChild('editDialog', { static: true }) editDialog: TemplateRef<any>;

   Books:Books[];
   item:Books
   myitem:Books
  

  ngOnInit(): void {

    this.getBooks();


  }

  openSnackBar() {
    this._snackBar.openFromComponent(SuccessAlertComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  showAddDialog(){
    this.dialog.open(this.secondDialog);
  }


  showEditDialog(item:any){
    this.dialog.open(EditBookComponent,  {panelClass: 'Dialog',data:item}, )
  }

 

  getBooks()
  {
    this.booksService.getBooks()
    .subscribe(
      p=>{
        this.Books=p,
        console.log(this.Books)
      },
      e => {},
      ()=>{}
    )
  }

  onSave(){
  
    this.booksService.addBook(this.item)
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

  deleteItem(citem:Books){
    // const Id=""
    // this.citem.id = Id
    this.booksService.deleteBook(citem.id).subscribe(
      p=>{
        this.openSnackBar()
        console.log("item was deleted")
      }
    )
  }

}
