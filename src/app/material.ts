import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material'
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatTableModule,
        CdkTableModule,
        MatPaginatorModule,
        
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatTableModule,
        CdkTableModule,
        MatPaginatorModule,
        MatDialogModule
    
    ]
})


export class MaterialModule { }