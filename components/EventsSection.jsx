import events from "./events.json";

export default function EventsSection({ day }) {
    if (day) {
        return (
            <div className="flex gap-5 justify-between flex-wrap">
                {
                    events[day - 1].events.map((item, index) => {
                        return (
                            <div key={index}>
                                <img className="aspect-square w-full max-w-100 max-h-100 min-w-80 min-h-80 object-cover rounded-lg border border-white/20" src={item.poster} alt={item.name} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    else {
        return (
            <div></div>
        );
    }
}
