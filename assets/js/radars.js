var radar1 = echarts.init(document.getElementById('radar1'));
option = {
    title: {
        text: ''
    },
    tooltip: {},
    legend: {

        data: ['22级计算机','22级自动化'],
        x:"center",
        y:'bottom',
        textStyle:{
            color:"#fff"
        }
    },
    color: ['#4c95d9','#3c1519'],
    radar: {
        name:{
            textStyle: {
                //设置颜色
                color:'#fff'
            }
        },
        indicator: [
            { name: '科研竞赛', max: 100},
            { name: '思想', max: 100},
            { name: '学业', max: 100},
            { name: '实践', max: 100},
            { name: '文体', max: 100},
        ],
        center: ['50%','50%'],
        radius: "58%"
    },
    series: [{
        name: '',
        type: 'radar',
        itemStyle : {
            normal : {
                splitLine: {
                    lineStyle: {

                    }
                },
                label: {
                    show: false,
                    textStyle:{
                    },
                    formatter:function(params) {
                        return params.value;}
                },
            }
        },
        data : [
            {
                value : [90, 80, 59, 78,67],
                name : '22级计算机'
            },
            {
                value : [80, 50, 79, 68,56],
                name : '22级自动化'
            }
        ]
    }]
};
radar1.setOption(option);

var radar2 = echarts.init(document.getElementById('radar2'));
option = {
    title: {
        text: ''
    },
    tooltip: {},
    legend: {

        data: ['21级计算机','21级自动化'],
        x:"center",
        y:'bottom',
        textStyle:{
            color:"#fff"
        }
    },
    color: ['#f6731b','#a6331b'],
    radar: {
        name:{
            textStyle: {
                //设置颜色
                color:'#fff'
            }
        },
        indicator: [
            { name: '科研竞赛', max: 100},
            { name: '思想', max: 100},
            { name: '学业', max: 100},
            { name: '实践', max: 100},
            { name: '文体', max: 100},
        ],
        center: ['50%','50%'],
        radius: "58%"
    },
    series: [{
        name: '',
        type: 'radar',
        itemStyle : {
            normal : {
                splitLine: {
                    lineStyle: {

                    }
                },
                label: {
                    show: false,
                    textStyle:{
                    },
                    formatter:function(params) {
                        return params.value;}
                },
            }
        },
        data : [
            {
                value : [68, 68, 68, 96, 86],
                name : '21级计算机'
            },
            {
                value : [78, 48, 98, 66, 46],
                name : '21级自动化'
            }
        ]
    }]
};
radar2.setOption(option);


var radar3 = echarts.init(document.getElementById('radar3'));
option = {
    title: {
        text: ''
    },
    tooltip: {},
    legend: {

        data: ['20级计算机','20级自动化'],
        x:"center",
        y:'bottom',
        textStyle:{
            color:"#fff"
        }
    },
    color: ['#8cd43f','#5cf4df'],
    radar: {
        name:{
            textStyle: {
                //设置颜色
                color:'#fff'
            }
        },
        indicator: [
            { name: '科研竞赛', max: 100},
            { name: '思想', max: 100},
            { name: '学业', max: 100},
            { name: '实践', max: 100},
            { name: '文体', max: 100},
        ],
        center: ['50%','50%'],
        radius: "58%"
    },
    series: [{
        name: '',
        type: 'radar',
        itemStyle : {
            normal : {
                splitLine: {
                    lineStyle: {

                    }
                },
                label: {
                    show: false,
                    textStyle:{
                    },
                    formatter:function(params) {
                        return params.value;}
                },
            }
        },
        data : [
            {
                value : [78, 68, 87, 78, 69],
                name : '20级计算机'
            },
            {
                value : [38, 68, 67, 38, 89],
                name : '20级自动化'
            }
        ]
    }]
};
radar3.setOption(option);

var radar4 = echarts.init(document.getElementById('radar4'));
option = {
    title: {
        text: ''
    },
    tooltip: {},
    legend: {

        data: ['19级计算机','19级自动化'],
        x:"center",
        y:'bottom',
        textStyle:{
            color:"#fff"
        }
    },
    color: ['#9c146f','#9c54df'],
    radar: {
        name:{
            textStyle: {
                //设置颜色
                color:'#fff'
            }
        },
        indicator: [
            { name: '科研竞赛', max: 100},
            { name: '思想', max: 100},
            { name: '学业', max: 100},
            { name: '实践', max: 100},
            { name: '文体', max: 100},
        ],
        center: ['50%','50%'],
        radius: "58%"
    },
    series: [{
        name: '',
        type: 'radar',
        itemStyle : {
            normal : {
                splitLine: {
                    lineStyle: {

                    }
                },
                label: {
                    show: false,
                    textStyle:{
                    },
                    formatter:function(params) {
                        return params.value;}
                },
            }
        },
        data : [
            {
                value : [58, 88, 37, 68, 60],
                name : '19级计算机'
            },
            {
                value : [68, 88, 87, 48, 80],
                name : '19级自动化'
            }
        ]
    }]
};
radar4.setOption(option);