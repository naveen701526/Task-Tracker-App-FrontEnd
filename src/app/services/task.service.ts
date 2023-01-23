import { Injectable } from '@angular/core';
import {Task} from '../Task'
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://api-task-manager-o0lr.onrender.com/api/tasks'
  constructor(private http: HttpClient) {

   }

  getTasks(): Observable<Task[]> {
    const url = `${this.apiUrl}/getAllTasks`;
    return this.http.get<Task[]>(url);
  }
  
  deleteTask(task: Task): Observable<Task>{
    console.log(task);
    
    const url = `${this.apiUrl}/deleteTask/${task.id}`;
    return this.http.delete<Task>(url);
  }
  
  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/updateTask/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }
  
  addTask(task: Task): Observable<Task>{
    
    const url = `${this.apiUrl}/createTask`;
    return this.http.post<Task>(url, task, httpOptions);
  }

}
