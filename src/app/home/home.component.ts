import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';

import { ConfirmationModalComponent } from './../shared/components/confirmation-modal/confirmation-modal.component';
import { DataService } from './../shared/services/data.service';
import { News } from './news.interface';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent  {
 
  logo_URL="https://pbs.twimg.com/profile_images/1210577367921516544/D14OTzAu_400x400.jpg"
  img_src= "assets/search.svg"
  URL_busca="assets/document.svg"
  seta_url="assets/down.svg"

  latestNews: Array<News>;
  filteredNews: Array<News>;
  isLoading = true;
  exibirIconeSemBuscas = true;
  search = '';
 
  


  constructor(private dataService: DataService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    
    this.dataService.getLatestNews()
    .pipe(
      finalize(() => this.isLoading = false)
    )
    .subscribe(
      response => this.onSuccessGetLatestNews(response),
      error => this.onErrorGetLatestNews(error)
    )

    
  }

  onErrorGetLatestNews(error: any) {
  }
  onSuccessGetLatestNews(response: News[]) {
    this.latestNews = response;
  }

  searchNews() {
    this.filteredNews = this.latestNews.filter(x => x.title.includes(this.search));
    this.exibirIconeSemBuscas = false;
    
    
  }
  

  showConfirmationModal() {
    this.modalService.show(ConfirmationModalComponent, {
      class: "modal-sm"
    });
  }

  onSubmit(form){
  }
 
 
}
