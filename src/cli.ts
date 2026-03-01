import { Command } from 'commander';
import { OllamaClient } from './agent';

const program = new Command();

program
  .name('ollama-cli-agent')
  .description('CLI AI Agent powered by Ollama')
  .version('1.0.0');

program
  .command('ask <prompt>')
  .description('Ask the AI agent a question')
  .action(async (prompt: string) => {
    try {
      const agent = new OllamaClient('http://localhost:11434');
      await agent.sendRequest({ model: 'llama2', prompt });
      const result = await agent.receiveResponse();
      console.log(result.response);
    } catch (error) {
      console.error('Error executing command:', error);
    }
  });

export const runCLI = () => {
  program.parse(process.argv);
};