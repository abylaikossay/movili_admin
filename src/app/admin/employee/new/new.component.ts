import { Component, OnInit } from '@angular/core';
import { CategoryRequest } from '../../../@core/models/category-request';
import { CategoryService } from '../../../@core/services/category.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'ngx-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
    categoryRequest: CategoryRequest = new CategoryRequest();
    categoryImg: any;
    logoImageUrl: any;
    categoryId: number;
    $url: Subscription;
    imageUrl: string = environment.apiUrl + '/api/file/category/';

    constructor(private categoryService: CategoryService,
                private route: ActivatedRoute,
                private router: Router,
                private nbToastService: NbToastrService) {
    }

    ngOnInit(): void {
        this.$url = this.route.params.subscribe(data => {
            console.log(data);
            if (data.id) {
                this.categoryId = data.id;
                this.categoryService.getCategoryById(this.categoryId).toPromise().then(resp => {
                    console.log(resp);
                    this.categoryRequest = resp;
                    this.categoryRequest.uslugaId = resp.usluga.id;
                    this.logoImageUrl = this.imageUrl + resp.photo;
                }).catch(error => {
                    this.nbToastService.danger('Категория не найдена!');
                    this.router.navigate(['/admin/employee']);
                });
            } else {

            }
        });
        this.$url.unsubscribe();
    }

    addNew() {
        const formData = new FormData();
        console.log(this.categoryImg);
        if (this.categoryImg)
            formData.append('file', this.categoryImg);
        console.log(formData);
        if (this.categoryId) {
            console.log(this.categoryRequest);
            console.log(this.categoryRequest.description);
            console.log(this.categoryRequest.name);
            console.log(this.categoryRequest.uslugaId);
            this.categoryService.updateCategory(this.categoryRequest.description,
                this.categoryRequest.name, this.categoryRequest.uslugaId, formData, this.categoryId).toPromise()
                .then(resp => {
                    console.log(resp);
                    this.router.navigate(['/admin/employee']);
                }).catch( err => {
                    console.error(err);
                    this.nbToastService.danger('Ошибка');
            });
        } else {
            this.categoryService.addNewCategory(this.categoryRequest.description,
                this.categoryRequest.name, this.categoryRequest.uslugaId, formData)
                .toPromise().then(resp => {
                console.log(resp);
                this.router.navigate(['/admin/employee']);
            }).catch(err => {
                console.error(err);
                this.nbToastService.danger('Ошибка');
            });
        }


    }

    logoImageLoad(event) {
        if (event.target.files && event.target.files[0]) {
            this.categoryImg = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (e: any) => {
                this.logoImageUrl = e.target.result;
                // this.categoryImg = reader.result;
            };
        }

    }
}
