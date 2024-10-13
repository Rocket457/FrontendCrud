import { Routes } from '@angular/router';
import { ReadComponent } from './read/read.component'
import { CreateComponent } from './create_button/create_button.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    { path: 'read', component: ReadComponent },
    { path: 'create', component: CreateComponent },
    { path: 'search', component: SearchComponent },
];
