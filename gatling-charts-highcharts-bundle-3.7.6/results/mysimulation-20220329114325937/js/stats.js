var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50",
        "ok": "31",
        "ko": "19"
    },
    "minResponseTime": {
        "total": "9415",
        "ok": "12698",
        "ko": "9415"
    },
    "maxResponseTime": {
        "total": "12901",
        "ok": "12901",
        "ko": "12671"
    },
    "meanResponseTime": {
        "total": "11882",
        "ok": "12782",
        "ko": "10412"
    },
    "standardDeviation": {
        "total": "1408",
        "ok": "63",
        "ko": "1316"
    },
    "percentiles1": {
        "total": "12706",
        "ok": "12805",
        "ko": "9699"
    },
    "percentiles2": {
        "total": "12806",
        "ok": "12815",
        "ko": "11247"
    },
    "percentiles3": {
        "total": "12876",
        "ok": "12878",
        "ko": "12613"
    },
    "percentiles4": {
        "total": "12890",
        "ok": "12894",
        "ko": "12659"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 31,
    "percentage": 62
},
    "group4": {
    "name": "failed",
    "count": 19,
    "percentage": 38
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.571",
        "ok": "2.214",
        "ko": "1.357"
    }
},
contents: {
"req_app-request-9e7b2": {
        type: "REQUEST",
        name: "app_request",
path: "app_request",
pathFormatted: "req_app-request-9e7b2",
stats: {
    "name": "app_request",
    "numberOfRequests": {
        "total": "50",
        "ok": "31",
        "ko": "19"
    },
    "minResponseTime": {
        "total": "9415",
        "ok": "12698",
        "ko": "9415"
    },
    "maxResponseTime": {
        "total": "12901",
        "ok": "12901",
        "ko": "12671"
    },
    "meanResponseTime": {
        "total": "11882",
        "ok": "12782",
        "ko": "10412"
    },
    "standardDeviation": {
        "total": "1408",
        "ok": "63",
        "ko": "1316"
    },
    "percentiles1": {
        "total": "12706",
        "ok": "12805",
        "ko": "9699"
    },
    "percentiles2": {
        "total": "12806",
        "ok": "12815",
        "ko": "11247"
    },
    "percentiles3": {
        "total": "12876",
        "ok": "12878",
        "ko": "12613"
    },
    "percentiles4": {
        "total": "12890",
        "ok": "12894",
        "ko": "12659"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 31,
    "percentage": 62
},
    "group4": {
    "name": "failed",
    "count": 19,
    "percentage": 38
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.571",
        "ok": "2.214",
        "ko": "1.357"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
