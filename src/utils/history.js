
import { createHashHistory } from 'history';

export const history = createHashHistory();

history.listen(_ => {
  	window.scrollTo(0, 0)
})