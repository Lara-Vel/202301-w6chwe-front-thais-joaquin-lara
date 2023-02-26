// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  // Robots list
  rest.get(
    'https://two02301-w6chwe-thais-joaquin-lara.onrender.com/api/v1/robots',
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 'robot-1',
            name: 'Robot 1',
          },
          {
            id: 'robot-2',
            name: 'Robot 2',
          },
        ])
      );
    }
  ),

  // Robot by ID
  rest.get(
    'https://two02301-w6chwe-thais-joaquin-lara.onrender.com/api/v1/robots/robot-1',
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ id: 'robot-1', name: 'Robot 1' }));
    }
  ),

  // Create robot
  rest.post(
    'https://two02301-w6chwe-thais-joaquin-lara.onrender.com/api/v1/robots',
    (_req, res, ctx) => {
      return res(ctx.status(201));
    }
  ),

  // Delete robot
  rest.delete(
    'https://two02301-w6chwe-thais-joaquin-lara.onrender.com/api/v1/robots/robot-1',
    (_req, res, ctx) => {
      return res(ctx.status(204));
    }
  ),

  // Update robot
  rest.patch(
    'https://two02301-w6chwe-thais-joaquin-lara.onrender.com/api/v1/robots/robot-1',
    (_req, res, ctx) => {
      return res(ctx.status(204));
    }
  ),
];
