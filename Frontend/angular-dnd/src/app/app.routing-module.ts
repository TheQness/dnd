import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BagofholdingComponent } from "src/components/bagofholding/bagofholding.component";
import { CombattrackerComponent } from "src/components/combattracker/combattracker.component";
import { HomeComponent } from "src/components/home/home.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'bagofholding', component: BagofholdingComponent },
    { path: 'combattracker', component: CombattrackerComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }