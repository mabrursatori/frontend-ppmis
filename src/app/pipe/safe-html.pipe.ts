import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

constructor(private sanitized: DomSanitizer){

}

  transform(value: any, regex: number = 0): unknown {
    if (regex > 0){
      let str = value.replace(/<\/?[^>]+(>|$)/g, "").trim()
      let arr = []
      str = [...str];
      for(let i = 0; i < regex; i++){
        arr.push(str[i])
      }
      return arr.join("")
    }
    return this.sanitized.bypassSecurityTrustHtml(value);
  }

}
