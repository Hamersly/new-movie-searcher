import axios from "axios";
import {IDetailResponse, IListResponse, ISearchResponse} from "../../types/types";


// const proxy = {
//     protocol: 'https',
//     host: '142.93.151.99',
//     port: 45365,
//   }

export async function listApi(
  format: string,
  sort: string,
  listPage: number
): Promise<object> {
  const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;
  const BASE_URL: string = "https://api.themoviedb.org/3/discover";
  const url: string = `${BASE_URL}/${format}?api_key=${API_KEY}&language=ru-RU&sort_by=${sort}.desc&page=${listPage}`;

  const {page, results, total_pages}: IListResponse = await axios
    .get(url)
    .then((response: any) => response.data)
    .catch((error) => console.log(error));

  return {page, results, total_pages};
}

export async function detailApi(format: string, id: string): Promise<object> {
  const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;
  const BASE_URL: string = "https://api.themoviedb.org/3";
  const url: string = `${BASE_URL}/${format}/${id}?api_key=${API_KEY}&language=ru-RU`;

  const {title, original_title, name, original_name, backdrop_path, overview}: IDetailResponse = await axios
    .get(url)
    .then((response: any) => response.data)
    .catch((error) => console.log(error));

  return {title, original_title, name, original_name, backdrop_path, overview};
}

export async function searchApi(query: string, queryPage: number): Promise<object> {
  const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;
  const BASE_URL: string = "https://api.themoviedb.org/3";
  const url: string = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=ru-RU&query=${query}&page=${queryPage}`;

  const {page, results, total_pages}: ISearchResponse = await axios
    .get(url)
    .then((response: any) => response.data)
    .catch((error) => console.log(error));

  return {page, results, total_pages};
}

export async function topApi(): Promise<object> {
  const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;
  const BASE_URL: string = "https://api.themoviedb.org/3";

  const url: string = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ru-RU&sort_by=popularity.desc`;

  const response = await axios
    .get(url)
    .then((response: any) => response.data)
    .catch((error) => console.log(error));

  return response.results

}

