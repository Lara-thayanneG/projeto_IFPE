export interface User {
    id: string;
    email: string;
    name: string;
    address: {
        state: string,
        city: string
    }
}
