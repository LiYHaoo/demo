/**
 *  转化日期
 */
 function updateDate() {
    var today = new Date();
    var weeks = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

    var ymd = today.getFullYear() + " / " + formatDate(today.getMonth() + 1) + " / " + formatDate(today.getDate());
    var week = weeks[today.getDay()];
    var hms = formatDate(today.getHours()) + " : " + formatDate(today.getMinutes()) + " : " +
        formatDate(today.getSeconds());

    return {
        ymd: ymd,
        week: week,
        hms: hms,
    }
}

function formatDate(date) {
    var newdate = '';
    if (date < 10) {
        newdate = '0' + date;
    } else {
        newdate = date;
    }

    return newdate
}