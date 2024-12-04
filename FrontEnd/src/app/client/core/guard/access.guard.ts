import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../../../service/auth.service";

export const accessGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  const user = authService.getUser()

  if(!user || user?.profil.nom === 'client')
  {
    return true;
  }
  router.navigate(['/user-account/user-dashboard'])
  return false
};
