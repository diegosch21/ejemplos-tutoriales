import { Component } from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {

  title;
  description;

  constructor(public navCtrl: NavController, public view: ViewController) {

  }

  saveItem() {
    let newItem = {
      title: this.title,
      description: this.description
    };
    // We dismiss the view, but we also pass in that new item to the dismiss function.
    // This will allow us to set up a listener back on our home page (which will launch this page) to grab that item.
    // (Le envía la data del newItem a la homePage)
    // https://ionicframework.com/docs/v2/api/components/modal/ModalController/#advanced
    this.view.dismiss(newItem);
  }

  close() {
    this.view.dismiss();
  }

}
