import API from './axios';
import friendlyError from './friendlyError';

export const getPosts = async () => {
  try {
    const response = await API.get('posts/');

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`${error.name}: ${error.message}`, friendlyError(error));

    return [];
  }
};

export const insertPost = async (payload) => {
  try {
    const { token } = JSON.parse(localStorage.getItem('userData'));

    const response = await API.post('posts', payload, { headers: { Authorization: token } });

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`${error.name}: ${error.message}`);
    return friendlyError(error) || error;
  }
};

export const deletePost = async (id) => {
  try {
    const { token } = JSON.parse(localStorage.getItem('userData'));

    const response = await API.delete(`posts/${id}`, { headers: { Authorization: token } });

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`${error.name}: ${error.message}`);
    return friendlyError(error) || error;
  }
};
