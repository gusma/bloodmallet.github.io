Highcharts.chart('warlock_destruction_patchwerk', 
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
                41656,
                279340,
                277051,
                39743,
                265224,
                36148,
                224276,
                30567,
                26893,
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
                0,
                0
            ],
            name: "1000"
        },
        {
            color: "#cab2d6",
            data: [
                18816,
                0,
                0,
                17838,
                0,
                17387,
                0,
                11351,
                17059,
                15424,
                9256,
                13348,
                12648,
                11612,
                10986,
                12056,
                13283,
                10523,
                11426,
                12296,
                14808,
                11636,
                12243,
                14552,
                13123,
                11015,
                11418,
                14496,
                8915,
                9715,
                10014,
                7464,
                9006,
                8496,
                10839,
                8354,
                9077,
                12202,
                11770,
                10375,
                10757,
                7800,
                7730,
                6627,
                8047,
                0,
                6582,
                5999,
                7018,
                7882,
                6227,
                6166,
                7779,
                5678,
                5846,
                4652,
                5509,
                5498,
                4567,
                3344,
                1172
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                16548,
                0,
                0,
                15821,
                0,
                16905,
                0,
                174366,
                10274,
                12735,
                4826,
                11487,
                9642,
                10812,
                10827,
                10767,
                8611,
                11878,
                9875,
                9998,
                8399,
                10670,
                10448,
                11153,
                11963,
                13423,
                10041,
                11003,
                12810,
                11462,
                6811,
                10261,
                7820,
                7383,
                12120,
                6618,
                13124,
                9331,
                9265,
                10539,
                10187,
                6647,
                7170,
                6269,
                7398,
                0,
                4288,
                8116,
                5193,
                6121,
                5478,
                2587,
                3943,
                3281,
                5182,
                5158,
                3184,
                4373,
                3170,
                835,
                3233
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                14422,
                0,
                0,
                15153,
                0,
                12547,
                0,
                0,
                10936,
                11002,
                7794,
                8310,
                11304,
                11557,
                12411,
                11349,
                10396,
                10340,
                9421,
                10668,
                10967,
                8994,
                10816,
                12696,
                10822,
                8847,
                8905,
                13463,
                8626,
                7818,
                9894,
                6904,
                8719,
                6945,
                9089,
                7897,
                8171,
                9279,
                9907,
                10374,
                11089,
                6483,
                4375,
                5152,
                4550,
                0,
                7606,
                2844,
                4716,
                5591,
                6350,
                7510,
                5502,
                5143,
                5368,
                4990,
                6169,
                1819,
                2033,
                2128,
                2007
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                13686,
                0,
                0,
                15000,
                0,
                14003,
                0,
                0,
                10440,
                10540,
                6020,
                11594,
                7384,
                7503,
                6765,
                9482,
                11630,
                9191,
                8838,
                10421,
                9379,
                9511,
                8228,
                8190,
                8910,
                7897,
                10141,
                7819,
                7027,
                8161,
                7067,
                8499,
                7514,
                10265,
                8776,
                10304,
                7666,
                9129,
                8509,
                7914,
                5985,
                5653,
                5931,
                7385,
                5462,
                0,
                5424,
                6439,
                6631,
                2543,
                4272,
                3454,
                2399,
                4741,
                3304,
                791,
                765,
                5677,
                5560,
                3624,
                2430
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                174358,
                0,
                0,
                169522,
                0,
                163933,
                0,
                0,
                133896,
                10233,
                6375,
                8850,
                9940,
                7794,
                7945,
                7996,
                7950,
                7754,
                8357,
                8465,
                7102,
                8174,
                8027,
                9798,
                8703,
                9000,
                7050,
                12240,
                9145,
                7541,
                6195,
                8461,
                6258,
                7362,
                8365,
                3121,
                8364,
                6549,
                7499,
                5421,
                8122,
                7024,
                6006,
                3746,
                6563,
                0,
                5247,
                5425,
                2883,
                7086,
                4874,
                4924,
                4748,
                4750,
                3287,
                3565,
                3798,
                2629,
                537,
                2842,
                1704
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
                11380,
                7442,
                7327,
                9512,
                7854,
                8447,
                5633,
                6976,
                8829,
                8592,
                6405,
                7873,
                9521,
                9513,
                7847,
                9888,
                6604,
                7831,
                8695,
                6510,
                5276,
                7563,
                8285,
                8077,
                5560,
                7235,
                5696,
                6825,
                6309,
                5863,
                6942,
                5624,
                4025,
                6217,
                7044,
                2867,
                5490,
                3917,
                6540,
                7189,
                4566,
                2711,
                3097,
                3507,
                3999,
                3979,
                7058,
                4556,
                3702,
                4398,
                2905,
                1653
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
                137502,
                6184,
                7175,
                4955,
                8762,
                7694,
                7779,
                7645,
                7483,
                5788,
                8236,
                6767,
                5450,
                5404,
                8380,
                5153,
                7938,
                7556,
                87327,
                100448,
                6940,
                6611,
                2887,
                4299,
                90714,
                5683,
                5025,
                7817,
                5076,
                7763,
                6215,
                5387,
                4332,
                3584,
                80546,
                6114,
                9754,
                3716,
                2416,
                1944,
                4026,
                3195,
                3855,
                4449,
                2120,
                4717,
                731,
                4022,
                2597,
                3386,
                0,
                1944
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
                0,
                157748,
                105544,
                102660,
                102056,
                102566,
                102473,
                100813,
                100579,
                103838,
                99489,
                99175,
                100474,
                99702,
                90982,
                94877,
                97591,
                94926,
                0,
                0,
                93819,
                93048,
                91655,
                89278,
                0,
                67756,
                81435,
                67051,
                67041,
                64139,
                64574,
                64778,
                76804,
                76017,
                0,
                72903,
                97760,
                73083,
                71763,
                70726,
                67534,
                65597,
                63788,
                62352,
                64777,
                60994,
                59624,
                58089,
                58780,
                54620,
                54136,
                43217
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-28 23:50 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/195d4ef51b95f5a68cbdb8507a51b6259e3a0bab\" target=\"blank\">195d4ef</a>"
    },
    title: {
        text: "Warlock - Destruction - Patchwerk"
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
            "Norgannon's Prowess +20",
            "Aman'Thul's Vision +20",
            "Aman'Thul's Vision +15",
            "Norgannon's Prowess +15",
            "Aman'Thul's Vision +10",
            "Norgannon's Prowess +10",
            "Aman'Thul's Vision",
            "Kil'jaeden's Burning Wish",
            "Norgannon's Prowess",
            "Acrid Catalyst Injector",
            "Unstable Arcanocrystal",
            "Tarnished Sentinel Medallion",
            "PVP Badge of Dominance",
            "Dreadstone of Endless Shadows",
            "Erratic Metronome",
            "Padawsen's Unlucky Charm",
            "Stat Stick (Haste)",
            "Stat Stick (Mastery)",
            "Charm of the Rising Tide",
            "Stat Stick (Versatility)",
            "Eyasu's Mulligan",
            "Stormsinger Fulmination Charge",
            "Stat Stick (Crit)",
            "Tome of Unraveling Sanity",
            "Whispers in the Dark",
            "Chrono Shard",
            "Infernal Writ",
            "Sheath of Asara",
            "Vitality Resonator",
            "Horn of Valor",
            "PVP Insignia of Dominance",
            "Terror From Below",
            "Obelisk of the Void",
            "Prototype Personnel Decimator",
            "Star Gate",
            "Moonlit Prism",
            "Reality Breacher",
            "Deteriorated Construct Core",
            "Portable Manacracker",
            "Twisting Wind",
            "Bough of Corruption",
            "Spectral Thurible",
            "Naraxas' Spiked Tongue",
            "Terminus Signaling Beacon",
            "Fury of the Burning Sky",
            "Astral Alchemist Stone",
            "Oakheart's Gnarled Root",
            "Devilsaur Shock-Baton",
            "Swarming Plaguehive",
            "Icon of Rot",
            "Aran's Relaxing Ruby",
            "Pharameres Forbidden Grimoire",
            "Mrrgria's Favor",
            "Toe Knee's Promise",
            "Wriggling Sinew",
            "Caged Horror",
            "Corrupted Starlight",
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
                color: "#0973DA",
                label: {
                    align: "left",
                    rotation: 0,
                    style: {
                        color: "#0973DA"
                    },
                    text: "mean: 150960",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 150960.90163934426,
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