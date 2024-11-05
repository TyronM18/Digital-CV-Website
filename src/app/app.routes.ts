import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'dev',
    loadComponent: () => import('./dev/dev.page').then( m => m.DevPage)
  },
  {
    path: 'prints',
    loadComponent: () => import('./prints/prints.page').then( m => m.PrintsPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.page').then( m => m.ContactPage)
  },
];
