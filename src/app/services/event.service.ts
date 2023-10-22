import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EventService {
  private eventSubject = new Subject<string>();

  emitEvent(mensaje: string) {
    this.eventSubject.next(mensaje);
  }

  getEvent() {
    return this.eventSubject.asObservable();
  }
}
