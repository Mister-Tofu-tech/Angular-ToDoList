import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogEmptyComponent } from 'src/app/dialog-empty/dialog-empty.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string;
  shouldContinue: boolean;
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    this.dialog.open(DialogEmptyComponent, dialogConfig);
  }

  onSubmit(){
    if(this.title == undefined || this.title.length == 0){
      this.shouldContinue = false;
      this.openDialog()
    } else{
      this.shouldContinue = true;
      const todo = {
        title: this.title,
        completed: false
      };
      this.addTodo.emit(todo);
      this.title = "";
    }
  }
}
