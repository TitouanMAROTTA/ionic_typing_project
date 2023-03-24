export class Quote {
    id?: string;
    author: string;
    content: string;
    title: string;

    constructor(){
        this.author = '';
        this.content = '';
        this.title = '';
    }
}
