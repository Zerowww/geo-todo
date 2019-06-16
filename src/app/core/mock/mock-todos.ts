import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Todo, TodoState} from 'src/app/shared/models/todo.model';

export class MockTodos implements InMemoryDbService {
  createDb() {
    const todos: Todo[] = [
      {
        id: 1,
        state: TodoState.IN_PROGRESS,
        title: 'Learn how to surf',
        description: `Without diying from shark attacks (if possible)`,
        creationDate: new Date(),
      },
      {
        id: 2,
        state: TodoState.IN_PROGRESS,
        title: 'Go to the cinema',
        description: `Let's watch Avengers: EndGame (when we are done working)`,
        creationDate: new Date(),
      },
      {
        id: 3,
        state: TodoState.DONE,
        title: 'Sing a song',
        description: `Singin' in the rain`,
        creationDate: new Date(),
      },
      {
        id: 4,
        state: TodoState.DONE,
        title: 'Play Fortnite',
        description: `Nahhh, just kidding, I'm not twelve years old !`,
        creationDate: new Date(),
      },
    ];
    return {todos};
  }
}
