Highcharts.chart('druid_feral_patchwerk', 
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
                48429,
                46432,
                47564,
                42900,
                232702,
                230199,
                35583,
                0,
                218153,
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
                165088,
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
                20260,
                21693,
                20405,
                17664,
                0,
                0,
                14741,
                21630,
                0,
                14210,
                11115,
                15574,
                14641,
                15609,
                15887,
                13275,
                15134,
                13279,
                16814,
                13634,
                13447,
                14490,
                14552,
                11037,
                13800,
                11753,
                12758,
                0,
                12092,
                15092,
                11523,
                11781,
                11240,
                12560,
                13121,
                12314,
                11940,
                12528,
                4517,
                12763,
                11243,
                10264,
                10934,
                0,
                8894,
                11037,
                8612,
                6675,
                6446,
                6699,
                1848,
                3334,
                4450,
                4700,
                5011,
                1773,
                5273,
                2801,
                2671,
                708
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                20478,
                18779,
                18020,
                15693,
                0,
                0,
                177171,
                18833,
                0,
                15508,
                12674,
                15656,
                16107,
                12287,
                10954,
                12414,
                11362,
                13503,
                14703,
                14482,
                14890,
                12822,
                12449,
                14119,
                11142,
                15132,
                14371,
                0,
                10826,
                14075,
                12975,
                13471,
                11531,
                11001,
                13673,
                9942,
                9977,
                12937,
                4060,
                11855,
                9608,
                9610,
                9965,
                0,
                5990,
                13065,
                5879,
                6080,
                6060,
                5776,
                4575,
                6043,
                2250,
                3805,
                1691,
                4107,
                3305,
                3599,
                2899,
                581
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                17647,
                18941,
                18306,
                14670,
                0,
                0,
                0,
                15577,
                0,
                10666,
                12183,
                15138,
                14463,
                13413,
                13685,
                11973,
                10202,
                12225,
                13184,
                10504,
                10965,
                11689,
                11383,
                12129,
                13027,
                11031,
                13537,
                0,
                12387,
                11214,
                8827,
                12788,
                12332,
                11179,
                10358,
                11904,
                9090,
                10494,
                6894,
                9251,
                7481,
                6971,
                6464,
                0,
                6740,
                11304,
                7816,
                7228,
                5380,
                5914,
                3137,
                4332,
                3661,
                4304,
                2002,
                3846,
                4690,
                1834,
                4856,
                918
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                16342,
                14447,
                14580,
                14105,
                0,
                0,
                0,
                12841,
                0,
                13407,
                7749,
                10625,
                11436,
                12392,
                10539,
                10846,
                11654,
                10646,
                12345,
                9608,
                11275,
                9780,
                9934,
                9224,
                10955,
                9805,
                10055,
                0,
                9498,
                10614,
                10251,
                11061,
                9186,
                9816,
                11007,
                8457,
                8449,
                9430,
                5962,
                11038,
                8051,
                10104,
                8505,
                0,
                6892,
                8732,
                4443,
                5853,
                4592,
                5456,
                4531,
                4680,
                3628,
                4037,
                4487,
                2719,
                3277,
                4416,
                1485,
                816
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                165298,
                162571,
                156606,
                139194,
                0,
                0,
                0,
                14519,
                0,
                9660,
                9402,
                11515,
                13100,
                9335,
                10022,
                9804,
                10632,
                9079,
                9868,
                9600,
                9739,
                8237,
                10217,
                11061,
                7612,
                9313,
                10247,
                0,
                7970,
                9512,
                8669,
                10894,
                8150,
                7880,
                10330,
                8387,
                9064,
                11506,
                3621,
                8146,
                8199,
                6159,
                6433,
                0,
                6072,
                11510,
                5561,
                7075,
                5513,
                2101,
                1868,
                2052,
                3145,
                1579,
                3574,
                4034,
                3751,
                2578,
                3683,
                290
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
                13310,
                0,
                8903,
                8768,
                11369,
                9034,
                7837,
                9894,
                7568,
                7664,
                8524,
                12739,
                8913,
                9568,
                9628,
                7930,
                9258,
                7545,
                8523,
                10233,
                0,
                9218,
                9560,
                9079,
                7216,
                7742,
                7706,
                9748,
                7089,
                6596,
                8188,
                4880,
                7244,
                8814,
                7781,
                7564,
                7393,
                4024,
                7434,
                5361,
                663,
                3037,
                5350,
                3368,
                3909,
                2627,
                2583,
                2889,
                3066,
                1539,
                2642,
                1206,
                2665
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
                11610,
                0,
                9293,
                6939,
                10368,
                10750,
                10160,
                6138,
                9666,
                115921,
                8191,
                8038,
                9030,
                7836,
                8225,
                9838,
                6306,
                8994,
                8281,
                9933,
                0,
                8015,
                8596,
                7412,
                9885,
                8791,
                10597,
                7006,
                98351,
                7460,
                7230,
                5589,
                7840,
                4229,
                5638,
                5324,
                6572,
                75326,
                7611,
                69302,
                6582,
                5258,
                1842,
                1518,
                3597,
                3684,
                3014,
                1875,
                2419,
                2670,
                1440,
                3481,
                1280
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
                113167,
                0,
                123842,
                120997,
                99405,
                98363,
                102485,
                106325,
                107104,
                0,
                106357,
                93298,
                105141,
                101915,
                103520,
                100437,
                102735,
                101182,
                100030,
                85666,
                0,
                93841,
                84493,
                93161,
                82382,
                89522,
                87161,
                82141,
                0,
                90398,
                78492,
                115100,
                78585,
                86461,
                86173,
                84390,
                100658,
                0,
                40787,
                0,
                64241,
                61940,
                59447,
                61928,
                54314,
                51615,
                45715,
                48057,
                47547,
                44916,
                44401,
                37639,
                39876
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-28 23:50 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/195d4ef51b95f5a68cbdb8507a51b6259e3a0bab\" target=\"blank\">195d4ef</a>"
    },
    title: {
        text: "Druid - Feral - Patchwerk"
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
            "Golganneth's Vitality +10",
            "Golganneth's Vitality",
            "Aman'Thul's Vision +20",
            "Aman'Thul's Vision +15",
            "Kil'jaeden's Burning Wish",
            "Specter of Betrayal",
            "Aman'Thul's Vision +10",
            "Eye of Command",
            "Convergence of Fates",
            "Vial of Ceaseless Toxins",
            "Nightblooming Frond",
            "Chaos Talisman",
            "Engine of Eradication",
            "Stat Stick (Versatility)",
            "Seeping Scourgewing",
            "Stat Stick (Crit)",
            "Six-Feather Fan",
            "PVP Badge of Conquest",
            "Cradle of Anguish",
            "Stat Stick (Mastery)",
            "Entwined Elemental Foci",
            "Memento of Angerboda",
            "Thrice-Accursed Compass",
            "Bloodthirsty Instinct",
            "Tirathon's Betrayal",
            "Aman'Thul's Vision",
            "Stat Stick (Haste)",
            "Arcanogolem Digit",
            "Gift of Radiance",
            "Void Stalker's Contract",
            "Chrono Shard",
            "Nightmare Egg Shell",
            "Bloodstained Handkerchief",
            "Shadow-Singed Fang",
            "PVP Insignia of Conquest",
            "Tempered Egg of Serpentrix",
            "Unstable Arcanocrystal",
            "Splinters of Agronax",
            "Infernal Cinders",
            "Umbral Moonglaives",
            "Horn of Valor",
            "Astral Alchemist Stone",
            "Forgefiend's Fabricator",
            "Draught of Souls",
            "Gorshalach's Legacy",
            "The Devilsaur's Bite",
            "Faulty Countermeasure",
            "Spontaneous Appendages",
            "Nature's Call",
            "Terrorbound Nexus",
            "Mark of Dargrul",
            "Toe Knee's Promise",
            "Giant Ornamental Pearl",
            "Tiny Oozeling in a Jar",
            "Spiked Counterweight",
            "Windscar Whetstone",
            "Ravaged Seed Pod",
            "Ley Spark"
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
                    text: "mean: 156598",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 156598.0,
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