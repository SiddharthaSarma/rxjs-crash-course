import { Observable } from 'rxjs/Observable';

const observable = Observable.create((observer: any) => {
  try {
    observer.next('say Hi');
    observer.next('Hi there');
    observer.next('How are you?');
    setInterval(() => observer.next('I am good'), 2000);
  } catch (error) {
    observer.error(error);
  }
});

const observer = observable.subscribe(
  (val: any) => addItem(val),
  (error: any) => addItem(error),
  () => addItem('completed')
);

// Unsubscribing from observer
setTimeout(() => observer.unsubscribe(), 6001);

function addItem(val: string): any {
  var node = document.createElement('li');
  var textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}
