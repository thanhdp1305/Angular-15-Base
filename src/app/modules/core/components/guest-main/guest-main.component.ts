import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UiHelperService } from 'src/app/modules/shared/services/ui-helper.service';

@Component({
  selector: 'app-guest-main',
  templateUrl: './guest-main.component.html',
  styleUrls: ['./guest-main.component.scss']
})
export class GuestMainComponent implements OnInit, AfterViewInit {
  constructor(private uiHelper: UiHelperService) {
    // False: Marking didn't load treeview
    this.uiHelper.setIsLoadedTreeView(false);
  }

  ngAfterViewInit(): void {
    //
  }

  ngOnInit(): void {
    //
  }

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
