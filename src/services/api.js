/**
 *  Imports
 */
import axios from 'axios';

// const getURLParameter = (qrString, paramName) => {
//   qrString = qrString.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
//   var regex = new RegExp('[\\?&]' + paramName + '=([^&#]*)');
//   var results = regex.exec(qrString);


//   if (results && results.length > 0) {
//     return decodeURIComponent(results[1].replace(/\+/g, ' '));
//   } else {
//     return '';
//   }
// }
var accesstoken = localStorage.getItem('accessToken');
/**
 *  Function to create body via form data
 */
const createFormData = (body) => {
	const form = new FormData();
	form.append("accesstoken", accesstoken);
	form.append("lat", localStorage.getItem('lat'));
	form.append("lng", localStorage.getItem('lng'));
	Object.keys(body).map(key => {
		const type = key;
		form.append(type, body[type]);
	});
	return form;
};

/**
 *  API call via Promise
 */
const apiCall = ({
	method = "POST",
	url,
	body = {}
}) => {
  	function apiPromise(token) {
		const headers = new Headers();
		headers.append("Content-Type", "multipart/form-data");
		if (token) {
			headers.append("Authorization", token);
		}
		
		// const additionalParameters = {
		//   body: createFormData(body),
		//   headers,
		//   method
		// };
		let param = { ...body}
		console.log("mihit",param)
		param['accesstoken'] = localStorage.getItem('accessToken')
		param['fcmtoken'] = localStorage.getItem('fcmtoken')
		param['lat'] = localStorage.getItem('lat')
		param['lng'] = localStorage.getItem('lng')
		param["address"] = JSON.parse(localStorage.getItem("address"))
		param['appVersion'] = '1.0.5'
		if(window.device){
			param['deviceInfo'] = {
				'model' : window.device.model,
				'platform' : window.device.platform,
				'uuid' : window.device.uuid,
				'version' : window.device.version,
				'manufacturer' : window.device.manufacturer,
				'serial' : window.device.serial,
			}
		}
		const form = new FormData();
		form.append("params", JSON.stringify(param));
		if (method === "POST") {
			return axios.post('https://api.selfebook.com/selfebook/'+url, form, headers)
		}else {
			return axios.get(url, {}, headers)
		}
	}

	return apiPromise()
		.then(res => res)
		.catch(err => {
		return "error";
	});
};

export default apiCall;