import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from 'src/app/shared/models/todo.model';

export class MockTodos implements InMemoryDbService {
  createDb() {
    const todos: Todo[] = [
      {
        id: 1,
        state: false,
        title: 'Learn how to surf',
        description: `Without diying from shark attacks (if possible)`,
        creationDate: new Date(2019, 5, 25),
      },
      {
        id: 2,
        state: true,
        title: 'Go to the cinema',
        description: `Let's watch Avengers: EndGame (when we are done working)`,
        creationDate: new Date(2019, 6, 28),
      },
      {
        id: 3,
        state: false,
        title: 'Sing a song',
        description: `Singin' in the rain`,
        creationDate: new Date(2018, 4, 19),
      },
      {
        id: 4,
        state: true,
        title: 'Play Fortnite',
        description: `Nahhh, just kidding, I'm not twelve years old !`,
        creationDate: new Date(2018, 7, 27),
      },
    ];
    return {todos};
  }
}
