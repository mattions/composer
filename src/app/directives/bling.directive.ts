import {Directive, ElementRef, Input, OnInit, OnChanges, OutputFactory} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {Scheduler} from "rxjs/Scheduler";

@Directive({
    selector: "[ct-bling]",
    host: {
        onChange: "ngOnChanges"
    }
})
export class BlingDirective implements OnInit {

    @Input("speed")
    private speedStream: Observable;

    private el: ElementRef;

    private colorChangeStream: Observable;

    constructor(el: ElementRef) {
        this.el = el;
    }

    ngOnInit(): any {

        this.colorChangeStream = this.speedStream
            .switchMap((speed) => Observable.interval(speed).startWith(1).map(() => {
                    return '#' + ((1 << 24) * Math.random() | 0).toString(16);
                }).takeUntil(this.speedStream.last())
            );

        this.colorChangeStream.subscribe(color => {
            this.el.nativeElement.style.color = color;
        });


        this.speedStream.subscribe((speed)=> {
            this.el.nativeElement.style.transition = `color ${speed / 1000}s`;
        });
    }

}