export interface Client {
    uuid: string;
    fullName: string;
    email: string;
    [key: string]: any;
}