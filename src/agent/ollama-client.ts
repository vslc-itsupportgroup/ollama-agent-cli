import { RequestPayload, ResponseData } from './types';

export class OllamaClient {
    private serverUrl: string;

    constructor(serverUrl: string) {
        this.serverUrl = serverUrl;
    }

    async sendRequest(payload: RequestPayload): Promise<void> {
        const response = await fetch(`${this.serverUrl}/api/request`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Error sending request: ${response.statusText}`);
        }
    }

    async receiveResponse(): Promise<ResponseData> {
        const response = await fetch(`${this.serverUrl}/api/response`);

        if (!response.ok) {
            throw new Error(`Error receiving response: ${response.statusText}`);
        }

        return response.json();
    }
}