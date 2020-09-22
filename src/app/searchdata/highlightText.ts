import { Pipe, PipeTransform } from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
  SafeStyle,
  SafeScript,
  SafeUrl,
  SafeResourceUrl,
} from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(
    list: any,
    searchText: string
  ): any[] | SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    if (!list) {
      return [];
    }
    if (!searchText) {
      return list;
    }

    const value = list.replace(
      searchText,
      `<span style='background-color:yellow'>${searchText}</span>`
    );
    console.log('value', value);
    /*     return list.filter( str => {
        return this.sanitizer.bypassSecurityTrustHtml(value) || str[searchText].toLowerCase().includes(value.toLowerCase())
            });
 */
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
