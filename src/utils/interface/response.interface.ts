export interface responseInterface {
    data: {
        response: {
            status: {
                code?: number;
                message: string;
            };
            records: any;
        };
    };
    error?: {
        message?: string;
    };
}
