import { Component, Input, OnInit, AfterViewInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

declare let Prism: any;
@Component({
  selector: 'app-codeblock-viewer',
  templateUrl: './codeblock-viewer.component.html',
  styleUrls: ['./codeblock-viewer.component.scss']
})
export class CodeblockViewerComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @Input() url = '';
  @Input() method = 'RESPONSE';
  @Input() type = 'javascript';
  isSubmit = true;
  @Input()
  set code(value) {
    this._code.next(value);
  }
  get code() {
    return this._code.getValue();
  }
  _code: BehaviorSubject<string> = new BehaviorSubject<string>('');

  @ViewChild('codeContent') codeContent!: ElementRef;

  highlighted = false;

  constructor() {
    //
  }

  ngOnInit(): void {
    //
  }

  ngAfterViewInit(): void {
    //
  }

  /**
   * Highlight blog post when it's ready
   */
  ngAfterViewChecked() {
    //
  }

  /**
   * Iniit PrismJs
   */
  initPrism() {
    Prism.highlightAll();
  }

  /**
   * HighLight code
   * @param code
   * @param type
   */
  highLightCode(code: string, type = 'javascript'): string {
    const html_string = code != null ? Prism.highlight(code, Prism.languages[type], type) : '<span></span>';

    return (
      html_string.replace(/\\,/g, ',\n').replace(/\{/g, '{\n').replace(/\[/g, '[\n').replace(/\\/g, '') ||
      '<span></span>'
    );
  }

  /**
   * Copy Clipboard
   * @param el
   */
  copyClipboard(e: any, el: Element) {
    const copyText = el.textContent;
    const textArea = document.createElement('textarea');
    console.log(copyText);
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand('Copy');
    document.body.removeChild(textArea);
    this.isSubmit = false;
    this.resetStatusCopy();
  }

  resetStatusCopy() {
    setTimeout(() => {
      this.isSubmit = true;
    }, 1000);
  }

  /**
   * Cai dat su kien thao tac nut "Sao chep"
   */
  setupCopyClipboardCodeBlock() {
    const copies = document.getElementsByClassName('copyClipBoard');
    for (let i = 0; i < copies.length; i++) {
      const block = copies[i];
      console.log(i);
      block.addEventListener('click', function (event) {
        event.stopPropagation();
        console.log(i);
        const toolbar_el = block.parentElement;
        const method_el = toolbar_el?.parentElement;

        const code_el: any = method_el?.getElementsByTagName('code');

        //Cảnh báo không tìm thấy nội dung code
        if (code_el?.length <= 0) {
          console.log('Warning! Không tìm thấy vùng chưa nội dung code!');
        } else {
          const copyText = code_el[0]?.textContent;
          const textArea = document.createElement('textarea');
          console.log(copyText);
          textArea.textContent = copyText;
          textArea.select();
          document.execCommand('Copy');
        }
      });
    }
  }
}
