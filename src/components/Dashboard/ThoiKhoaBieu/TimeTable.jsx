import React from 'react';
import './TimeTable.css';

function TimeTable() {
    const times = Array.from({ length: 12 }, (_, i) => (i + 7).toString().padStart(2, '0') + ":00");
    const daysAhead = Array.from({ length: 5 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return {
            dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'long' }),
            dayOfMonth: date.getDate(),
        };
    });

    // Mảng sự kiện lặp lại hàng tuần
    const recurringEvents = [
        {
            dayOfWeek: "Saturday",
            time: "09:00",
            event: "Toán học"
        },
        {
            dayOfWeek: "Friday",
            time: "08:00",
            event: "Sinh học"
        },
        {
            dayOfWeek: "Monday",
            time: "13:00",
            event: "Hóa học"
        },
        {
            dayOfWeek: "Wednesday",
            time: "09:00",
            event: "Thể dục"
        },
        {
            dayOfWeek: "Tuesday",
            time: "07:00",
            event: "Ngữ văn"
        },
        {
            dayOfWeek: "Saturday",
            time: "14:00",
            event: "Vật lý"
        },
        // Thêm các sự kiện lặp lại hàng tuần ở đây
    ];

    // Tạo mảng sự kiện hàng tuần dựa trên mảng sự kiện lặp lại
    const weeklyEvents = [];
    daysAhead.forEach(day => {
        recurringEvents.forEach(event => {
            if (event.dayOfWeek === day.dayOfWeek) {
                weeklyEvents.push({
                    dayOfMonth: day.dayOfMonth,
                    time: event.time,
                    event: event.event
                });
            }
        });
    });

    return (
        <div className="calendar-container">
            <div className="header-row">
                <div className="empty-cell"></div>
                {daysAhead.map(day => (
                    <div key={day.dayOfMonth} className="day">
                        {day.dayOfMonth}<br />
                        {day.dayOfWeek}
                    </div>
                ))}
            </div>
            <div className="events-grid">
                {times.map(time => (
                    <div key={time} className="time-row">
                        <div className="time">{time}</div>
                        {daysAhead.map(day => {
                            const event = weeklyEvents.find(e => e.dayOfMonth === day.dayOfMonth && e.time === time);
                            return (
                                <div key={day.dayOfMonth} className="event-cell">
                                    {event ? event.event : ""}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TimeTable;
