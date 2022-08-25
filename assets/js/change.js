Vue.config.productionTip = false
/* 位置二 */
new Vue({
    el: '#sit2',
    data() {
        return {
            dataGradeCS: [
                { value: 80, name: '男生' },
                { value: 20, name: '女生' }
            ],
            dataGradeCS1: [
                { value: 80, name: '男生' },
                { value: 20, name: '女生' }
            ],
            dataGradeCS2: [
                { value: 60, name: '男生' },
                { value: 40, name: '女生' }
            ],
            dataGradeCS3: [
                { value: 50, name: '男生' },
                { value: 50, name: '女生' }
            ],
            dataGradeCS4: [
                { value: 90, name: '男生' },
                { value: 10, name: '女生' }
            ],
            dataGradeAuto: [
                { value: 90, name: '男生' },
                { value: 10, name: '女生' }
            ],
            dataGradeAuto1: [
                { value: 90, name: '男生' },
                { value: 10, name: '女生' }
            ],
            dataGradeAuto2: [
                { value: 80, name: '男生' },
                { value: 20, name: '女生' }
            ],
            dataGradeAuto3: [
                { value: 70, name: '男生' },
                { value: 30, name: '女生' }
            ],
            dataGradeAuto4: [
                { value: 60, name: '男生' },
                { value: 40, name: '女生' }
            ],
            grade: [
                { name: '22级', item: 1 },
                { name: '21级', item: 2 },
                { name: '20级', item: 3 },
                { name: '19级', item: 4 },
            ],
            grades: '22级',
        }
    },
    mounted() {
        this.drawC(),
            this.setTimer2()
    },
    beforeCreate() {
        clearInterval(this.clearTimeSet2)
    },
    methods: {
        changedata(item) {
            if (item == 1) {
                this.dataGradeCS = this.dataGradeCS1
                this.dataGradeAuto = this.dataGradeAuto1
                this.grades = this.grade[item - 1].name
                this.drawC()
                clearInterval(this.clearTimeSet2)
            };
            if (item == 2) {
                this.dataGradeCS = this.dataGradeCS2
                this.dataGradeAuto = this.dataGradeAuto2
                this.grades = this.grade[item - 1].name
                this.drawC()
                clearInterval(this.clearTimeSet2)
            };
            if (item == 3) {
                this.dataGradeCS = this.dataGradeCS3
                this.dataGradeAuto = this.dataGradeAuto3
                this.grades = this.grade[item - 1].name
                this.drawC()
                clearInterval(this.clearTimeSet2)
            };
            if (item == 4) {
                this.dataGradeCS = this.dataGradeCS4
                this.dataGradeAuto = this.dataGradeAuto4
                this.grades = this.grade[item - 1].name
                this.drawC()
                clearInterval(this.clearTimeSet2)
            }
        },
        startAuto() {
            this.setTimer2()
        },
        changedataA(item) {
            if (item == 1) {
                this.dataGradeCS = this.dataGradeCS1
                this.dataGradeAuto = this.dataGradeAuto1
                this.grades = this.grade[item - 1].name
                this.drawC()
            };
            if (item == 2) {
                this.dataGradeCS = this.dataGradeCS2
                this.dataGradeAuto = this.dataGradeAuto2
                this.grades = this.grade[item - 1].name
                this.drawC()
            };
            if (item == 3) {
                this.dataGradeCS = this.dataGradeCS3
                this.dataGradeAuto = this.dataGradeAuto3
                this.grades = this.grade[item - 1].name
                this.drawC()
            };
            if (item == 4) {
                this.dataGradeCS = this.dataGradeCS4
                this.dataGradeAuto = this.dataGradeAuto4
                this.grades = this.grade[item - 1].name
                this.drawC()
            }
        },
        setTimer2() {
            var gradeIndex = 0
            this.clearTimeSet2 = setInterval(() => {
                gradeIndex++;
                gradeIndex %= this.grade.length
                this.changedataA(gradeIndex + 1)
            }, 3000);
        },
        clearTimer() {
            clearInterval(this.clearTimeSet2)
        },
        drawC() {
            var sexrate = echarts.init(document.getElementById('sexrate'));
            var total = {
                name: this.grades + '学生'
            };
            option = {
                title: [{
                    text: total.name,
                    left: '48%',
                    top: '37%',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: 16
                    }
                }, {
                    text: total.value,
                    left: '48%',
                    top: '44%',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: 18
                    }
                }],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },

                color: ['#70a3ff', '#ff7f4e'],
                legend: {
                    orient: 'vertical',
                    x: 'center',
                    bottom: '5%',
                    selectedMode: false,
                    formatter: function (name) {
                        var oa = option.series[0].data;
                        var num = oa[0].value + oa[1].value;
                        for (var i = 0; i < option.series[0].data.length; i++) {
                            if (name == oa[i].name) {
                                return name + "  " + oa[i].value + "  " + (oa[i].value / num * 100).toFixed(2) + '%';
                            }
                        }
                    },
                    data: ['男生', '女生'],
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold'
                    },
                },

                series: [
                    {
                        name: '人数',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: ['45%', '55%'],
                        center: ['50%', '40%'],
                        data: this.dataGradeCS,
                        label: {
                            normal: {
                                show: false,
                                position: "outer",
                                align: 'left',
                                textStyle: {
                                    rotate: true
                                }
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            },
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{b} {c}'
                                }
                            }

                        }
                    }
                ]
            };
            sexrate.setOption(option);
            sexrate.off('mouseover')
            sexrate.on('mouseover',()=>{
                clearInterval(this.clearTimeSet2)
            });
            sexrate.off('mouseout')
            sexrate.on('mouseout',()=>{
                this.setTimer2()
            });

            var householdrate = echarts.init(document.getElementById('householdrate'));
            var total = {
                name: this.grades + '学生'
            };
            option = {
                title: [{
                    text: total.name,
                    left: '48%',
                    top: '37%',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: 16
                    }
                }, {
                    text: total.value,
                    left: '48%',
                    top: '44%',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: 18
                    }
                }],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },

                color: ['#70a3ff', '#ff7f4e'],
                legend: {
                    orient: 'vertical',
                    x: 'center',
                    bottom: '5%',
                    selectedMode: false,
                    formatter: function (name) {
                        var oa = option.series[0].data;
                        var num = oa[0].value + oa[1].value;
                        for (var i = 0; i < option.series[0].data.length; i++) {
                            if (name == oa[i].name) {
                                return name + "  " + oa[i].value + "  " + (oa[i].value / num * 100).toFixed(2) + '%';
                            }
                        }
                    },
                    data: ['男生', '女生'],
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold'
                    },
                },
                series: [
                    {
                        name: '人数',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: ['45%', '55%'],
                        center: ['50%', '40%'],
                        data: this.dataGradeAuto,
                        label: {
                            normal: {
                                show: false,
                                position: "outer",
                                align: 'left',
                                textStyle: {
                                    rotate: true
                                }
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            },
                            normal: {
                                label: {
                                    show: true,
                                    formatter: '{b} {c}'
                                }
                            }
                        }
                    }
                ]
            };
            householdrate.setOption(option);
        }


    },
})
/* 位置三 */
new Vue({
    el: '#sit3',
    data() {
        return {
            grade3:'22级',
            grades3: [
                { name: '22级', item: 1 },
                { name: '21级', item: 2 },
                { name: '20级', item: 3 },
                { name: '19级', item: 4 },
            ],
            totalScore: [13, 35, 47, 30, 8],
            thoughtScore: [12, 20, 10, 40, 6],
            matchScore: [30, 50, 10, 29, 10],
            wentiScore: [10, 20, 30, 20, 30],
            shijianScore: [20, 30, 50, 10, 20],
            xueyeScore: [13, 20, 55, 20, 5],
            totalScores: [
                [13, 35, 47, 30, 38],
                [22, 35, 47, 30, 8],
                [13, 33, 17, 30, 18],
                [33, 35, 27, 10, 8],
            ],
            thoughtScores: [
                [12, 20, 10, 40, 6],
                [22, 15, 47, 30, 8],
                [13, 33, 17, 30, 18],
                [33, 35, 27, 10, 8],
            ],
            matchScores: [
                [30, 50, 10, 29, 10],
                [22, 35, 47, 10, 8],
                [13, 13, 17, 30, 18],
                [33, 15, 27, 10, 38],
            ],
            wentiScores: [
                [10, 20, 30, 20, 30],
                [22, 15, 47, 30, 38],
                [13, 33, 17, 30, 18],
                [33, 35, 27, 10, 8],
            ],
            shijianScores: [
                [20, 30, 50, 10, 20],
                [22, 35, 47, 30, 38],
                [13, 33, 17, 30, 18],
                [33, 35, 27, 10, 8],
            ],
            xueyeScores: [
                [13, 20, 55, 20, 5],
                [22, 35, 17, 30, 8],
                [13, 33, 17, 30, 18],
                [13, 35, 27, 10, 8],
            ],
            totalScoreAuto: [23, 25, 47, 20, 8],
            thoughtScoreAuto: [12, 30, 10, 30, 6],
            matchScoreAuto: [30, 30, 10, 39, 10],
            wentiScoreAuto: [10, 20, 30, 20, 30],
            shijianScoreAuto: [20, 30, 50, 10, 20],
            xueyeScoreAuto: [13, 20, 55, 20, 5],
            totalScoresAuto: [
                [23, 25, 47, 20, 38],
                [22, 35, 47, 30, 8],
                [13, 33, 37, 30, 18],
                [33, 35, 27, 30, 8],
            ],
            thoughtScoresAuto: [
                [12, 30, 10, 30, 6],
                [22, 15, 47, 30, 8],
                [13, 33, 17, 30, 11],
                [33, 35, 27, 10, 8],
            ],
            matchScoresAuto: [
                [30, 30, 10, 39, 10],
                [22, 35, 37, 10, 18],
                [33, 13, 17, 30, 11],
                [33, 15, 37, 10, 31],
            ],
            wentiScoresAuto: [
                [10, 20, 30, 20, 30],
                [22, 35, 47, 30, 38],
                [13, 33, 17, 30, 11],
                [33, 35, 37, 10, 8],
            ],
            shijianScoresAuto: [
                [20, 30, 50, 10, 20],
                [22, 35, 47, 30, 38],
                [33, 33, 37, 30, 18],
                [33, 35, 27, 10, 18],
            ],
            xueyeScoresAuto: [
                [13, 20, 55, 20, 5],
                [22, 35, 37, 30, 11],
                [33, 33, 17, 30, 18],
                [13, 35, 27, 10, 8],
            ]
        }
    },
    beforeCreate() {
        clearInterval(this.clearTimeSet6)
    },
    mounted() {
        this.drawSit3CS1()
        this.drawSit3CS2()
        this.drawSit3CS3()
        this.drawSit3CS4()
        this.drawSit3CS5()
        this.drawSit3CS6()
        this.drawSit3Auto1()
        this.drawSit3Auto2()
        this.drawSit3Auto3()
        this.drawSit3Auto4()
        this.drawSit3Auto5()
        this.drawSit3Auto6()
        this.setTimer3()
    },
    methods: {
        startAuto3() {
            this.setTimer3()
        },
        setTimer3() {
            var gradeIndex3 = 0
            this.clearTimeSet3 = setInterval(() => {
                gradeIndex3++;
                gradeIndex3 %= this.grades3.length
                this.changedataA3(gradeIndex3 + 1)
            }, 3000);
        },
        changedataA3(item) {
            if (item == 1) {
                this.totalScore = this.totalScores[item - 1]
                this.thoughtScore = this.thoughtScores[item - 1]
                this.matchScore = this.matchScores[item - 1]
                this.wentiScore = this.wentiScores[item - 1]
                this.shijianScore = this.shijianScores[item - 1]
                this.xueyeScore = this.xueyeScores[item - 1]
                this.grade3=this.grades3[item-1].name
                this.totalScoreAuto = this.totalScoresAuto[item - 1]
                this.thoughtScoreAuto = this.thoughtScoresAuto[item - 1]
                this.matchScoreAuto = this.matchScoresAuto[item - 1]
                this.wentiScoreAuto = this.wentiScoresAuto[item - 1]
                this.shijianScoreAuto = this.shijianScoresAuto[item - 1]
                this.xueyeScoreAuto = this.xueyeScoresAuto[item - 1]
                this.drawSit3CS1()
                this.drawSit3CS2()
                this.drawSit3CS3()
                this.drawSit3CS4()
                this.drawSit3CS5()
                this.drawSit3CS6()
                this.drawSit3Auto1()
                this.drawSit3Auto2()
                this.drawSit3Auto3()
                this.drawSit3Auto4()
                this.drawSit3Auto5()
                this.drawSit3Auto6()
            };
            if (item == 2) {
                this.totalScore = this.totalScores[item - 1]
                this.thoughtScore = this.thoughtScores[item - 1]
                this.matchScore = this.matchScores[item - 1]
                this.wentiScore = this.wentiScores[item - 1]
                this.shijianScore = this.shijianScores[item - 1]
                this.xueyeScore = this.xueyeScores[item - 1]
                this.grade3=this.grades3[item-1].name
                this.totalScoreAuto = this.totalScoresAuto[item - 1]
                this.thoughtScoreAuto = this.thoughtScoresAuto[item - 1]
                this.matchScoreAuto = this.matchScoresAuto[item - 1]
                this.wentiScoreAuto = this.wentiScoresAuto[item - 1]
                this.shijianScoreAuto = this.shijianScoresAuto[item - 1]
                this.xueyeScoreAuto = this.xueyeScoresAuto[item - 1]
                this.drawSit3CS1()
                this.drawSit3CS2()
                this.drawSit3CS3()
                this.drawSit3CS4()
                this.drawSit3CS5()
                this.drawSit3CS6()
                this.drawSit3Auto1()
                this.drawSit3Auto2()
                this.drawSit3Auto3()
                this.drawSit3Auto4()
                this.drawSit3Auto5()
                this.drawSit3Auto6()
            };
            if (item == 3) {
                this.totalScore = this.totalScores[item - 1]
                this.thoughtScore = this.thoughtScores[item - 1]
                this.matchScore = this.matchScores[item - 1]
                this.wentiScore = this.wentiScores[item - 1]
                this.shijianScore = this.shijianScores[item - 1]
                this.xueyeScore = this.xueyeScores[item - 1]
                this.grade3=this.grades3[item-1].name
                this.totalScoreAuto = this.totalScoresAuto[item - 1]
                this.thoughtScoreAuto = this.thoughtScoresAuto[item - 1]
                this.matchScoreAuto = this.matchScoresAuto[item - 1]
                this.wentiScoreAuto = this.wentiScoresAuto[item - 1]
                this.shijianScoreAuto = this.shijianScoresAuto[item - 1]
                this.xueyeScoreAuto = this.xueyeScoresAuto[item - 1]
                this.drawSit3CS1()
                this.drawSit3CS2()
                this.drawSit3CS3()
                this.drawSit3CS4()
                this.drawSit3CS5()
                this.drawSit3CS6()
                this.drawSit3Auto1()
                this.drawSit3Auto2()
                this.drawSit3Auto3()
                this.drawSit3Auto4()
                this.drawSit3Auto5()
                this.drawSit3Auto6()
            };
            if (item == 4) {
                this.totalScore = this.totalScores[item - 1]
                this.thoughtScore = this.thoughtScores[item - 1]
                this.matchScore = this.matchScores[item - 1]
                this.wentiScore = this.wentiScores[item - 1]
                this.shijianScore = this.shijianScores[item - 1]
                this.xueyeScore = this.xueyeScores[item - 1]
                this.grade3=this.grades3[item-1].name
                this.totalScoreAuto = this.totalScoresAuto[item - 1]
                this.thoughtScoreAuto = this.thoughtScoresAuto[item - 1]
                this.matchScoreAuto = this.matchScoresAuto[item - 1]
                this.wentiScoreAuto = this.wentiScoresAuto[item - 1]
                this.shijianScoreAuto = this.shijianScoresAuto[item - 1]
                this.xueyeScoreAuto = this.xueyeScoresAuto[item - 1]
                this.drawSit3CS1()
                this.drawSit3CS2()
                this.drawSit3CS3()
                this.drawSit3CS4()
                this.drawSit3CS5()
                this.drawSit3CS6()
                this.drawSit3Auto1()
                this.drawSit3Auto2()
                this.drawSit3Auto3()
                this.drawSit3Auto4()
                this.drawSit3Auto5()
                this.drawSit3Auto6()
            };
        },
        drawSit3CS1() {
            var courserateCS = echarts.init(document.getElementById('courserateCS'));
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                title: {
                    text: '总分',
                    x: 'center',
                    textStyle: {
                        color: '#27c2c1'
                    }
                },
                series: [
                    {
                        name: 'FK',
                        type: 'pie',
                        radius: '80%',
                        color: ['#27c2c1', '#9ccb63', '#fcd85a', '#6f80ce', '#f0c1da'],
                        center: ['50%', '55%'],
                        data: [
                            { value: this.totalScore[0], name: '90-100' },
                            { value: this.totalScore[1], name: '80-90' },
                            { value: this.totalScore[2], name: '70-80' },
                            { value: this.totalScore[3], name: '60-70' },
                            { value: this.totalScore[4], name: '0-60' },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    position: 'inside',
                                    formatter: '{b}'
                                }
                            },
                            labelLine: { show: true }
                        }
                    }
                ]
            };
            courserateCS.setOption(option);

            courserateCS.off('mouseover')
            courserateCS.on('mouseover',()=>{
                clearInterval(this.clearTimeSet3)
            });
            courserateCS.off('mouseout')
            courserateCS.on('mouseout',()=>{
                this.setTimer3()
            });
        },
        drawSit3CS2() {
            var courserateCS1 = echarts.init(document.getElementById('courserateCS1'));
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                title: {
                    text: '思想',
                    x: 'center',
                    textStyle: {
                        color: '#27c2c1'
                    }
                },
                series: [
                    {
                        name: 'FK',
                        type: 'pie',
                        radius: '90%',
                        color: ['#27c2c1', '#9ccb63', '#fcd85a', '#6f80ce', '#f0c1da'],
                        center: ['50%', '50%'],
                        data: [
                            { value: this.thoughtScore[0], name: '90-100' },
                            { value: this.thoughtScore[1], name: '80-90' },
                            { value: this.thoughtScore[2], name: '70-80' },
                            { value: this.thoughtScore[3], name: '60-70' },
                            { value: this.thoughtScore[4], name: '0-60' },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    position: 'outside',
                                    formatter: '{b}'
                                }
                            },
                            labelLine: { show: true }
                        }
                    }
                ]
            };
            courserateCS1.setOption(option);

            courserateCS1.off('mouseover')
            courserateCS1.on('mouseover',()=>{
                clearInterval(this.clearTimeSet3)
            });
            courserateCS1.off('mouseout')
            courserateCS1.on('mouseout',()=>{
                this.setTimer3()
            });
        },
        drawSit3CS3() {
            var courserateCS2 = echarts.init(document.getElementById('courserateCS2'));
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                title: {
                    text: '科研竞赛',
                    x: 'center',
                    textStyle: {
                        color: '#27c2c1'
                    }
                },
                series: [
                    {
                        name: 'FK',
                        type: 'pie',
                        radius: '90%',
                        color: ['#27c2c1', '#9ccb63', '#fcd85a', '#6f80ce', '#f0c1da'],
                        center: ['50%', '50%'],
                        data: [
                            { value: this.matchScore[0], name: '90-100' },
                            { value: this.matchScore[1], name: '80-90' },
                            { value: this.matchScore[2], name: '70-80' },
                            { value: this.matchScore[3], name: '60-70' },
                            { value: this.matchScore[4], name: '0-60' },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    position: 'outside',
                                    formatter: '{b}'
                                }
                            },
                            labelLine: { show: true }
                        }
                    }
                ]
            };
            courserateCS2.setOption(option);
            courserateCS2.off('mouseover')
            courserateCS2.on('mouseover',()=>{
                clearInterval(this.clearTimeSet3)
            });
            courserateCS2.off('mouseout')
            courserateCS2.on('mouseout',()=>{
                this.setTimer3()
            });
        },
        drawSit3CS4() {
            var courserateCS3 = echarts.init(document.getElementById('courserateCS3'));
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                title: {
                    text: '文体',
                    x: 'center',
                    textStyle: {
                        color: '#27c2c1'
                    }
                },
                series: [
                    {
                        name: 'FK',
                        type: 'pie',
                        radius: '90%',
                        color: ['#27c2c1', '#9ccb63', '#fcd85a', '#6f80ce', '#f0c1da'],
                        center: ['50%', '50%'],
                        data: [
                            { value: this.wentiScore[0], name: '90-100' },
                            { value: this.wentiScore[1], name: '80-90' },
                            { value: this.wentiScore[2], name: '70-80' },
                            { value: this.wentiScore[3], name: '60-70' },
                            { value: this.wentiScore[4], name: '0-60' },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    position: 'outside',
                                    formatter: '{b}'
                                }
                            },
                            labelLine: { show: true }
                        }
                    }
                ]
            };
            courserateCS3.setOption(option);

            courserateCS3.off('mouseover')
            courserateCS3.on('mouseover',()=>{
                clearInterval(this.clearTimeSet3)
            });
            courserateCS3.off('mouseout')
            courserateCS3.on('mouseout',()=>{
                this.setTimer3()
            });
        },
        drawSit3CS5() {
            var courserateCS4 = echarts.init(document.getElementById('courserateCS4'));
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                title: {
                    text: '实践',
                    x: 'center',
                    textStyle: {
                        color: '#27c2c1'
                    }
                },
                series: [
                    {
                        name: 'FK',
                        type: 'pie',
                        radius: '90%',
                        color: ['#27c2c1', '#9ccb63', '#fcd85a', '#6f80ce', '#f0c1da'],
                        center: ['50%', '50%'],
                        data: [
                            { value: this.shijianScore[0], name: '90-100' },
                            { value: this.shijianScore[1], name: '80-90' },
                            { value: this.shijianScore[2], name: '70-80' },
                            { value: this.shijianScore[3], name: '60-70' },
                            { value: this.shijianScore[4], name: '0-60' },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    position: 'outside',
                                    formatter: '{b}'
                                }
                            },
                            labelLine: { show: true }
                        }
                    }
                ]
            };
            courserateCS4.setOption(option);
            courserateCS4.off('mouseover')
            courserateCS4.on('mouseover',()=>{
                clearInterval(this.clearTimeSet3)
            });
            courserateCS4.off('mouseout')
            courserateCS4.on('mouseout',()=>{
                this.setTimer3()
            });
        },
        drawSit3CS6() {
            var courserateCS5 = echarts.init(document.getElementById('courserateCS5'));
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                title: {
                    text: '学业',
                    x: 'center',
                    textStyle: {
                        color: '#27c2c1'
                    }
                },
                series: [
                    {
                        name: 'FK',
                        type: 'pie',
                        radius: '90%',
                        color: ['#27c2c1', '#9ccb63', '#fcd85a', '#6f80ce', '#f0c1da'],
                        center: ['50%', '50%'],
                        data: [
                            { value: this.xueyeScore[0], name: '90-100' },
                            { value: this.xueyeScore[1], name: '80-90' },
                            { value: this.xueyeScore[2], name: '70-80' },
                            { value: this.xueyeScore[3], name: '60-70' },
                            { value: this.xueyeScore[4], name: '0-60' },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    position: 'outside',
                                    formatter: '{b}'
                                }
                            },
                            labelLine: { show: true }
                        }
                    }
                ]
            };
            courserateCS5.setOption(option);
            courserateCS5.off('mouseover')
            courserateCS5.on('mouseover',()=>{
                clearInterval(this.clearTimeSet3)
            });
            courserateCS5.off('mouseout')
            courserateCS5.on('mouseout',()=>{
                this.setTimer3()
            });
        },
        drawSit3Auto1() {
            var courserateAuto = echarts.init(document.getElementById('courserateAuto'));
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                title: {
                    text: '总分',
                    x: 'center',
                    textStyle: {
                        color: '#27c2c1'
                    }
                },
                series: [
                    {
                        name: 'FK',
                        type: 'pie',
                        radius: '80%',
                        color: ['#27c2c1', '#9ccb63', '#fcd85a', '#6f80ce', '#f0c1da'],
                        center: ['50%', '55%'],
                        data: [
                            { value: this.totalScoreAuto[0], name: '90-100' },
                            { value: this.totalScoreAuto[1], name: '80-90' },
                            { value: this.totalScoreAuto[2], name: '70-80' },
                            { value: this.totalScoreAuto[3], name: '60-70' },
                            { value: this.totalScoreAuto[4], name: '0-60' },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    position: 'inside',
                                    formatter: '{b}'
                                }
                            },
                            labelLine: { show: true }
                        }
                    }
                ]
            };
            courserateAuto.setOption(option);
            courserateAuto.off('mouseover')
            courserateAuto.on('mouseover',()=>{
                clearInterval(this.clearTimeSet3)
            });
            courserateAuto.off('mouseout')
            courserateAuto.on('mouseout',()=>{
                this.setTimer3()
            });
        },
        drawSit3Auto2() {
            var courserateAuto1 = echarts.init(document.getElementById('courserateAuto1'));
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                title: {
                    text: '思想',
                    x: 'center',
                    textStyle: {
                        color: '#27c2c1'
                    }
                },
                series: [
                    {
                        name: 'FK',
                        type: 'pie',
                        radius: '90%',
                        color: ['#27c2c1', '#9ccb63', '#fcd85a', '#6f80ce', '#f0c1da'],
                        center: ['50%', '50%'],
                        data: [
                            { value: this.thoughtScoreAuto[0], name: '90-100' },
                            { value: this.thoughtScoreAuto[1], name: '80-90' },
                            { value: this.thoughtScoreAuto[2], name: '70-80' },
                            { value: this.thoughtScoreAuto[3], name: '60-70' },
                            { value: this.thoughtScoreAuto[4], name: '0-60' },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    position: 'outside',
                                    formatter: '{b}'
                                }
                            },
                            labelLine: { show: true }
                        }
                    }
                ]
            };
            courserateAuto1.setOption(option);
            courserateAuto1.off('mouseover')
            courserateAuto1.on('mouseover',()=>{
                clearInterval(this.clearTimeSet3)
            });
            courserateAuto1.off('mouseout')
            courserateAuto1.on('mouseout',()=>{
                this.setTimer3()
            });
        },
        drawSit3Auto3() {
            var courserateAuto2 = echarts.init(document.getElementById('courserateAuto2'));
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                title: {
                    text: '科研竞赛',
                    x: 'center',
                    textStyle: {
                        color: '#27c2c1'
                    }
                },
                series: [
                    {
                        name: 'FK',
                        type: 'pie',
                        radius: '90%',
                        color: ['#27c2c1', '#9ccb63', '#fcd85a', '#6f80ce', '#f0c1da'],
                        center: ['50%', '50%'],
                        data: [
                            { value: this.matchScoreAuto[0], name: '90-100' },
                            { value: this.matchScoreAuto[1], name: '80-90' },
                            { value: this.matchScoreAuto[2], name: '70-80' },
                            { value: this.matchScoreAuto[3], name: '60-70' },
                            { value: this.matchScoreAuto[4], name: '0-60' },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    position: 'outside',
                                    formatter: '{b}'
                                }
                            },
                            labelLine: { show: true }
                        }
                    }
                ]
            };
            courserateAuto2.setOption(option);
            courserateAuto2.off('mouseover')
            courserateAuto2.on('mouseover',()=>{
                clearInterval(this.clearTimeSet3)
            });
            courserateAuto2.off('mouseout')
            courserateAuto2.on('mouseout',()=>{
                this.setTimer3()
            });
        },
        drawSit3Auto4() {
            var courserateAuto3 = echarts.init(document.getElementById('courserateAuto3'));
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                title: {
                    text: '文体',
                    x: 'center',
                    textStyle: {
                        color: '#27c2c1'
                    }
                },
                series: [
                    {
                        name: 'FK',
                        type: 'pie',
                        radius: '90%',
                        color: ['#27c2c1', '#9ccb63', '#fcd85a','#6f80ce', '#f0c1da'],
                        center: ['50%', '50%'],
                        data: [
                            { value: this.wentiScoreAuto[0], name: '90-100' },
                            { value: this.wentiScoreAuto[1], name: '80-90' },
                            { value: this.wentiScoreAuto[2], name: '70-80' },
                            { value: this.wentiScoreAuto[3], name: '60-70' },
                            { value: this.wentiScoreAuto[4], name: '0-60' },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    position: 'outside',
                                    formatter: '{b}'
                                }
                            },
                            labelLine: { show: true }
                        }
                    }
                ]
            };
            courserateAuto3.setOption(option);
            courserateAuto3.off('mouseover')
            courserateAuto3.on('mouseover',()=>{
                clearInterval(this.clearTimeSet3)
            });
            courserateAuto3.off('mouseout')
            courserateAuto3.on('mouseout',()=>{
                this.setTimer3()
            });
        },
        drawSit3Auto5() {
            var courserateAuto4 = echarts.init(document.getElementById('courserateAuto4'));
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                title: {
                    text: '实践',
                    x: 'center',
                    textStyle: {
                        color: '#27c2c1'
                    }
                },
                series: [
                    {
                        name: 'FK',
                        type: 'pie',
                        radius: '90%',
                        color: ['#27c2c1', '#9ccb63', '#fcd85a', '#6f80ce', '#f0c1da'],
                        center: ['50%', '50%'],
                        data: [
                            { value: this.shijianScoreAuto[0], name: '90-100' },
                            { value: this.shijianScoreAuto[1], name: '80-90' },
                            { value: this.shijianScoreAuto[2], name: '70-80' },
                            { value: this.shijianScoreAuto[3], name: '60-70' },
                            { value: this.shijianScoreAuto[4], name: '0-60' },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    position: 'outside',
                                    formatter: '{b}'
                                }
                            },
                            labelLine: { show: true }
                        }
                    }
                ]
            };
            courserateAuto4.setOption(option);
            courserateAuto4.off('mouseover')
            courserateAuto4.on('mouseover',()=>{
                clearInterval(this.clearTimeSet3)
            });
            courserateAuto4.off('mouseout')
            courserateAuto4.on('mouseout',()=>{
                this.setTimer3()
            });
        },
        drawSit3Auto6() {
            var courserateAuto5 = echarts.init(document.getElementById('courserateAuto5'));
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                title: {
                    text: '学业',
                    x: 'center',
                    textStyle: {
                        color: '#27c2c1'
                    }
                },
                series: [
                    {
                        name: 'FK',
                        type: 'pie',
                        radius: '90%',
                        color: ['#27c2c1', '#9ccb63', '#fcd85a', '#6f80ce', '#f0c1da'],
                        center: ['50%', '50%'],
                        data: [
                            { value: this.xueyeScoreAuto[0], name: '90-100' },
                            { value: this.xueyeScoreAuto[1], name: '80-90' },
                            { value: this.xueyeScoreAuto[2], name: '70-80' },
                            { value: this.xueyeScoreAuto[3], name: '60-70' },
                            { value: this.xueyeScoreAuto[4], name: '0-60' },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                    position: 'outside',
                                    formatter: '{b}'
                                }
                            },
                            labelLine: { show: true }
                        }
                    }
                ]
            };
            courserateAuto5.setOption(option);
            courserateAuto5.off('mouseover')
            courserateAuto5.on('mouseover',()=>{
                clearInterval(this.clearTimeSet3)
            });
            courserateAuto5.off('mouseout')
            courserateAuto5.on('mouseout',()=>{
                this.setTimer3()
            });
        },
    }
})
/* 位置五*/
new Vue({
    el: '#sit5',
    data() {
        return {
            grades51: [
                { name: '22级计算机', item: 1 },
                { name: '21级计算机', item: 2 },
                { name: '20级计算机', item: 3 },
                { name: '19级计算机', item: 4 },
            ],
            grades52:[
                { name: '22级自动化', item: 5 },
                { name: '21级自动化', item: 6 },
                { name: '20级自动化', item: 7 },
                { name: '19级自动化', item: 8 },
            ],
            grade5: '22级计算机',
            grade5CSAuto: [
                { A: 89, B: 84, C: 83, D: 79, F: 67 },
                { A: 83, B: 89, C: 93, D: 73, F: 77 },
                { A: 84, B: 82, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 73, D: 89, F: 69 },
                { A: 83, B: 89, C: 93, D: 73, F: 77 },
                { A: 84, B: 82, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 73, D: 89, F: 69 },
                { A: 82, B: 81, C: 93, D: 75, F: 63 }
            ],
            grade5CS22: [
                { A: 89, B: 84, C: 83, D: 79, F: 67 },
                { A: 83, B: 89, C: 93, D: 73, F: 77 },
                { A: 84, B: 82, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 73, D: 89, F: 69 },
                { A: 83, B: 89, C: 93, D: 73, F: 77 },
                { A: 84, B: 82, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 73, D: 89, F: 69 },
                { A: 82, B: 81, C: 93, D: 75, F: 63 }
            ],
            grade5CS21: [
                { A: 89, B: 84, C: 83, D: 79, F: 67 },
                { A: 83, B: 89, C: 93, D: 73, F: 67 },
                { A: 64, B: 62, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 63, D: 89, F: 69 },
                { A: 83, B: 89, C: 93, D: 73, F: 77 },
                { A: 84, B: 82, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 73, D: 89, F: 69 },
                { A: 82, B: 81, C: 93, D: 65, F: 63 }
            ],
            grade5CS20: [
                { A: 79, B: 84, C: 83, D: 79, F: 67 },
                { A: 83, B: 79, C: 93, D: 73, F: 77 },
                { A: 84, B: 82, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 73, D: 89, F: 79 },
                { A: 83, B: 89, C: 93, D: 73, F: 77 },
                { A: 84, B: 82, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 73, D: 89, F: 69 },
                { A: 82, B: 81, C: 93, D: 75, F: 73 }
            ],
            grade5CS19: [
                { A: 59, B: 84, C: 83, D: 79, F: 67 },
                { A: 83, B: 59, C: 93, D: 73, F: 77 },
                { A: 84, B: 52, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 75, D: 59, F: 69 },
                { A: 83, B: 89, C: 93, D: 73, F: 77 },
                { A: 84, B: 82, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 73, D: 89, F: 69 },
                { A: 82, B: 81, C: 93, D: 75, F: 53 }
            ],
            grade5Auto22: [
                { A: 79, B: 84, C: 83, D: 79, F: 67 },
                { A: 73, B: 89, C: 73, D: 73, F: 77 },
                { A: 87, B: 72, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 73, D: 89, F: 79 },
                { A: 83, B: 89, C: 93, D: 73, F: 77 },
                { A: 84, B: 82, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 73, D: 89, F: 69 },
                { A: 82, B: 81, C: 93, D: 75, F: 73 }
            ],
            grade5Auto21: [
                { A: 88, B: 84, C: 83, D: 79, F: 57 },
                { A: 88, B: 89, C: 58, D: 73, F: 78 },
                { A: 58, B: 52, C: 78, D: 75, F: 87 },
                { A: 56, B: 88, C: 73, D: 58, F: 69 },
                { A: 83, B: 89, C: 93, D: 73, F: 77 },
                { A: 84, B: 82, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 73, D: 89, F: 69 },
                { A: 52, B: 81, C: 93, D: 75, F: 68 }
            ],
            grade5Auto20: [
                { A: 69, B: 84, C: 86, D: 76, F: 67 },
                { A: 63, B: 89, C: 93, D: 73, F: 66 },
                { A: 86, B: 62, C: 66, D: 75, F: 67 },
                { A: 86, B: 84, C: 63, D: 89, F: 66 },
                { A: 83, B: 89, C: 93, D: 73, F: 77 },
                { A: 84, B: 82, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 73, D: 89, F: 69 },
                { A: 86, B: 81, C: 63, D: 75, F: 63 }
            ],
            grade5Auto19: [
                { A: 79, B: 84, C: 83, D: 79, F: 66 },
                { A: 73, B: 88, C: 96, D: 76, F: 77 },
                { A: 74, B: 88, C: 73, D: 78, F: 88 },
                { A: 76, B: 86, C: 78, D: 89, F: 69 },
                { A: 83, B: 89, C: 93, D: 73, F: 77 },
                { A: 84, B: 82, C: 73, D: 75, F: 87 },
                { A: 86, B: 84, C: 73, D: 89, F: 69 },
                { A: 72, B: 86, C: 93, D: 78, F: 63 }
            ],
        }
    },
    computed: {
        grade5CSAutoA() {
            return [
                this.grade5CSAuto[0].A,
                this.grade5CSAuto[1].A,
                this.grade5CSAuto[2].A,
                this.grade5CSAuto[3].A,
                this.grade5CSAuto[4].A,
                this.grade5CSAuto[5].A,
                this.grade5CSAuto[6].A,
                this.grade5CSAuto[7].A
            ]
        },
        grade5CSAutoB() {
            return [
                this.grade5CSAuto[0].B,
                this.grade5CSAuto[1].B,
                this.grade5CSAuto[2].B,
                this.grade5CSAuto[3].B,
                this.grade5CSAuto[4].B,
                this.grade5CSAuto[5].B,
                this.grade5CSAuto[6].B,
                this.grade5CSAuto[7].B
            ]
        },
        grade5CSAutoC() {
            return [
                this.grade5CSAuto[0].C,
                this.grade5CSAuto[1].C,
                this.grade5CSAuto[2].C,
                this.grade5CSAuto[3].C,
                this.grade5CSAuto[4].C,
                this.grade5CSAuto[5].C,
                this.grade5CSAuto[6].C,
                this.grade5CSAuto[7].C
            ]
        },
        grade5CSAutoD() {
            return [
                this.grade5CSAuto[0].D,
                this.grade5CSAuto[1].D,
                this.grade5CSAuto[2].D,
                this.grade5CSAuto[3].D,
                this.grade5CSAuto[4].D,
                this.grade5CSAuto[5].D,
                this.grade5CSAuto[6].D,
                this.grade5CSAuto[7].D
            ]
        },
        grade5CSAutoE() {
            return [
                this.grade5CSAuto[0].F,
                this.grade5CSAuto[1].F,
                this.grade5CSAuto[2].F,
                this.grade5CSAuto[3].F,
                this.grade5CSAuto[4].F,
                this.grade5CSAuto[5].F,
                this.grade5CSAuto[6].F,
                this.grade5CSAuto[7].F
            ]
        },
        grade5CSAutoTotal() {
            var a = this.grade5CSAuto[0].A + this.grade5CSAuto[1].A + this.grade5CSAuto[2].A + this.grade5CSAuto[3].A + this.grade5CSAuto[4].A
            var b = this.grade5CSAuto[0].B + this.grade5CSAuto[1].B + this.grade5CSAuto[2].B + this.grade5CSAuto[3].B + this.grade5CSAuto[4].B
            var c = this.grade5CSAuto[0].C + this.grade5CSAuto[1].C + this.grade5CSAuto[2].C + this.grade5CSAuto[3].C + this.grade5CSAuto[4].C
            var d = this.grade5CSAuto[0].D + this.grade5CSAuto[1].D + this.grade5CSAuto[2].D + this.grade5CSAuto[3].D + this.grade5CSAuto[4].D
            var e = this.grade5CSAuto[0].F + this.grade5CSAuto[1].F + this.grade5CSAuto[2].F + this.grade5CSAuto[3].F + this.grade5CSAuto[4].F
            var f = this.grade5CSAuto[0].C + this.grade5CSAuto[1].C + this.grade5CSAuto[2].C + this.grade5CSAuto[3].C + this.grade5CSAuto[4].C
            var g = this.grade5CSAuto[0].D + this.grade5CSAuto[1].D + this.grade5CSAuto[2].D + this.grade5CSAuto[3].D + this.grade5CSAuto[4].D
            var h = this.grade5CSAuto[0].F + this.grade5CSAuto[1].F + this.grade5CSAuto[2].F + this.grade5CSAuto[3].F + this.grade5CSAuto[4].F
            return [a, b, c, d, e,f,g,h]
        }
    },
    mounted() {
        this.drawSit5()
        this.setTimer5()
    },
    beforeCreate() {
        clearInterval(this.clearTimeSet5)
    },
    methods: {
        startAuto5() {
            this.setTimer5()
        },
        setTimer5() {
            var gradeIndex5 = 0
            this.clearTimeSet5 = setInterval(() => {
                gradeIndex5++;
                gradeIndex5 %= this.grades51.length+this.grades52.length
                this.changeDataA5(gradeIndex5 + 1)

            }, 3000);
        },
        clearTimer5() {
            clearInterval(this.clearTimeSet5)
        },
        changeDataSit5(item) {
            if (item == 1) {
                this.grade5CSAuto = this.grade5CS22
                this.grade5 = this.grades51[item - 1].name
                this.drawSit5()
                clearInterval(this.clearTimeSet5)
            };
            if (item == 2) {
                this.grade5CSAuto = this.grade5CS21
                this.grade5 = this.grades51[item - 1].name
                this.drawSit5()
                clearInterval(this.clearTimeSet5)
            };
            if (item == 3) {
                this.grade5CSAuto = this.grade5CS20
                this.grade5 = this.grades51[item - 1].name
                this.drawSit5()
                clearInterval(this.clearTimeSet5)
            };
            if (item == 4) {
                this.grade5CSAuto = this.grade5CS19
                this.grade5 = this.grades51[item - 1].name
                this.drawSit5()
                clearInterval(this.clearTimeSet5)
            };
            if (item == 5) {
                this.grade5CSAuto = this.grade5Auto22
                this.grade5 = this.grades52[item - 5].name
                this.drawSit5()
                clearInterval(this.clearTimeSet5)
            };
            if (item == 6) {
                this.grade5CSAuto = this.grade5Auto21
                this.grade5 = this.grades52[item - 5].name
                this.drawSit5()
                clearInterval(this.clearTimeSet5)
            };
            if (item == 7) {
                this.grade5CSAuto = this.grade5Auto20
                this.grade5 = this.grades52[item - 5].name
                this.drawSit5()
                clearInterval(this.clearTimeSet5)
            };
            if (item == 8) {
                this.grade5CSAuto = this.grade5Auto19
                this.grade5 = this.grades52[item - 5].name
                this.drawSit5()
                clearInterval(this.clearTimeSet5)
            };

        },
        changeDataA5(item) {
            if (item == 1) {
                this.grade5CSAuto = this.grade5CS22
                this.grade5 = this.grades51[item - 1].name
                this.drawSit5()
            };
            if (item == 2) {
                this.grade5CSAuto = this.grade5CS21
                this.grade5 = this.grades51[item - 1].name
                this.drawSit5()
            };
            if (item == 3) {
                this.grade5CSAuto = this.grade5CS20
                this.grade5 = this.grades51[item - 1].name
                this.drawSit5()
            };
            if (item == 4) {
                this.grade5CSAuto = this.grade5CS19
                this.grade5 = this.grades51[item - 1].name
                this.drawSit5()
            };
            if (item == 5) {
                this.grade5CSAuto = this.grade5Auto22
                this.grade5 = this.grades52[item - 5].name
                this.drawSit5()
            };
            if (item == 6) {
                this.grade5CSAuto = this.grade5Auto21
                this.grade5 = this.grades52[item - 5].name
                this.drawSit5()
            };
            if (item == 7) {
                this.grade5CSAuto = this.grade5Auto20
                this.grade5 = this.grades52[item - 5].name
                this.drawSit5()
            };
            if (item == 8) {
                this.grade5CSAuto = this.grade5Auto19
                this.grade5 = this.grades52[item - 5].name
                this.drawSit5()
            };

        },
        drawSit5() {
            var edubalance = echarts.init(document.getElementById('edubalance'));
            option = {
                tooltip: {
                    trigger: 'axis',
                    formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}</br>{a2}: {c2}</br>{a3}: {c3}'
                },
                toolbox: {
                    show: false,
                    feature: {
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ['line', 'bar'] },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                legend: {
                    data: ['思想', '科研竞赛', '文体', '实践', '学业', '总分'],
                    right: "15%",
                    textStyle: {
                        color: '#fff'
                    }
                },
                grid: {
                    top: '18%',
                    right: '5%',
                    bottom: '8%',
                    left: '5%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data:  ['大一上', '大一下', '大二上', '大二下', '大三上', '大三下', '大四上', '大四下'],
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: '#3c4452'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#fff"
                            },
                            lineStyle: {
                                color: '#519cff'
                            },
                            alignWithLabel: true,
                            interval: 0,
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',

                        nameTextStyle: {
                            color: '#fff'
                        },
                        interval: 20,
                        max: 200,
                        min: 0,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#23303f'
                            }
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#115372'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#fff"
                            },
                            alignWithLabel: true,
                            interval: 0

                        }
                    },
                    {
                        min: 0,
                        max: 500,
                        interval: 50,
                        type: 'value',
                        name: '',
                        nameTextStyle: {
                            color: '#fff'
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#23303f'
                            }
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#115372'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#fff"
                            },
                            alignWithLabel: true,
                            interval: 0

                        }
                    }
                ],
                color: "yellow",
                series: [
                    {
                        name: '思想',
                        type: 'bar',
                        data: this.grade5CSAutoA,
                        itemStyle: {
                            normal: {
                                color: '#76da91'
                            }, label: {
                                show: true,
                                position: 'top',
                                formatter: '{c}'
                            }
                        }
                    },
                    {
                        name: '科研竞赛',
                        type: 'bar',
                        data: this.grade5CSAutoB,
                        itemStyle: {
                            normal: {
                                color: '#f8cb7f'
                            },
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{c}'
                            }
                        }
                    },
                    {
                        name: '文体',
                        type: 'bar',
                        data: this.grade5CSAutoC,
                        itemStyle: {
                            normal: {
                                color: '#f89588'
                            },
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{c}'

                            }
                        }
                    },
                    {
                        name: '实践',
                        type: 'bar',
                        data: this.grade5CSAutoD,
                        itemStyle: {
                            normal: {
                                color: '#7cd6cf'
                            },
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{c}'
                            }
                        }
                    },
                    {
                        name: '学业',
                        type: 'bar',
                        data: this.grade5CSAutoE,
                        itemStyle: {
                            normal: {
                                color: '#fcdfff'
                            },
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{c}'
                            }
                        }
                    },
                    {
                        name: '总分',
                        type: 'line',
                        yAxisIndex: 1,
                        lineStyle: {
                            normal: {
                                color: '#d37735'
                            }
                        },
                        data: this.grade5CSAutoTotal
                    }
                ]
            };
            edubalance.setOption(option);
            
            edubalance.off('mouseover')
            edubalance.on('mouseover',()=>{
                clearInterval(this.clearTimeSet5)
            });
            edubalance.off('mouseout')
            edubalance.on('mouseout',()=>{
                this.setTimer5()
            });
        }
    }
})
/* 位置六 */
new Vue({
    el: '#sit6',
    data() {
        return {
            gradeCS6: [80, 78, 86, 78, 86],
            gradeAuto6: [89, 77, 79, 88, 98],
            gradeCS61: [89, 97, 76, 88, 96,89, 97, 76, 88, 96],
            gradeCS62: [ '', '',43, 87, 96, 78,43, 87, 96, 78],
            gradeCS63: [ '', '', '', '',65, 98, 86,65, 98, 86],
            gradeCS64: [ '', '', '', '', '', '',85, 88,85, 88],
            gradeAuto61: [83, 79, 89, 98, 87,83, 79, 89, 98, 87],
            gradeAuto62: [ '','',87, 89, 86, 78, 87, 89, 86, 78],
            gradeAuto63: [ '', '','', '',68, 78, 78, 68, 78, 78],
            gradeAuto64: ['', '', '', '', '', '',78, 87,78, 87],
            gradesSit6: [
                { name: '22级', item: 1 },
                { name: '21级', item: 2 },
                { name: '20级', item: 3 },
                { name: '19级', item: 4 }
            ],
            gradeSit6: '22级'
        }
    },
    mounted() {
        this.drawSit6()
        this.setTimer6()

    },
    beforeCreate() {
        clearInterval(this.clearTimeSet6)
    },
    methods: {
        startAuto6() {
            this.setTimer6()
        },
        setTimer6() {
            var gradeIndex6 = 0
            this.clearTimeSet6 = setInterval(() => {
                gradeIndex6++;
                gradeIndex6 %= this.gradesSit6.length
                this.changedataA6(gradeIndex6 + 1)
            }, 3000);
        },
        clearTimer6() {
            clearInterval(this.clearTimeSet6)
        },
        changeDataSit6(item) {
            if (item == 1) {
                this.gradeCS6 = this.gradeCS61
                this.gradeAuto6 = this.gradeAuto61
                this.gradeSit6 = this.gradesSit6[item - 1].name
                this.drawSit6(item)
                clearInterval(this.clearTimeSet6)
            };
            if (item == 2) {
                this.gradeCS6 = this.gradeCS62
                this.gradeAuto6 = this.gradeAuto62
                this.gradeSit6 = this.gradesSit6[item - 1].name
                this.drawSit6(item)
                clearInterval(this.clearTimeSet6)
            };
            if (item == 3) {
                this.gradeCS6 = this.gradeCS63
                this.gradeAuto6 = this.gradeAuto63
                this.gradeSit6 = this.gradesSit6[item - 1].name
                this.drawSit6(item)
                clearInterval(this.clearTimeSet6)
            };
            if (item == 4) {
                this.gradeCS6 = this.gradeCS64
                this.gradeAuto6 = this.gradeAuto64
                this.gradeSit6 = this.gradesSit6[item - 1].name
                this.drawSit6(item)
                clearInterval(this.clearTimeSet6)
            };
        },
        changedataA6(item) {
            if (item == 1) {
                this.gradeCS6 = this.gradeCS61
                this.gradeAuto6 = this.gradeAuto61
                this.gradeSit6 = this.gradesSit6[item - 1].name
                this.drawSit6()
            };
            if (item == 2) {
                this.gradeCS6 = this.gradeCS62
                this.gradeAuto6 = this.gradeAuto62
                this.gradeSit6 = this.gradesSit6[item - 1].name
                this.drawSit6()
            };
            if (item == 3) {
                this.gradeCS6 = this.gradeCS63
                this.gradeAuto6 = this.gradeAuto63
                this.gradeSit6 = this.gradesSit6[item - 1].name
                this.drawSit6()
            };
            if (item == 4) {
                this.gradeCS6 = this.gradeCS64
                this.gradeAuto6 = this.gradeAuto64
                this.gradeSit6 = this.gradesSit6[item - 1].name
                this.drawSit6()
            };
        },
        drawSit6(item) {
            var graduateyear = echarts.init(document.getElementById('graduateyear'));
            option = {
                title: {
                    text: "",
                    x: 'center',
                    y: 'top',
                    textStyle:
                    {
                        color: '#fff',
                        fontSize: 13
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '3%',
                    right: '8%',
                    bottom: '5%',
                    top: "13%",
                    containLabel: true
                },
                color: ["#72b332", '#35a9e0'],
                legend: {
                    data: [this.gradeSit6 + '计算机', this.gradeSit6 + '自动化'],
                    show: true,

                    right: '15%',
                    y: "0",
                    textStyle: {
                        color: "#999",
                        fontSize: '13'
                    },
                },
                toolbox: {
                    show: false,
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['大一上', '大一下', '大二上', '大二下', '大三上', '大三下', '大四上', '大四下'],
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#2d3b53'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#fff"
                            },
                            alignWithLabel: true,
                            interval: 0,
                            rotate: '15'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#2d3b53'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#999"
                            }
                        },
                    }
                ],
                series: [
                    {
                        name: this.gradeSit6 + '计算机',
                        type: 'line',
                        smooth: true,
                        symbol: 'roundRect',
                        data: this.gradeCS6
                    },
                    {
                        name: this.gradeSit6 + '自动化',
                        type: 'line',
                        smooth: true,
                        symbol: 'roundRect',
                        data: this.gradeAuto6
                    }
                ]
            };
            graduateyear.setOption(option);
            graduateyear.off('mouseover')
            graduateyear.on('mouseover',()=>{
                clearInterval(this.clearTimeSet6)
            });
            graduateyear.off('mouseout')
            graduateyear.on('mouseout',()=>{
                this.setTimer6()
            });
            
        }
    }
})
/* 位置七 */
new Vue({
    el: '#sit7',
    data() {
        return {
            grades71: [
                { name: '22级计算机', item: 1 },
                { name: '21级计算机', item: 2 },
                { name: '20级计算机', item: 3 },
                { name: '19级计算机', item: 4 },
            ],
            grades72: [
                { name: '22级自动化', item: 5 },
                { name: '21级自动化', item: 6 },
                { name: '20级自动化', item: 7 },
                { name: '19级自动化', item: 8 },
            ],

            grade7: '22级计算机',
            grade7CSAuto: [
                { index: 01, name: 'xxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 02, name: 'qqq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 03, name: 'www', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 04, name: 'eee', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 05, name: 'rrr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 06, name: 'aaa', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 07, name: 'sss', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 08, name: 'ddd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 09, name: 'fff', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 10, name: 'ggg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 },
                { index: 11, name: 'xxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 12, name: 'qqq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 13, name: 'www', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 14, name: 'eee', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 15, name: 'rrr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 16, name: 'aaa', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 17, name: 'sss', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 18, name: 'ddd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 19, name: 'fff', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 20, name: 'ggg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 }
            ],
            grade7CS22: [
                { index: 01, name: 'xxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 02, name: 'qqq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 03, name: 'www', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 04, name: 'eee', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 05, name: 'rrr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 06, name: 'aaa', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 07, name: 'sss', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 08, name: 'ddd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 09, name: 'fff', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 10, name: 'ggg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 },
                { index: 11, name: 'xxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 12, name: 'qqq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 13, name: 'www', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 14, name: 'eee', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 15, name: 'rrr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 16, name: 'aaa', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 17, name: 'sss', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 18, name: 'ddd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 19, name: 'fff', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 20, name: 'ggg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 }
            ],
            grade7CS21: [
                { index: 01, name: 'xox', score1: 91, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 02, name: 'oqq', score1: 91, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 03, name: 'wow', score1: 91, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 04, name: 'oee', score1: 91, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 05, name: 'rrr', score1: 91, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 06, name: 'aoa', score1: 81, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 07, name: 'oss', score1: 81, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 08, name: 'ddd', score1: 81, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 09, name: 'off', score1: 81, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 10, name: 'ogg', score1: 81, score2: 80, score3: 80, score4: 80, score5: 80 },
                { index: 11, name: 'xox', score1: 91, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 12, name: 'qoq', score1: 91, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 13, name: 'wow', score1: 91, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 14, name: 'eoe', score1: 91, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 15, name: 'ror', score1: 91, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 16, name: 'aoa', score1: 81, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 17, name: 'sos', score1: 81, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 18, name: 'dod', score1: 81, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 19, name: 'fof', score1: 81, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 20, name: 'gog', score1: 81, score2: 80, score3: 80, score4: 80, score5: 80 }
            ],
            grade7CS20: [
                { index: 01, name: 'xqx', score1: 98, score2: 97, score3: 98, score4: 98, score5: 98 },
                { index: 02, name: 'qqq', score1: 96, score2: 97, score3: 96, score4: 96, score5: 96 },
                { index: 03, name: 'wqw', score1: 94, score2: 97, score3: 94, score4: 94, score5: 94 },
                { index: 04, name: 'eqe', score1: 92, score2: 97, score3: 92, score4: 92, score5: 92 },
                { index: 05, name: 'rqr', score1: 90, score2: 97, score3: 90, score4: 90, score5: 90 },
                { index: 06, name: 'aqa', score1: 88, score2: 87, score3: 88, score4: 88, score5: 88 },
                { index: 07, name: 'sqs', score1: 86, score2: 87, score3: 86, score4: 86, score5: 86 },
                { index: 08, name: 'dqd', score1: 84, score2: 87, score3: 84, score4: 84, score5: 84 },
                { index: 09, name: 'fqf', score1: 82, score2: 87, score3: 82, score4: 82, score5: 82 },
                { index: 10, name: 'gqg', score1: 80, score2: 87, score3: 80, score4: 80, score5: 80 },
                { index: 11, name: 'xqx', score1: 98, score2: 97, score3: 98, score4: 98, score5: 98 },
                { index: 12, name: 'qqq', score1: 96, score2: 97, score3: 96, score4: 96, score5: 96 },
                { index: 13, name: 'wwq', score1: 94, score2: 97, score3: 94, score4: 94, score5: 94 },
                { index: 14, name: 'qee', score1: 92, score2: 97, score3: 92, score4: 92, score5: 92 },
                { index: 15, name: 'rrq', score1: 90, score2: 97, score3: 90, score4: 90, score5: 90 },
                { index: 16, name: 'qaa', score1: 88, score2: 87, score3: 88, score4: 88, score5: 88 },
                { index: 17, name: 'ssq', score1: 86, score2: 87, score3: 86, score4: 86, score5: 86 },
                { index: 18, name: 'qdd', score1: 84, score2: 87, score3: 84, score4: 84, score5: 84 },
                { index: 19, name: 'ffq', score1: 82, score2: 87, score3: 82, score4: 82, score5: 82 },
                { index: 20, name: 'qgg', score1: 80, score2: 87, score3: 80, score4: 80, score5: 80 }
            ],
            grade7CS19: [
                { index: 01, name: 'sxx', score1: 97, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 02, name: 'sqq', score1: 97, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 03, name: 'sww', score1: 97, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 04, name: 'see', score1: 92, score2: 97, score3: 92, score4: 92, score5: 92 },
                { index: 05, name: 'rrs', score1: 90, score2: 97, score3: 90, score4: 90, score5: 90 },
                { index: 06, name: 'aas', score1: 88, score2: 87, score3: 88, score4: 88, score5: 88 },
                { index: 07, name: 'sss', score1: 86, score2: 86, score3: 87, score4: 86, score5: 86 },
                { index: 08, name: 'dsd', score1: 84, score2: 84, score3: 87, score4: 84, score5: 84 },
                { index: 09, name: 'fsf', score1: 82, score2: 82, score3: 87, score4: 82, score5: 82 },
                { index: 10, name: 'gsg', score1: 80, score2: 87, score3: 80, score4: 80, score5: 80 },
                { index: 11, name: 'xsx', score1: 98, score2: 97, score3: 98, score4: 98, score5: 98 },
                { index: 12, name: 'qsq', score1: 96, score2: 97, score3: 96, score4: 96, score5: 96 },
                { index: 13, name: 'sww', score1: 94, score2: 97, score3: 94, score4: 94, score5: 94 },
                { index: 14, name: 'ese', score1: 92, score2: 92, score3: 97, score4: 92, score5: 92 },
                { index: 15, name: 'srr', score1: 90, score2: 90, score3: 90, score4: 97, score5: 90 },
                { index: 16, name: 'asa', score1: 88, score2: 88, score3: 88, score4: 87, score5: 88 },
                { index: 17, name: 'sss', score1: 86, score2: 86, score3: 86, score4: 87, score5: 86 },
                { index: 18, name: 'dsd', score1: 84, score2: 84, score3: 87, score4: 84, score5: 84 },
                { index: 19, name: 'sff', score1: 87, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 20, name: 'gsg', score1: 87, score2: 80, score3: 80, score4: 80, score5: 80 }
            ],
            grade7Auto22: [
                { index: 01, name: 'kxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 02, name: 'kqq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 03, name: 'wkw', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 04, name: 'eke', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 05, name: 'rkr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 06, name: 'kaa', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 07, name: 'sks', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 08, name: 'dkd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 09, name: 'fkf', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 10, name: 'gkg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 },
                { index: 11, name: 'xxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 12, name: 'qkq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 13, name: 'wkw', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 14, name: 'eke', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 15, name: 'rrr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 16, name: 'kaa', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 17, name: 'kss', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 18, name: 'dkd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 19, name: 'kff', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 20, name: 'gkg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 }
            ],
            grade7Auto21: [
                { index: 01, name: 'wxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 02, name: 'wqq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 03, name: 'www', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 04, name: 'ewe', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 05, name: 'wrr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 06, name: 'aaw', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 07, name: 'wss', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 08, name: 'wdd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 09, name: 'fwf', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 10, name: 'gwg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 },
                { index: 11, name: 'xxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 12, name: 'wqq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 13, name: 'www', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 14, name: 'wee', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 15, name: 'rrr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 16, name: 'aaa', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 17, name: 'sws', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 18, name: 'dwd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 19, name: 'fwf', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 20, name: 'gwg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 }
            ],
            grade7Auto20: [
                { index: 01, name: 'xmx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 02, name: 'qqq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 03, name: 'wmw', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 04, name: 'eme', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 05, name: 'rrr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 06, name: 'maa', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 07, name: 'sms', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 08, name: 'ddd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 09, name: 'mff', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 10, name: 'ggg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 },
                { index: 11, name: 'mxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 12, name: 'qmq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 13, name: 'wmw', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 14, name: 'eme', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 15, name: 'rrr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 16, name: 'ama', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 17, name: 'sss', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 18, name: 'ddd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 19, name: 'mff', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 20, name: 'gmg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 }
            ],
            grade7Auto19: [
                { index: 01, name: 'lxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 02, name: 'lqq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 03, name: 'wwl', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 04, name: 'eee', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 05, name: 'rrr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 06, name: 'laa', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 07, name: 'lss', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 08, name: 'dld', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 09, name: 'lff', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 10, name: 'lgg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 },
                { index: 11, name: 'xxx', score1: 98, score2: 98, score3: 98, score4: 98, score5: 98 },
                { index: 12, name: 'qlq', score1: 96, score2: 96, score3: 96, score4: 96, score5: 96 },
                { index: 13, name: 'wlw', score1: 94, score2: 94, score3: 94, score4: 94, score5: 94 },
                { index: 14, name: 'eee', score1: 92, score2: 92, score3: 92, score4: 92, score5: 92 },
                { index: 15, name: 'rlr', score1: 90, score2: 90, score3: 90, score4: 90, score5: 90 },
                { index: 16, name: 'aaa', score1: 88, score2: 88, score3: 88, score4: 88, score5: 88 },
                { index: 17, name: 'lss', score1: 86, score2: 86, score3: 86, score4: 86, score5: 86 },
                { index: 18, name: 'ldd', score1: 84, score2: 84, score3: 84, score4: 84, score5: 84 },
                { index: 19, name: 'fff', score1: 82, score2: 82, score3: 82, score4: 82, score5: 82 },
                { index: 20, name: 'glg', score1: 80, score2: 80, score3: 80, score4: 80, score5: 80 }
            ]
        }
    },
    mounted() {
        this.setTimer7()
    },
    beforeCreate() {
        clearInterval(this.clearTimeSet7)
    },
    methods: {
        stopchange7(){
            clearInterval(this.clearTimeSet7)
        },
        changeDataSit7(item) {
            if (item == 1) {
                this.grade7CSAuto = this.grade7CS22
                this.grade7 = this.grades71[item - 1].name
                clearInterval(this.clearTimeSet7)
            };
            if (item == 2) {
                this.grade7CSAuto = this.grade7CS21
                this.grade7 = this.grades71[item - 1].name
                clearInterval(this.clearTimeSet7)
            };
            if (item == 3) {
                this.grade7CSAuto = this.grade7CS20
                this.grade7 = this.grades71[item - 1].name
                clearInterval(this.clearTimeSet7)
            };
            if (item == 4) {
                this.grade7CSAuto = this.grade7CS19
                this.grade7 = this.grades71[item - 1].name
                clearInterval(this.clearTimeSet7)
            };
            if (item == 5) {
                this.grade7CSAuto = this.grade7Auto22
                this.grade7 = this.grades72[item - 5].name
                clearInterval(this.clearTimeSet7)
            };
            if (item == 6) {
                this.grade7CSAuto = this.grade7Auto21
                this.grade7 = this.grades72[item - 5].name
                clearInterval(this.clearTimeSet7)
            };
            if (item == 7) {
                this.grade7CSAuto = this.grade7Auto20
                this.grade7 = this.grades72[item - 5].name
                clearInterval(this.clearTimeSet7)
            };
            if (item == 8) {
                this.grade7CSAuto = this.grade7Auto19
                this.grade7 = this.grades72[item - 5].name
                clearInterval(this.clearTimeSet7)
            };
        },
        startAuto7() {
            this.setTimer7()
        },
        setTimer7() {
            var gradeIndex7 = 0
            this.clearTimeSet7 = setInterval(() => {
                gradeIndex7++;
                gradeIndex7 %= this.grades71.length+this.grades72.length
                this.changedataA7(gradeIndex7 + 1)
            }, 3000);
        },
        changedataA7(item) {
            if (item == 1) {
                this.grade7CSAuto = this.grade7CS22
                this.grade7 = this.grades71[item - 1].name
            };
            if (item == 2) {
                this.grade7CSAuto = this.grade7CS21
                this.grade7 = this.grades71[item - 1].name
            };
            if (item == 3) {
                this.grade7CSAuto = this.grade7CS20
                this.grade7 = this.grades71[item - 1].name
            };
            if (item == 4) {
                this.grade7CSAuto = this.grade7CS19
                this.grade7 = this.grades71[item - 1].name
            };
            if (item == 5) {
                this.grade7CSAuto = this.grade7Auto22
                this.grade7 = this.grades72[item - 5].name
            };
            if (item == 6) {
                this.grade7CSAuto = this.grade7Auto21
                this.grade7 = this.grades72[item - 5].name
            };
            if (item == 7) {
                this.grade7CSAuto = this.grade7Auto20
                this.grade7 = this.grades72[item - 5].name
            };
            if (item == 8) {
                this.grade7CSAuto = this.grade7Auto19
                this.grade7 = this.grades72[item - 5].name
            };
        },

    }
})
/* 位置八 */
new Vue({
    el: '#sit8',
    data() {
        return {
            grade8CS22: { A: 89, B: 84, C: 83, D: 79, F: 87 },
            grade8CS21: { A: 89, B: 84, C: 83, D: 79, F: 75 },
            grade8CS20: { A: 79, B: 84, C: 83, D: 79, F: 70 },
            grade8CS19: { A: 59, B: 84, C: 83, D: 79, F: 88 },
            grade8Auto22: { A: 79, B: 84, C: 83, D: 79, F: 67 },
            grade8Auto21: { A: 88, B: 84, C: 83, D: 79, F: 57 },
            grade8Auto20: { A: 69, B: 84, C: 86, D: 76, F: 69 },
            grade8Auto19: { A: 79, B: 84, C: 83, D: 79, F: 56 },

        }
    },
    mounted() {
        this.drawSit8()
    },
    methods: {
        drawSit8() {
            var juniorservice = echarts.init(document.getElementById('juniorservice'));
            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                color: ['#eaff00', '#22ac38', '#6bc0fb', '#7fec9d', '#fedd8b',],
                legend: {
                    right: '0',
                    data: ['思想', '科研竞赛', '文体', '实践', '学业'],
                    textStyle: {
                        color: '#00ffff'
                    }
                },
                grid: {
                    left: '8%',
                    right: '4%',
                    bottom: '3%',
                    top: '10%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#1e2b43'
                        }
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#115372'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: "#fff"
                        },
                        alignWithLabel: true,
                        interval: 0

                    }
                },
                dataZoom: [{
                    type: 'slider',
                    width: '57',
                    yAxisIndex: 0,
                    filterMode: 'empty',
                    start: 0,
                    x: '0',
                    end: 60,
                    handleStyle: {
                        color: "#519cff",
                        backgroundColor: '#519cff'
                    },
                    textStyle: {
                        color: "#fff"
                    },
                    borderColor: "#519cff"
                }],
                yAxis: {
                    type: 'category',
                    data: ['22级计算机', '21级计算机', '20级计算机', ' 19级计算机', '22级自动化', '21级自动化', '20级自动化', '19级自动化'],
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: '#1e2b43'
                        }
                    },

                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#115372'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: "#419aff"
                        },
                        lineStyle: {
                            color: '#519cff'
                        },
                        alignWithLabel: true,
                        interval: 0
                    }
                },
                series: [
                    {
                        name: '思想',
                        type: 'bar',
                        stack: '比例',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight',
                                textStyle: {
                                    color: '#333'
                                }
                            }

                        },
                        data: [
                            this.grade8CS22.A,
                            this.grade8CS21.A,
                            this.grade8CS20.A,
                            this.grade8CS19.A,
                            this.grade8Auto22.A,
                            this.grade8Auto21.A,
                            this.grade8Auto20.A,
                            this.grade8Auto19.A,
                        ],
                    },
                    {
                        name: '科研竞赛',
                        type: 'bar',
                        stack: '比例',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight',
                                textStyle: {
                                    color: '#333'
                                }

                            }
                        },
                        data: [
                            this.grade8CS22.B,
                            this.grade8CS21.B,
                            this.grade8CS20.B,
                            this.grade8CS19.B,
                            this.grade8Auto22.B,
                            this.grade8Auto21.B,
                            this.grade8Auto20.B,
                            this.grade8Auto19.B,
                        ],
                    },
                    {
                        name: '文体',
                        type: 'bar',
                        stack: '比例',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight',
                                textStyle: {
                                    color: '#333'
                                }

                            }
                        },
                        data: [
                            this.grade8CS22.C,
                            this.grade8CS21.C,
                            this.grade8CS20.C,
                            this.grade8CS19.C,
                            this.grade8Auto22.C,
                            this.grade8Auto21.C,
                            this.grade8Auto20.C,
                            this.grade8Auto19.C,
                        ],
                    },
                    {
                        name: '实践',
                        type: 'bar',
                        stack: '比例',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight',
                                textStyle: {
                                    color: '#333'
                                }

                            }
                        },
                        data: [
                            this.grade8CS22.D,
                            this.grade8CS21.D,
                            this.grade8CS20.D,
                            this.grade8CS19.D,
                            this.grade8Auto22.D,
                            this.grade8Auto21.D,
                            this.grade8Auto20.D,
                            this.grade8Auto19.D,
                        ],
                    },
                    {
                        name: '学业',
                        type: 'bar',
                        stack: '比例',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight',
                                textStyle: {
                                    color: '#333'
                                }

                            }
                        },
                        data: [
                            this.grade8CS22.F,
                            this.grade8CS21.F,
                            this.grade8CS20.F,
                            this.grade8CS19.F,
                            this.grade8Auto22.F,
                            this.grade8Auto21.F,
                            this.grade8Auto20.F,
                            this.grade8Auto19.F,
                        ],
                    }
                ]
            };
            juniorservice.setOption(option);


        }
    }
})
/* 位置九 */
new Vue({
    el: '#sit9',
    data() {
        return {
            gradesSit9: [
                { name: '22级思想', item: 1 },
                { name: '22级科研竞赛', item: 2 },
                { name: '22级文体', item: 3 },
                { name: '22级实践', item: 4 },
                { name: '22级学业', item: 5 },
                { name: '21级思想', item: 6 },
                { name: '21级科研竞赛', item: 7 },
                { name: '21级文体', item: 8 },
                { name: '21级实践', item: 9 },
                { name: '21级学业', item: 10 },
                { name: '20级思想', item: 11 },
                { name: '20级科研竞赛', item: 12 },
                { name: '20级文体', item: 13 },
                { name: '20级实践', item: 14 },
                { name: '20级学业', item: 15 },
                { name: '19级思想', item: 16 },
                { name: '19级科研竞赛', item: 17 },
                { name: '19级文体', item: 18 },
                { name: '19级实践', item: 19 },
                { name: '19级学业', item: 20 },
            ],
            gradeSit9: '22级思想',
            grade9: [
                { name: 'xxx', score: 98 },
                { name: 'yyy', score: 95 },
                { name: 'ggg', score: 94 },
                { name: 'fff', score: 93 },
                { name: 'ddd', score: 92 },
                { name: 'vvv', score: 88 },
                { name: 'ccc', score: 87 },
                { name: 'eee', score: 86 },
                { name: 'nnn', score: 83 },
                { name: 'hhh', score: 81 },
                { name: 'uuu', score: 80 }
            ],
            grade922A: [
                { name: 'xxx', score: 98 },
                { name: 'yyy', score: 95 },
                { name: 'ggg', score: 94 },
                { name: 'fff', score: 93 },
                { name: 'ddd', score: 92 },
                { name: 'vvv', score: 88 },
                { name: 'ccc', score: 87 },
                { name: 'eee', score: 86 },
                { name: 'nnn', score: 83 },
                { name: 'hhh', score: 81 },
                { name: 'uuu', score: 80 }
            ],
            grade922B: [
                { name: 'xqx', score: 98 },
                { name: 'yyq', score: 95 },
                { name: 'qgg', score: 94 },
                { name: 'fqf', score: 93 },
                { name: 'ddq', score: 92 },
                { name: 'vqv', score: 78 },
                { name: 'qcc', score: 77 },
                { name: 'eeq', score: 76 },
                { name: 'nnq', score: 73 },
                { name: 'qhh', score: 71 },
                { name: 'uqu', score: 70 }
            ],
            grade922C: [
                { name: 'xxp', score: 95 },
                { name: 'ypy', score: 94 },
                { name: 'pgg', score: 93 },
                { name: 'pff', score: 92 },
                { name: 'dpd', score: 91 },
                { name: 'vpv', score: 88 },
                { name: 'pcc', score: 87 },
                { name: 'pee', score: 86 },
                { name: 'npn', score: 73 },
                { name: 'hph', score: 71 },
                { name: 'upu', score: 70 }
            ],
            grade922D: [
                { name: 'oxx', score: 96 },
                { name: 'yoy', score: 91 },
                { name: 'gog', score: 84 },
                { name: 'fof', score: 83 },
                { name: 'odd', score: 82 },
                { name: 'ovv', score: 87 },
                { name: 'coc', score: 77 },
                { name: 'eoe', score: 76 },
                { name: 'onn', score: 73 },
                { name: 'hoh', score: 71 },
                { name: 'uou', score: 70 }
            ],
            grade922E: [
                { name: 'ixx', score: 98 },
                { name: 'yiy', score: 95 },
                { name: 'gig', score: 94 },
                { name: 'fif', score: 93 },
                { name: 'did', score: 92 },
                { name: 'ivv', score: 88 },
                { name: 'cic', score: 87 },
                { name: 'eie', score: 86 },
                { name: 'nin', score: 83 },
                { name: 'ihh', score: 81 },
                { name: 'uiu', score: 80 }
            ],
            grade921A: [
                { name: 'xxx', score: 98 },
                { name: 'yyy', score: 95 },
                { name: 'ggg', score: 94 },
                { name: 'fff', score: 93 },
                { name: 'ddd', score: 92 },
                { name: 'vvv', score: 88 },
                { name: 'ccc', score: 87 },
                { name: 'eee', score: 86 },
                { name: 'nnn', score: 83 },
                { name: 'hhh', score: 81 },
                { name: 'uuu', score: 80 }
            ],
            grade921B: [
                { name: 'xqx', score: 98 },
                { name: 'yyq', score: 95 },
                { name: 'qgg', score: 94 },
                { name: 'fqf', score: 93 },
                { name: 'ddq', score: 92 },
                { name: 'vqv', score: 78 },
                { name: 'qcc', score: 77 },
                { name: 'eeq', score: 76 },
                { name: 'nnq', score: 73 },
                { name: 'qhh', score: 71 },
                { name: 'uqu', score: 70 }
            ],
            grade921C: [
                { name: 'xxp', score: 95 },
                { name: 'ypy', score: 94 },
                { name: 'pgg', score: 93 },
                { name: 'pff', score: 92 },
                { name: 'dpd', score: 91 },
                { name: 'vpv', score: 88 },
                { name: 'pcc', score: 87 },
                { name: 'pee', score: 86 },
                { name: 'npn', score: 73 },
                { name: 'hph', score: 71 },
                { name: 'upu', score: 70 }
            ],
            grade921D: [
                { name: 'oxx', score: 96 },
                { name: 'yoy', score: 91 },
                { name: 'gog', score: 84 },
                { name: 'fof', score: 83 },
                { name: 'odd', score: 82 },
                { name: 'ovv', score: 87 },
                { name: 'coc', score: 77 },
                { name: 'eoe', score: 76 },
                { name: 'onn', score: 73 },
                { name: 'hoh', score: 71 },
                { name: 'uou', score: 70 }
            ],
            grade921E: [
                { name: 'ixx', score: 98 },
                { name: 'yiy', score: 95 },
                { name: 'gig', score: 94 },
                { name: 'fif', score: 93 },
                { name: 'did', score: 92 },
                { name: 'ivv', score: 88 },
                { name: 'cic', score: 87 },
                { name: 'eie', score: 86 },
                { name: 'nin', score: 83 },
                { name: 'ihh', score: 81 },
                { name: 'uiu', score: 80 }
            ],
            grade920A: [
                { name: 'xxx', score: 98 },
                { name: 'yyy', score: 95 },
                { name: 'ggg', score: 94 },
                { name: 'fff', score: 93 },
                { name: 'ddd', score: 92 },
                { name: 'vvv', score: 88 },
                { name: 'ccc', score: 87 },
                { name: 'eee', score: 86 },
                { name: 'nnn', score: 83 },
                { name: 'hhh', score: 81 },
                { name: 'uuu', score: 80 }
            ],
            grade920B: [
                { name: 'xqx', score: 98 },
                { name: 'yyq', score: 95 },
                { name: 'qgg', score: 94 },
                { name: 'fqf', score: 93 },
                { name: 'ddq', score: 92 },
                { name: 'vqv', score: 78 },
                { name: 'qcc', score: 77 },
                { name: 'eeq', score: 76 },
                { name: 'nnq', score: 73 },
                { name: 'qhh', score: 71 },
                { name: 'uqu', score: 70 }
            ],
            grade920C: [
                { name: 'xxp', score: 95 },
                { name: 'ypy', score: 94 },
                { name: 'pgg', score: 93 },
                { name: 'pff', score: 92 },
                { name: 'dpd', score: 91 },
                { name: 'vpv', score: 88 },
                { name: 'pcc', score: 87 },
                { name: 'pee', score: 86 },
                { name: 'npn', score: 73 },
                { name: 'hph', score: 71 },
                { name: 'upu', score: 70 }
            ],
            grade920D: [
                { name: 'oxx', score: 96 },
                { name: 'yoy', score: 91 },
                { name: 'gog', score: 84 },
                { name: 'fof', score: 83 },
                { name: 'odd', score: 82 },
                { name: 'ovv', score: 87 },
                { name: 'coc', score: 77 },
                { name: 'eoe', score: 76 },
                { name: 'onn', score: 73 },
                { name: 'hoh', score: 71 },
                { name: 'uou', score: 70 }
            ],
            grade920E: [
                { name: 'ixx', score: 98 },
                { name: 'yiy', score: 95 },
                { name: 'gig', score: 94 },
                { name: 'fif', score: 93 },
                { name: 'did', score: 92 },
                { name: 'ivv', score: 88 },
                { name: 'cic', score: 87 },
                { name: 'eie', score: 86 },
                { name: 'nin', score: 83 },
                { name: 'ihh', score: 81 },
                { name: 'uiu', score: 80 }
            ],
            grade919A: [
                { name: 'xxx', score: 98 },
                { name: 'yyy', score: 95 },
                { name: 'ggg', score: 94 },
                { name: 'fff', score: 93 },
                { name: 'ddd', score: 92 },
                { name: 'vvv', score: 88 },
                { name: 'ccc', score: 87 },
                { name: 'eee', score: 86 },
                { name: 'nnn', score: 83 },
                { name: 'hhh', score: 81 },
                { name: 'uuu', score: 80 }
            ],
            grade919B: [
                { name: 'xqx', score: 98 },
                { name: 'yyq', score: 95 },
                { name: 'qgg', score: 94 },
                { name: 'fqf', score: 93 },
                { name: 'ddq', score: 92 },
                { name: 'vqv', score: 78 },
                { name: 'qcc', score: 77 },
                { name: 'eeq', score: 76 },
                { name: 'nnq', score: 73 },
                { name: 'qhh', score: 71 },
                { name: 'uqu', score: 70 }
            ],
            grade919C: [
                { name: 'xxp', score: 95 },
                { name: 'ypy', score: 94 },
                { name: 'pgg', score: 93 },
                { name: 'pff', score: 92 },
                { name: 'dpd', score: 91 },
                { name: 'vpv', score: 88 },
                { name: 'pcc', score: 87 },
                { name: 'pee', score: 86 },
                { name: 'npn', score: 73 },
                { name: 'hph', score: 71 },
                { name: 'upu', score: 70 }
            ],
            grade919D: [
                { name: 'oxx', score: 96 },
                { name: 'yoy', score: 91 },
                { name: 'gog', score: 84 },
                { name: 'fof', score: 83 },
                { name: 'odd', score: 82 },
                { name: 'ovv', score: 87 },
                { name: 'coc', score: 77 },
                { name: 'eoe', score: 76 },
                { name: 'onn', score: 73 },
                { name: 'hoh', score: 71 },
                { name: 'uou', score: 70 }
            ],
            grade919E: [
                { name: 'ixx', score: 98 },
                { name: 'yiy', score: 95 },
                { name: 'gig', score: 94 },
                { name: 'fif', score: 93 },
                { name: 'did', score: 92 },
                { name: 'ivv', score: 88 },
                { name: 'cic', score: 87 },
                { name: 'eie', score: 86 },
                { name: 'nin', score: 83 },
                { name: 'ihh', score: 81 },
                { name: 'uiu', score: 80 }
            ],

        }
    },
    mounted() {
        this.drawSit9()
        this.setTimer9()

    },
    beforeCreate() {
        clearInterval(this.clearTimeSet9)
    },
    methods: {
        setTimer9() {
            var gradeIndex9 = 0
            this.clearTimeSet9 = setInterval(() => {
                gradeIndex9++;
                gradeIndex9 %= this.gradesSit9.length
                this.changedataA9(gradeIndex9 + 1)
            }, 3000);
        },
        changedataA9(item) {
            if (item == 1) {
                this.grade9 = this.grade922A
                this.gradeSit9 = this.gradesSit9[item - 1].name
                this.drawSit9()
            };
            if (item == 2) {
                this.grade9 = this.grade922B
                this.gradeSit9 = this.gradesSit9[item - 1].name
                this.drawSit9()
            };
            if (item == 3) {
                this.grade9 = this.grade922C
                this.gradeSit9 = this.gradesSit9[item - 1].name
                this.drawSit9()
            };
            if (item == 4) {
                this.grade9 = this.grade922D
                this.gradeSit9 = this.gradesSit9[item - 1].name
                this.drawSit9()
            };

            if (item == 5) {
                this.grade9 = this.grade922E
                this.gradeSit9 = this.gradesSit9[item - 1].name
                this.drawSit9()
            };
            if (item == 6) {
                this.grade9 = this.grade921A
                this.gradeSit9 = this.gradesSit9[item - 1].name
                this.drawSit9()
            };
            if (item == 7) {
                this.grade9 = this.grade921B
                this.gradeSit9 = this.gradesSit9[item - 1].name
                this.drawSit9()
            };
            if (item == 8) {
                this.grade9 = this.grade921C
                this.gradeSit9 = this.gradesSit9[item - 1].name
                this.drawSit9()
            };
            if (item == 9) {
                this.grade9 = this.grade921D
                this.gradeSit9 = this.gradesSit9[item - 1].name
                this.drawSit9()
            };
            if (item == 10) {
                this.grade9 = this.grade921E
                this.gradeSit9 = this.gradesSit9[item - 1].name
                this.drawSit9()
            };
            if (item == 11) {
                this.grade9 = this.grade920A
                this.gradeSit9 = this.gradesSit9[item - 1].name
                this.drawSit9()
            };
            if (item == 12) {
                this.grade9 = this.grade920B
                this.gradeSit9 = this.gradesSit9[item - 1].name
                this.drawSit9()
            };
            if (item == 13) {
                this.grade9 = this.grade920C
                this.gradeSit9 = this.gradesSit9[item - 1].name
                this.drawSit9()
            };
            if (item == 14) {
                this.grade9 = this.grade920D
                this.gradeSit9 = this.gradesSit9[item - 1].name
                this.drawSit9()
            };
            if (item == 15) {
                this.grade9 = this.grade920E
                this.gradeSit9 = this.gradesSit9[item - 1].name
                this.drawSit9()
            };
            if (item == 16) {
                this.grade9 = this.grade919A
                this.gradeSit9 = this.gradesSit9[item - 1].name
                this.drawSit9()
            };
            if (item == 17) {
                this.grade9 = this.grade919B
                this.gradeSit9 = this.gradesSit9[item - 1].name
                this.drawSit9()
            };
            if (item == 18) {
                this.grade9 = this.grade919C
                this.gradeSit9 = this.gradesSit9[item - 1].name
                this.drawSit9()
            };
            if (item == 19) {
                this.grade9 = this.grade919D
                this.gradeSit9 = this.gradesSit9[item - 1].name
                this.drawSit9()
            };
            if (item == 20) {
                this.grade9 = this.grade919E
                this.gradeSit9 = this.gradesSit9[item - 1].name
                this.drawSit9()
            };
        },
        drawSit9() {
            var changedetail = echarts.init(document.getElementById('changedetail'));
            option = {
                tooltip: {
                    trigger: 'axis',
                    formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}</br>{a2}: {c2}</br>{a3}: {c3}'
                },
                toolbox: {
                    show: false,
                    feature: {
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ['line', 'bar'] },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                legend: {
                    data: ['', ''],
                    show: false
                },
                grid: {
                    top: '18%',
                    right: '5%',
                    bottom: '8%',
                    left: '5%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: [
                            this.grade9[0].name,
                            this.grade9[1].name,
                            this.grade9[2].name,
                            this.grade9[3].name,
                            this.grade9[4].name,
                            this.grade9[5].name,
                            this.grade9[6].name,
                            this.grade9[7].name,
                            this.grade9[8].name,
                            this.grade9[9].name,
                            this.grade9[10].name,
                        ],
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: '#3c4452'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#fff"
                            },
                            lineStyle: {
                                color: '#519cff'
                            },
                            alignWithLabel: true,
                            interval: 0
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',

                        nameTextStyle: {
                            color: '#fff'
                        },
                        interval: 10,
                        max: 100,
                        min: 0,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#23303f'
                            }
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#115372'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#fff"
                            },
                            alignWithLabel: true,
                            interval: 0

                        }
                    },
                    {
                        min: 0,
                        max: 100,
                        interval: 10,
                        type: 'value',
                        name: '',
                        nameTextStyle: {
                            color: '#fff'
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#23303f'
                            }
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#115372'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#fff"
                            },
                            alignWithLabel: true,
                            interval: 0

                        }
                    }
                ],
                color: "yellow",
                series: [
                    {
                        name: 'test1',
                        type: 'bar',
                        data: [
                            this.grade9[0].score,
                            this.grade9[1].score,
                            this.grade9[2].score,
                            this.grade9[3].score,
                            this.grade9[4].score,
                            this.grade9[5].score,
                            this.grade9[6].score,
                            this.grade9[7].score,
                            this.grade9[8].score,
                            this.grade9[9].score,
                            this.grade9[10].score,
                        ],
                        boundaryGap: '45%',
                        barWidth: '40%',

                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    var colorList = [
                                        '#6bc0fb', '#7fec9d', '#fedd8b', '#ffa597', '#84e4dd', '#6bc0fb', '#7fec9d', '#fedd8b', '#ffa597', '#84e4dd'
                                    ];
                                    return colorList[params.dataIndex]
                                }, label: {
                                    show: true,
                                    position: 'top',
                                    formatter: '{c}'
                                }
                            }
                        }
                    },

                    {
                        name: 'test2',
                        type: 'line',
                        yAxisIndex: 1,
                        lineStyle: {
                            normal: {
                                color: '#c39705'
                            }
                        },
                        data: [
                            this.grade9[0].score,
                            this.grade9[1].score,
                            this.grade9[2].score,
                            this.grade9[3].score,
                            this.grade9[4].score,
                            this.grade9[5].score,
                            this.grade9[6].score,
                            this.grade9[7].score,
                            this.grade9[8].score,
                            this.grade9[9].score,
                            this.grade9[10].score,
                        ]
                    }
                ]
            };
            changedetail.setOption(option);

            changedetail.off('mouseover')
            changedetail.on('mouseover',()=>{
                clearInterval(this.clearTimeSet9)
            });
            changedetail.off('mouseout')
            changedetail.on('mouseout',()=>{
                this.setTimer9()
            });



        }
    }
})
