import { NextApiRequest, NextApiResponse } from 'next';
import { HTTP_ERROR } from '@internal/constants';

export function unhandledHttpMethod(req: NextApiRequest, res: NextApiResponse) {
  res
    .status(HTTP_ERROR)
    .json({ message: `Unhandled HTTP method : ${req.method}` });
}
