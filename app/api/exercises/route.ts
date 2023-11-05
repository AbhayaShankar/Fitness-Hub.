
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const filePath = path.join(process.cwd(), 'exercises.json');
        const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        res.status(200).json(jsonData);
    } catch (error) {
        console.error('Error reading or parsing JSON:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}