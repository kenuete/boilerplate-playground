import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
const source1$ = of(1,2,3)
// const doubler = map(value => value*2)
// const source2$ = doubler(source1$)
// const source3$ = doubler(source2$)
// source3$.subscribe(value => console.log(value))

source1$.pipe(
    map(value => value*2),
    map(value => value*2),
    map(value => value*2),
    map(value => value*2)
).subscribe(value => console.log(value))