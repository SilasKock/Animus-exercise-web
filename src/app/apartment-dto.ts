export class ApartmentDTO {
    // class that defines the attributes of an apartment
    constructor(
        public id: number,
        public available: string,
        public street: string,
        public plz: number,
        public place: string,
        public country: string,
        public email: string
    ){}
}
