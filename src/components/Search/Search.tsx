import {FC, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch} from "react-redux";
import {searchValue} from "../../store/movieLayer/actions";
import {SearchIconWrapper, SearchTag, StyledInputBase} from "./Search.styles"


export const Search: FC = () => {
	const [query, setQuery] = useState("");
	const dispatch = useDispatch();

	const searchText = () => {
		if (query.trim().length) {
			dispatch(searchValue({query, page: 1}));
			setQuery("");
		}
	};

	const handleSubmit = (e: any) => {
		if (e.key === "Enter") {
			searchText();
		}
	};

	return (
		<SearchTag>
			<SearchIconWrapper>
				<SearchIcon sx={{color: "white"}}/>
			</SearchIconWrapper>
			<StyledInputBase sx={{color: "white"}}
											 placeholder="Search…"
											 inputProps={{'aria-label': 'search'}}
											 value={query}
											 onChange={(e) => setQuery(e.target.value)}
											 onKeyDown={handleSubmit}
			/>
		</SearchTag>
	);
};