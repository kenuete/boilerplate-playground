import { mergeMap, map, filter, tap,  catchError } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { of } from 'rxjs';

ajax('/apps/TestApp/data/sample.json')
.pipe(
    tap(value => console.log('testing ',value)),
    mergeMap(value => value.response),
    filter(value => value.name == 'john'),
    catchError(err => of({ name: err}))
    )
.subscribe(
    value => console.log(value),
    error => console.log(`ERROR: ${error}`)
)
