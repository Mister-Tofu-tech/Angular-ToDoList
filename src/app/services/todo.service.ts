import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Todo } from '../models/Todos';
import { Observable } from 'rxjs';
import { AngularFireDatabase} from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todosUrl:string = 'https://angular-todolist-64795.firebaseio.com';
  extension:string = '.json';

  constructor(private http:HttpClient, private app: FirebaseApp) { 
  }

  // Get Todos
  getTodos():Observable<Todo[]> {
    const url = `${this.todosUrl}/${this.extension}`;
    return this.http.get<Todo[]>(url);
  }

  // Toggle Completed
  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}/${this.extension}`;
    return this.http.put(url, todo, httpOptions);
  }

  // Delete Todo
  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}/${this.extension}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Add Todo
  addTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${this.extension}`;
    return this.http.post<Todo>(url, todo, httpOptions);
  }
}
