/* Part 1 */

import { Observable, of, from, concat, fromEvent, interval, just } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { mergeMap, flatMap, map, filter } from 'rxjs/operators'
//require('core-js/features/array/flat-map')
//import Rx from 'rx-lite-experimental'

// const subscribe = (subscriber) => {
//     const data = [1,2]
//     for(let i in data) {
//         subscriber.next(data[i])
//     }
//     setTimeout(() => {
//         subscriber.next('timedout')
//     }, 5000);
// }

// const testObservable$ = new Observable(subscribe)
// testObservable$.subscribe(value => console.log(value))

// const source1$ = of(3,4)
// source1$.subscribe(value => console.log(value))

// const arr = [{
//     name: 'kenuete'
// }]
// const source2$ = from(arr)
// source2$.subscribe(value => console.log(value))

// const source3$ = concat(source1$, source2$)
// source3$.subscribe(value => console.log(value))


// const button = document.getElementById('btn')
// fromEvent(button, 'click').subscribe(event => {
//     console.log('button clicked - this is a fromEvent observable.')
// })


// fromEvent(button, 'click').subscribe(event => {
//     ajax('/apps/TestApp/data/sample.json').subscribe(response => {
//         console.log(response.response)
//     })
// })


/* Part 2 */

// const subscribe1 = (observer) => {
//     const data = ['wolverine', 'hulk']
//     for(let i in data) {
//         if(data[i] == 'hulk') {
//             observer.complete()
//             break;
//         }
//         observer.next(data[i])
//     }    
// }

// const s1$ = new Observable(subscribe1)

// const observer = {
//     next: value => console.log(value),
//     complete: () => console.log('done!!')
// }

// s1$.subscribe(observer)


/* Part 3 */
// const second$ = interval(1000)
// second$.pipe(flatMap(value => value)).subscribe(value => console.log(value))

const map1 = [

    {
      node: '.js-product-details-reserve-and-collect',
      component: 'ReserveAndCollectProvider',
      shouldComponentRender: { flags: { StockLevelsFeatureToggle: true, ReserveAndCollectFeatureToggle: true }, match: 'ALL' },
    }
  ]


const source$ = from(map1).pipe(flatMap(item => of(item)), filter(item => item)).subscribe(({ shouldComponentRender: { flags, match } }) => console.log(match))