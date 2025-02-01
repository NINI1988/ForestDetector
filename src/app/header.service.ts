import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ActionCallback = (btn: NavButton) => void;

export interface NavButton
{
  label: string;
  class: string;
  action: ActionCallback;
  visible?: boolean;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService
{
  private buttonsSubject = new BehaviorSubject<NavButton[]>([]);
  buttons$ = this.buttonsSubject.asObservable();

  setButtons(buttons: NavButton[])
  {
    setTimeout(() => // Use timeout to avoid ExpressionChangedAfterItHasBeenCheckedError.
    {
      this.buttonsSubject.next(buttons);
    });
  }

  getButtons(): NavButton[]
  {
    return this.buttonsSubject.getValue();
  }
}
