(function() {
    equip();
    terminal();
    internetbar();
    internetpie();
    init("#6eca34", "success");
    init("#4281e8", "online");
    init("#58bfc0", "offline");
    init("#de5667", "alert");
    excellent("#055ceb", "excellent");
    message();
    map();
})()

function equip() {
    option = {
        title: {
            text: '',
            subtext: ''
        },
        grid: {
            borderWidth: 0,
            x: 35,
            x2: 15,
        },
        //禁止柱状图拖动
        calculable: false,
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            //字体样式
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                }
            },
            //控制网格线是否显示
            splitLine: {
                show: false
            },
            //刻度线是否显示
            axisTick: {
                show: false
            },
            //分隔区域
            splitArea: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: "#fff",
                }
            },
            data: ["3:00", "6:00", "9:00", "12:00", "15:00", "18:00", "21:00", "23:00"],
        }],
        yAxis: [{
            type: 'value',
            splitArea: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "#fff",
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                }
            },
        }],
        calculable: false,
        series: [{
            name: '客流量',
            type: 'line',
            data: [300, 500, 200, 800, 600, 600, 300, 600],
            smooth: false,

            itemStyle: {
                normal: {
                    color: '#055ceb',
                },
                emphasis: {
                    color: '#055ceb',
                },
            },
            symbolSize: 1, //拐点大小
            areaStyle: {
                normal: {
                    // color: '#2d75e9',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 1,
                        color: '#0b1a4a' // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: '#2d75e9' // 100% 处的颜色
                    }, {
                        offset: 0,
                        color: '#2d75e9' // 100% 处的颜色
                    }]),
                }
            }
        }]
    };
    var myChart = echarts.init(document.getElementById("equipment"));
    myChart.showLoading({
        text: "图表数据正在努力加载...",
        effect: 'whirling',
        textStyle: {
            fontSize: 20
        }
    });
    myChart.setOption(option);
    myChart.hideLoading();
}

function terminal() {
    option = {
        title: {
            text: '',
            subtext: ''
        },
        grid: {
            borderWidth: 0,
            x: 35,
            x2: 15,
        },
        //禁止柱状图拖动
        calculable: false,
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            //字体样式
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                }
            },
            //控制网格线是否显示
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#1f2c58",
                }
            },
            //刻度线是否显示
            axisTick: {
                show: false
            },
            //分隔区域
            splitArea: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: "#fff",
                }
            },
            data: ["3:00", "6:00", "9:00", "12:00", "15:00"],
        }],
        yAxis: [{
            type: 'value',
            splitArea: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#1f2c58",
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "#fff",
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                }
            },
        }],
        calculable: false,
        series: [{
            name: '客流量',
            type: 'line',
            data: [0, 400, 800, 100, 300],
            smooth: false,
            symbol: "circle",
            itemStyle: {
                normal: {
                    color: '#055ceb',
                },
                emphasis: {
                    color: '#055ceb',
                },
            },
            symbolSize: 10, //拐点大小
        }]
    };
    var myChart = echarts.init(document.getElementById("terminal"));
    myChart.showLoading({
        text: "图表数据正在努力加载...",
        effect: 'whirling',
        textStyle: {
            fontSize: 20
        }
    });
    myChart.setOption(option);
    myChart.hideLoading();
}

