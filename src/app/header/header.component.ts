import { Component, EventEmitter, Output } from "@angular/core";

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    @Output() selection = new EventEmitter<string>();
    reci : string = 'R';
    shop : string = 'S'

    onNavigation1() {
        this.selection.emit(this.reci);
    }
    onNavigation2() {
        this.selection.emit(this.shop);
    }

}