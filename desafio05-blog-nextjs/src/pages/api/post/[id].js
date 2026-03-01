import { updatePost, deletePost } from '../../../utils/mdx-utils'

export default async function handler(req, res) {

  const { id } = req.query;

  if (req.method !== 'PUT' && req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const data = req.body;

    let response;

    switch(req.method) {
      case 'PUT': 
        response = await updatePost(id, data);
        break;
      case 'DELETE':
        response = await deletePost(id);
        break;
    }

    return res.status(response.status).json(response.data);

  } catch (error) {
    console.error(error.response?.data);
    console.error(error.response?.status);
    return res.status(500).json({
      error: error.message
    });
  }
}