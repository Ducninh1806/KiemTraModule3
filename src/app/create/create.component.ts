import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {BookService} from '../book.service';
import {Book} from '../book';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  input = new FormControl();
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }
  create() {
    if (this.input.value == null) {
      return alert('Vui lòng điền tên');
    }
    const book: Partial<Book> = {
      name: this.input.value
    };
    console.log(book);
    return this.bookService.create(book).subscribe(
      next => {
        alert('Thêm mới thành công');
        this.input.setValue('');
        document.location.reload();
      }, error => {
        alert('Thêm mới thất bại');
      }
    );
  }

}
