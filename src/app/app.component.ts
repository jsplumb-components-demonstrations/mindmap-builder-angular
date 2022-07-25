import {AfterViewInit, Component, ViewChild} from '@angular/core'
import { MindmapComponent } from "@jsplumb-components/mindmap-angular"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(MindmapComponent) mindmap!:MindmapComponent;

  title = 'mindmap-angular'

  ngAfterViewInit(): void {

    this.mindmap.loadUrl("assets/test1.json", () => {
      this.mindmap.zoomToFit()
    })
  }



}
