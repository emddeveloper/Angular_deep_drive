import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "user",
    component: UserComponent,
  },
  {
    path: "servers",
    component: ServersComponent,
  },
  {
    path: "servers/:id",
    component: ServerComponent,
  },
  {
    path: "user/:id/:name",
    component: UserComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
