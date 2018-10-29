import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor() { }
  model: any = {};
  ngOnInit() {
  }

  onSubmit() {
    
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    $.ajax({
      type: "POST",
      dataType: 'json',
      url: 'http://localhost:7777/books',
      data: this.model,
      success: function(data) { alert('data: ' + data); }
     
    });
  }
}
