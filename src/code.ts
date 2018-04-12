import { Observable } from 'rxjs/Observable';

const observable = Observable.create((observer: any) => {
  try {
    observer.next('say Hi');
    observer.next('Hi there');
    observer.next('How are you?');
    observer.complete();
    observer.next('This will not be shown');
  } catch (error) {
    observer.error(error);
  }
});

observable.subscribe(
  (val: any) => addItem(val),
  (error: any) => addItem(error),
  () => addItem('completed')
);

function addItem(val: string): any {
  var node = document.createElement('li');
  var textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}
