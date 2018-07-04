import { Component,OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private spinner: NgxSpinnerService) { }
  show: boolean
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
 	this.show = false;
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
        this.show= true
    }, 2000);
  }
}
