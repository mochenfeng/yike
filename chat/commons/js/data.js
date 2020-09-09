export default {
	friends: function() {
		let friendArr = [
			{
				id: 1,
				imgurl: 'one.jpg',
				tip: 1,
				email: '1109525329@qq.com',
				name: '大海',
				time: new Date(),
				news: '海洋（SEA），地理名词，是地球上最广阔的水体的总称。地球表面被各大陆地分隔为彼此相通的广大水域称为海洋'
			},
			{
				id: 2,
				imgurl: 'two.jpg',
				tip: 0,
				email: '1109525320@qq.com',
				name: '柠檬',
				time: new Date(),
				news: '柠檬（拉丁学名：Citrus limon）是芸香科柑橘属的常绿小乔木，性喜温暖，耐阴，怕热。'
			},
			{
				id: 3,
				imgurl: 'three.jpg',
				tip: 2,
				email: '1109525321@qq.com',
				name: '山川',
				time: new Date(),
				news: '山川是由于地质变换形成山地的地形地貌；山地中，出露地表高高耸立的是山，山与山之间的跨越区地带便是川。'
			},
			{
				id: 4,
				imgurl: 'four.jpg',
				tip: 10,
				email: '1109525322@qq.com',
				name: '倾城',
				time: new Date(),
				news: '国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能。'
			},
			{
				id: 5,
				imgurl: 'one.jpg',
				tip: 0,
				email: '1109525323@qq.com',
				name: '大海',
				time: new Date(),
				news: '海洋（SEA），地理名词，是地球上最广阔的水体的总称。地球表面被各大陆地分隔为彼此相通的广大水域称为海洋'
			},
			{
				id: 6,
				imgurl: 'two.jpg',
				tip: 5,
				email: '1109525324@qq.com',
				name: '柠檬',
				time: new Date(),
				news: '柠檬（拉丁学名：Citrus limon）是芸香科柑橘属的常绿小乔木，性喜温暖，耐阴，怕热。'
			},
			{
				id: 7,
				imgurl: 'three.jpg',
				tip: 0,
				email: '1109525325@qq.com',
				name: '山川',
				time: new Date(),
				news: '山川是由于地质变换形成山地的地形地貌；山地中，出露地表高高耸立的是山，山与山之间的跨越区地带便是川。'
			},
			{
				id: 8,
				imgurl: 'four.jpg',
				tip: 10,
				email: '1109525326@qq.com',
				name: '倾城',
				time: new Date(),
				news: '国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能。'
			},
			{
				id: 9,
				imgurl: 'one.jpg',
				tip: 1,
				email: '1109525327@qq.com',
				name: '大海',
				time: new Date(),
				news: '海洋（SEA），地理名词，是地球上最广阔的水体的总称。地球表面被各大陆地分隔为彼此相通的广大水域称为海洋'
			},
			{
				id: 10,
				imgurl: 'two.jpg',
				tip: 5,
				email: '1109525328@qq.com',
				name: '柠檬',
				time: new Date(),
				news: '柠檬（拉丁学名：Citrus limon）是芸香科柑橘属的常绿小乔木，性喜温暖，耐阴，怕热。'
			},
			{
				id: 11,
				imgurl: 'three.jpg',
				email: '1109525310@qq.com',
				tip: 2,
				name: '山川',
				time: new Date(),
				news: '山川是由于地质变换形成山地的地形地貌；山地中，出露地表高高耸立的是山，山与山之间的跨越区地带便是川。'
			},
			{
				id: 12,
				imgurl: 'four.jpg',
				tip: 10,
				email: '1109525311@qq.com',
				name: '倾城',
				time: new Date(),
				news: '国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能。'
			},
		];
		return friendArr;
	},

	//  好友关系
	isFriend: function() {
		let isfriend = [
			{
				userid: 1,
				friend: 2
			},
			{
				userid: 1,
				friend: 3
			},
			{
				userid: 1,
				friend: 4
			},
			{
				userid: 1,
				friend: 5
			},{
				userid: 1,
				friend: 6
			}
		]
		return isfriend;
	}
}