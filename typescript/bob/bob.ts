const isAsking = (text: string) => /\?$/i.test(text);
const isYelling = (text: string) => /[A-Z]+/.test(text) && text === text.toUpperCase();
const isSilence = (text: string) => text === '';
const isOnlyAsking = (text: string) => isAsking(text) && !isYelling(text);
const isOnlyYelling = (text: string) => !isAsking(text) && isYelling(text);
const isAskingAndYelling = (text: string) => isAsking(text) && isYelling(text);

const answers = [
  { received: isOnlyAsking,       response: 'Sure.' },
  { received: isOnlyYelling,      response: 'Whoa, chill out!' },
  { received: isAskingAndYelling, response: 'Calm down, I know what I\'m doing!' },
  { received: isSilence,          response: 'Fine. Be that way!' },
];

const defaultAnswer = { response: 'Whatever.' };

class Bob {
  hey(message: string): string {
    const phrase = message.trim();
    return (answers.find(e => e.received(phrase)) || defaultAnswer).response;
  }
}

export default Bob
