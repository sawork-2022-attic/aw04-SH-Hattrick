var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "11",
        "ko": "89"
    },
    "minResponseTime": {
        "total": "10092",
        "ok": "15011",
        "ko": "10092"
    },
    "maxResponseTime": {
        "total": "16092",
        "ok": "16092",
        "ko": "15734"
    },
    "meanResponseTime": {
        "total": "12423",
        "ok": "15730",
        "ko": "12014"
    },
    "standardDeviation": {
        "total": "1408",
        "ok": "281",
        "ko": "837"
    },
    "percentiles1": {
        "total": "12328",
        "ok": "15679",
        "ko": "12046"
    },
    "percentiles2": {
        "total": "12741",
        "ok": "15929",
        "ko": "12581"
    },
    "percentiles3": {
        "total": "15743",
        "ok": "16034",
        "ko": "12838"
    },
    "percentiles4": {
        "total": "15976",
        "ok": "16080",
        "ko": "13449"
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
    "count": 11,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "count": 89,
    "percentage": 89
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.882",
        "ok": "0.647",
        "ko": "5.235"
    }
},
contents: {
"req_request-10573": {
        type: "REQUEST",
        name: "request",
path: "request",
pathFormatted: "req_request-10573",
stats: {
    "name": "request",
    "numberOfRequests": {
        "total": "100",
        "ok": "11",
        "ko": "89"
    },
    "minResponseTime": {
        "total": "10092",
        "ok": "15011",
        "ko": "10092"
    },
    "maxResponseTime": {
        "total": "16092",
        "ok": "16092",
        "ko": "15734"
    },
    "meanResponseTime": {
        "total": "12423",
        "ok": "15730",
        "ko": "12014"
    },
    "standardDeviation": {
        "total": "1408",
        "ok": "281",
        "ko": "837"
    },
    "percentiles1": {
        "total": "12328",
        "ok": "15679",
        "ko": "12046"
    },
    "percentiles2": {
        "total": "12741",
        "ok": "15929",
        "ko": "12581"
    },
    "percentiles3": {
        "total": "15743",
        "ok": "16034",
        "ko": "12838"
    },
    "percentiles4": {
        "total": "15976",
        "ok": "16080",
        "ko": "13449"
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
    "count": 11,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "count": 89,
    "percentage": 89
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.882",
        "ok": "0.647",
        "ko": "5.235"
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
