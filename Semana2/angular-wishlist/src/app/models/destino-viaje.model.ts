import { v4 as uuid } from 'uuid';


export class DestinoViaje {

    private selected: boolean;
    public servicios: string[];
    id = uuid();

    constructor(public nombre: string, public u: string, public votes: number = 0) {
        this.servicios = ['Pileta', 'Desayuno'];
    }

    setSelected(s: boolean) {
        this.selected = s;
    }

    isSelected(): boolean {
        return this.selected;
    }

    voteUp() {
        this.votes++;
    }

    voteDown() {
        this.votes--;
    }
}