import { Agent } from '../src/agent/index';

describe('Agent Class', () => {
    let agent: Agent;

    beforeEach(() => {
        agent = new Agent();
    });

    test('should initialize the agent', () => {
        agent.initialize();
        expect(agent.isInitialized).toBe(true);
    });

    test('should execute a command', () => {
        const command = 'testCommand';
        const result = agent.executeCommand(command);
        expect(result).toBeDefined();
    });

    test('should shutdown the agent', () => {
        agent.shutdown();
        expect(agent.isInitialized).toBe(false);
    });

    test('should handle command execution errors', () => {
        const command = 'invalidCommand';
        expect(() => agent.executeCommand(command)).toThrow(Error);
    });
});