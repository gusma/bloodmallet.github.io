Highcharts.chart('warlock_affliction_patchwerk', 
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
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
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
            color: "#ffeb3b",
            data: [
                155400,
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
                0,
                0,
                0,
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                0,
                7870,
                8639,
                8874,
                9518,
                7587,
                8534,
                7447,
                7190,
                7389,
                7301,
                7353,
                7407,
                8454,
                8096,
                6858,
                7428,
                5814,
                6042,
                6697,
                5539,
                7183,
                0,
                5103,
                6064,
                0,
                6403,
                8965,
                4035,
                6023,
                6058,
                7135,
                7080,
                8087,
                8437,
                2572,
                6235,
                6695,
                3555,
                0,
                5392,
                3581,
                2693,
                5588,
                5322,
                4416,
                3457,
                4456,
                1337,
                1471
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                5314,
                8237,
                8404,
                7798,
                7421,
                7136,
                8055,
                7387,
                6562,
                5769,
                7929,
                7708,
                8429,
                7722,
                6669,
                7238,
                6264,
                6307,
                4502,
                5079,
                5389,
                7015,
                5770,
                5756,
                0,
                5191,
                5927,
                5014,
                4780,
                3228,
                3690,
                7518,
                7160,
                5477,
                5387,
                6565,
                6238,
                5052,
                0,
                2747,
                5403,
                5489,
                3375,
                4072,
                1800,
                2974,
                1885,
                1632,
                633
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                5997,
                5692,
                8774,
                6628,
                6465,
                7645,
                6307,
                8182,
                7623,
                7774,
                4965,
                6465,
                7235,
                5741,
                7067,
                4302,
                6002,
                5726,
                5616,
                4163,
                4542,
                4832,
                3930,
                5142,
                0,
                3412,
                6304,
                5626,
                4786,
                5999,
                3581,
                5449,
                5881,
                6659,
                4363,
                6931,
                6594,
                2546,
                0,
                4408,
                3343,
                1425,
                2581,
                2429,
                4548,
                3330,
                2525,
                1486,
                3523
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                4049,
                6353,
                6815,
                5550,
                5402,
                4455,
                5276,
                3780,
                4697,
                6165,
                6003,
                6803,
                6778,
                6307,
                4416,
                6800,
                5225,
                4511,
                6336,
                5388,
                4931,
                5834,
                5758,
                3892,
                0,
                5619,
                6592,
                4943,
                4806,
                3495,
                5526,
                5109,
                7040,
                4338,
                4719,
                5249,
                4628,
                3778,
                0,
                2614,
                4364,
                5366,
                4069,
                4734,
                2960,
                3266,
                1866,
                2850,
                882
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                3692,
                7403,
                4757,
                6172,
                6243,
                5030,
                5100,
                5388,
                5523,
                4112,
                5848,
                4449,
                78463,
                3717,
                6511,
                3888,
                6545,
                8017,
                4404,
                4891,
                4234,
                4218,
                2327,
                4737,
                7303,
                3170,
                5259,
                5455,
                3602,
                4368,
                4468,
                5639,
                2048,
                6342,
                4221,
                5328,
                6663,
                2359,
                6576,
                1762,
                850,
                1624,
                1785,
                743,
                2607,
                1068,
                2833,
                846,
                1900
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                5352,
                4534,
                95097,
                4650,
                5971,
                5583,
                79993,
                6196,
                5172,
                5818,
                5048,
                76740,
                0,
                6135,
                5072,
                6853,
                4345,
                3501,
                5546,
                4753,
                63685,
                67797,
                4223,
                3319,
                4089,
                4125,
                4304,
                2705,
                3270,
                2924,
                3389,
                4493,
                4799,
                4228,
                2159,
                3599,
                3138,
                5315,
                3807,
                2663,
                4877,
                2072,
                5872,
                3560,
                2158,
                2681,
                2149,
                2373,
                0
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                122964,
                94341,
                0,
                76408,
                75776,
                74133,
                0,
                73011,
                72883,
                72760,
                72427,
                0,
                0,
                71497,
                70650,
                66640,
                68067,
                63151,
                61777,
                63595,
                0,
                0,
                61896,
                60025,
                77192,
                59991,
                50321,
                59874,
                59113,
                59239,
                56057,
                47710,
                46210,
                45615,
                56540,
                45749,
                43942,
                54738,
                63409,
                53243,
                50070,
                52771,
                47486,
                47348,
                47973,
                47937,
                43409,
                44743,
                36523
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-09-14 22:09 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/d25a11555858b812d14a15a9e7ef15baa419cd38\" target=\"blank\">d25a115</a>"
    },
    title: {
        text: "Warlock - Affliction - Patchwerk"
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
            "Kil'jaeden's Burning Wish",
            "Unstable Arcanocrystal",
            "Whispers in the Dark",
            "Tarnished Sentinel Medallion",
            "Stat Stick (Mastery)",
            "Dreadstone of Endless Shadows",
            "Padawsen's Unlucky Charm",
            "Terror From Below",
            "Erratic Metronome",
            "Stat Stick (Haste)",
            "Stat Stick (Crit)",
            "Eyasu's Mulligan",
            "Charm of the Rising Tide",
            "Tome of Unraveling Sanity",
            "Stormsinger Fulmination Charge",
            "Chrono Shard",
            "Stat Stick (Versatility)",
            "Infernal Writ",
            "PVP Badge of Dominance",
            "Moonlit Prism",
            "Naraxas' Spiked Tongue",
            "Spectral Thurible",
            "Astral Alchemist Stone",
            "Fury of the Burning Sky",
            "PVP Insignia of Dominance",
            "Darkmoon Deck: Hellfire",
            "Horn of Valor",
            "Reality Breacher",
            "Obelisk of the Void",
            "Icon of Rot",
            "Devilsaur Shock-Baton",
            "Oakheart's Gnarled Root",
            "Star Gate",
            "Twisting Wind",
            "Deteriorated Construct Core",
            "Swarming Plaguehive",
            "Bough of Corruption",
            "Portable Manacracker",
            "Aran's Relaxing Ruby",
            "Infernal Alchemist Stone",
            "Caged Horror",
            "Pharameres Forbidden Grimoire",
            "Corrupted Starlight",
            "Mrrgria's Favor",
            "Toe Knee's Promise",
            "Wriggling Sinew",
            "Eye of Skovald",
            "Elementium Bomb Squirrel Generator",
            "Unstable Horrorslime",
            "Figurehead of the Naglfar"
        ]
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#1E90FF",
                label: {
                    align: "left",
                    rotation: -90,
                    style: {
                        color: "#1E90FF"
                    },
                    text: "mean at 92914",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 92914.08,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: false,
            formatter: function() {            /* I need to figure out how to get the mean value here,            ** to allow the percent diff to mean as label            ** console.log(this); */            return;          },
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});