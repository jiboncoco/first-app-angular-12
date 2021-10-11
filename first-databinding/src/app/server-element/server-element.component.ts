import {    Component, 
            Input, 
            OnInit, 
            OnChanges, 
            SimpleChanges, 
            ViewEncapsulation, 
            AfterContentInit, 
            AfterContentChecked,
            AfterViewInit,
            AfterViewChecked,
            OnDestroy,
            ViewChild, 
            ElementRef } from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
    encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements 
    OnInit, OnChanges, 
    AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked,
    OnDestroy {

    @Input('srvElement')
    element!: { type: string; name: string; content: string; };

    @Input()
    name!: string;

    @ViewChild('heading')
    header!: ElementRef;

    constructor() {
        console.log('constructor called !');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('constructor called!');
        console.log(changes);
    }

    ngOnInit(): void {
        console.log('ngOnit called !');
        console.log('Text Content : ' + this.header.nativeElement.textContent);
    }

    ngDoCheck() {
        console.log('ngDoCheck called!');
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit called!');
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked called!');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit called!');
        console.log('Text Content : ' + this.header.nativeElement.textContent);
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked called!');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy called!');
    }
}
