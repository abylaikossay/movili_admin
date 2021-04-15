import { Component, OnInit } from '@angular/core';
import { IspService } from '../../../@core/services/isp.service';
import { Router } from '@angular/router';

@Component({
    selector: 'ngx-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'surname', 'description', 'experience', 'rating'];
  dataSource: any;
    constructor(private ispService: IspService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getIspInfo();
    }

    getIspInfo() {
        console.log('asd');
        this.ispService.getAllIsp().toPromise().then(resp => {
            this.dataSource = resp;
            console.log(resp);
            resp.forEach(element => {
                element.experience = 2;
            });
        }).catch(err => {
            console.error(err);
        });
    }

    addNewIsp() {
        this.router.navigate(['/admin/employee/new']);

    }
}
