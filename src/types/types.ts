export interface Content {
	poster_path: string;
	id: number;
	title: string;
	name: string;
	original_title: string;
	original_name: string;
	release_date: string;
	first_air_date: string
	popularity: number;
}

export interface ListResponse {
	page: number;
	results: [];
	total_pages: number;
}

export interface DetailResponse {
	title: string;
	original_title: string;
	name: string;
	original_name: string;
	backdrop_path: string;
	overview: string;
}

export interface ContentList {
	format: string;
	content: ListResponse;
}

export interface SearchResponse extends ListResponse {
}

export interface HandleChangeFunc {
	(event: object, value: number): void
}