const sponsorList = [
    {
        id: 1,
        name: "Royal Enfield",
        src: "1.webp"
    },
    {
        id: 2,
        name: "Gail",
        src: "2.webp"
    },
    {
        id: 3,
        name: "Instax",
        src: "3.webp"
    },
    {
        id: 4,
        name: "EasyDiner",
        src: "4.webp"
    },
    {
        id: 5,
        name: "StockGro",
        src: "5.webp"
    },
    {
        id: 6,
        name: "Amdocs",
        src: "6.webp"
    },
    {
        id: 7,
        name: "LIC",
        src: "7.webp"
    },
    {
        id: 8,
        name: "Himalaya",
        src: "8.webp"
    },
    {
        id: 9,
        name: "Myntra",
        src: "9.webp"
    },
    {
        id: 10,
        name: "Indigo",
        src: "10.webp"
    },
    {
        id: 11,
        name: "Phillips",
        src: "11.webp"
    },
    {
        id: 12,
        name: "Rapido",
        src: "12.webp"
    },
    {
        id: 13,
        name: "Lifelong",
        src: "13.webp"
    },
    {
        id: 14,
        name: "Bisleri",
        src: "14.webp"
    },
    {
        id: 15,
        name: "Redbull",
        src: "15.webp"
    },
    {
        id: 16,
        name: "CocaCola",
        src: "16.webp"
    },
    {
        id: 17,
        name: "Indian Oil",
        src: "17.webp"
    },
    {
        id: 18,
        name: "Bharat Petroleum",
        src: "18.webp"
    },
    {
        id: 19,
        name: "Hero",
        src: "19.webp"
    },
    {
        id: 20,
        name: "Delhi Capitals",
        src: "20.webp"
    },
    {
        id: 21,
        name: "Bingo",
        src: "21.webp"
    },
]

export default function SponsorMarquee() {
    return (
        <div className="w-full group flex gap-16 overflow-hidden p-2 flex-row py-10">
            {Array(2).fill(0).map((_, i) => (
                <div
                    key={i}
                    className="flex shrink-0 justify-around gap-16 animate-marquee flex-row"
                >
                    {sponsorList.map((item) => (
                        <img key={item.id} src={`/sponsors/` + item.src} alt={item.name} className="h-12 grayscale brightness-150 hover:grayscale-0 transition duration-300" />
                    ))}
                </div>
            ))}
        </div>
    )
}
