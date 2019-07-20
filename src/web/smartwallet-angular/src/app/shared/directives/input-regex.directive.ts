import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputRegex]'
})

export class InputRegexDirective {

  @Input() appInputRegex: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('keypress', ['$event']) onKeyPress(event) {
    const regex = new RegExp(this.appInputRegex);
    return !(!regex.test(event.key) || !regex.test(this.el.nativeElement.value + event.key));
  }

  @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
    this.validateFields(event);
  }

  validateFields(event) {
    setTimeout(() => {
      const regex = new RegExp(this.appInputRegex);
      this.el.nativeElement.value = this.el.nativeElement.value.replace(regex, '').replace(/\s/g, '');
      event.preventDefault();

    }, 100);
  }
}
