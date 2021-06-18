import { Output, Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contacts } from '../../_models/Contacts';
import { UiServiceService } from 'src/app/_services/ui-service.service';
import { UserComments } from 'src/app/_models/userComments';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  @Output() onAddContact: EventEmitter<Contacts> = new EventEmitter();
  name!: string;
  email!: string;
  message!: string;
  subscription!: Subscription;

  constructor(private uiService: UiServiceService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.name){
      alert('Please add a name!');
      return;
    }
    const newContact = {
      name: this.name,
      email: this.email,
      message: this.message
    }
    this.onAddContact.emit(newContact);
    this.name='';
    this.email='';
    this.message= '';
  }

}
