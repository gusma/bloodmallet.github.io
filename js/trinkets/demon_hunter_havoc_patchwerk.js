Highcharts.chart('demon_hunter_havoc_patchwerk', 
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
                63406,
                61359,
                325923,
                324104,
                54302,
                312313,
                262243,
                37249,
                43196,
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
                0,
                0,
                0
            ],
            name: "1000"
        },
        {
            color: "#cab2d6",
            data: [
                24971,
                24668,
                0,
                0,
                24449,
                0,
                0,
                14635,
                19268,
                9337,
                17111,
                17508,
                16179,
                19467,
                10845,
                15396,
                13662,
                16018,
                13066,
                11648,
                13629,
                12595,
                14459,
                16199,
                15512,
                16528,
                13211,
                13336,
                12290,
                17334,
                10726,
                12298,
                12917,
                10926,
                10941,
                13688,
                16699,
                9192,
                9193,
                14570,
                10232,
                12799,
                3351,
                11976,
                10141,
                6709,
                13383,
                5931,
                7636,
                0,
                8121,
                7291,
                8934,
                5877,
                5271,
                3687,
                5794,
                4103,
                1034,
                1979
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                26694,
                23113,
                0,
                0,
                19156,
                0,
                0,
                207678,
                16268,
                6620,
                14159,
                15367,
                11398,
                16777,
                13821,
                10941,
                12683,
                8282,
                13058,
                12109,
                13750,
                12976,
                10119,
                16354,
                10860,
                14232,
                10847,
                9005,
                10847,
                13024,
                10734,
                11256,
                9789,
                9105,
                10311,
                12652,
                8136,
                10226,
                10230,
                11914,
                12877,
                11939,
                7720,
                10958,
                7145,
                7242,
                10963,
                9251,
                8481,
                0,
                4339,
                5193,
                10696,
                4587,
                4884,
                6003,
                3937,
                2932,
                1816,
                2085
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                22122,
                21575,
                0,
                0,
                20261,
                0,
                0,
                0,
                14153,
                7750,
                14390,
                14370,
                12605,
                13982,
                14614,
                10913,
                10445,
                13874,
                10086,
                14861,
                11127,
                12734,
                11031,
                13601,
                10151,
                13551,
                8889,
                11282,
                11731,
                12886,
                10841,
                11313,
                8362,
                10282,
                8581,
                13775,
                14198,
                4919,
                9044,
                12114,
                10811,
                10743,
                4387,
                9432,
                4911,
                8036,
                8260,
                9738,
                5157,
                0,
                6884,
                4324,
                13474,
                4706,
                4743,
                3664,
                3224,
                4460,
                1128,
                1807
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                19757,
                18322,
                0,
                0,
                17933,
                0,
                0,
                0,
                15770,
                7732,
                11204,
                13448,
                12196,
                14937,
                8306,
                12113,
                13039,
                9244,
                12655,
                9523,
                7831,
                9879,
                11019,
                12151,
                11446,
                11946,
                9763,
                9106,
                10482,
                10835,
                8775,
                9563,
                11863,
                9586,
                10279,
                9238,
                9853,
                7718,
                8380,
                12195,
                9564,
                8027,
                3235,
                7949,
                7347,
                5807,
                9184,
                5412,
                5811,
                0,
                3792,
                4999,
                6147,
                4582,
                5064,
                2778,
                2931,
                1452,
                3230,
                3547
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                203735,
                198066,
                0,
                0,
                186498,
                0,
                0,
                0,
                143813,
                8246,
                10631,
                12375,
                8986,
                10946,
                10084,
                10858,
                9322,
                11884,
                10515,
                9647,
                11230,
                6797,
                8824,
                10855,
                9766,
                12444,
                10281,
                9556,
                7897,
                10542,
                8961,
                8525,
                8158,
                6851,
                7614,
                10918,
                7379,
                7717,
                8657,
                8063,
                9491,
                8682,
                4272,
                7876,
                5966,
                5574,
                7293,
                5674,
                4739,
                0,
                3961,
                596,
                6653,
                3846,
                1059,
                5878,
                4753,
                3111,
                112,
                793
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
                0,
                4820,
                11285,
                9993,
                8869,
                11480,
                10764,
                8609,
                9158,
                8813,
                8076,
                11493,
                9378,
                11281,
                10177,
                10634,
                9610,
                8603,
                9489,
                8557,
                8187,
                10670,
                7465,
                6142,
                9090,
                6680,
                6603,
                8523,
                9761,
                8749,
                6024,
                8102,
                9211,
                9179,
                5872,
                6837,
                8365,
                7149,
                5631,
                4782,
                5661,
                10114,
                4624,
                7440,
                10046,
                4814,
                4706,
                0,
                796,
                2371,
                719,
                2561
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
                0,
                8118,
                8353,
                145196,
                10090,
                8034,
                7656,
                7147,
                6584,
                10550,
                8612,
                4052,
                7266,
                6307,
                8267,
                10801,
                5686,
                10074,
                8076,
                8446,
                8838,
                7429,
                112916,
                9235,
                5596,
                109082,
                8823,
                8045,
                7684,
                6452,
                7941,
                5600,
                3801,
                8426,
                6294,
                7715,
                3879,
                5175,
                7423,
                91124,
                4951,
                4353,
                4490,
                2623,
                5820,
                3644,
                4270,
                5887,
                3625,
                1529,
                1574,
                0
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
                0,
                188834,
                153075,
                0,
                125696,
                107093,
                126625,
                126385,
                124968,
                118122,
                119685,
                120993,
                119288,
                118866,
                116959,
                96100,
                109756,
                93435,
                109222,
                109737,
                104686,
                91608,
                0,
                98237,
                98103,
                0,
                97160,
                81876,
                80600,
                99258,
                94183,
                80333,
                80561,
                75563,
                107075,
                76016,
                90462,
                90790,
                73316,
                0,
                85685,
                104436,
                80200,
                77017,
                40667,
                69897,
                67842,
                68981,
                59582,
                56774,
                62082,
                47569
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-28 23:50 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/195d4ef51b95f5a68cbdb8507a51b6259e3a0bab\" target=\"blank\">195d4ef</a>"
    },
    title: {
        text: "Demon_Hunter - Havoc - Patchwerk"
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
            "Golganneth's Vitality +20",
            "Golganneth's Vitality +15",
            "Aman'Thul's Vision +20",
            "Aman'Thul's Vision +15",
            "Golganneth's Vitality +10",
            "Aman'Thul's Vision +10",
            "Aman'Thul's Vision",
            "Kil'jaeden's Burning Wish",
            "Golganneth's Vitality",
            "Unstable Arcanocrystal",
            "Eye of Command",
            "Seeping Scourgewing",
            "Engine of Eradication",
            "Specter of Betrayal",
            "Thrice-Accursed Compass",
            "Stat Stick (Crit)",
            "Stat Stick (Mastery)",
            "Entwined Elemental Foci",
            "Memento of Angerboda",
            "Chaos Talisman",
            "Cradle of Anguish",
            "Infernal Cinders",
            "Bloodthirsty Instinct",
            "Vial of Ceaseless Toxins",
            "Stat Stick (Versatility)",
            "Six-Feather Fan",
            "Stat Stick (Haste)",
            "Gift of Radiance",
            "PVP Badge of Conquest",
            "Nightblooming Frond",
            "Shadow-Singed Fang",
            "Chrono Shard",
            "Nightmare Egg Shell",
            "Forgefiend's Fabricator",
            "Horn of Valor",
            "Arcanogolem Digit",
            "Bloodstained Handkerchief",
            "The Devilsaur's Bite",
            "PVP Insignia of Conquest",
            "Tirathon's Betrayal",
            "Tempered Egg of Serpentrix",
            "Void Stalker's Contract",
            "Nature's Call",
            "Splinters of Agronax",
            "Faulty Countermeasure",
            "Spontaneous Appendages",
            "Convergence of Fates",
            "Gorshalach's Legacy",
            "Terrorbound Nexus",
            "Astral Alchemist Stone",
            "Mark of Dargrul",
            "Tiny Oozeling in a Jar",
            "Draught of Souls",
            "Toe Knee's Promise",
            "Spiked Counterweight",
            "Windscar Whetstone",
            "Ravaged Seed Pod",
            "Giant Ornamental Pearl",
            "Ley Spark",
            "Umbral Moonglaives"
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
                    text: "mean: 179813",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 179813.28333333333,
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