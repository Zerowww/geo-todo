import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Todo} from 'src/app/shared/models/todo.model';

export class MockTodos implements InMemoryDbService {
  createDb() {
    const todos: Todo[] = [
      {
        id: 1,
        state: false,
        title: 'Learn how to surf',
        description: `Without diying from shark attacks (if possible)`,
        creationDate: new Date(),
      },
      {
        id: 2,
        state: false,
        title: 'Go to the cinema',
        description: `Let's watch Avengers: EndGame (when we are done working)`,
        creationDate: new Date(),
      },
      {
        id: 3,
        state: true,
        title: 'Sing a song',
        description: `Singin' in the rain`,
        creationDate: new Date(),
      },
      {
        id: 4,
        state: true,
        title: 'Play Fortnite',
        description: `Nahhh, just kidding, I'm not twelve years old !`,
        creationDate: new Date(),
      },
    ];
    return {todos};
  }
}
