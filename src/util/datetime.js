import dayjs from 'dayjs'

function testDayjs() {
    let datetimeStr = dayjs().format('YYYY-MM-DD HH:mm')
    console.log(datetimeStr)
    let date = dayjs('2023-01-18 17:30').toDate()
    console.log(date)
}

testDayjs()
