import { Component, OnInit} from '@angular/core';
import { PostServiceService } from 'src/app/_services/post-service.service';
import { Contacts } from '../../_models/Contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Contacts[] = [];
  constructor(private postService: PostServiceService){
  }

  ngOnInit(): void {
    this.postService.getContacts()
      .subscribe(
        (contacts) => this.contacts = contacts);
  }

  addContact(contact: Contacts){
    console.log(contact);
    this.postService.saveContact(contact)
      .subscribe(
        (contact) => (this.contacts.push(contact)));
  }
}
