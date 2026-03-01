export interface RequestPayload {
    model: string;
    prompt: string;
    stream?: boolean;
}

export interface ResponseData {
    response: string;
    done: boolean;
}