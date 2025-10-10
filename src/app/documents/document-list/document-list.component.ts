import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';
@Component({
  selector: 'cms-document-list',
  standalone: false,
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document('1', 'Test Document Name', 'A test document Description', 'https://test1.url'),
    new Document('2', 'Test Document Name 2', 'A test document Description 2', 'https://test2.url'),
    new Document('3', 'Test Document Name 3', 'A test document Description 3', 'https://test3.url'),
    new Document('4', 'Test Document Name 4', 'A test document Description 4', 'https://test4.url'),
    new Document('5', 'Test Document Name 5', 'A test document Description 5', 'https://test5.url')
  ];

  constructor() { }

  ngOnInit() {}

  selectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
    // console.log(document, " document list component*******");
  }

}
