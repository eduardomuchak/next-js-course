import EventItem from "./event-item";

function EventList({ items }: any) {
  return (
    <ul>
      {items.map((event: any) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventList;
