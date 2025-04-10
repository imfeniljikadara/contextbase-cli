import Conf from 'conf';

const store = new Conf({ projectName: 'contextbase-cli' });

export const setToken = (token: string) => store.set('token', token);
export const getToken = () => store.get('token') as string | undefined;
export const clearToken = () => store.delete('token');
