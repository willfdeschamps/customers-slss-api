export interface Response {
    statusCode: number;
    body: string;
}

enum HTTP_ROOT_STATUS_CODE {
    SUCCESS = '2',
    CLIENT_ERROR = '4',
    INTERNAL_SERVER_ERROR = '5'
}
export function makeResponse(statusCode: number, body: object, meta? : object): Response {
    const rootStatusCode = ('' + statusCode)[0];
    switch (rootStatusCode) {
        case HTTP_ROOT_STATUS_CODE.SUCCESS:
            return { statusCode, body: JSON.stringify({ data: body, meta }) }
        case HTTP_ROOT_STATUS_CODE.CLIENT_ERROR:
        case HTTP_ROOT_STATUS_CODE.INTERNAL_SERVER_ERROR:    
            return { statusCode, body: JSON.stringify({ error: body }) }
        default:
            return { statusCode, body: JSON.stringify(body) }

    }
}
