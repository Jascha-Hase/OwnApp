import { MatButtonModule, MatTabsModule, MatButtonToggleModule, MatInputModule, MatIconModule, MatSidenavModule, MatCardModule, MatGridListModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatTabsModule, MatButtonToggleModule, MatInputModule, MatIconModule, MatSidenavModule, MatCardModule, MatGridListModule],
    exports: [MatButtonModule, MatTabsModule, MatButtonToggleModule, MatInputModule, MatIconModule, MatSidenavModule, MatCardModule, MatGridListModule ],
})
export class MaterialModule {

}