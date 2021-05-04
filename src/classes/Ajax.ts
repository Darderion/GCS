
import * as $ from "jquery";

export function send(url: string, onReceive: (text: string) => void) {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4){
			onReceive(xhr.responseText)
		}
	};
	xhr.open('GET', url);
	xhr.send()
}
