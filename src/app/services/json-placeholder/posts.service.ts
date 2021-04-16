import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post.model";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
