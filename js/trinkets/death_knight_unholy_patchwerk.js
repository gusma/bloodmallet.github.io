Highcharts.chart('death_knight_unholy_patchwerk', 
{
    chart: {
        type: "bar"
    },
    legend: {
        align: "right",
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: "#CCC",
        borderWidth: 1,
        floating: false,
        reversed: true,
        shadow: false,
        verticalAlign: "bottom",
        x: 0,
        y: 0
    },
    plotOptions: {
        bar: {
            dataLabels: {
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            point: {
                events: {
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category + ': ' + this.stackY,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
                }
            },
            stacking: "normal"
        },
        series: {
            borderColor: "#151515",
            events: {
                legendItemClick: function() { return false; }
            }
        }
    },
    series: [
        {
            color: "#fdbf6f",
            data: [
                48576,
                47283,
                46590,
                305383,
                301042,
                288477,
                37952,
                43044,
                0,
                0,
                228536,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            name: "1000"
        },
        {
            color: "#cab2d6",
            data: [
                22613,
                22591,
                23150,
                0,
                0,
                0,
                18639,
                17328,
                14981,
                16424,
                0,
                13630,
                20009,
                15419,
                17546,
                16494,
                7554,
                14629,
                18023,
                14411,
                18090,
                12204,
                15937,
                14789,
                17987,
                15929,
                17936,
                14571,
                15466,
                14428,
                13285,
                11127,
                12282,
                14104,
                13365,
                13914,
                12180,
                12578,
                13137,
                9217,
                0,
                6790,
                4392,
                6637,
                7319,
                4113,
                3852,
                6316,
                3665,
                819,
                5671,
                4331,
                4251,
                2473,
                4778,
                6598
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                17790,
                19364,
                19998,
                0,
                0,
                0,
                210723,
                17740,
                11511,
                14739,
                0,
                14704,
                17910,
                16135,
                13313,
                13653,
                6298,
                12804,
                14472,
                15037,
                13636,
                18147,
                12554,
                12597,
                15735,
                12138,
                11576,
                11791,
                12670,
                14749,
                11803,
                12585,
                10828,
                13580,
                13845,
                13577,
                12325,
                13052,
                11769,
                7584,
                0,
                3620,
                5629,
                5875,
                5592,
                6728,
                6956,
                4811,
                7680,
                5280,
                3760,
                4382,
                1255,
                3279,
                2804,
                1075
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                17273,
                18958,
                16840,
                0,
                0,
                0,
                0,
                15534,
                12103,
                14493,
                0,
                13413,
                15696,
                11558,
                12525,
                12350,
                7217,
                15767,
                12834,
                12137,
                11900,
                13065,
                13250,
                16588,
                15462,
                13065,
                15280,
                11543,
                11471,
                12152,
                11293,
                14261,
                12682,
                9975,
                9762,
                10927,
                10850,
                10365,
                9971,
                6430,
                0,
                3725,
                7126,
                5541,
                6328,
                6777,
                3886,
                3555,
                313,
                5303,
                4942,
                4158,
                4165,
                4025,
                2726,
                5023
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                16863,
                16004,
                17005,
                0,
                0,
                0,
                0,
                14016,
                9600,
                11384,
                0,
                10917,
                15508,
                13718,
                10129,
                11807,
                5965,
                11900,
                13112,
                10715,
                13174,
                9826,
                11250,
                10258,
                12512,
                11816,
                10780,
                12857,
                11045,
                12540,
                11979,
                7659,
                8126,
                10835,
                12194,
                11504,
                9063,
                9932,
                11133,
                5767,
                0,
                6225,
                5135,
                5582,
                4886,
                5332,
                3201,
                7277,
                3101,
                2292,
                1748,
                2387,
                2382,
                3015,
                2177,
                0
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                204319,
                199671,
                189627,
                0,
                0,
                0,
                0,
                143500,
                9417,
                12724,
                0,
                9568,
                12554,
                12077,
                11773,
                12005,
                7153,
                8808,
                10278,
                11950,
                10981,
                10929,
                9744,
                10667,
                11951,
                10320,
                10947,
                11997,
                10030,
                7183,
                7603,
                10110,
                8986,
                8790,
                9163,
                7423,
                11636,
                8669,
                4955,
                6006,
                0,
                3112,
                5172,
                5468,
                5419,
                3185,
                6023,
                1816,
                1788,
                5328,
                3472,
                4556,
                1837,
                4309,
                1542,
                5906
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                10430,
                10767,
                0,
                10032,
                13268,
                11426,
                9973,
                8874,
                5572,
                10566,
                10829,
                9798,
                8618,
                12003,
                12316,
                11080,
                11552,
                7658,
                10555,
                6091,
                9239,
                12968,
                11260,
                8181,
                8018,
                9851,
                8201,
                9760,
                8589,
                9637,
                10226,
                7243,
                10240,
                3459,
                4972,
                2622,
                4917,
                5568,
                4516,
                5552,
                7407,
                3307,
                2569,
                2243,
                4292,
                1578,
                3452,
                943
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                8761,
                10546,
                0,
                8708,
                9350,
                6173,
                8843,
                9864,
                8281,
                9922,
                8560,
                11037,
                10433,
                6398,
                9553,
                128830,
                11552,
                12757,
                8244,
                12668,
                9288,
                5663,
                6388,
                115206,
                5424,
                8186,
                7387,
                6867,
                6713,
                7646,
                9157,
                6897,
                7634,
                2664,
                82796,
                6269,
                76982,
                3175,
                2170,
                121,
                0,
                1235,
                2934,
                3104,
                2037,
                1281,
                3361,
                2196
            ],
            name: "920"
        },
        {
            color: "#1f78b4",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                159806,
                145275,
                0,
                143326,
                118643,
                131321,
                127795,
                126152,
                163107,
                126606,
                122738,
                123417,
                121453,
                125041,
                122722,
                0,
                104516,
                116892,
                115106,
                116934,
                115717,
                114106,
                111114,
                0,
                104170,
                82703,
                83888,
                81588,
                79643,
                78635,
                73077,
                82246,
                112061,
                94120,
                0,
                74272,
                0,
                72593,
                70415,
                70483,
                62973,
                61674,
                60117,
                59627,
                58609,
                56019,
                50008,
                49968
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-28 23:50 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/195d4ef51b95f5a68cbdb8507a51b6259e3a0bab\" target=\"blank\">195d4ef</a>"
    },
    title: {
        text: "Death_Knight - Unholy - Patchwerk"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Khaz'goroths Courage +20",
            "Khaz'goroths Courage +15",
            "Khaz'goroths Courage +10",
            "Aman'Thul's Vision +20",
            "Aman'Thul's Vision +15",
            "Aman'Thul's Vision +10",
            "Kil'jaeden's Burning Wish",
            "Khaz'goroths Courage",
            "Convergence of Fates",
            "Eye of Command",
            "Aman'Thul's Vision",
            "Fel-Oiled Infernal Machine",
            "Specter of Betrayal",
            "Engine of Eradication",
            "Ettin Fingernail",
            "Stat Stick (Mastery)",
            "Unstable Arcanocrystal",
            "Entwined Elemental Foci",
            "Chaos Talisman",
            "Cradle of Anguish",
            "Horn of Valor",
            "Stat Stick (Crit)",
            "Memento of Angerboda",
            "Seeping Scourgewing",
            "Vial of Ceaseless Toxins",
            "Chrono Shard",
            "Nightmare Egg Shell",
            "Stat Stick (Versatility)",
            "Stat Stick (Haste)",
            "PVP Badge of Victory",
            "Gift of Radiance",
            "Shadow-Singed Fang",
            "PVP Insignia of Victory",
            "Bloodstained Handkerchief",
            "Might of Krosus",
            "Void Stalker's Contract",
            "Ursoc's Rending Paw",
            "Claw of the Crystalline Scorpid",
            "Draught of Souls",
            "Infernal Cinders",
            "Astral Alchemist Stone",
            "Nature's Call",
            "Forgefiend's Fabricator",
            "Terrorbound Nexus",
            "Gorshalach's Legacy",
            "Umbral Moonglaives",
            "Spontaneous Appendages",
            "Faulty Countermeasure",
            "Tiny Oozeling in a Jar",
            "Ravaged Seed Pod",
            "Mark of Dargrul",
            "Spiked Counterweight",
            "Windscar Whetstone",
            "Toe Knee's Promise",
            "Giant Ornamental Pearl",
            "Impact Tremor"
        ]
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#0973DA",
                label: {
                    align: "left",
                    rotation: 0,
                    style: {
                        color: "#0973DA"
                    },
                    text: "mean: 181207",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 181207.7142857143,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: true,
            style: {
                textOutline: false
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});