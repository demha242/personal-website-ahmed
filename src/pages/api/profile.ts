import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
import { Client } from '../../models/Client';
import { connectToDatabase } from '../../utils/mongodb';
import { authorize } from '../../utils/authorize';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const { userId } = authorize(token);
    const { db } = await connectToDatabase();

    if (req.method === 'GET') {
      // Handle GET request
      const client = await db.collection('clients').findOne({ user: new ObjectId(userId) });

      if (!client) {
        return res.status(404).json({ message: 'Client not found' });
      }

      res.status(200).json({ client });
    } else if (req.method === 'PUT') {
      // Handle PUT request
      const { firstName, lastName, address1, address2, city, state, zipCode } = req.body;
      const client = await db.collection('clients').findOneAndUpdate(
        { user: new ObjectId(userId
