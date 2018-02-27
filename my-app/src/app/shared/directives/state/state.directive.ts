import { Directive, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnInit {
  @Input() appState: string;
  @HostBinding('class') elementClass: string;
  constructor() {
  }
  ngOnInit(): void {
    this.elementClass = this.formatCssClass(this.appState);
  }

  private removeAccents(state: string): string {
    // https://stackoverflow.com/a/37511463
    return state.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  private formatCssClass(state: string): string {
    return `state-${this.removeAccents(state)
      .toLowerCase()
      .replace(' ', '')}`;
  }

}
