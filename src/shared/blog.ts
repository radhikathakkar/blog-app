export interface IBlog {
    id: string;
    name: string;
    category: string;
    description: string;
    image: string;
};

export const initialState = {
    name: '',
    category: '',
    description: '',
    image: ''
};