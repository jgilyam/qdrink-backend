export interface ApiErrorResponse{
    type: string;
    title: string;
    status: number;
    detail: string;
    instance: string;
    code?: string;
}