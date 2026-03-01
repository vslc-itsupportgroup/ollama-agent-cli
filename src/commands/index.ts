import { OllamaClient, RequestPayload, ResponseData } from '../agent';

export const commandOne = async (payload: RequestPayload): Promise<ResponseData> => {
    const agent = new OllamaClient('http://localhost:11434');
    await agent.sendRequest(payload);
    const response = await agent.receiveResponse();
    return response;
};

export const commandTwo = async (payload: RequestPayload): Promise<ResponseData> => {
    const agent = new OllamaClient('http://localhost:11434');
    await agent.sendRequest(payload);
    const response = await agent.receiveResponse();
    return response;
};

// Add more command functions as needed.