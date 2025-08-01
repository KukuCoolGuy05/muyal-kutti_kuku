import './styling/TimeLineMemory.css';

const timelineData = [
    {
        date: "June 16",
        title: "Commitment Day?",
        description: "Casual turned into something special"
    },
    {
        date: "June 19",
        title: "7 hour call??",
        description: "7 hours felt like 15 mins when spent with my muyal kutti",
    },
    {
        date: "July 6",
        title: "First Movie Night",
        description: 'Our first "date"',
    },
    {
        date: "July 16",
        title: "1 Month Anniversary",
        description: "1 month of jolly"
    },
    {
        date: "August 1",
        title: "Girlfriend Day?!?!",
        description: "So many reels and tiktoks about girlfriend day....",
    }
];

export default function TimelineMemory() {
    return (
        <div className="horizontal-timeline">
            <div className="timeline-track">
                {timelineData.map((item, index) => {
                    const isTop = index % 2 === 0;
                    return (
                        <div key={index} className={`timeline-item ${isTop ? 'top' : 'bottom'}`}>
                            <div className="event-box">
                                {item.image && <img src={item.image} alt={item.title} className="event-photo" />}
                                <h4>{item.title}</h4>
                                <span className="timeline-date">{item.date}</span> {/* Moved inside box */}
                                <p>{item.description}</p>
                            </div>
                            <div className="timeline-dot" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}