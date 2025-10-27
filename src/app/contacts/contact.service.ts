import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contacts: Contact[] = [];
  contactSelectedEvent = new EventEmitter<Contact>();
  contactChangedEvent = new EventEmitter<Contact[]>();

  constructor() {
    // Initialize contacts with mock data
    this.contacts = MOCKCONTACTS;
  }

  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  getContact(id: string): Contact | null {
    return this.contacts.find(c => c.id === id) || null;
  }

  deleteContact(contact: Contact) {
    if (!contact) {
      return;
    }
    const position = this.contacts.indexOf(contact);

    if (position < 0) {
      return;
    }
    this.contacts.splice(position, 1);
    this.contactChangedEvent.emit(this.contacts.slice());;
  }
}
