import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';

const observable = Observable.create((observer: any) => {
  try {
    observer.next('say Hi');
    observer.next('Hi there');
    observer.next('How are you?');
    setInterval(() => observer.next('I am good'), 2000);
  } catch (error) {
    observer.error(error);
  }
}).share();

// First subscriber
observable.subscribe((val: string) => addItem(val));
// second subscriber
setTimeout(function() {
  observable.subscribe((val: string) => addItem('Subscriber 2: ' + val));
}, 1000);

// to add the item to the DOM.
function addItem(val: string): void {
  var node = document.createElement('li');
  var textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}
