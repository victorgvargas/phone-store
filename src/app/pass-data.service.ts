import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn : 'root'})
export class PassData {
    searchContent = new Subject<string>();
}