function internetbar() {
    option = {
        title: {
            text: '',
            subtext: ''
        },
        grid: {
            borderWidth: 0,
            x: 35,
            x2: 15,
        },
        //禁止柱状图拖动
        calculable: false,
        xAxis: [{
            type: 'category',
            //字体样式
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                }
            },
            //控制网格线是否显示
            splitLine: {
                show: false,
            },
            //刻度线是否显示
            axisTick: {
                show: false
            },
            //分隔区域
            splitArea: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: "#fff",
                }
            },
            data: ["3:00", "6:00", "9:00", "12:00", "15:00", "18:00", "21:00"],
        }],
        yAxis: [{
            type: 'value',
            splitArea: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "#fff",
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                }
            },
        }],
        calculable: false,
        series: [{
            name: '客流量',
            type: 'bar',
            data: [500, 300, 800, 400, 300, 100, 500],
            barWidth: 10,
            silent: true,
            itemStyle: {
                normal: {
                    color: '#055ceb',
                    barBorderRadius: 0,
                }
            },
        }]
    };
    var myChart = echarts.init(document.getElementById("internetbar"));
    myChart.showLoading({
        text: "图表数据正在努力加载...",
        effect: 'whirling',
        textStyle: {
            fontSize: 20
        }
    });
    myChart.setOption(option);
    myChart.hideLoading();
}

function internetpie() {
    option = {
        title: {
            text: '',
            subtext: ''
        },
        //禁止柱状图拖动
        calculable: false,
        color: ['#4281e8', '#de5667', '#f3cc49'],
        series: [{
            name: '客流量',
            type: 'pie',
            radius: ['40%', '50%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            itemStyle: {
                normal: {
                    label: {
                        formatter: function(params) {
                            return params.name + params.value;
                        },
                        textStyle: {
                            color: '#fff',
                            fontSize: 12,
                        },
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#fff'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 10,
                    },
                },
                emphasis: {
                    label: {
                        formatter: function(params) {
                            return params.name + params.value;
                        },
                        textStyle: {
                            color: '#fff',
                            fontSize: 12,
                        },
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#fff'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 10,
                    },
                }
            },
            data: [{ name: "终端认证失败", value: 50 }, { name: "操作异常", value: 30 }, { name: "设备离线", value: 20 }, ],
            startAngle: -90,
            hoverAnimation: false,
        }]
    };
    var myChart = echarts.init(document.getElementById("internetpie"));
    myChart.showLoading({
        text: "图表数据正在努力加载...",
        effect: 'whirling',
        textStyle: {
            fontSize: 20
        }
    });
    myChart.setOption(option);
    myChart.hideLoading();
}

function message() {
    option = {
        tooltip: {
            trigger: 'none',
        },
        // grid: {
        //     borderWidth: 0,
        // },
        grid: {
            borderWidth: 0,
            x: 70, //x的值可以空值y轴与label标签的距离，效果如下图：
            x2: 30,
            y: 70,
            y2: 1, // y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
        },
        calculable: true,
        xAxis: [{
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            }
        }],
        yAxis: [{
            type: 'category',
            data: ["异常", "失败率", "成功率"],
            axisPointer: {
                type: 'none'
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                fontSize: 13,
                fontFamily: 'Arial'
            },
            axisLine: {
                show: false,
            },
            splitArea: {
                show: false
            },
            axisTick: {
                show: false
            },
        }],
        series: [{
                type: 'candlestick',
                silent: true,
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: '#055ceb',
                        color0: '#055ceb',
                        borderColor: '#055ceb',
                        borderColor0: '#055ceb',
                        label: {
                            show: true,
                            position: 'right',
                            textStyle: {
                                color: '#055ceb'
                            },
                        }
                    }
                },
                data: [
                    [0, 30, 0, 30],
                    [0, 20, 0, 20],
                    [0, 50, 0, 50],
                ],
                markPoint: {
                    symbol: 'circle',
                    symbolSize: [30, 30],
                    symbolOffset: [100, 0],
                    label: {
                        fontSize: 12,
                        fontWeight: 400,
                        color: "#fff",
                        fontFamily: 'Arial',
                    },
                    data: [{
                            coord: [30, 0],
                            value: 30 + "%"
                        }, {
                            coord: [20, 1],
                            value: 20 + "%"
                        },
                        {
                            coord: [50, 2],
                            value: 50 + "%"
                        }
                    ]
                },
            },
            {
                type: 'bar',
                silent: true,
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: '#1a3f83'
                    }
                },
                data: [100, 100, 100]
            }
        ]
    };
    var myChart = echarts.init(document.getElementById("message"));
    myChart.showLoading({
        text: "图表数据正在努力加载...",
        effect: 'whirling',
        textStyle: {
            fontSize: 20
        }
    });
    myChart.setOption(option);
    myChart.hideLoading();
}

