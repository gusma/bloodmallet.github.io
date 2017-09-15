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
                263672,
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
                20007,
                19110,
                25500,
                17490,
                4116,
                10820,
                16253,
                11354,
                16825,
                15751,
                9504,
                18973,
                13448,
                26822,
                9878,
                7392,
                10981,
                11814,
                16085,
                16817,
                7691,
                12119,
                18134,
                14945,
                19657,
                0,
                11366,
                16085,
                13204,
                5405,
                16255,
                13310,
                0,
                9701,
                0,
                10636,
                5217,
                9695,
                1968,
                5601,
                8970,
                3507,
                788,
                9047,
                1970,
                3532,
                0,
                0,
                10316
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                19389,
                20256,
                17637,
                11024,
                23585,
                17269,
                14143,
                15052,
                9843,
                7178,
                18553,
                5370,
                17370,
                11907,
                9373,
                19379,
                21180,
                2664,
                13198,
                15563,
                14324,
                20145,
                14428,
                14378,
                4118,
                9603,
                15013,
                11149,
                16573,
                14860,
                6502,
                9014,
                0,
                18657,
                0,
                7998,
                3247,
                651,
                6110,
                3720,
                2682,
                3189,
                4377,
                1576,
                3958,
                7409,
                3787,
                200,
                13312
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                21598,
                4232,
                8375,
                16332,
                25160,
                12671,
                11056,
                13293,
                16755,
                13583,
                9125,
                17387,
                11885,
                11784,
                11187,
                12027,
                14083,
                10729,
                6352,
                8925,
                9662,
                4274,
                5656,
                6249,
                11310,
                12519,
                7697,
                17711,
                9888,
                7701,
                13829,
                9760,
                0,
                0,
                0,
                8795,
                11344,
                8394,
                12252,
                8482,
                3933,
                3707,
                3029,
                2159,
                1231,
                1770,
                3764,
                8691,
                2771
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                12785,
                18507,
                17632,
                10999,
                6637,
                8591,
                8397,
                10010,
                12903,
                9795,
                12368,
                5335,
                14099,
                7157,
                10217,
                7484,
                4190,
                5554,
                3234,
                5980,
                18209,
                11932,
                17865,
                22022,
                8938,
                11296,
                12958,
                7108,
                10039,
                4170,
                8024,
                10817,
                0,
                4653,
                0,
                1689,
                11183,
                2340,
                0,
                0,
                3851,
                3991,
                2932,
                1642,
                7132,
                1137,
                0,
                0,
                9429
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                16787,
                3284,
                12327,
                17584,
                149861,
                8498,
                14035,
                14046,
                11883,
                13103,
                9960,
                9756,
                9677,
                13545,
                14290,
                12161,
                5287,
                4065,
                16137,
                4966,
                10999,
                13330,
                162,
                1868,
                4547,
                8396,
                8481,
                12797,
                5607,
                6618,
                9049,
                14453,
                13452,
                12897,
                5437,
                4735,
                0,
                4457,
                2249,
                1497,
                10382,
                6750,
                5037,
                1352,
                0,
                534,
                1306,
                1644,
                942
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                167905,
                16059,
                13539,
                137456,
                0,
                10773,
                12711,
                12144,
                115797,
                8566,
                9904,
                13693,
                10006,
                106823,
                11749,
                2533,
                16113,
                1124,
                12316,
                17406,
                8951,
                1090,
                12257,
                9953,
                13644,
                119366,
                6499,
                5924,
                12612,
                10799,
                6799,
                2169,
                9258,
                6699,
                8076,
                4508,
                74042,
                4849,
                18205,
                8159,
                1084,
                189,
                4896,
                0,
                11033,
                805,
                2285,
                8082,
                1585
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                132821,
                116124,
                0,
                0,
                132426,
                113922,
                110400,
                0,
                115296,
                113751,
                112307,
                102865,
                0,
                110988,
                115691,
                101644,
                136475,
                101489,
                98237,
                97965,
                101275,
                94868,
                93028,
                99786,
                0,
                95349,
                85009,
                86505,
                100000,
                85984,
                85400,
                115127,
                83996,
                116978,
                72474,
                0,
                73320,
                61791,
                66064,
                59889,
                59160,
                49047,
                53351,
                30402,
                34018,
                46102,
                32380,
                2769
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-09-15 09:43 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/d25a11555858b812d14a15a9e7ef15baa419cd38\" target=\"blank\">d25a115</a>"
    },
    title: {
        text: "Rogue - Subtlety DfA- Beastlord"
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
            "Umbral Moonglaives",
            "Eye of Command",
            "Arcanogolem Digit",
            "Engine of Eradication",
            "Specter of Betrayal",
            "Stat Stick (Mastery)",
            "Stat Stick (Versatility)",
            "Entwined Elemental Foci",
            "Cradle of Anguish",
            "Stat Stick (Crit)",
            "Chaos Talisman",
            "Memento of Angerboda",
            "Nightblooming Frond",
            "Vial of Ceaseless Toxins",
            "Thrice-Accursed Compass",
            "Gift of Radiance",
            "Bloodthirsty Instinct",
            "Unstable Arcanocrystal",
            "Convergence of Fates",
            "Stat Stick (Haste)",
            "Void Stalker's Contract",
            "PVP Badge of Conquest",
            "Chrono Shard",
            "Six-Feather Fan",
            "PVP Insignia of Conquest",
            "Astral Alchemist Stone",
            "Nightmare Egg Shell",
            "Bloodstained Handkerchief",
            "Tirathon's Betrayal",
            "Terrorbound Nexus",
            "Splinters of Agronax",
            "Tempered Egg of Serpentrix",
            "Darkmoon Deck: Dominion",
            "Horn of Valor",
            "Infernal Alchemist Stone",
            "Mark of Dargrul",
            "Infernal Cinders",
            "Nature's Call",
            "The Devilsaur's Bite",
            "Spontaneous Appendages",
            "Tiny Oozeling in a Jar",
            "Windscar Whetstone",
            "Faulty Countermeasure",
            "Giant Ornamental Pearl",
            "Toe Knee's Promise",
            "Ravaged Seed Pod",
            "Ley Spark",
            "Spiked Counterweight",
            "Draught of Souls"
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
                    text: "mean at 148507",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 148507.76,
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