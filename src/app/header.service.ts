import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

export type ActionCallback = (btn: NavButton) => void;

export interface NavButton
{
  label: string;
  action: ActionCallback;
  class?: string;
  visible?: boolean;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService
{
  private emptyButton: NavButton = { label: "Hello", action: this.noAction, visible: false } // Used to calculate navBar high at startup
  private buttonsSubject = new BehaviorSubject<NavButton[]>([this.emptyButton]);
  buttons$ = this.buttonsSubject.asObservable();

  constructor(private router: Router)
  {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) =>
      {
        this.buttonsSubject.next([this.emptyButton]);
      });
  }

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

  noAction(button: NavButton)
  {
  }
}
