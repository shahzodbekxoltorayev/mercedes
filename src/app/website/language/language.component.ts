import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/service/languageService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  langs;
  lang;
  constructor(
    private translate: TranslateService,
    private langService: LanguageService,
    private router : Router
  ) {
    translate.addLangs([ 'ru', 'uz']);
    translate.setDefaultLang('UZB');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
    translate.getLangs();
  }

  select(lang) {
    if (lang === 'UZB') {
        localStorage.setItem('lang', 'uz');
    } else {
        localStorage.setItem('lang', 'ru');
    }
    this.router.navigate(['/']);
    // window.location.reload();
  }
  ngOnInit() {
    if (localStorage.getItem('lang') === 'uz') {
      this.langs = ['UZB', 'RUS' ];

    } else {
        this.langs = ['RUS', 'UZB' ];

    }
  }

}
