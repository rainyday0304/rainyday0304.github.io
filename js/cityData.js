﻿var word = [
	{
		Area: 'TW', City: [
			{ CName: '新北市', EName: 'New Taipei' },

		]
	}
];

var WeekForcastUrl = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?';

var WeekChinese = {
	"Mon": "一",
	"Tue": "二",
	"Wed": "三",
	"Thu": "四",
	"Fri": "五",
	"Sat": "六",
	"Sun": "日"
}


var weather_con = {
	"01": ["https://isdaniel.github.io/Yahoo-WeatherAPI/Images/weather_sunny.png", "晴天"],
	"02": ["https://isdaniel.github.io/Yahoo-WeatherAPI/Images/weather_sunny.png", "晴天"],
	"03": ["https://isdaniel.github.io/Yahoo-WeatherAPI/Images/weather_cloudy.png", "多雲"],
	"04": ["https://isdaniel.github.io/Yahoo-WeatherAPI/Images/weather_cloudy.png", "多雲"],
	"05": ["https://isdaniel.github.io/Yahoo-WeatherAPI/Images/weather_cloudy.png", "多雲"],
	"06": ["https://isdaniel.github.io/Yahoo-WeatherAPI/Images/weather_cloudy.png", "多雲"],
	"06": ["https://isdaniel.github.io/Yahoo-WeatherAPI/Images/weather_rain.png", "雨天"],
	"07": ["https://isdaniel.github.io/Yahoo-WeatherAPI/Images/weather_rain.png", "雨天"],
	"08": ["https://isdaniel.github.io/Yahoo-WeatherAPI/Images/weather_rain.png", "雨天"],
	"09": ["https://isdaniel.github.io/Yahoo-WeatherAPI/Images/weather_rain.png", "雨天"],
	"10": ["https://isdaniel.github.io/Yahoo-WeatherAPI/Images/weather_rain.png", "雨天"],
	"11": ["https://isdaniel.github.io/Yahoo-WeatherAPI/Images/weather_rain.png", "雨天"],
	"12": ["https://isdaniel.github.io/Yahoo-WeatherAPI/Images/weather_rain.png", "雨天"],
	"13": ["https://isdaniel.github.io/Yahoo-WeatherAPI/Images/weather_rain.png", "雨天"],
	"14": ["https://isdaniel.github.io/Yahoo-WeatherAPI/Images/weather_rain.png", "雨天"],
	"15": ["https://isdaniel.github.io/Yahoo-WeatherAPI/Images/weather_rain.png", "雨天"],
	"16": ["https://isdaniel.github.io/Yahoo-WeatherAPI/Images/weather_rain.png", "雨天"],
	"17": ["https://isdaniel.github.io/Yahoo-WeatherAPI/Images/weather_rain.png", "雨天"],
	"18": ["https://isdaniel.github.io/Yahoo-WeatherAPI/Images/weather_rain.png", "雨天"]
}