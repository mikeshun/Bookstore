import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Books } from 'src/app/Models/books.model';
import { BooksService } from 'src/app/Services/books.service';
import { EditBookComponent } from '../../Components/Dialogs/edit-book/edit-book.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private booksService:BooksService, private dialog:MatDialog) {
    
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
      
      } 
      
    } ,
     e => {
     },
   )
  }

}
