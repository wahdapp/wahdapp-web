import axios from 'axios';
import { Prayer } from 'types';

const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN;

export async function getPrayerByID(id: string) {
  try {
    const { data } = await axios.get<{ data: Prayer }>(
      `${API_DOMAIN}/prayer?id=${id}`
    );

    return data.data;
  } catch (e) {
    throw e;
  }
}
