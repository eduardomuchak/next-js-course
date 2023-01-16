import Image from "next/image";

function EventItem({ event }: any) {
  const ptBrDate = new Date(event.date).toLocaleString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li>
      <Image src={event.image} alt={event.title} width={250} height={250} />
      <div>
        <div>
          <h2>{event.title}</h2>
          <div>
            <time>{ptBrDate}</time>
          </div>
          <div>
            <address>{event.location}</address>
          </div>
        </div>
        <div>
          <button>Explore Event</button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
