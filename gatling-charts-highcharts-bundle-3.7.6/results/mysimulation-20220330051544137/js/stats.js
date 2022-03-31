var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50",
        "ok": "0",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "1683",
        "ok": "-",
        "ko": "1683"
    },
    "maxResponseTime": {
        "total": "3247",
        "ok": "-",
        "ko": "3247"
    },
    "meanResponseTime": {
        "total": "2348",
        "ok": "-",
        "ko": "2348"
    },
    "standardDeviation": {
        "total": "486",
        "ok": "-",
        "ko": "486"
    },
    "percentiles1": {
        "total": "2227",
        "ok": "-",
        "ko": "2227"
    },
    "percentiles2": {
        "total": "2773",
        "ok": "-",
        "ko": "2773"
    },
    "percentiles3": {
        "total": "3168",
        "ok": "-",
        "ko": "3168"
    },
    "percentiles4": {
        "total": "3233",
        "ok": "-",
        "ko": "3233"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 50,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12.5",
        "ok": "-",
        "ko": "12.5"
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
        "ok": "0",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "1683",
        "ok": "-",
        "ko": "1683"
    },
    "maxResponseTime": {
        "total": "3247",
        "ok": "-",
        "ko": "3247"
    },
    "meanResponseTime": {
        "total": "2348",
        "ok": "-",
        "ko": "2348"
    },
    "standardDeviation": {
        "total": "486",
        "ok": "-",
        "ko": "486"
    },
    "percentiles1": {
        "total": "2227",
        "ok": "-",
        "ko": "2227"
    },
    "percentiles2": {
        "total": "2773",
        "ok": "-",
        "ko": "2773"
    },
    "percentiles3": {
        "total": "3168",
        "ok": "-",
        "ko": "3168"
    },
    "percentiles4": {
        "total": "3233",
        "ok": "-",
        "ko": "3233"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 50,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12.5",
        "ok": "-",
        "ko": "12.5"
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
