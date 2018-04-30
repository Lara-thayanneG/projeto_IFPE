export interface User {
    id: string;
    name: string;
    address: {
        state: string,
        city: string
    }
}
