export class ApiResponse<T> {

    /**
     *
     */
    constructor() {
    }

    success: boolean;
    data: T;
    additionalData: any;
}