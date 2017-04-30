import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './components/bookList/bookList.component';
import { BookNewComponent } from './components/book-new/book-new.component';
import { BookDetailComponent } from './components/bookDetail/bookDetail.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';

const appRoutes = [
    { path: 'books', component: BookListComponent },
    { path: 'books/new', component: BookNewComponent },
    { path: 'book/edit/:id', component: BookEditComponent },
    { path: 'book/:id', component: BookDetailComponent },
    { path: '', redirectTo: 'books', pathMatch: 'full' }
]

export const routing = RouterModule.forRoot(appRoutes);