import { createPost } from '../../../utils/mdx-utils'

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const data = req.body;

    const response = await createPost(data);

    return res.status(response.status).json(response.data);

  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
}