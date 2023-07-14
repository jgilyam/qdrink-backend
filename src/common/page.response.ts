export interface Page<T>{
    content: T[];
    number: number;
    size: number;
    totalElements: number;
    numberOfElements?: number;
    hasContent?: boolean;
    first?: boolean;
    last?: boolean;
    totalPages: number;
}

export class PageImpl<T> implements Page<T>{
    content: T[];
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;

    constructor(content: T[], totalElements: number){
        this.content= content;
        this.number = 1;
        this.size = content.length;
        this.totalElements = totalElements;
        this.totalPages = 1;
    }

}