function init(color, element) {
    echarts.init(document.getElementById(element)).setOption({
        color: [color, '#2c3454'],
        series: [{
            type: 'pie',
            radius: ['50%', '60%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{ name: "", value: 80 }, { name: "", value: 20 }],
            startAngle: -360,
            hoverAnimation: false
        }],
    });
    var id = "#" + element;
    $(id).find("p").remove();
    var percent = document.createElement("p");
    percent.id = "dataPlay";
    percent.innerHTML = "80%";
    document.getElementById(element).appendChild(percent);
}

function excellent(color, element) {
    echarts.init(document.getElementById(element)).setOption({
        color: [color, '#2c3454'],
        series: [{
            type: 'pie',
            radius: ['50%', '57%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{ name: "", value: 80 }, { name: "", value: 20 }],
            startAngle: -360,
            hoverAnimation: false
        }],
    });
    var id = "#" + element;
    $(id).find("p").remove();
    var percent = document.createElement("p");
    percent.id = "datanum";
    percent.innerHTML = "80%";
    document.getElementById(element).appendChild(percent);
}

function map() {
    var data = [
        { name: '上海', value: 25 },
        { name: '攀枝花', value: 25 },
        { name: '承德', value: 25 },
        { name: '汕尾', value: 26 },
        { name: '丹东', value: 27 },
        { name: '瓦房店', value: 30 },
        { name: '延安', value: 38 },
        { name: '咸阳', value: 43 },
        { name: '南昌', value: 54 },
        { name: '柳州', value: 54 },
        { name: '三亚', value: 54 },
        { name: '泸州', value: 57 },
        { name: '克拉玛依', value: 72 }
    ];
    var datas = [
        { name: '海门', value: 9 },
        { name: '鄂尔多斯', value: 12 },
        { name: '招远', value: 12 },
        { name: '舟山', value: 12 },
        { name: '齐齐哈尔', value: 14 },
        { name: '盐城', value: 15 },
    ];
    var datass = [
        { name: '赤峰', value: 16 },
        { name: '青岛', value: 18 },
        { name: '乳山', value: 18 },
        { name: '金昌', value: 19 },
        { name: '泉州', value: 21 },
        { name: '南通', value: 23 },
        { name: '拉萨', value: 24 },
        { name: '云浮', value: 24 },
    ]
    var geoCoordMap = {
        '海门': [121.15, 31.89],
        '鄂尔多斯': [109.781327, 39.608266],
        '招远': [120.38, 37.35],
        '舟山': [122.207216, 29.985295],
        '齐齐哈尔': [123.97, 47.33],
        '盐城': [120.13, 33.38],
        '赤峰': [118.87, 42.28],
        '青岛': [120.33, 36.07],
        '乳山': [121.52, 36.89],
        '金昌': [102.188043, 38.520089],
        '泉州': [118.58, 24.93],
        '莱西': [120.53, 36.86],
        '日照': [119.46, 35.42],
        '胶南': [119.97, 35.88],
        '南通': [121.05, 32.08],
        '拉萨': [91.11, 29.97],
        '云浮': [112.02, 22.93],
        '梅州': [116.1, 24.55],
        '文登': [122.05, 37.2],
        '上海': [121.48, 31.22],
        '攀枝花': [101.718637, 26.582347],
        '威海': [122.1, 37.5],
        '承德': [117.93, 40.97],
        '厦门': [118.1, 24.46],
        '汕尾': [115.375279, 22.786211],
        '潮州': [116.63, 23.68],
        '丹东': [124.37, 40.13],
        '太仓': [121.1, 31.45],
        '曲靖': [103.79, 25.51],
        '烟台': [121.39, 37.52],
        '福州': [119.3, 26.08],
        '瓦房店': [121.979603, 39.627114],
        '即墨': [120.45, 36.38],
        '抚顺': [123.97, 41.97],
        '玉溪': [102.52, 24.35],
        '张家口': [114.87, 40.82],
        '阳泉': [113.57, 37.85],
        '莱州': [119.942327, 37.177017],
        '湖州': [120.1, 30.86],
        '汕头': [116.69, 23.39],
        '昆山': [120.95, 31.39],
        '宁波': [121.56, 29.86],
        '湛江': [110.359377, 21.270708],
        '揭阳': [116.35, 23.55],
        '荣成': [122.41, 37.16],
        '连云港': [119.16, 34.59],
        '葫芦岛': [120.836932, 40.711052],
        '常熟': [120.74, 31.64],
        '东莞': [113.75, 23.04],
        '河源': [114.68, 23.73],
        '淮安': [119.15, 33.5],
        '泰州': [119.9, 32.49],
        '南宁': [108.33, 22.84],
        '营口': [122.18, 40.65],
        '惠州': [114.4, 23.09],
        '江阴': [120.26, 31.91],
        '蓬莱': [120.75, 37.8],
        '韶关': [113.62, 24.84],
        '嘉峪关': [98.289152, 39.77313],
        '广州': [113.23, 23.16],
        '延安': [109.47, 36.6],
        '太原': [112.53, 37.87],
        '清远': [113.01, 23.7],
        '中山': [113.38, 22.52],
        '昆明': [102.73, 25.04],
        '寿光': [118.73, 36.86],
        '盘锦': [122.070714, 41.119997],
        '长治': [113.08, 36.18],
        '深圳': [114.07, 22.62],
        '珠海': [113.52, 22.3],
        '宿迁': [118.3, 33.96],
        '咸阳': [108.72, 34.36],
        '铜川': [109.11, 35.09],
        '平度': [119.97, 36.77],
        '佛山': [113.11, 23.05],
        '海口': [110.35, 20.02],
        '江门': [113.06, 22.61],
        '章丘': [117.53, 36.72],
        '肇庆': [112.44, 23.05],
        '大连': [121.62, 38.92],
        '临汾': [111.5, 36.08],
        '吴江': [120.63, 31.16],
        '石嘴山': [106.39, 39.04],
        '沈阳': [123.38, 41.8],
        '苏州': [120.62, 31.32],
        '茂名': [110.88, 21.68],
        '嘉兴': [120.76, 30.77],
        '长春': [125.35, 43.88],
        '胶州': [120.03336, 36.264622],
        '银川': [106.27, 38.47],
        '张家港': [120.555821, 31.875428],
        '三门峡': [111.19, 34.76],
        '锦州': [121.15, 41.13],
        '南昌': [115.89, 28.68],
        '柳州': [109.4, 24.33],
        '三亚': [109.511909, 18.252847],
        '自贡': [104.778442, 29.33903],
        '吉林': [126.57, 43.87],
        '阳江': [111.95, 21.85],
        '泸州': [105.39, 28.91],
        '西宁': [101.74, 36.56],
        '宜宾': [104.56, 29.77],
        '呼和浩特': [111.65, 40.82],
        '成都': [104.06, 30.67],
        '大同': [113.3, 40.12],
        '镇江': [119.44, 32.2],
        '桂林': [110.28, 25.29],
        '张家界': [110.479191, 29.117096],
        '宜兴': [119.82, 31.36],
        '北海': [109.12, 21.49],
        '西安': [108.95, 34.27],
        '金坛': [119.56, 31.74],
        '东营': [118.49, 37.46],
        '牡丹江': [129.58, 44.6],
        '遵义': [106.9, 27.7],
        '绍兴': [120.58, 30.01],
        '扬州': [119.42, 32.39],
        '常州': [119.95, 31.79],
        '潍坊': [119.1, 36.62],
        '重庆': [106.54, 29.59],
        '台州': [121.420757, 28.656386],
        '南京': [118.78, 32.04],
        '滨州': [118.03, 37.36],
        '贵阳': [106.71, 26.57],
        '无锡': [120.29, 31.59],
        '本溪': [123.73, 41.3],
        '克拉玛依': [84.77, 45.59],
        '渭南': [109.5, 34.52],
        '马鞍山': [118.48, 31.56],
        '宝鸡': [107.15, 34.38],
        '焦作': [113.21, 35.24],
        '句容': [119.16, 31.95],
        '北京': [116.46, 39.92],
        '徐州': [117.2, 34.26],
        '衡水': [115.72, 37.72],
        '包头': [110, 40.58],
        '绵阳': [104.73, 31.48],
        '乌鲁木齐': [87.68, 43.77],
        '枣庄': [117.57, 34.86],
        '杭州': [120.19, 30.26],
        '淄博': [118.05, 36.78],
        '鞍山': [122.85, 41.12],
        '溧阳': [119.48, 31.43],
        '库尔勒': [86.06, 41.68],
        '安阳': [114.35, 36.1],
        '开封': [114.35, 34.79],
        '济南': [117, 36.65],
        '德阳': [104.37, 31.13],
        '温州': [120.65, 28.01],
        '九江': [115.97, 29.71],
        '邯郸': [114.47, 36.6],
        '临安': [119.72, 30.23],
        '兰州': [103.73, 36.03],
        '沧州': [116.83, 38.33],
        '临沂': [118.35, 35.05],
        '南充': [106.110698, 30.837793],
        '天津': [117.2, 39.13],
        '富阳': [119.95, 30.07],
        '泰安': [117.13, 36.18],
        '诸暨': [120.23, 29.71],
        '郑州': [113.65, 34.76],
        '哈尔滨': [126.63, 45.75],
        '聊城': [115.97, 36.45],
        '芜湖': [118.38, 31.33],
        '唐山': [118.02, 39.63],
        '平顶山': [113.29, 33.75],
        '邢台': [114.48, 37.05],
        '德州': [116.29, 37.45],
        '济宁': [116.59, 35.38],
        '荆州': [112.239741, 30.335165],
        '宜昌': [111.3, 30.7],
        '义乌': [120.06, 29.32],
        '丽水': [119.92, 28.45],
        '洛阳': [112.44, 34.7],
        '秦皇岛': [119.57, 39.95],
        '株洲': [113.16, 27.83],
        '石家庄': [114.48, 38.03],
        '莱芜': [117.67, 36.19],
        '常德': [111.69, 29.05],
        '保定': [115.48, 38.85],
        '湘潭': [112.91, 27.87],
        '金华': [119.64, 29.12],
        '岳阳': [113.09, 29.37],
        '长沙': [113, 28.21],
        '衢州': [118.88, 28.97],
        '廊坊': [116.7, 39.53],
        '菏泽': [115.480656, 35.23375],
        '合肥': [117.27, 31.86],
        '武汉': [114.31, 30.52],
        '大庆': [125.03, 46.58]
    };

    function convertData(data) {
        var res = [];
        var len = data.length
        for (var i = 0; i < len; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    function convertDatas(datas) {
        var ress = [];
        var len = datas.length
        for (var i = 0; i < len; i++) {
            var geoCoord = geoCoordMap[datas[i].name];
            if (geoCoord) {
                ress.push({
                    name: datas[i].name,
                    value: geoCoord.concat(datas[i].value)
                });
            }
        }
        return ress;
    };

    function convertDatass(datass) {
        var resss = [];
        var len = datass.length
        for (var i = 0; i < len; i++) {
            var geoCoord = geoCoordMap[datass[i].name];
            if (geoCoord) {
                resss.push({
                    name: datass[i].name,
                    value: geoCoord.concat(datass[i].value)
                });
            }
        }
        return resss;
    };
    var mydata = [
        { name: '北京', value: '100' }, { name: '天津', value: randomData() },
        { name: '上海', value: randomData() }, { name: '重庆', value: randomData() },
        { name: '河北', value: randomData() }, { name: '河南', value: randomData() },
        { name: '云南', value: randomData() }, { name: '辽宁', value: randomData() },
        { name: '黑龙江', value: randomData() }, { name: '湖南', value: randomData() },
        { name: '安徽', value: randomData() }, { name: '山东', value: randomData() },
        { name: '新疆', value: randomData() }, { name: '江苏', value: randomData() },
        { name: '浙江', value: randomData() }, { name: '江西', value: randomData() },
        { name: '湖北', value: randomData() }, { name: '广西', value: randomData() },
        { name: '甘肃', value: randomData() }, { name: '山西', value: randomData() },
        { name: '内蒙古', value: randomData() }, { name: '陕西', value: randomData() },
        { name: '吉林', value: randomData() }, { name: '福建', value: randomData() },
        { name: '贵州', value: randomData() }, { name: '广东', value: randomData() },
        { name: '青海', value: randomData() }, { name: '西藏', value: randomData() },
        { name: '四川', value: randomData() }, { name: '宁夏', value: randomData() },
        { name: '海南', value: randomData() }, { name: '台湾', value: randomData() },
        { name: '香港', value: randomData() }, { name: '澳门', value: randomData() }
    ];
    var optionMap = {
        geo: {
            show: true,
            map: 'china',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: false, //地图设置不可拖拽，固定的
            itemStyle: {
                normal: {
                    areaColor: '#0145a4',
                    borderWidth: 2,
                    shadowColor: '#4281e8',
                    // shadowBlur: 100
                },
                emphasis: {
                    areaColor: '#0145a4',
                    borderWidth: 2,
                    shadowColor: '#4281e8',
                    // shadowBlur: 100
                }
            },
        },
        //配置属性
        series: [{
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: 13,
                itemStyle: {
                    normal: {
                        color: '#e93b51'
                    },
                    emphasis: {
                        color: '#e93b51',
                    }
                },
                tooltip: {
                    trigger: 'item',
                    show: true,
                    borderColor: '#1a3f83',
                    backgroundColor: '#1a3f83',
                    textStyle: {
                        color: '#fff',
                        fontSize: 12,
                    },
                }
            },
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertDatas(datas),
                symbolSize: 13,
                itemStyle: {
                    normal: {
                        color: '#70dc2e'
                    },
                    emphasis: {
                        color: '#70dc2e',
                    }
                },
                tooltip: {
                    trigger: 'item',
                    show: true,
                    borderColor: '#1a3f83',
                    backgroundColor: '#1a3f83',
                    textStyle: {
                        color: '#fff',
                        fontSize: 12,
                    }
                }
            },
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertDatass(datass),
                symbolSize: 13,
                itemStyle: {
                    normal: {
                        color: '#055ceb'
                    },
                    emphasis: {
                        color: '#055ceb',
                    }
                },
                tooltip: {
                    trigger: 'item',
                    show: true,
                    borderColor: '#1a3f83',
                    backgroundColor: '#1a3f83',
                    textStyle: {
                        color: '#fff',
                        fontSize: 12,
                    }
                }
            },
            {
                name: 'categoryA',
                type: 'map',
                mapType: 'china',
                roam: false,
                tooltip: {
                    show: false,
                },
                label: {
                    normal: {
                        show: false //省份名称  
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#0b1a4a',
                        borderColor: '#055ceb',
                        borderWidth: 2
                    },
                    emphasis: {
                        areaColor: '#0b1a4a'
                    }
                },
                data: mydata //数据
            }
        ]
    };
    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    //使用制定的配置项和数据显示图表
    myChart.setOption(optionMap);
}

function randomData() {
    return Math.round(Math.random() * 500);
}