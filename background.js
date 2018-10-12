console.log("background running");

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

var jsonData;

var url_base='https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=';
var symbol='MSFT';
var interval='&interval=';
var time='5min';
var api_url='&apikey=';
var api_key='2SAZELEGOSROC4GJ';

var alpha_vantage=url_base+symbol+interval+time+api_url+api_key;
request.onload = function()
{
 // Begin accessing JSON data here
 	jsonData = JSON.parse(this.response);

}
request.open('GET', alpha_vantage, true);
request.send();



chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) 
{
	console.log(jsonData);
}