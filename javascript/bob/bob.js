export const hey = (txt) => {
  const message = txt.trim();
  const isAsking = /\?$/i.test(message);
  const isYelling = /[A-Z]+/.test(message) && message === message.toUpperCase();
  
  if (!message) return 'Fine. Be that way!';
  if (isAsking && isYelling) return "Calm down, I know what I'm doing!";
  if (isAsking) return 'Sure.';
  if (isYelling) return 'Whoa, chill out!';
  return 'Whatever.';
};
