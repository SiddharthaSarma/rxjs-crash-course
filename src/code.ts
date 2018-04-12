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

// First subscriber
const observer = observable.subscribe(
  (val: string) => addItem(val),
  (error: any) => addItem(error),
  () => addItem('completed')
);

// second subscriber
const secondObserver = observable.subscribe((val: string) =>
  addAnotherItem(val)
);

// to make the second subscriber work along with the first subscriber
observer.add(secondObserver); // comment out this line and see the difference

// Unsubscribing from observer
setTimeout(() => observer.unsubscribe(), 6001);

// to add the item to the DOM.
function addItem(val: string): void {
  var node = document.createElement('li');
  var textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}
// to add the item to the DOM.
function addAnotherItem(val: string): void {
  var node = document.createElement('li');
  var textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('anotherOutput').appendChild(node);
}
