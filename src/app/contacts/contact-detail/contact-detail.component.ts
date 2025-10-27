import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
@Component({
  selector: 'cms-contact-detail',
  standalone: false,
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})

export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact | null = null;
  id: string;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
 
  ngOnInit() {
    this.route.params.subscribe((params: Params) => { 
      this.id = params['id'];
      this.contact = this.contactService.getContact(this.id);
    });
  }

  onDelete() {
    this.contactService.deleteContact(this.contact!);
    this.router.navigateByUrl('/contacts');
  }


}
