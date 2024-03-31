function writeCards(name, event) {
  const invite = [];
  for (let i = 0; i < name.length; i++) {
    invite.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }
  return invite;
}

function countDown(i) {
  while (i >= 0) {
    console.log(i);
    i--;
  }
}
