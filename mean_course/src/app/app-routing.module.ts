import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponenet } from './auth/login/login.component';
import { AuthGuard } from './auth/signup/auth.guard';
import { SignupComponenet } from './auth/signup/signup.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponenet } from './posts/post-list/post-list.component';

const routes: Routes = [
  { path: '', component: PostListComponenet },
  { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponenet },
  { path: 'signup', component: SignupComponenet },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
