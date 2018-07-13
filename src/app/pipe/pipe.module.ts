import { NgModule } from "@angular/core";
import { UserTypeShowPipe } from "./user-type.pipt";

@NgModule({
    declarations:[UserTypeShowPipe],
    exports:[UserTypeShowPipe]
})
export class PipeModule {}