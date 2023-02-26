import { Robot } from '../types/interfaces';

const dbUrl =
  'https://two02301-w6chwe-thais-joaquin-lara.onrender.com/api/v1/robots';

export const getAllRobots = async () => {
  const response = await fetch(dbUrl, { method: 'GET' });

  const robots: Robot[] = await response.json();
  return robots;
};

export const getRobotById = async (id: string) => {
  const response = await fetch(`${dbUrl}/${id}`, { method: 'GET' });

  const robot: Robot = await response.json();
  return robot;
};

export const deleteRobot = async (id: string) => {
  const response = await fetch(`${dbUrl}/${id}`, { method: 'DELETE' });
  if (!response.ok) {
    return `Failed to delete robot ${id}: ${response.statusText} (${response.status})`;
  }

  return `Robot succesfully deleted (${response.status})`;
};

export const createRobot = async (robot: Robot) => {
  const response = await fetch(dbUrl, {
    method: 'POST',
    body: JSON.stringify(robot),
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    return `Failed to create new robot: ${response.statusText} (${response.status})`;
  }

  return `Robot succesfully created (${response.status})`;
};

export const updateRobot = async (id: string, robot: Robot) => {
  const response = await fetch(`${dbUrl}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(robot),
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    return `Failed to update robot ${id}: ${response.statusText} (${response.status})`;
  }

  return `Robot succesfully updated (${response.status})`;
};
