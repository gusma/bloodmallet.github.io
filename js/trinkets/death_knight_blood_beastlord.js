Highcharts.chart('death_knight_blood_beastlord', 
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
                42642,
                28630,
                246287,
                241610,
                231089,
                0,
                31525,
                27955,
                0,
                31558,
                0,
                0,
                0,
                179361,
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
                30995,
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
                19702,
                12671,
                0,
                0,
                0,
                18397,
                15763,
                15072,
                11927,
                12975,
                14340,
                14407,
                16177,
                0,
                12549,
                14180,
                14782,
                16322,
                8966,
                10755,
                9975,
                12150,
                5951,
                14466,
                10018,
                14477,
                14758,
                11432,
                14210,
                11572,
                8567,
                16694,
                12930,
                10289,
                9362,
                12632,
                11831,
                10906,
                10925,
                14196,
                7954,
                8314,
                6275,
                7048,
                10134,
                6307,
                5202,
                0,
                6419,
                8928,
                8529,
                7634,
                3212,
                921,
                5791,
                5712,
                6414
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                216062,
                236065,
                0,
                0,
                0,
                17895,
                13483,
                12962,
                13245,
                14052,
                12931,
                12844,
                10668,
                0,
                16308,
                13314,
                12070,
                9157,
                16459,
                16537,
                12260,
                12771,
                9329,
                8473,
                12992,
                15352,
                12929,
                13155,
                16787,
                11789,
                12524,
                11109,
                12098,
                12741,
                10498,
                7895,
                9413,
                9474,
                11763,
                9368,
                11419,
                11116,
                8226,
                5694,
                8001,
                10183,
                5903,
                0,
                7616,
                5286,
                7325,
                3573,
                4818,
                9656,
                4783,
                6264,
                3603
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                0,
                0,
                0,
                0,
                0,
                9781,
                8365,
                10990,
                13350,
                10388,
                15394,
                10962,
                12140,
                0,
                9100,
                12443,
                11427,
                10188,
                7132,
                9057,
                12499,
                11020,
                5580,
                14026,
                9448,
                10249,
                13738,
                10347,
                9677,
                12228,
                9130,
                9864,
                11319,
                13215,
                6206,
                8887,
                8144,
                12762,
                8681,
                10330,
                6186,
                7499,
                1411,
                9079,
                4325,
                7346,
                8073,
                0,
                3423,
                4711,
                5639,
                6876,
                5878,
                1807,
                4712,
                1127,
                5170
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                0,
                0,
                0,
                0,
                0,
                12580,
                10752,
                11334,
                10410,
                12191,
                8519,
                11610,
                12467,
                0,
                6565,
                10111,
                8614,
                11463,
                11993,
                8512,
                9768,
                11671,
                5631,
                10526,
                8143,
                13713,
                9288,
                11718,
                14911,
                4672,
                10737,
                13638,
                4485,
                9391,
                8338,
                7533,
                6857,
                5310,
                11740,
                6908,
                4332,
                7020,
                6876,
                5940,
                6301,
                3645,
                5537,
                0,
                8577,
                4775,
                3483,
                5252,
                1889,
                4500,
                1885,
                6635,
                3771
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                0,
                0,
                0,
                0,
                0,
                18519,
                116872,
                118173,
                6193,
                110847,
                13598,
                9237,
                10388,
                0,
                11852,
                13480,
                10074,
                9155,
                9747,
                10948,
                10375,
                9992,
                8225,
                8102,
                93902,
                10130,
                12646,
                6600,
                6179,
                12626,
                7850,
                9576,
                10251,
                8399,
                8400,
                7927,
                7533,
                12455,
                5227,
                11656,
                12820,
                6365,
                5335,
                5587,
                5268,
                7156,
                7428,
                0,
                4841,
                3548,
                7914,
                1697,
                7852,
                2305,
                4034,
                4406,
                6318
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
                11172,
                0,
                0,
                10391,
                0,
                6367,
                10283,
                6325,
                0,
                8042,
                7693,
                6700,
                8180,
                6893,
                9795,
                9452,
                4429,
                3782,
                7399,
                0,
                8714,
                7390,
                7675,
                11381,
                7060,
                7954,
                5036,
                7807,
                9187,
                8357,
                9903,
                5481,
                7085,
                8087,
                7168,
                4257,
                4537,
                6219,
                3258,
                7242,
                1965,
                2834,
                7149,
                3604,
                5070,
                2063,
                6508,
                1914,
                6031,
                3287,
                1026,
                3748
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
                7890,
                0,
                0,
                11090,
                0,
                9864,
                8899,
                10956,
                0,
                10872,
                9017,
                5978,
                9326,
                9096,
                6298,
                4616,
                11097,
                5678,
                7992,
                0,
                6702,
                6141,
                6149,
                5919,
                4682,
                5750,
                6652,
                8801,
                6523,
                6275,
                992,
                6441,
                7357,
                4091,
                4652,
                80893,
                6907,
                4850,
                80640,
                2401,
                6519,
                6180,
                7987,
                3862,
                2081,
                4550,
                2731,
                3666,
                3035,
                5588,
                53654,
                48432
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
                129955,
                0,
                0,
                115679,
                0,
                104118,
                106007,
                103887,
                0,
                99468,
                91989,
                102157,
                97989,
                100981,
                98927,
                100473,
                95927,
                124101,
                96500,
                0,
                86138,
                88245,
                98031,
                79918,
                92321,
                92445,
                81420,
                78240,
                75621,
                85187,
                85009,
                81444,
                67325,
                70437,
                66499,
                0,
                75420,
                82909,
                0,
                72136,
                68757,
                63895,
                87412,
                63491,
                62451,
                46000,
                47581,
                51935,
                52280,
                50015,
                0,
                0
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-28 23:50 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/195d4ef51b95f5a68cbdb8507a51b6259e3a0bab\" target=\"blank\">195d4ef</a>"
    },
    title: {
        text: "Death_Knight - Blood - Beastlord"
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
            "Archimonde's Hatred Reborn",
            "Aman'Thul's Vision +20",
            "Aman'Thul's Vision +15",
            "Aman'Thul's Vision +10",
            "Terrorbound Nexus",
            "Khaz'goroths Courage +15",
            "Khaz'goroths Courage +20",
            "Eye of Command",
            "Khaz'goroths Courage +10",
            "Chaos Talisman",
            "Cradle of Anguish",
            "Mark of Dargrul",
            "Aman'Thul's Vision",
            "Memento of Angerboda",
            "Fel-Oiled Infernal Machine",
            "Stat Stick (Crit)",
            "Tiny Oozeling in a Jar",
            "Stat Stick (Mastery)",
            "Stat Stick (Haste)",
            "Ettin Fingernail",
            "Chrono Shard",
            "Unstable Arcanocrystal",
            "Stat Stick (Versatility)",
            "Khaz'goroths Courage",
            "Specter of Betrayal",
            "Claw of the Crystalline Scorpid",
            "Nightmare Egg Shell",
            "Bloodstained Handkerchief",
            "PVP Badge of Victory",
            "Gift of Radiance",
            "Ursoc's Rending Paw",
            "Entwined Elemental Foci",
            "Void Stalker's Contract",
            "Impact Tremor",
            "PVP Insignia of Victory",
            "Horn of Valor",
            "Vial of Ceaseless Toxins",
            "Might of Krosus",
            "Convergence of Fates",
            "Gorshalach's Legacy",
            "Toe Knee's Promise",
            "Nature's Call",
            "Forgefiend's Fabricator",
            "Engine of Eradication",
            "Spontaneous Appendages",
            "Umbral Moonglaives",
            "Astral Alchemist Stone",
            "Faulty Countermeasure",
            "Windscar Whetstone",
            "Draught of Souls",
            "Giant Ornamental Pearl",
            "Ravaged Seed Pod",
            "Spiked Counterweight",
            "Infernal Cinders",
            "Seeping Scourgewing",
            "Shadow-Singed Fang"
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
                    text: "mean: 154443",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 154443.08771929826,
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