import { Component, HostBinding, OnInit } from '@angular/core';

import { SettingsService } from './core/settings/settings.service';
import { NgImageSliderComponent } from 'ng-image-slider';
import { ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    @HostBinding('class.layout-fixed') get isFixed() { return this.settings.getLayoutSetting('isFixed'); };
    @HostBinding('class.aside-collapsed') get isCollapsed() { return this.settings.getLayoutSetting('isCollapsed'); };
    @HostBinding('class.layout-boxed') get isBoxed() { return this.settings.getLayoutSetting('isBoxed'); };
    @HostBinding('class.layout-fs') get useFullLayout() { return this.settings.getLayoutSetting('useFullLayout'); };
    @HostBinding('class.hidden-footer') get hiddenFooter() { return this.settings.getLayoutSetting('hiddenFooter'); };
    @HostBinding('class.layout-h') get horizontal() { return this.settings.getLayoutSetting('horizontal'); };
    @HostBinding('class.aside-float') get isFloat() { return this.settings.getLayoutSetting('isFloat'); };
    @HostBinding('class.offsidebar-open') get offsidebarOpen() { return this.settings.getLayoutSetting('offsidebarOpen'); };
    @HostBinding('class.aside-toggled') get asideToggled() { return this.settings.getLayoutSetting('asideToggled'); };
    @HostBinding('class.aside-collapsed-text') get isCollapsedText() { return this.settings.getLayoutSetting('isCollapsedText'); };

    constructor(public settings: SettingsService) { }

    ngOnInit() {
        document.addEventListener('click', e => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A') e.preventDefault();
        })
    }

    @ViewChild('nav') slider: NgImageSliderComponent;

    imageObject: Array<object> = [
      {
        image: 'assets/img/1stylecss.jpeg',
        thumbImage: 'assets/img/1stylecss.jpeg',
        alt: '1stylecss.jpeg',
        title: 'STYLE.CSS'
      },
      {
        image: 'assets/img/2stylecss.jpeg',
        thumbImage: 'assets/img/2stylecss.jpeg',
        alt: '2stylecss.jpeg',
        title: 'STYLE.CSS'
      },
      {
        image: 'assets/img/3env.jpeg',
        thumbImage: 'assets/img/3env.jpeg',
        alt: '3env.jpeg',
        title: 'ENV'
      },
      {
        image: 'assets/img/4env.png',
        thumbImage: 'assets/img/4env.png',
        alt: '4env.png',
        title: 'ENV_PROD'
      },
      {
        image: 'assets/img/5bootstrap.png',
        thumbImage: 'assets/img/5bootstrap.png',
        alt: '5bootstrap.png',
        title: 'Bootstrap'
      },
      {
        image: 'assets/img/6acc.png',
        thumbImage: 'assets/img/6acc.png',
        alt: '6acc.png',
        title: 'Account'
      },
      {
        image: 'assets/img/7acc.png',
        thumbImage: 'assets/img/7acc.png',
        alt: '7acc.png',
        title: 'Account'
      }
  ];

  prevImageClick() {
        this.slider.prev();
  }

  nextImageClick() {
      this.slider.next();
  }

}
