import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from 'src/app/shared/models/todo.model';

export class MockTodos implements InMemoryDbService {
  createDb() {
    const todos: Todo[] = [
      {
        id: 1,
        state: false,
        title: 'Save the earth (or find another planet)',
        description: `Naaaaaah, global warming is a myth`,
        creationDate: new Date(2018, 5, 25),
      },
      {
        id: 2,
        state: true,
        title: `Let's put back some ice cubes to ice poles`,
        description: `They call me Mr Freeze`,
        creationDate: new Date(2018, 6, 28),
      },
      {
        id: 3,
        state: false,
        title: 'Join Sea Shepard',
        description: `I'm the captain now !`,
        creationDate: new Date(2017, 4, 19),
      },
      {
        id: 4,
        state: true,
        title: 'Remember that beeing green is sexy',
        description: `Especially when you are muscular and part of The Avengers`,
        creationDate: new Date(2017, 7, 27),
      },
    ];
    return {todos};
  }
}
