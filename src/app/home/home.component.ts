import { Component } from '@angular/core';

import { DataService } from './../shared/services/data.service';
import { LatestNews } from './latestNews.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
 
  logo_URL="https://pbs.twimg.com/profile_images/1210577367921516544/D14OTzAu_400x400.jpg"
  img_src= "assets/search.svg"
  
  isCollapsed = true;
  jaFoi= []

  latestNews: LatestNews;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
     this.dataService.getLatestNews()
      // .pipe(
      //   finalize(() => this.isLoading = false)
      // )
      .subscribe(
        response => this.onSuccessGetLatestNews(response),
        error => this.onErrorGetLatestNews(error)
      )
  }
  onErrorGetLatestNews(error: any) {
    console.log(error);
  }
  onSuccessGetLatestNews(response: LatestNews) {
    this.latestNews = response;
    console.log(this.latestNews);
  }

  /*modalRef: BsModalRef;
  message: string;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }*/


}
