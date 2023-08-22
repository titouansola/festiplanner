import { NextApiRequest, NextApiResponse } from 'next';
import { isAuthenticated } from '@internal/server';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await isAuthenticated(req, res);
  return res.json(user);
}
