import { Component, OnInit, VERSION } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  successMessage: string = '';
  angularVersion: string;

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.angularVersion = VERSION.full;
    this.title = `Angular-CLI 1.1 + Angular ${this.angularVersion} + ASP.Net Core 1.1 + Azure`;
  }

  onClick() {
    const promise = this.executePost();
    promise.then(response => this.onClickSuccess(response));
  }

  onClickSuccess(response: string) {
    this.successMessage = response;
    console.log(`onClickSuccess - successMessage= ${this.successMessage}`);
  }

  executePost(): Promise<any> {
    const promise = this.http.post('Home/MyTestAsync', null)
      .toPromise()
      .then(
        function Success(response) {
          return response.json();
        }
      );
    return promise;
  }
}
