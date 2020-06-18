var htmlCalendar =
    '                    <table border=1 id=\'calendar\'>\n' +
    '                        <tr style=\'visibility:collapse;\' hidden>\n' +
    '                            <td colspan=7 id=\'date_memory\'>---</td>\n' +
    '                        </tr>\n' +
    '                        <tr>\n' +
    '                            <td class=\'calendar_head\'><a  class=\'calendar_link\'\n' +
    '                                                         href=\'javascript:prevMonth()\'> &laquo;</a></td>\n' +
    '                            <td colspan=5 class=\'calendar_head_month\' id=\'calendar_month\'>\n' +
    '                                ---</td>\n' +
    '                            <td class=\'calendar_head\'><a class=\'calendar_link\'\n' +
    '                                                         href=\'javascript:nextMonth()\'> &raquo;</a></td>\n' +
    '                        </tr>\n' +
    '                        <tr>\n' +
    '                            <td class=\'calendar_day\'>Mo</td>\n' +
    '                            <td class=\'calendar_day\'>Di</td>\n' +
    '                            <td class=\'calendar_day\'>Mi</td>\n' +
    '                            <td class=\'calendar_day\'>Do</td>\n' +
    '                            <td class=\'calendar_day\'>Fr</td>\n' +
    '                            <td class=\'calendar_day\'>Sa</td>\n' +
    '                            <td class=\'calendar_day\'>So</td>\n' +
    '                        </tr>\n' +
    '                        <tr>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_1\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_2\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_3\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_4\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_5\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_6\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_7\'>-x-</td>\n' +
    '                        </tr>\n' +
    '                        <tr>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_8\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_9\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_10\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_11\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_12\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_13\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_14\'>-x-</td>\n' +
    '                        </tr>\n' +
    '                        <tr>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_15\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_16\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_17\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_18\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_19\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_20\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_21\'>-x-</td>\n' +
    '                        </tr>\n' +
    '                        <tr>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_22\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_23\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_24\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_25\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_26\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_27\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_28\'>-x-</td>\n' +
    '                        </tr>\n' +
    '                        <tr>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_29\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_30\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_31\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_32\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_33\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_34\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_35\'>-x-</td>\n' +
    '                        </tr>\n' +
    '                        <tr>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_36\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_37\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_38\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_39\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_40\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_41\'>-x-</td>\n' +
    '                            <td class=\'calendar_entry\' id=\'calendar_entry_42\'>-x-</td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '\n' +
    '                    <script type=\'text/javascript\'>\n' +
    '                        iniCalendar();\n' +
    '\n' +
    '                        /*0 = wie bisher, Datum wird in die Box geschrieben*/\n' +
    '                        setReturnModus(1);\n' +
    '                        /*1 = neu, Eventtext wird in die Box geschrieben\n' +
    '                        Das event muss in der calendar.js in der Function\n' +
    '                        getEventtext definiert werden.*/\n' +
    '                        //setReturnModus(1);\n' +
    '                    </script>\n' +
    '\n' +
    '\n' +
    '                    <br />\n' +
    '                    <br />\n' +
    '\n'
                    ;
var ausgewaelt=0;


function showCalndar(p) {
        document.getElementById("calendarID"+p).innerHTML =htmlCalendar;

    if(ausgewaelt != 0 )
        document.getElementById("calendarID"+ausgewaelt).innerHTML ='';

    ausgewaelt = p;

}