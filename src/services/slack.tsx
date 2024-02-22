import { WebClient } from '@slack/web-api';

const token = process.env.SLACK_BOT_TOKEN;

const web = new WebClient(token);

interface ISendSlackMessage {
  message: string;
  conversationId: string;
}

const sendSlackMessage = async ({ message }: ISendSlackMessage) => {
  try {
    await web.chat.postMessage({ channel: 'C04QT1U45H6', text: message });
  } catch (e) {
    console.log(e);
  }
};

export { sendSlackMessage };
