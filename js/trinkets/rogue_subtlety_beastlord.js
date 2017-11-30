Highcharts.chart('rogue_subtlety_beastlord',
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
                97341,
                81463,
                80837,
                355912,
                355626,
                50526,
                338788,
                0,
                55788,
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
                250498,
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
                42124,
                45986,
                48648,
                0,
                0,
                22473,
                0,
                25150,
                24816,
                25770,
                15669,
                25515,
                21725,
                24112,
                26423,
                31721,
                32896,
                20989,
                26324,
                25827,
                8921,
                24905,
                22171,
                18876,
                30305,
                22910,
                30434,
                21397,
                18617,
                21523,
                0,
                21360,
                16658,
                24085,
                25599,
                23209,
                14058,
                16700,
                12398,
                25348,
                23714,
                326,
                15520,
                18676,
                5997,
                10311,
                0,
                16579,
                7745,
                11899,
                15073,
                15476,
                5502,
                11068,
                681,
                5155,
                10356,
                12604,
                8275,
                1981
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                41321,
                36554,
                24201,
                0,
                0,
                276274,
                0,
                29903,
                22676,
                28404,
                22434,
                23122,
                33174,
                21712,
                14729,
                20508,
                15545,
                26992,
                19687,
                16938,
                31667,
                11892,
                16773,
                23554,
                11065,
                21008,
                19785,
                18185,
                21643,
                20053,
                0,
                16085,
                30243,
                18046,
                11669,
                16993,
                12464,
                22362,
                28175,
                16489,
                11359,
                7459,
                19986,
                13247,
                13641,
                11530,
                0,
                8525,
                13406,
                4276,
                2438,
                4085,
                9852,
                6565,
                10886,
                12363,
                3522,
                13511,
                1635,
                0
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                31534,
                38663,
                40813,
                0,
                0,
                0,
                0,
                12757,
                22524,
                21943,
                23134,
                14269,
                22202,
                17114,
                19206,
                23304,
                15007,
                24527,
                14331,
                20330,
                18339,
                22276,
                20091,
                17780,
                17234,
                12335,
                20243,
                20302,
                21282,
                15664,
                0,
                15140,
                9008,
                8630,
                12607,
                24436,
                13721,
                11379,
                15978,
                19832,
                20279,
                8529,
                7253,
                5274,
                6396,
                11884,
                0,
                14373,
                12383,
                9298,
                8122,
                9916,
                1095,
                1160,
                1250,
                0,
                3320,
                8592,
                4601,
                4507
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                37670,
                29629,
                22125,
                0,
                0,
                0,
                0,
                21213,
                17532,
                26460,
                14951,
                19629,
                19994,
                26430,
                24852,
                20980,
                19257,
                8986,
                25437,
                20037,
                14426,
                20801,
                14286,
                27940,
                15065,
                12514,
                23129,
                12590,
                15562,
                19220,
                0,
                11233,
                15669,
                25993,
                11070,
                10043,
                22832,
                15149,
                10863,
                8089,
                14473,
                14143,
                22969,
                10655,
                20880,
                4659,
                0,
                0,
                0,
                4347,
                11294,
                0,
                12281,
                3577,
                6634,
                10011,
                7808,
                9335,
                6173,
                744
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                330023,
                314385,
                288246,
                0,
                0,
                0,
                0,
                23045,
                189085,
                17454,
                23479,
                18809,
                17594,
                11932,
                13234,
                12760,
                18249,
                28151,
                16262,
                20333,
                10573,
                8018,
                21840,
                0,
                15073,
                21066,
                8708,
                20029,
                18377,
                13044,
                0,
                7400,
                10579,
                6701,
                13827,
                15431,
                8946,
                10216,
                8037,
                15106,
                20284,
                0,
                9903,
                2298,
                0,
                11779,
                0,
                12463,
                5029,
                2214,
                2778,
                8879,
                4672,
                11639,
                9096,
                3004,
                9131,
                4889,
                0,
                0
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
                10771,
                0,
                12029,
                17626,
                14791,
                26175,
                13690,
                14046,
                25946,
                9084,
                7940,
                11161,
                16958,
                16163,
                20519,
                7372,
                21308,
                11820,
                9021,
                14356,
                17664,
                10543,
                3290,
                0,
                20753,
                17732,
                12918,
                12086,
                7555,
                10187,
                12081,
                13848,
                13245,
                15520,
                14172,
                11291,
                13419,
                8942,
                6245,
                16008,
                7470,
                11776,
                13665,
                5866,
                2212,
                270,
                1973,
                0,
                0,
                0,
                6708,
                3484,
                8269
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
                17661,
                0,
                24636,
                211922,
                14702,
                14493,
                24605,
                14716,
                16292,
                9457,
                170215,
                16051,
                21008,
                7132,
                12048,
                7682,
                17797,
                13384,
                10048,
                18412,
                6464,
                18083,
                32167,
                0,
                153316,
                8573,
                13908,
                9274,
                21216,
                2646,
                12069,
                12526,
                13320,
                4685,
                6052,
                11329,
                4771,
                126064,
                6852,
                5717,
                11018,
                8754,
                5048,
                4441,
                7930,
                3965,
                5499,
                7973,
                10761,
                10857,
                8768,
                0,
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
                197239,
                0,
                175598,
                0,
                193433,
                167207,
                180014,
                181710,
                155213,
                171635,
                0,
                157732,
                143401,
                174276,
                158590,
                167057,
                148497,
                156237,
                159974,
                130966,
                147956,
                133448,
                130190,
                0,
                0,
                136771,
                133684,
                144581,
                119483,
                153035,
                135965,
                130937,
                121116,
                120227,
                174639,
                123470,
                121299,
                0,
                116103,
                156753,
                104017,
                99818,
                102706,
                99213,
                90110,
                90911,
                79161,
                76067,
                49613,
                45930,
                10957,
                49414,
                54274
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-29 21:58 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/195d4ef51b95f5a68cbdb8507a51b6259e3a0bab\" target=\"blank\">195d4ef</a>"
    },
    title: {
        text: "Rogue - Subtlety DfA - Beastlord"
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
            "Aman'Thul's Vision +15",
            "Aman'Thul's Vision +20",
            "Kil'jaeden's Burning Wish",
            "Aman'Thul's Vision +10",
            "Umbral Moonglaives",
            "Golganneth's Vitality",
            "Void Stalker's Contract",
            "Forgefiend's Fabricator",
            "Eye of Command",
            "Arcanogolem Digit",
            "Engine of Eradication",
            "Stat Stick (Mastery)",
            "Specter of Betrayal",
            "Stat Stick (Crit)",
            "Gorshalach's Legacy",
            "Entwined Elemental Foci",
            "Nightblooming Frond",
            "Stat Stick (Versatility)",
            "Thrice-Accursed Compass",
            "Memento of Angerboda",
            "Chaos Talisman",
            "Convergence of Fates",
            "Gift of Radiance",
            "Vial of Ceaseless Toxins",
            "Cradle of Anguish",
            "Six-Feather Fan",
            "Bloodthirsty Instinct",
            "Aman'Thul's Vision",
            "Shadow-Singed Fang",
            "PVP Badge of Conquest",
            "Stat Stick (Haste)",
            "PVP Insignia of Conquest",
            "Bloodstained Handkerchief",
            "Terrorbound Nexus",
            "Chrono Shard",
            "Nightmare Egg Shell",
            "Tempered Egg of Serpentrix",
            "Tirathon's Betrayal",
            "Unstable Arcanocrystal",
            "Splinters of Agronax",
            "Horn of Valor",
            "Seeping Scourgewing",
            "Mark of Dargrul",
            "Astral Alchemist Stone",
            "Infernal Cinders",
            "The Devilsaur's Bite",
            "Nature's Call",
            "Spontaneous Appendages",
            "Tiny Oozeling in a Jar",
            "Windscar Whetstone",
            "Giant Ornamental Pearl",
            "Faulty Countermeasure",
            "Toe Knee's Promise",
            "Ravaged Seed Pod",
            "Draught of Souls",
            "Spiked Counterweight",
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
                    text: "mean: 251727",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 251727.58333333334,
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