import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name:"orderby"})
export class OrderBy implements PipeTransform{
    transform(arr: any[], col:string,order:boolean) {
        if(col==undefined){
            return arr;
        }
        let result:any[]; 
        if(order){
            result = this.ascending(arr,col);
        }
        else {
            result = this.descending(arr,col);
        }
        return result;
    }
    ascending(arr:any[],column:string){
        arr.sort((a:any,b:any)=>{
            if(a[column]>b[column]){
                return 1;
            }
            return -1;
        });
        return arr;
    }
    descending(arr:any[],column:string){
        arr.sort((a:any,b:any)=>{
            if(a[column]>b[column]){
                return -1;
            }
            return 1;
        });
        return arr;
    }

}