import axios from "axios";

const KEY = "AIzaSyBYgZfLHEaUAN0x2omSlu6j_6inAmlGZZM";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY
	}
});

