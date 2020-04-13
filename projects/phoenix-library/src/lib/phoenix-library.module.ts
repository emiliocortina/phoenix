import { NgModule } from '@angular/core';
import { EventDisplayComponent } from './components/event-display/event-display.component';
import { HttpClientModule } from '@angular/common/http';
import { AttributePipe } from './services/extras/attribute.pipe';
import { UiMenuComponent } from './components/ui-menu/ui-menu.component';
import { CollectionsInfoComponent } from './components/ui-menu/collections-info/collections-info.component';
import { MenuToggleComponent } from './components/ui-menu/menu-toggle/menu-toggle.component';
import { CollectionsInfoOverlayComponent } from './components/ui-menu/collections-info/collections-info-overlay/collections-info-overlay.component';
import { IoOptionsComponent } from './components/ui-menu/io-options/io-options.component';
import { IOOptionsDialogComponent } from './components/ui-menu/io-options/io-options-dialog/io-options-dialog.component';
import { OverlayViewComponent } from './components/ui-menu/overlay-view/overlay-view.component';
import { ObjectSelectionComponent } from './components/ui-menu/object-selection/object-selection.component';
import { ObjectSelectionOverlayComponent } from './components/ui-menu/object-selection/object-selection-overlay/object-selection-overlay.component';
import { EventSelectorComponent } from './components/ui-menu/event-selector/event-selector.component';
import { ObjectClippingComponent } from './components/ui-menu/object-clipping/object-clipping.component';
import { DarkThemeComponent } from './components/ui-menu/dark-theme/dark-theme.component';
import { AutoRotateComponent } from './components/ui-menu/auto-rotate/auto-rotate.component';
import { ViewOptionsComponent } from './components/ui-menu/view-options/view-options.component';
import { OverlayViewWindowComponent } from './components/ui-menu/overlay-view/overlay-view-window/overlay-view-window.component';
import { ExperimentInfoComponent } from './components/ui-menu/experiment-info/experiment-info.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    AttributePipe,
    UiMenuComponent,
    CollectionsInfoComponent,
    MenuToggleComponent,
    CollectionsInfoOverlayComponent,
    IoOptionsComponent,
    IOOptionsDialogComponent,
    OverlayViewComponent,
    ObjectSelectionComponent,
    ObjectSelectionOverlayComponent,
    EventSelectorComponent,
    ObjectClippingComponent,
    DarkThemeComponent,
    AutoRotateComponent,
    ViewOptionsComponent,
    OverlayViewWindowComponent,
    ExperimentInfoComponent,
    EventDisplayComponent],
  imports: [
    HttpClientModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    OverlayModule,
    MatMenuModule,
    MatSliderModule,
    MatCheckboxModule
  ],
  exports: [
    UiMenuComponent,
    CollectionsInfoComponent,
    MenuToggleComponent,
    CollectionsInfoOverlayComponent,
    IoOptionsComponent,
    IOOptionsDialogComponent,
    OverlayViewComponent,
    ObjectSelectionComponent,
    ObjectSelectionOverlayComponent,
    EventSelectorComponent,
    ObjectClippingComponent,
    DarkThemeComponent,
    AutoRotateComponent,
    ViewOptionsComponent,
    OverlayViewWindowComponent,
    ExperimentInfoComponent,
    EventDisplayComponent],
  entryComponents: [
    IOOptionsDialogComponent,
    CollectionsInfoOverlayComponent,
    ObjectSelectionOverlayComponent
  ]
})
export class PhoenixLibraryModule { }
