import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home-page/home-page.module').then(c => c.HomePageModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./home-page/home-page.module').then(c => c.HomePageModule)
    },
    {
        path: 'addMovie',
        loadChildren: () => import('./add-movie/add-movie.module').then(c => c.AddMovieModule)
    }

];
