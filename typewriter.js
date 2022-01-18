let sentence = 'hello there from lighthouse labs';
sentence += '\n';
let delay = 0;

for (const char of sentence) {
  
  if (char !== sentence.length - 1){
    setTimeout(() => {
      process.stdout.write(char);
    }, delay)
  }
    delay += 50;
  
}


