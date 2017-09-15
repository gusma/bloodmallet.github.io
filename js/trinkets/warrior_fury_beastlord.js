Highcharts.chart('warrior_fury_beastlord', 
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
                0,
                0,
                0,
                198476,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                15765,
                13831,
                19163,
                0,
                13742,
                1905,
                11115,
                12523,
                6702,
                6560,
                11481,
                12676,
                6537,
                10926,
                4847,
                7009,
                6194,
                1726,
                8522,
                7399,
                11302,
                13009,
                6733,
                8043,
                4097,
                14464,
                2768,
                8805,
                4114,
                3254,
                7933,
                6336,
                11770,
                11891,
                11696,
                0,
                10741,
                11266,
                11497,
                7766,
                0,
                4795,
                10042,
                0,
                3610,
                4885
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                19761,
                17555,
                14225,
                0,
                17978,
                8069,
                14292,
                14023,
                1858,
                3840,
                10849,
                4465,
                12223,
                8264,
                14670,
                10518,
                11517,
                15213,
                9230,
                3465,
                2721,
                7950,
                9378,
                13888,
                10755,
                3512,
                10112,
                9932,
                9458,
                4442,
                3442,
                6581,
                8645,
                21,
                5989,
                9784,
                4868,
                0,
                4886,
                3514,
                0,
                1288,
                11733,
                0,
                1836,
                1751
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                14362,
                12397,
                14330,
                0,
                10434,
                2768,
                8237,
                12175,
                7020,
                15091,
                8801,
                10205,
                5590,
                7180,
                3299,
                6847,
                5215,
                6473,
                2993,
                8265,
                9911,
                7706,
                3768,
                2015,
                3851,
                5085,
                9687,
                4609,
                4043,
                3554,
                6724,
                5323,
                11780,
                10103,
                5034,
                6173,
                5567,
                8156,
                5173,
                7836,
                0,
                9843,
                16741,
                0,
                4510,
                572
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                15864,
                12887,
                9148,
                0,
                15661,
                6864,
                19992,
                12228,
                8157,
                3542,
                9774,
                6894,
                4012,
                5412,
                7619,
                8480,
                7451,
                7466,
                13310,
                9696,
                4964,
                6643,
                9794,
                10892,
                6615,
                3375,
                0,
                6865,
                8312,
                5133,
                4927,
                5064,
                0,
                1211,
                7591,
                829,
                1983,
                2953,
                11297,
                3674,
                0,
                3256,
                4861,
                0,
                2384,
                7248
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                10619,
                13310,
                11982,
                0,
                10350,
                1218,
                6904,
                14074,
                3680,
                11604,
                92604,
                2450,
                10006,
                12219,
                5796,
                6638,
                3573,
                3732,
                3673,
                1332,
                4091,
                2403,
                4050,
                0,
                8362,
                7720,
                8205,
                10100,
                6733,
                4661,
                4640,
                5706,
                9907,
                3665,
                4416,
                9621,
                3075,
                6318,
                2071,
                6199,
                11149,
                4802,
                10622,
                4508,
                4058,
                1358
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                15628,
                138915,
                8192,
                0,
                11026,
                7698,
                8232,
                5300,
                6274,
                7938,
                0,
                8568,
                6485,
                3632,
                4320,
                81636,
                15583,
                3215,
                4010,
                7474,
                5403,
                9049,
                5923,
                4786,
                75458,
                5230,
                4626,
                5994,
                2845,
                1380,
                7312,
                6981,
                4159,
                70670,
                60615,
                68876,
                6258,
                3334,
                5927,
                4035,
                5651,
                4467,
                5282,
                1867,
                992,
                4650
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                136804,
                0,
                129547,
                0,
                110128,
                151557,
                109786,
                99225,
                107944,
                85975,
                0,
                80405,
                80709,
                76969,
                81233,
                0,
                70460,
                76508,
                71957,
                75593,
                73796,
                65360,
                71317,
                69755,
                0,
                68975,
                74669,
                59994,
                70561,
                79512,
                64572,
                62388,
                53801,
                0,
                0,
                0,
                60367,
                61724,
                51110,
                57018,
                71725,
                57847,
                14279,
                66070,
                54350,
                50100
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-09-14 22:09 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/d25a11555858b812d14a15a9e7ef15baa419cd38\" target=\"blank\">d25a115</a>"
    },
    title: {
        text: "Warrior - Fury - Beastlord"
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
            "Tiny Oozeling in a Jar",
            "Umbral Moonglaives",
            "Toe Knee's Promise",
            "Kil'jaeden's Burning Wish",
            "Void Stalker's Contract",
            "Convergence of Fates",
            "Terrorbound Nexus",
            "Claw of the Crystalline Scorpid",
            "Unstable Arcanocrystal",
            "Mark of Dargrul",
            "Specter of Betrayal",
            "Ravaged Seed Pod",
            "Eye of Command",
            "Windscar Whetstone",
            "Chaos Talisman",
            "Cradle of Anguish",
            "Fel-Oiled Infernal Machine",
            "Stat Stick (Haste)",
            "Entwined Elemental Foci",
            "Chrono Shard",
            "Memento of Angerboda",
            "Gift of Radiance",
            "Nightmare Egg Shell",
            "Stat Stick (Mastery)",
            "Engine of Eradication",
            "Stat Stick (Versatility)",
            "Ettin Fingernail",
            "Ursoc's Rending Paw",
            "Stat Stick (Crit)",
            "Nature's Call",
            "The Devilsaur's Bite",
            "PVP Badge of Victory",
            "Bloodstained Handkerchief",
            "Infernal Cinders",
            "Vial of Ceaseless Toxins",
            "Astral Alchemist Stone",
            "PVP Insignia of Victory",
            "Faulty Countermeasure",
            "Might of Krosus",
            "Horn of Valor",
            "Darkmoon Deck: Dominion",
            "Spontaneous Appendages",
            "Draught of Souls",
            "Infernal Alchemist Stone",
            "Spiked Counterweight",
            "Giant Ornamental Pearl"
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
                    text: "mean at 120617",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 120617.91304347826,
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