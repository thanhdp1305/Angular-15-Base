import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiHelperService {
  isLoadedTreeView = true;

  setIsLoadedTreeView(value: boolean): void {
    this.isLoadedTreeView = value;
  }
}
