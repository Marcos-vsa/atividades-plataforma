class Observer {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    notify(event, data) {
      this.observers.forEach(observer => observer.update(event, data));
    }
  }
  
  class Editor extends Observer {
    constructor() {
      super();
      this.content = [];
    }
  
    insertLine(lineNumber, text) {
      this.content.splice(lineNumber - 1, 0, text);
      this.notify('insertLine', lineNumber);
    }
  
    removeLine(lineNumber) {
      this.content.splice(lineNumber - 1, 1);
      this.notify('removeLine', lineNumber);
    }
  }
  
  class TextEditor extends Editor {
    constructor() {
      super();
    }
  
    open() {
      console.log('Editor aberto');
      this.notify('open');
    }
  
    save() {
      console.log('Salvando o conteúdo...');
      console.log('Conteúdo salvo!');
    }
  }
  
  const textEditor = new TextEditor();
  
  textEditor.addObserver({
    update: (event) => {
      if (event === 'open') {
        console.log('Evento "open" foi acionado.');
      }
    }
  });
  
  textEditor.addObserver({
    update: (event, data) => {
      if (event === 'insertLine') {
        console.log(`Linha ${data} inserida.`);
      }
    }
  });
  
  textEditor.addObserver({
    update: (event, data) => {
        if (event === 'removeLine') {
        console.log(`Linha ${data} removida.`);
      }
    }
  });
  
  textEditor.open();
  
  let lineNumber = 1;
  let userInput = prompt(`Insira a linha ${lineNumber} (ou digite "EOF" para finalizar): `);
  
  while (userInput !== 'EOF') {
    textEditor.insertLine(lineNumber, userInput);
    lineNumber++;
    userInput = prompt(`Insira a linha ${lineNumber} (ou digite "EOF" para finalizar): `);
  }
  
  textEditor.save();
  console.log('Conteúdo do arquivo:');
  console.log(textEditor.content.join('\n'));