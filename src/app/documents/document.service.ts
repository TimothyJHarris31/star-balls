import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documents: Document[] = [];
  selectedDocumentEvent = new EventEmitter<Document>();
  documentChangedEvent = new EventEmitter<Document[]>();

  constructor() {
    this.documents = MOCKDOCUMENTS;
   }

   getDocuments(): Document[] {
     return this.documents.slice();
   }

   getDocument(id: string): Document | null {
     return this.documents.find(d => d.id === id) || null;
   }

   deleteDocument(document: Document) {
    if (!document) {
      return;
    }
    const position = this.documents.indexOf(document);
 
    if (position < 0) {
      return;
    }
    this.documents.splice(position, 1);
    this.documentChangedEvent.emit(this.documents.slice());
   }
}
