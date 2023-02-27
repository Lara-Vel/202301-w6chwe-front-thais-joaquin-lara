import { server } from '../mocks/server';
import { Robot } from '../types/interfaces';
import {
  getAllRobots,
  getRobotById,
  createRobot,
  updateRobot,
  deleteRobot,
} from './data';

describe('Given an API call', () => {
  let mockRobotsList: Robot[] = [];

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('When requesting a GET method, the response should be a robots list', async () => {
    const robotsList: Robot[] = await getAllRobots();
    expect(robotsList[0].id).toBe('robot-1');
  });

  test('When requesting a GET of a signle robot, the response should be that exact robot', async () => {
    const robot: Robot = await getRobotById('robot-1');
    expect(robot.id).toBe('robot-1');
  });

  test('When requesting POST method, the array should have a new robot', async () => {
    const newRobot: Robot = {
      id: 'robot-1',
      name: 'Robot 1',
      img: '',
      speed: 0,
      resistence: 0,
      creationDate: '',
    };
    await createRobot(newRobot);
    mockRobotsList.push(newRobot);
    expect(mockRobotsList).toHaveLength(1);
  });

  test('When requesting PATCH method, the array should have a new robot', async () => {
    const newRobot: Robot = {
      id: 'robot-1',
      name: 'Robot 232',
      img: '',
      speed: 0,
      resistence: 0,
      creationDate: '',
    };
    await updateRobot('robot-1', newRobot);
    expect(mockRobotsList[0].name).toBe('Robot 1');
  });

  test('When requesting a DELETE method, the robots list should not have the specific given robot', async () => {
    await deleteRobot('robot-1');
    mockRobotsList.pop();
    expect(mockRobotsList).toHaveLength(0);
  });
});
